import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Sidebar from "./assets/components/Sidebar.jsx";
import AllFood from "./assets/components/AllFood.jsx";
import CreateItem from "./assets/components/CreateItem.jsx";
import UpdateItem from "./assets/components/UpdateItem.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <div className="d-flex ">
                <div className="col-auto sidebar ">
                    <Sidebar/>
                </div>
                <div>
                    <Routes>
                        <Route path='/' element={<AllFood/>}/>
                        <Route path='/additem' element={<CreateItem/>}/>
                        <Route path='/updateiteam/:id' element={<UpdateItem/>}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
};

export default App;