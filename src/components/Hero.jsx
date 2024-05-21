/* eslint-disable tailwindcss/enforces-negative-arbitrary-values */
/* eslint-disable tailwindcss/no-custom-classname */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/users";
import { Link } from "react-router-dom";
import Card from "./Card";
import Pagination from "./Pagination";
import { Logo } from "./Header";
import Loading from "./Loading";
import { gradient } from "../assets";

const Hero = () => {
  const dispatch = useDispatch();
  const userlist = useSelector((state) => state.app);
  const { users, loading, error, usersPerPage, currentPage } = userlist;

  const indexOfLastPage = currentPage * usersPerPage;
  const indexofFirstPage = indexOfLastPage - usersPerPage;
  const visibleUsers = users.slice(indexofFirstPage, indexOfLastPage);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch, error]);

  return (
    <>
      <section className=" -mt-[5.25rem] min-h-screen ">
        <div className="container relative -z-1">
          <div className="relative mx-auto max-w-[23rem]  md:max-w-5xl xl:mb-24">
            <div className="absolute -top-[42.375rem] left-1/2  aspect-square w-[78rem] -translate-x-1/2 rounded-full border border-n-2/5 md:-top-[38.5rem] xl:-top-[32rem]">
              <Rings />
            </div>
          </div>
          <Gradient />
        </div>
        <div className=" mx-auto mb-12 mt-40  max-w-[50rem]  text-center md:max-w-md lg:mb-20 lg:max-w-2xl">
          <h1 className="h1 font-sans">
            Meet the faces behind <Logo />
          </h1>
          <p className="m-5 p-2">
            Get to know the awesome individuals who make our community vibrant
            and diverse.
          </p>
          <Link
            className="button mt-60 cursor-pointer rounded-lg bg-pink-700 p-2 text-[30px] max-sm:text-[15px]"
            to={"/user/add"}
          >
            + Join Our Community +
          </Link>
        </div>
        <div className="container z-50 mx-auto mt-5">
          <div>
            <div>
              {loading && <Loading />}
              {!loading && error ? (
                <div className="container z-50 mx-auto mt-5">
                  <a href={"/"}>Go back to Home page</a>
                </div>
              ) : null}
              {!loading && users.length ? (
                <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 ">
                  {visibleUsers.map((user) => (
                    <div key={user.id}>
                      <Card user={user} />
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <Pagination />

        <div className="flex justify-center border-t border-n-2/10 ">
          <Link
            to="https://anoudportfolioite.netlify.app/"
            target="_blank"
            className="m-5 text-n-4"
          >
            🌟 Made by Anoud 🌟{" "}
          </Link>
        </div>
      </section>
    </>
  );
};
export const Rings = () => {
  return (
    <>
      <div className="absolute left-1/2 top-1/2 aspect-square w-[65.875rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-n-2/10" />
      <div className="absolute left-1/2 top-1/2 aspect-square w-[51.375rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-n-2/10" />
      <div className="absolute left-1/2 top-1/2 aspect-square w-[36.125rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-n-2/10" />
      <div className="absolute left-1/2 top-1/2 aspect-square w-[23.125rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-n-2/10" />
    </>
  );
};

export const Gradient = () => {
  return (
    <>
      <div className="pointer-events-none absolute -left-[30.375rem] top-[18.25rem] w-[56.625rem] opacity-60 mix-blend-color-dodge">
        <div className="absolute left-1/2 top-1/2 size-[58.85rem] -translate-x-3/4 -translate-y-1/2">
          <img className="w-full" src={gradient} alt="Gradient" />
        </div>
      </div>

      <div className="pointer-events-none absolute -right-[30.375rem] top-[18.25rem] w-[56.625rem] opacity-60 mix-blend-color-dodge">
        <div className="absolute right-1/2 top-1/2 size-[58.85rem] -translate-y-1/2 translate-x-3/4">
          <img className="w-full" src={gradient} alt="Gradient" />
        </div>
      </div>
    </>
  );
};

export default Hero;
