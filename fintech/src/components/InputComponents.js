import { useState } from "react"

const InputComponents = (props) => {
    const [name, setName] = useState("test");
    return <p>{name}</p>;
};

export default InputComponents;