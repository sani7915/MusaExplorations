import React from "react";

function ButtonLink({ to, btnValue }) {
  return (
    <div>
      <a href={to} target={"_blank"} rel="noreferrer" className="nav-link ">
        <button className="btn-banner-link">{btnValue}</button>
      </a>
    </div>
  );
}

export default ButtonLink;
