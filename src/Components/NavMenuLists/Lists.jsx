import ActiveRoutes from "../ActiveRoutes/ActiveRoutes";

const Lists = () => {
  return (
    <>
      <ActiveRoutes to="/">
        <a className="px-2 hover:text-red-700 uppercase font-medium">Home</a>
      </ActiveRoutes>
      <ActiveRoutes to="/parts">
        <a className="px-2 hover:text-red-700 uppercase font-medium">Parts</a>
      </ActiveRoutes>
      <ActiveRoutes to="/services">
        <a className="px-2 hover:text-red-700 uppercase font-medium">
          Services
        </a>
      </ActiveRoutes>
      <ActiveRoutes to="/about">
        <a className="px-2 hover:text-red-700 uppercase font-medium">About</a>
      </ActiveRoutes>
      <ActiveRoutes to="/contact">
        <a className="px-2 hover:text-red-700 uppercase font-medium">Contact</a>
      </ActiveRoutes>
      <ActiveRoutes to="/blogs">
        <a className="px-2 hover:text-red-700 uppercase font-medium">Blogs</a>
      </ActiveRoutes>
    </>
  );
};
export default Lists;
