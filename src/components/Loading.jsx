import { useSelector } from "react-redux";

import { small } from "../assets";

const Loading = () => {
  const userlist = useSelector((state) => state.app);
  const { users } = userlist;

  return (
    <div className="container z-50 mx-auto mt-5">
      <div>
        <div>
          {users.length ? (
            <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 ">
              {users.map((user) => (
                <div key={user.id}>
                  <LoadingCards />
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Loading;

const LoadingCards = () => {
  return (
    <div className="relative overflow-hidden rounded-[2.4375rem] border border-n-5/80 bg-n-11/20 p-2 xl:p-4 ">
      <div className="flex w-full flex-1 flex-col items-center rounded-xl  max-sm:w-full ">
        <img
          src={small}
          alt="img"
          className="size-[40px]  animate-spin rounded-full"
        />

        <h2 className="body-2 mt-2 font-sans  text-lg leading-normal"></h2>
        <h3 className="mt-2 font-sans leading-normal"></h3>
        <h4 className="mt-2 font-sans font-semibold leading-normal"></h4>
      </div>
      <div className="  m-2 flex justify-between gap-5"></div>
    </div>
  );
};
