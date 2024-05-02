import React from "react";

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
            <a
              className="globalNav__desktopLink inline-block text-noUnderline text-xxs text-upper text-bold"
              href="#"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavBtms;
