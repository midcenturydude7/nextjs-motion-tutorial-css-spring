import { spring } from "motion";

export default function Box({
  state,
  setState,
}: {
  state: boolean;
  setState: (state: boolean) => void;
}) {
  return (
    <div className="example-container flex flex-col items-center justify-center gap-5">
      <div
        className="box h-[100px] w-[100px] rounded-[10px] bg-[#8df0cc]"
        data-state={state}
      />
      <button onClick={() => setState(!state)}>Toggle Position</button>
      <style>
        {`
            .box {
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
                transition: background-color 0.75s;
                cursor: pointer;
            }

            .example-container button:hover {
                    background-color: #38b497;
            }
        `}
      </style>
    </div>
  );
}
