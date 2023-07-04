import React from "react";

interface Props {}

function Footer(props: Props) {
  const {} = props;

  return (
    <footer className="p-8 bg-base-300">
      <div className="grid grid-cols-2 lg:grid-cols-3 justify-items-center">
        <div>melodev.link</div>
        <div>github</div>
        <div>linkedin</div>
        <div>stackoverflow</div>
        <div>contact</div>
        <div>melodev ©July {new Date().getFullYear()}</div>
        <div>Rio de Janeiro - Brazil</div>
        <div>More footer stuff</div>
        <div>More footer stuff</div>
      </div>
      <div className="py-4 flex justify-center">created with ♥️ by Felipe Chernicharo</div>
    </footer>
  );
}

export default Footer;
