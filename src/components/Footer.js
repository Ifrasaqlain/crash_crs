import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className="mb-one">
        Coded and maintained with ❤️ by
      typicode © 2022
      </div>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Footer;
