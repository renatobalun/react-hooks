"use client";

import React, { useState, useEffect } from "react";

function page() {
  const [resourceType, setResourceType] = useState("posts");

  useEffect(() => {
    console.log("resource changed");
    return () => {
      console.log("return from resource change");
    };
  }, [resourceType]);

  return (
    <>
      <div className="flex justify-center text-3xl">
        <button
          className="border bg-gray-500"
          onClick={() => setResourceType("posts")}
        >
          Posts
        </button>
        <button
          className="border bg-gray-500"
          onClick={() => setResourceType("users")}
        >
          Users
        </button>
        <button
          className="border bg-gray-500"
          onClick={() => setResourceType("comments")}
        >
          Comments
        </button>
      </div>
      <h1>{resourceType}</h1>
    </>
  );
}

export default page;
