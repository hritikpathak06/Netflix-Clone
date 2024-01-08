import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { firebaseAuth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const TopNav = ({ isScrolled }) => {
  const navigate = useNavigate();
  const navlinks = [
    { name: "Home", link: "/" },
    { name: "Tv", link: "/tv" },
    { name: "My List", link: "/myList" },
    { name: "Movies", link: "/movie" },
  ];

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });

  return (
    <>
      <NavContainer>
        <nav className={`${isScrolled ? "scrolled" : "notScrolled"}`}>
          <div className="leftSide">
            <div className="logo">
              <img src={Logo} alt="logo" />
            </div>
            <ul className="links">
              {navlinks &&
                navlinks.map(({ name, link }) => {
                  return (
                    <li key={name}>
                      <NavLink to={link}>{name}</NavLink>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="rightSide">
            <button onClick={() => signOut(firebaseAuth)}>
              <AiOutlineLogout />
            </button>
          </div>
        </nav>
      </NavContainer>
    </>
  );
};

const NavContainer = styled.div`
  .notScrolled {
    display: flex;
  }
  .scrolled {
    display: flex;
    background-color: black;
  }
  nav {
    position: sticky;
    top: 0;
    height: 6rem;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    /* z-index: 0.4rem; */
    z-index: 999;
    align-items: center;
    transition: 0.3s ease-in-out;
    .leftSide {
      display: flex;
      align-items: center;
      gap: 2rem;
      margin-left: 5rem;
      .logo {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      img {
        width: 10rem;
        height: 2rem;
      }
    }
  }

  .links {
    display: flex;
    gap: 3rem;
    li {
      list-style-type: none;
      a {
        color: white;
        text-decoration: none;
      }
    }
  }

  .rightSide {
    display: flex;
    align-items: center;
    gap: 1rem;
    button {
      background-color: red;
      color: white;
      border: none;
      cursor: pointer;
      border-radius: 50%;
      margin-right: 2rem;
    }
    &:focus {
      outline: none;
    }
    svg {
      color: #fff;
      font-size: 2rem;
    }
  }
`;

export default TopNav;
