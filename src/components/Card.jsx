/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../redux/users";
import { small } from "../assets";
import { toast } from "react-toastify";

const Card = ({ user }) => {
  const dispatch = useDispatch();

  const handleDelete = (user) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUser(user))
        .unwrap()
        .then(() => {
          toast.success("User deleted successfully");
        })
        .catch((error) => {
          toast.error(`Error: ${error.message}`);
        });
    }
  };

  return (
    <>
      <div className="relative overflow-hidden rounded-[2.4375rem] border border-n-5/80 bg-n-11 p-2 xl:p-4 ">
        <div className="flex w-full flex-1 flex-col items-center rounded-xl  max-sm:w-full ">
          <img src={small} alt="img" className="size-[50px]  rounded-full" />

          <h2 className="body-2 mt-2 font-sans  text-lg leading-normal">
            {user.name}
          </h2>
          <h3 className="mt-2 font-sans leading-normal">{user.username}</h3>
          <h4 className="mt-2 font-sans font-semibold leading-normal">
            {user.email}
          </h4>
        </div>
        <div className="  m-2 flex justify-between gap-5">
          <Link
            onClick={() => {
              handleDelete(user);
            }}
            className="button cursor-pointer rounded-lg bg-indigo-700 p-2 text-[15px]"
          >
            Delete
          </Link>
          <Link
            className="button cursor-pointer rounded-lg bg-green-500 p-2 text-[15px]"
            to={`edit/${user.id}`}
          >
            Update
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
