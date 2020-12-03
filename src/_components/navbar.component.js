import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BLOGPAGE_ROUTE, DASHBOARD_ROUTE, HOME_ROUTE, LOGIN_ROUTE } from '../_pages';
import { withFirebase } from '../_contexts';
import { useLocation } from 'react-router-dom'

export function NavbarComponent({ toggleSidebar, firebase }) {
    const [menuClass, setMenuClass] = useState("menu");
    const [menuToggled, setMenuToggled] = useState(true);

    const toggleMenu = () => {
      if (menuToggled) {
        setMenuClass("menu");
        setMenuToggled(false);
      } else {
        setMenuClass("menu toggled");
        setMenuToggled(true);
      }
    }

    const location = useLocation();
    const path = location.pathname;

    return (
        <header>
            <a className={menuClass} onClick={toggleMenu}>MENU</a>
            <nav>
                {
                    path === HOME_ROUTE ?
                    <>
                        <a onClick={() => {toggleMenu();}} href={'/#bio'} className={"bio underline"}>bio</a>
                        <a onClick={() => {toggleMenu();}} href={'/#education'} className={"education underline"}>education</a>
                        <a onClick={() => {toggleMenu();}} href={'/#experience'} className={"experience underline"}>experience</a>
                        <a onClick={() => {toggleMenu();}} href={'/#skills'} className={"skills underline"}>skills</a>
                        <a onClick={() => {toggleMenu();}} href={'/#projects'} className={"projects underline"}>projects</a>
                        <a onClick={() => {toggleMenu();}} href={BLOGPAGE_ROUTE} className={"blog underline"}>blog</a>
                    </> :
                    <>
                        <a onClick={() => {toggleMenu();}} href={HOME_ROUTE} className={"bio underline"}>home</a>
                        <a className="education underline" href={BLOGPAGE_ROUTE}>Blog</a>
                    </>
                }
                {
                    firebase.auth.currentUser && path !== HOME_ROUTE &&
                    <>
                        <a className="experience underline" href={DASHBOARD_ROUTE}>New Post</a>
                        <a className="skills underline" onClick={() => {firebase.auth.signOut();}}>Logout</a>
                    </>
                }
            </nav>
        </header>
    )
}

export const Navbar = withFirebase(NavbarComponent);