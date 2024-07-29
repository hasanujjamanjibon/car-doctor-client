import { NavLink } from 'react-router-dom';

const ActiveRoutes = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? 'text-black ' : ''
      }>
      {children}
    </NavLink>
  );
};
export default ActiveRoutes;
