"use client";
import React from "react";
import CardSlider from "../components/CardSlider";

export type T_userType = {
  name: string;
  id: number;
};
export default function page() {
  return (
    <div>
      <CardSlider />
    </div>
  );
}
