import { useState, useEffect, useRef } from "react";
import classes from "./count-func.module.css";

const CountFunc = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const count1Ref = useRef(null);

  const printSomething = () => {
    setCount((previousCount) => previousCount + 1);
  };

  useEffect(() => {
    console.log("Count changed to:", count);
  }, [count]);

  console.log(count1Ref.current);

  return (
    <div>
      <h2 className={classes.redtitle}>Function</h2>
      <h3 ref={count1Ref}>Count: {count}</h3>
      <h3>Count2: {count2}</h3>
      <button onClick={printSomething}>Increase</button>
      <button onClick={() => setCount2(count2 + 1)}>Increase2</button>
    </div>
  );
};

export default CountFunc;
