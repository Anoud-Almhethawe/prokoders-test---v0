import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/users";
import { useNavigate } from "react-router-dom";
import { Gradient } from "./Hero";
import { toast } from "react-toastify";

const Adduser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    username: "",
  });
  const [errors, setErrors] = useState({});

  const getUserData = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errors = {};
    if (!userData.name) {
      errors.name = "Name is required";
    }
    if (!userData.username) {
      errors.username = "Username is required";
    }
    return errors;
  };

  const handleSubmited = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fill out all required fields.", {
        position: "top-right",
      });
      return;
    }
    try {
      dispatch(createUser(userData));
      navigate("/");
    } catch (error) {
      toast.error("Error Notification!", {
        position: "top-right",
      });
    }
  };

  return (
    <section className="min-h-screen">
      <div className="container relative">
        <Gradient />
      </div>
      <div className="flex min-h-screen flex-col justify-center py-1 sm:py-10">
        <div className="relative py-3 sm:mx-auto sm:max-w-xl">
          <div className="absolute inset-0 -skew-y-6 bg-gradient-to-r from-indigo-700 to-n-11 shadow-lg sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 text-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="pb-6 text-center">
              <h1 className="text-3xl">Hello!</h1>
              <p className="text-gray-300">Fill up the form below.</p>
            </div>
            <form className="mx-auto w-52" onSubmit={handleSubmited}>
              <div className="mb-3">
                <label className="">Name: </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name..."
                  onChange={getUserData}
                  value={userData.name}
                  className="mb-4 w-full appearance-none rounded border px-3 py-2 leading-tight text-white shadow focus:outline-none"
                />
                {errors.name && <p className="text-red-500">{errors.name}</p>}
              </div>
              <div className="mb-3">
                <label className="">Username: </label>
                <input
                  className="mb-4 w-full appearance-none rounded border px-3 py-2 leading-tight text-white shadow focus:outline-none"
                  type="text"
                  placeholder="username..."
                  name="username"
                  onChange={getUserData}
                  value={userData.username}
                />
                {errors.username && (
                  <p className="text-red-500">{errors.username}</p>
                )}
              </div>
              <button
                type="submit"
                className="button cursor-pointer rounded-lg font-mono text-[15px] text-blue-600 hover:underline"
              >
                Add user
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Adduser;
