import NextHead from "next/head";
import { PrismicLink, PrismicText } from "@prismicio/react";
import classes from "../styles/navBar.module.scss";
import { useState } from "react";
import Link from "next/link";

export function Navigation({ navigation, children }: any) {
  const logo = navigation.data;
  const navLinks = navigation.data.slices.map((slice: any) => (
    <Link
      key={slice.id}
      href={slice.primary.link === null ? "/" : slice.primary.link}
      className={`${classes["navBar__menu-item"]} ${
        slice.primary.call_to_action ? classes[`navBar__menu-item--button`] : ""
      }`}
    >
      {slice.primary.name}
    </Link>
  ));
  const [menuClicked, setMenuClicked] = useState(false);
  return (
    <>
      <NextHead> </NextHead>
      <nav className={classes["navBar"]}>
        <div className={classes["navBar__logo"]}>
          <Link
            href={logo.main_link.url === undefined ? "/" : logo.main_link.url}
            className={classes["navBar__logo-link"]}
          >
            {logo.name}
          </Link>
        </div>
        <div className={classes["navBar__menu-items"]}>{navLinks}</div>
        <div
          className={`${classes["navBar__menu-items"]} ${classes["navBar__menu-items--mobile"]}`}
          onClick={() => {
            setMenuClicked(!menuClicked);
          }}
        >
          <div
            className={`${classes["navBar__burger"]} ${
              menuClicked ? classes["navBar__burger__1--changed"] : ""
            }`}
          ></div>
          <div
            className={`${classes["navBar__burger"]} ${
              menuClicked ? classes["navBar__burger__2--changed"] : ""
            }`}
          ></div>
          <div
            className={`${classes["navBar__burger"]} ${
              menuClicked ? classes["navBar__burger__3--changed"] : ""
            }`}
          ></div>
          <div
            className={`${classes["navBar__menu-items--mobile__items"]} ${
              menuClicked
                ? classes["navBar__menu-items--mobile__items--show"]
                : ""
            }`}
          >
            {navLinks}
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </>
  );
}
