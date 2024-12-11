import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>ⓒ VISHAL GHORPADE  {year}</p>
    </footer>
  );
}

export default Footer;
