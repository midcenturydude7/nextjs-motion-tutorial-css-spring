import { spring } from "motion";

export default function Box({ state, setState }: { state: boolean; setState: (state: boolean) => void }) {
  return (
    <div>
      <div className="box" data-state={state} />
      <button onClick={() => setState(!state)}>Toggle Position</button>
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
                        transition: background-color 0.3s;
                        cursor: pointer;
                    }
                        button:hover {
                            background-color: #72cbb6;
                        }
                `}
      </style>
    </div>
  );
}
