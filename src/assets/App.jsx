import Navbar from "./components/Navbar";
import "/src/App.css";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import Alert from "./components/Alert";
// import About from "./components/About";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
    // State for dark mode and alert
    const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
    const [alert, setAlert] = useState(null); // State to manage the alert message

    // Function to show alert message
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        });
        setTimeout(() => {
            setAlert(null); // Hide the alert after 2.5 seconds
        }, 2500);
    };

    // Function to toggle dark mode
    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = '#042743'; // Set dark mode background color
            showAlert("Dark mode has been enabled", "success"); // Show success alert for dark mode
        } else {
            setMode('light');
            document.body.style.backgroundColor = 'white'; // Set light mode background color
            showAlert("Light mode has been enabled", "success"); // Show success alert for light mode
        }
    };

    return (
        <>
            {/* <Router> */}
                {/* Navbar component with dark mode toggle button */}
                <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
                {/* Display alert if alert state is not null */}
                <Alert alert={alert} />
                <div className="container my-3">
                    {/* <Routes> */}
                        {/* Render About component when URL matches "/about" */}
                        {/* <Route exact path="/about" element={<About />} /> */}
                        {/* Render TextForm component when URL matches root "/" *}/}
                        {/* <Route exact path="/" element={ /> */}
                            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
                    {/* </Routes> */}
                </div>
            {/* </Router> */}
        </>
    );
};

export default App;
