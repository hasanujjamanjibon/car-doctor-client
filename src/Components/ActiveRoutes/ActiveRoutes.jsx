import { NavLink } from 'react-router-dom';

const ActiveRoutes = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? 'text-white lg:text-violet-700' : ''
      }>
      {children}
    </NavLink>
  );
};
export default ActiveRoutes;
