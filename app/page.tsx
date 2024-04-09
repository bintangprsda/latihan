"use client";
import Image from "next/image";
import Header from "@/components/header";
import Profile from "@/components/profile";
import Tabs from "@/components/tabs";

export default function Home() {
  return (
    <div>
      <Header />
      <Profile />
      <Tabs />
    </div>
  );
}
