import "./assets/css/style.css"
import MyHeader from "./components/myHeader.jsx";
import Title from "./components/title.jsx";
import ExtensionCard from "./components/extensionCard.jsx";
import ExtensionsList from "./components/extensionsList.jsx";


const App = () => {
    return (

            <div>
                <MyHeader/>
                <Title/>
                <ExtensionsList/>
            </div>


    )
}
export default App
