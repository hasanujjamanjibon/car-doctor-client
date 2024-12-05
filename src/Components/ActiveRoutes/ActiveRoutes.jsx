import { NavLink } from 'react-router-dom';

const ActiveRoutes = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? 'text-red-950 font-semibold ' : 'text-white')}
    >
      {children}
    </NavLink>
  );
};
export default ActiveRoutes;
