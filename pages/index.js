import VerticleSidebar from "../components/VerticleSidebar";
import Navbar from "../components/Navbar";
import React, { useState } from "react";
import MenuBar from "../components/MainSection/MenuBar";
import EmailSection from "../components/MainSection/EmailSection";

export default function Home() {
  const [openFullMenu, setOpenFullMenu] = useState(true);

  const hamburger = () => {
    setOpenFullMenu(!openFullMenu);
  };

  return (
    <div className="flex bg-blue-50 h-auto">
      <VerticleSidebar onClickHamburger={hamburger} />

      <div className="border-2 w-full ">
        <div className="">
          <Navbar></Navbar>
        </div>

        <div className="flex max-h-screen">
          {openFullMenu && <MenuBar></MenuBar>}

          <EmailSection></EmailSection>
        </div>
      </div>
    </div>
  );
}
