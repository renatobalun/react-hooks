"use client";

import React, { useState } from "react";
import FunctionContextComponent from "@/app/components/FunctionContextComponent";
import { ThemeProvider } from "@/app/components/ThemeContext";

function page() {

  return (
    <>
      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>
    </>
  );
}

export default page;
