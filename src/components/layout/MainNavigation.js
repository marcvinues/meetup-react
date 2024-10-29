import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  const [hideHeader, setHideHeader] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > scroll) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }

      setScroll(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scroll]);

  return (
    <header
      className={`${classes.header} ${
        hideHeader ? classes.hide : classes.show
      }`}
      data-test="navigation-header"
    >
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>

          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              <span className={classes.badge}>{0}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
