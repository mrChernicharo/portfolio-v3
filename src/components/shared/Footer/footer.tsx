import React from "react";

interface Props {}

function Footer(props: Props) {
  const {} = props;

  return (
    <footer className="p-8 bg-base-300">
      <div className="grid grid-cols-2 lg:grid-cols-3 justify-items-center">
        <div>melodev</div>
        <div>melodev.link</div>
        <div>github</div>
        <div>linkedin</div>
        <div>contact</div>
        <div>@{new Date().getFullYear()}</div>
      </div>
    </footer>
  );
}

export default Footer;
