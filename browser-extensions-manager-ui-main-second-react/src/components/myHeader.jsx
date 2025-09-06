import { Blocks, Moon, SunIcon } from "lucide-react";
import { useState, useEffect } from "react";

const MyHeader = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const setIsDarkModeHandler = () => {
        setIsDarkMode(!isDarkMode);
    };

    // apply theme class on <body>
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark");
            document.body.classList.remove("light");
        } else {
            document.body.classList.add("light");
            document.body.classList.remove("dark");
        }
    }, [isDarkMode]);

    return (
        <div className="header">
            <div>
                <Blocks color="#F05C50" size="3rem" />
                <h2>Extensions</h2>
            </div>
            <button onClick={setIsDarkModeHandler}>
                {isDarkMode ? (
                    <Moon size="1.5rem" />
                ) : (
                    <SunIcon size="1.5rem"/>
                )}
            </button>
        </div>
    );
};

export default MyHeader;
