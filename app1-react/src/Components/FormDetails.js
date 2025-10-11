import React from "react";

const OnclickExample = () => {
    const handleClick = (e) => {
        e.target.textContent = "Button Clicked";
    }
    return (
        <div>
            <h1>OnclickExample for textcontent change</h1>
            <button onClick={(e) => handleClick(e)}>Click me</button>
        </div>
    )
}
export default OnclickExample;