import React, { useState } from "react";
import { Link } from "react-router";
import { Container, Logout_btn, Logo } from "../index";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
    { name: "My Posts", slug: "/my-posts", active: authStatus },
  ];

  return (
    <header className=" max-w-screen bg-gradient-to-r from-sky-300 to-sky-400 text-white font-semibold shadow px-2">
      <Container>
        <nav className="flex items-center justify-between py-3">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center">
            <Logo width="70px" />
          </Link>

          {/* Right: Hamburger / Close button (mobile only) */}
          <button
            className="sm:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden sm:flex items-center space-x-2 ml-auto">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className="px-4 py-2 rounded-full hover:bg-white hover:text-sky-500 transition duration-200"
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
            {authStatus && (
              <li>
                <Logout_btn />
              </li>
            )}
          </ul>
        </nav>

        {/* Mobile Menu (collapsible) */}
        {menuOpen && (
          <ul className="sm:hidden flex flex-col space-y-2 mt-2 pb-3 border-t border-white/30">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => {
                        navigate(item.slug);
                        setMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-white hover:text-sky-500 rounded transition duration-200"
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
            {authStatus && (
              <li>
                <Logout_btn />
              </li>
            )}
          </ul>
        )}
      </Container>
    </header>
  );
}

export default Header;
