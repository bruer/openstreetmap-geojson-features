import React from "react";
import PopupSubtitle from "./PopupSubtitle";

function PopupHeader({ properties }) {
  const { name, website } = properties;

  return (
    <header>
      <div>
        {name && <h1 className="title">{name}</h1>}
        <PopupSubtitle properties={properties} />
      </div>
      {website && (
        <a
          className="website-link"
          href={website}
          target="_blank"
          rel="noreferrer"
        >
          Website
        </a>
      )}
    </header>
  );
}

export default PopupHeader;
