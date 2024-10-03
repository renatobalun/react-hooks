"use client";

import React, { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(() => {
    console.log("run function");
    return 0;
  });

  const [theme, setTheme] = useState("blue");

  // const [state, setState] = useState({ cnt: 4, theme: "blue" });

  // function incCnt() {
  //   setState((prev) => {
  //     return { ...prev, cnt: prev.cnt + 1 };
  //   });
  // }

  // function decCnt() {
  //   setState((prev) => {
  //     let t;
  //     if(prev.theme === "red"){
  //       t = "blue"
  //     }else{
  //       t = "red"
  //     }
  //     return { theme: t, cnt: prev.cnt - 1 };
  //   });
  // }

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <div className="flex justify-center">UseState</div>
      <div className="flex justify-center text-3xl">
        <button className="m-2" onClick={decrementCount}>
          -
        </button>
        <span className="m-2">{count}</span>
        <span className="m-2">{theme}</span>
        <button className="m-2" onClick={incrementCount}>
          +
        </button>
      </div>
    </>
  );
}
