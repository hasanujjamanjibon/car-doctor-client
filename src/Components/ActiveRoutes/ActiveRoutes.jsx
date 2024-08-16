import { NavLink } from 'react-router-dom';

const ActiveRoutes = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? 'text-black ' : 'text-white'
      }>
      {children}
    </NavLink>
  );
};
export default ActiveRoutes;
