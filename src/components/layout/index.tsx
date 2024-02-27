import * as React from "react";

import Footer from "./footer";
import NavigationMenu from "./navigation-menu";

const SharedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen">
      <NavigationMenu />
      {children}
      <Footer />
    </main>
  );
};

export default SharedLayout;
