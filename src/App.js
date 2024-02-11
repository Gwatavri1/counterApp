import React, {useState} from "react";
import './App.css';

function App(){

    const [count, setcount] = useState(0);

    return(
        <div className="App">
            <h1>Amatip To-do List App</h1>

            <h2>Your count is now: {count}</h2>
            <button onClick={() => setcount(count + 1)}>Increase</button>
            <button onClick={() => setcount(count - 1)}>Delete</button>
            <button onClick={() => setcount(0)}>Reset</button>
        </div>
    )

}

export default App;
