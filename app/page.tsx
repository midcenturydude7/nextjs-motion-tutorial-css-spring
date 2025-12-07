"use client";

import React from "react";
import Box from "./components/Box";

export default function Home() {
  const [state, setState] = React.useState(false);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="max-w-2xl p-8">
        <h2 className="mb-6 text-4xl font-bold text-zinc-900 dark:text-zinc-100">
          CSS Spring Animation
        </h2>
        <div className="example-container">
          <Box state={state} setState={setState} />
        </div>
      </div>
    </div>
  );
}
