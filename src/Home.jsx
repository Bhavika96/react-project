import React from "react";
import web from "../src/images/home-img.png"
import Common from "./Common";
const Home = () => {
    return (
        <>
            <Common 
                name= "Grow Your business with"
                imgsrc = {web}
                visit = "/service"
                btnname = "Get Started"
            />
        </>
    );
};

export default Home;