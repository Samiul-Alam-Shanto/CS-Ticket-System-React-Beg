import React from "react";
import Container from "../ContainerClass/Container";

const Navbar = () => {
  return (
    <Container>
      <div className="navbar bg-base-100 shadow-sm flex   justify-between">
        <div>
          <a className="btn-ghost text-xl cursor-pointer">CS — Ticket System</a>
        </div>
        <div className="flex items-center">
          <div className="dropdown dropdown-hover   md:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:bg-gradient-to-l from-[#632EE3] to-[#9F62F2]"
            >
              Menu
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Changelog</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Download</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>

          <ul className="menu hidden md:menu-horizontal ">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Changelog</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Download</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
          <button className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:bg-gradient-to-l from-[#632EE3] to-[#9F62F2]">
            + New Ticket
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
