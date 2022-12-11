import { NavLink, Outlet } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <h1>Thank You for Contacting. Check our new compony</h1>
      <NavLink to="Company">Company</NavLink>
      <Outlet />
    </>
  );
}
