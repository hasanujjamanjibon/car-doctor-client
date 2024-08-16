import ActiveRoutes from '../ActiveRoutes/ActiveRoutes';

const Lists = ({ setShowNav }) => {
  const listWithRoutes = [
    { id: 1, label: 'home', routes: '/' },
    { id: 2, label: 'Parts', routes: '/parts' },
    { id: 3, label: 'Services', routes: '/services' },
    { id: 4, label: 'Blogs', routes: '/blogs' },
    { id: 5, label: 'top rated', routes: '/top-rated' },
    // { id: 6, label: 'best selleing', routes: '/best-selling' },
  ];
  return (
    <>
      {listWithRoutes?.map(({ label, routes, id }, i) => (
        <ActiveRoutes id={id} to={routes} key={i}>
          <p
            onClick={() => setShowNav(false)}
            className='block  py-4 lg:py-0 relative  px-2 font-semibold  transition-colors duration-300 ease-in-out  hover:bg-[#eceaea] hover:text-gray-900  lg:hover:text-black lg:hover:bg-transparent'>
            {label}
          </p>
        </ActiveRoutes>
      ))}
    </>
  );
};
export default Lists;
