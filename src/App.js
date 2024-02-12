import React, { useState, useEffect } from "react";
import './App.css';

function App() {
    const [count, setCount] = useState(() => {
        const saved = localStorage.getItem("count");
        return saved !== null ? parseInt(saved, 10) : 0;
    });
    const [step, setStep] = useState(1);
    const [title, setTitle] = useState("Amatip IT Counter App");
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        localStorage.setItem("count", count);
    }, [count]);

    const handleChange = (change) => {
        setCount(prevCount => prevCount + change);
       
    };

    const handleReset = () => {
        setCount(0);
      
    };

    return (
        <div className={"App" + (darkMode ? " dark-mode" : "")}>
            <h1>{title}</h1>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <h2>Your count is now: {count}</h2>
            <button onClick={() => handleChange(step)}>Increase</button>
            <button onClick={() => handleChange(-step)}>Decrease</button>
            <button className="reset" onClick={handleReset}>Reset</button>
            <input type="number" value={step} onChange={e => setStep(parseInt(e.target.value, 10))} />
            <button onClick={() => setDarkMode(prevMode => !prevMode)}>Toggle Dark/Light Mode</button>
            <div>
                
           
            <button className="install" onClick={window.handleInstallClick}>Install App</button>

                <p>Powered by Qudus Nafiu Olanrewaju (Code Master)</p>
            </div>
        </div>
    );
}

export default App;
