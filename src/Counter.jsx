import { lazy, Suspense, useState } from "react";

const Data = lazy(()=> import("./assets/Data"))
function Counter() {

  const [counter, setCounter] = useState(0);
  return (
    <div style={{ padding: "20px" }}>
      <h1>Lazy Loading...</h1>
      <p>Count: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>

      <hr />
      <Suspense fallback={<p>Loading Heavy Component...</p>}>
      <Data />
      </Suspense>
    </div>
    )
}
export default Counter;
