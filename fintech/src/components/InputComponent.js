import { useState } from "react";

const InputComponent = ({ handleChange }) => {
  return (
    <>
      <input onChange={handleChange}></input>
      <button>입력</button>
    </>
  );
};

export default InputComponent;
