import { useState } from "react"

const InputComponents = (props) => {
    // let value = "test";
    const [name, setName] = useState("test"); // 1번째 인자를 두번째 setName으로 바꾼다고 생각!
    const handleChangeInput = (event) => {
        setName(event.target.value)
    };

    const handleClickButton = () => {
        alert(name);
    }

    return (
        <>
            <p>{name}</p>
            <input onChange={handleChangeInput}></input>
            <button onClick={handleClickButton}>입력</button>
        </>
    );
};

export default InputComponents;