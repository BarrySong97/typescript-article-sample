import { FC, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { IBarrySong2 } from "BarrySong";
import "./App.css";

export interface Props extends CommonProps {
  test: string;
}
const Test: FC<Props> = ({ test, className, style }) => {
  return (
    <div style={style}>
      {test} {className}{" "}
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0);
  const method: IBarrySong2 = { saySorry: () => {}, sayByeBye() {} };
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Test className="" style={{}} test="" />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
