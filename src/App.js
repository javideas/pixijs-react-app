import { Stage, Container, useTick, Sprite } from "@saitonakamura/react-pixi"
import { useReducer, useRef, useState } from 'react';

const App = () => {
  const reducer = (_, { data }) => data;
  const Bunny = () => {
    const [motion, update] = useReducer(reducer);
    const iter = useRef(0);
    useTick(delta => {
      const i = (iter.current += 0.05 * delta);
      update({
        type: 'update',
        data: {
          x: Math.sin(i) * 20,
          y: Math.sin(i / 1.5) * 20,
          rotation: Math.sin(i) * Math.PI,
          anchor: Math.sin(i / 2),
        },
      });
    });
    return (
      <Sprite
        image="./img/logo192.png"
        {...motion}
      />
    )
  };
  const [position, setPosition] = useState({x: 70, y: 30});
  const Soldier = () => {
    return (
      <Sprite 
        image="./img/logo192.png"
        x={position.x}
        y={position.y}
      />
    );
  };
  const handleKey = () => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") {
        let sum = 10;
        setPosition({x: 70 + sum, y: 30})
      }
    });
  };
  handleKey();
  return (
    <Stage width={700} height={700} options={{ backgroundAlpha: 0.5 , backgroundColor: 0x01262a }}>
      <Container x={150} y={150}>
        <Bunny />
      </Container>
        <Soldier
        />
    </Stage>
  );
};


export default App;