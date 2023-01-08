import Head from "next/head";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
        <Head>
         <title>Counter</title>
       </Head>
      <h1>Counter : {count}</h1>
      <button onClick={() => setCount(count - 1)}>DEC</button>
      <button onClick={() => setCount(count + 1)}>INC</button>
    </div>
  );
};

export default Counter;
