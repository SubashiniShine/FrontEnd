import { useState } from "react";

const FormSubmission = () => {
    const [name, setName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`The name you entered was: ${name}`)
    }
    return (
        <div style={{ textAlign: "center", margin: "20px" }}>
            <h1>Form Submission with Alert box</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Name">Enter your name:</label><br />
                <input type="text"
                    value={name}
                    style={{ margin: "10px", padding: "10px", width: "300px" }}
                    onChange={(e) => setName(e.target.value)}
                />
                <p>Name : {name}</p>
                <button style={{ padding: "10px 30px", cursor: "pointer", color: "white", background: "green" }} type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormSubmission;