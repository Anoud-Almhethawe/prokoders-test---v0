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

  const [updateData, setUpdateData] = useState();

  useEffect(() => {
    // dispatch(getUserById(id));
    const filteredData = users.filter((item) => item.id === id);
    setUpdateData(filteredData[0]);
  }, []);

  const newUser = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData));
    navigate("/");
  };

  return (
    <section className="  min-h-screen  ">
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
            <form className="mx-auto w-52 " onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="">New Name: </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name..."
                  onChange={newUser}
                  value={updateData && updateData.name}
                  className=" mb-4 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                />
              </div>
              <div className="mb-3">
                <label className=""> New userName: </label>

                <input
                  type="text"
                  placeholder="username..."
                  name="username"
                  onChange={newUser}
                  value={updateData && updateData.username}
                  className=" mb-4 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="button cursor-pointer rounded-lg font-mono text-[15px] text-blue-600 hover:underline "
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
