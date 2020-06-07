import React from "react";
import { SVG } from "css.gg";

const AppFooter = () => {
  return (
    <footer className="app-footer p-10">
      <div className="container mx-auto">
        <div className="flex">
          <div className="app-footer-col">
            <h3 className="text-2xl">Follow me</h3>
            <ul>
              <li>
                <a
                  href="https://github.com/mannuelf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex"
                >
                  <svg width="24" height="24" className="flex-auto">
                    <use xlinkHref={SVG + "#gg-git-fork"} />
                  </svg>
                  <span className="flex-auto">@mannuelf</span>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/manidf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex"
                >
                  <svg width="24" height="24" className="flex-auto">
                    <use xlinkHref={SVG + "#gg-twitter"} />
                  </svg>
                  <span className="flex-auto">@manidf</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mannuelferreira/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex-auto">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
