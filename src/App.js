import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Contact} from "./pages/Contact";
import {NotFound} from "./pages/NotFound";
import {Category} from "./pages/Category";
import {Recipe} from "./pages/Recipe";

function App() {
    return (<>
        <BrowserRouter basename='/react-food'>
            <Header/>
            <main className='container content'>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contacts" element={<Contact/>}/>
                    <Route path="/category">
                        <Route path=":name" element={<Category/>}/>
                    </Route>
                    <Route path="/meal">
                        <Route path=":id" element={<Recipe/>}/>
                    </Route>
                    <Route path="*" element={<NotFound/>}></Route>
                </Routes>
            </main>
            <Footer/>
        </BrowserRouter>

    </>)
}

export default App;
