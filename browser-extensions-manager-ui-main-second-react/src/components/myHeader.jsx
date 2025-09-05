import {Blocks, Moon, SunIcon} from "lucide-react";
import {useState} from "react";

const MyHeader = () => {


    const [themeToggle , setThemeToggle] = useState("dark");

    const handleSetThemeToggle=()=>{
        setThemeToggle((themeToggle)=>{
            if (themeToggle==="dark"){
                setThemeToggle("light");
            } else if(themeToggle==="light"){
                setThemeToggle("dark");
            }
        });
    }

    return (
        <div className="header">
            <div>
                <Blocks color="#F05C50" size="3rem"/>
                <h2>Extensions</h2>
            </div>
            <button onClick={handleSetThemeToggle}>
                {themeToggle==="dark" ? <SunIcon size="1.5rem" color="#fff"/> : <Moon size="1.5rem"/>}
            </button>
        </div>
    )
}
export default MyHeader
