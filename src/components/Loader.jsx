import React from "react";
import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
      <div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <div class="relative">
          <div class="h-24 w-24 rounded-full border-t-8 border-b-8 border-blue"></div>
          <div class="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-red-500 animate-spin"></div>
        </div>
      </div>
    </Html>
  );
};

export default Loader;
