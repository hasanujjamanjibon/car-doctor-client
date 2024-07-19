import ActiveRoutes from "../ActiveRoutes/ActiveRoutes";

const Lists = () => {
  return (
    <>
      <ActiveRoutes to="/">
        <a className="px-2 hover:text-red-700 uppercase font-semibold">Home</a>
      </ActiveRoutes>
      <ActiveRoutes to="/parts">
        <a className="px-2 hover:text-red-700 uppercase font-semibold">Parts</a>
      </ActiveRoutes>
      <ActiveRoutes to="/services">
        <a className="px-2 hover:text-red-700 uppercase font-semibold">
          Services
        </a>
      </ActiveRoutes>
      <ActiveRoutes to="/about">
        <a className="px-2 hover:text-red-700 uppercase font-semibold">About</a>
      </ActiveRoutes>
      <ActiveRoutes to="/contact">
        <a className="px-2 hover:text-red-700 uppercase font-semibold">Contact</a>
      </ActiveRoutes>
      <ActiveRoutes to="/blogs">
        <a className="px-2 hover:text-red-700 uppercase font-semibold">Blogs</a>
      </ActiveRoutes>
    </>
  );
};
export default Lists;
