import React, { useState } from "react";
import "./index.css";


const Todo = () => {
    const [title, setTitle] = useState("");
    const [item, setItem] = useState([]);

    const handlechange = (e) => {
        setTitle(e.target.value)
    }

    const add = () => {
        alert('hello')
        // setItem((olditem) => {
        //     return [...olditem, title];
        // });
        // setTitle('')
        // console.log(title)

    };



    return (
        <div className="Container">
            <div className="heading">
                <h1>Add Todo List</h1>
            </div>


            <div className="main-conatiner">
                <form>
                    <input type='text' placeholder='Add my todo list' value={title} onChange={handlechange} />
                    <div className="add" onClick={add}>Add</div>

                </form>
            </div>
            <div className="list-container">

            </div>
            {/* <ol>
                {item.map((data, index) => {
                    return <li key={index}>{data}</li>
                })
                }
            </ol> */}

        </div>
    );
}

export default Todo;