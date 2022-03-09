import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
import {BrowserRouter, Routes, Route, Link, Navigate} from 'react-router-dom';

const App = () => {
    return (
        <>
            <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route exact path="/" element = {<Home />} />
                    <Route exact path="/about" element = {<About />} />
                    <Route exact path="/service" element = {<Service />} />
                    <Route exact path="/contact" element = {<Contact />} />
                    <Route path="*" element={<Navigate to ="/" />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};



export default App;