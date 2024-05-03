import { curve } from "../assets";
const Header = () => {
  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full border-b
     border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm  
      bg-n-8/90 backdrop-blur-sm`}
    >
      <div className="l:px-7.5 flex items-center px-5 max-lg:py-1 xl:px-10 ">
        <a className="mr-8  transition-colors hover:text-n-1 lg:block" href="/">
          <Logo />
        </a>

        <nav className="fixed inset-x-0 bottom-0 top-[80px] hidden bg-n-8 lg:static lg:mx-auto lg:flex lg:bg-transparent">
          <div
            className="relative z-2 m-auto flex flex-col items-center justify-center 
          lg:flex-row "
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                onClick={() => {}}
                className={`block relative font-code text-n-1 transition-colors 
                uppercase text-3xl hover:text-color-1 
                px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold 
                 lg:text-n-1/50
                 lg:leading-5  lg:hover:text-n-1 xl:px-12`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>

        <a
          href="https://anoudportfolioite.netlify.app/"
          className=" mr-8 hidden text-pink-500 transition-colors hover:text-n-1 lg:block"
          target="_blank"
          rel="noreferrer"
        >
          Anoud{`'`}s Portfolio
        </a>
      </div>
    </div>
  );
};
export const Logo = () => {
  return (
    <a className="block xl:mr-8" href="/">
      <h2 className=" h2 relative mb-6 inline-block font-sans max-sm:text-sm">
        Prokoders
        <span className="text-[20px] text-color-6 max-sm:text-[10px]">
          {" "}
          Test
          <img
            src={curve}
            className="absolute left-0 top-full w-full xl:-mt-2 "
            width={624}
            height={28}
            alt="curve"
          />
        </span>
      </h2>
    </a>
  );
};
const navItems = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "+user",
    url: "/user/add",
  },
];

export default Header;
