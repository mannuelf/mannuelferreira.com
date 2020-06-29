import React from "react";
import FooterSocial from "./footerSocial";
import FooterCopyright from "./footerCopyright";

const AppFooter = () => {
  return (
    <footer className="app-footer p-10">
      <div className="container mx-auto">
        <div className="flex justify-start -mx-2">
          <FooterSocial />
          <FooterCopyright />
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
