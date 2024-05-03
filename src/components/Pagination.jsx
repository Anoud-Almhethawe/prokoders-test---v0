import { useDispatch, useSelector } from "react-redux";
import { UsersAction } from "../redux/users";
const Pagination = () => {
  const dispatch = useDispatch();
  const userlist = useSelector((state) => state.app);
  const { users, usersPerPage, currentPage } = userlist;
  const totalPages = Math.ceil(users.length / usersPerPage);
  const pages = [...Array(totalPages + 1).keys()].slice(1);

  const navigatePrev = () => {
    if (currentPage !== 1) {
      dispatch(UsersAction.onNavigatePrev());
    }
  };
  const navigateNext = () => {
    if (currentPage !== totalPages) {
      dispatch(UsersAction.onNavigateNext());
    }
  };
  return (
    <div className="m-15 flex justify-center gap-5 ">
      <p>
        <span
          className="m-5  cursor-pointer rounded-xl border border-n-5 p-3"
          onClick={navigatePrev}
        >
          Prev
        </span>
        {pages.map((page) => (
          <span
            className={`m-2 rounded-full border border-n-5 p-2 ${page === currentPage ? "bg-n-5" : ""}`}
            key={page}
          >
            {page}
          </span>
        ))}
        <span
          className="m-5 cursor-pointer rounded-xl border border-n-5 p-3"
          onClick={navigateNext}
        >
          Next
        </span>
      </p>
    </div>
  );
};

export default Pagination;
