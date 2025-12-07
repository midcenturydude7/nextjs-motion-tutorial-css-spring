"use client";

import React from "react";
import { spring } from "motion";

export default function Home() {
  const [state, setState] = React.useState(false);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="max-w-2xl p-8">
        <h1 className="mb-6 text-4xl font-bold text-zinc-900 dark:text-zinc-100">
          Welcome to Next.js!
        </h1>
        <div className="example-container">
          <div className="box" data-state={state}></div>
          <button
            className="p-3 text-gray-700"
            onClick={() => setState(!state)}
          >
            Toggle Position
          </button>
          <style>
            {`
                    .example-container {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        gap: 20px;
                    }

                    .example-container .box {
                        width: 100px;
                        height: 100px;
                        background-color: #8df0cc;
                        border-radius: 10px;
                        transition: transform ${spring(0.5, 0.8)};
                        transform: translateX(-100%);
                    }

                    .example-container .box[data-state="true"] {
                        transform: translateX(100%) rotate(180deg);
                    }

                    .example-container button {
                        background-color: #8df0cc;
                        color: #0f1115;
                        border-radius: 5px;
                        padding: 10px;
                        margin: 10px;
                    }
                `}
          </style>
        </div>
      </div>
    </div>
  );
}
