import React from "react";

const FooterSocial = () => {
  return (
    <div className="w-full sm:w-1/2 md:flex-1 lg:flex-1 text-left pb-10">
      <h3 className="text-2xl pb-3">Thank you for visiting...</h3>
      <ul className="footer-copyright leading-8">
        <li className="border-b-2 border-gray-600">
          Made with <i className="far fa-heart"></i> by Mannuel Ferreira
        </li>
        <li className="border-b-2 border-gray-600">
          Fonts:{" "}
          <a
            href="https://fonts.adobe.com/fonts/freight-text#fonts-section"
            rel="noopener noreferrer"
            target="_blank"
            className="underline"
          >
            Freight
          </a>
        </li>
        <li className="border-b-2 border-gray-600">
          Icons:{" "}
          <a
            href="https://fontawesome.com"
            rel="noopener noreferrer"
            target="_blank"
            className="underline"
          >
            Font Awesome
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterSocial;
