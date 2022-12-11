import { NavLink, Outlet } from "react-router-dom";

export default function Company() {
  return (
    <>
      <h1>Welcome to our new Company</h1>
      <NavLink to="Career">Career</NavLink>
      <Outlet />
    </>
  );
}
