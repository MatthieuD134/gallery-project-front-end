import * as React from "react";

import Footer from "./footer";
import NavigationMenu from "./navigation-menu";

const SharedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavigationMenu />
      {children}
      <Footer />
    </div>
  );
};

export default SharedLayout;
