import { useState } from "react";
import styled from "styled-components";
import { Stack } from "@tymate/margaret";
import logo from "./images/logo.svg";

const Content = styled.div`
  display: grid;
  place-content: center;
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  background-color: #282c34;
  color: white;
`;

const Image = styled.img`
  width: 25vw;
`;

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Content>
      <Image src={logo} className="App-logo" alt="logo" />
      <Stack direction="column" alignX="center">
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
      </Stack>
    </Content>
  );
};

export default App;
