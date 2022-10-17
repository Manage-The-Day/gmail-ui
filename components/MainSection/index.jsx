import React from "react";
import MenuBar from "./MenuBar";
import EmailSection from "./EmailSection";

export default function MainSection() {
  return (
    <div className="flex max-h-screen">
      <MenuBar></MenuBar>

      <EmailSection></EmailSection>
    </div>
  );
}
