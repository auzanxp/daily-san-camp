import React, { useState } from "react";

const Tugas9 = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="Container">
      <div className="box">
        <p>{count}</p>
        <button className="btn" onClick={handleClick}>Tambah</button>
        <button className="btn" onClick={() => setCount(count - 1)} disabled={count === 0}>Kurang</button>
      </div>
      {count >= 10 ? <p>State count sudah lebih dari 10!!</p> : " "}
    </div>
  );
};

export default Tugas9;
