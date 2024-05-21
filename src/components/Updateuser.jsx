import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../redux/users";
import { Gradient } from "./Hero";

const Updateuser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.app);

  const [updateData, setUpdateData] = useState({
    name: "",
    username: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const filteredData = users.find((item) => item.id === id);
    setUpdateData(filteredData || { name: "", username: "" });
  }, [id, users]);

  const newUser = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errors = {};
    if (!updateData.name) {
      errors.name = "Name is required";
    }
    if (!updateData.username) {
      errors.username = "Username is required";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    dispatch(updateUser(updateData));
    navigate("/");
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
              <h1 className="text-3xl">Contact Us!</h1>
              <p className="text-gray-300">Fill up the form below.</p>
            </div>
            <form className="mx-auto w-52" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="">New Name: </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name..."
                  onChange={newUser}
                  value={updateData.name}
                  className="mb-4 w-full appearance-none rounded border px-3 py-2 leading-tight text-white shadow focus:outline-none"
                />
                {errors.name && <p className="text-red-500">{errors.name}</p>}
              </div>
              <div className="mb-3">
                <label className="">New Username: </label>
                <input
                  type="text"
                  name="username"
                  placeholder="username..."
                  onChange={newUser}
                  value={updateData.username}
                  className="mb-4 w-full appearance-none rounded border px-3 py-2 leading-tight text-white shadow focus:outline-none"
                />
                {errors.username && (
                  <p className="text-red-500">{errors.username}</p>
                )}
              </div>
              <button
                type="submit"
                className="button cursor-pointer rounded-lg font-mono text-[15px] text-blue-600 hover:underline"
              >
                Done
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Updateuser;
