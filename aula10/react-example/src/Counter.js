import { useState, useCallback, useEffect } from "react";

// export const ad = 123

export const Counter = (props) => {
  const [value, setValue] = useState(props.initialValue);

  useEffect(() => {
    console.log('Renderizando Counter com initialValue', props.initialValue)
  }, [props.initialValue])

  const decrement = useCallback(() => {
    setValue(value - 1);
  }, [value]);

  const increment = useCallback(() => {
    setValue((v) => v + 1);
  }, []);

  // const decrement = () => {
  //   setValue(value - 1);
  // };

  // const increment = () => {
  //   setValue(value + 1);
  // };

  return (
    <div className="input-group">
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={decrement}
      >
        -
      </button>
      <input type="text" className="form-control" disabled value={value} />
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};
