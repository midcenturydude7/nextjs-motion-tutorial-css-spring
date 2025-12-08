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
      <button
        className="m-2 cursor-pointer rounded bg-[#8df0cc] p-2 text-gray-900 hover:bg-[#38b497]"
        onClick={() => setState(!state)}
      >
        Toggle Position
      </button>
      <style>
        {`
          .box {
              transition: transform ${spring(0.5, 0.8)};
              transform: translateX(-100%);
          }

          .example-container .box[data-state="true"] {
              transform: translateX(100%) rotate(180deg);
          }
        `}
      </style>
    </div>
  );
}
