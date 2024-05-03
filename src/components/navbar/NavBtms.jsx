import React from "react";
import { Link } from "react-router-dom";

function NavBtms() {
  const listBtm = [
    { link: "menu", title: "MENU" },
    { link: "rewards", title: "REWARDS" },
    { link: "giftcards", title: " GIFT CARDS" },
  ];
  return (
    <div className="flex-shrink-none">
      <ul className="flex list">
        {listBtm.map((item) => (
          <li key={item.link} className="globalNav__desktopListItem ">
            <Link
              className="globalNav__desktopLink inline-block text-noUnderline text-xxs text-upper text-bold"
              to={item.link}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavBtms;
