import * as React from "react";

import { InventoryModal } from "../shared/inventory-modal";
import Footer from "./footer";
import NavigationMenu from "./navigation-menu";

const SharedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen">
      <NavigationMenu />
      {children}
      <Footer />
      <InventoryModal />
    </main>
  );
};

export default SharedLayout;
