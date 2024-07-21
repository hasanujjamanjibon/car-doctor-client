import ActiveRoutes from "../ActiveRoutes/ActiveRoutes";

const Lists = () => {
  const listWithRoutes = [
    { id: 1, label: "home", routes: "/" },
    { id: 2, label: "Parts", routes: "/parts" },
    { id: 3, label: "Services", routes: "/services" },
    { id: 4, label: "About", routes: "/about" },
    { id: 5, label: "Contact", routes: "/contact" },
    { id: 6, label: "Blogs", routes: "/blogs" },
  ];
  return (
    <>
      {listWithRoutes?.map(({ label, routes, id }) => (
        <ActiveRoutes id={id} to={routes}>
          <a className="block  py-4 lg:py-0 relative  px-2  transition-colors duration-300 ease-in-out  hover:bg-[#eceaea] hover:text-gray-900  lg:hover:text-violet-700 lg:hover:bg-transparent ">
            {label}
          </a>
        </ActiveRoutes>
      ))}
    </>
  );
};
export default Lists;
