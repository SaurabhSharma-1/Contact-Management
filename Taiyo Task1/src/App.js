import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import AppContext from "./utils/context";

function App() {
    return (
        <BrowserRouter>
            <AppContext>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>} />;
                </Routes>
            </AppContext>
        </BrowserRouter>
    );
}

export default App;
