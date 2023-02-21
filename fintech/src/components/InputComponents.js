import { useState } from "react"

const InputComponents = (props) => {
    const value = "test";
    const [name, setName] = useState("test"); // 1번째 인자를 두번째 setName으로 바꾼다고 생각!
    const handleChangeInput = (event) => {
        console.log(event.target.value);
    };
    return (
        <>
            <p>{name}</p>
            <input onChange={handleChangeInput}></input>
            <button>입력</button>
        </>
    );
};

export default InputComponents;