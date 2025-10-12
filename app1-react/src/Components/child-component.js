import React from 'react'

const ChildComponent = ({sendDataToParent}) => {
    const sendmessage=()=>{
        sendDataToParent("Hello from child")
    }
  return (
    <div>
      <button onClick={sendmessage}>Send data from child to parent</button>
    </div>
  )
}

export default ChildComponent;
