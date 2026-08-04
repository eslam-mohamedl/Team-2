import { House } from "lucide-react";
import React from "react";

export default function Navbar() {
  return (
    <div className="bg-blue-500 p-5 flex justify-center items-center text-4xl">
      <h1 className="font-bold">Navbar</h1>{" "}
      <House className="ml-2 font-bold text-4xl" />
    </div>
  );
}
