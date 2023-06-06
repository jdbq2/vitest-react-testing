import { FC } from "react";

interface Props {
  initialCount: number;
  increment?: () => void;
  decrement?: () => void;
}

const FifthTestComponent: FC<Props> = ({
  initialCount,
  increment,
  decrement,
}) => {
  return (
    <div>
      <h1>{initialCount}</h1>
      {increment && <button onClick={() => increment()}>Increment</button>}
      {decrement && <button onClick={() => decrement()}>Decrement</button>}
    </div>
  );
};

export default FifthTestComponent;
