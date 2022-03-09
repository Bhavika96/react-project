import React from "react";
import { NavLink } from "react-router-dom";
const Common = (props) => {
    return (
        <>
            <section id="header" className="home-top-section mt-5">
                <div className="container-fluid">
                    <div className="row">
                        <div class="col-12 col-md-6 d-flex justify-content-center flex-column">
                            <h1>{props.name} <strong class='blue-txt'>US</strong> </h1>    
                            <h2 className="my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua</h2>
                            <NavLink to= {props.visit} className="btn-blue-border">{props.btnname}</NavLink>
                        </div>
                        <div class="col-12 col-md-6">
                            <img src={props.imgsrc} alt="" title="" />
                        </div>    
                    </div>
                </div>    
            </section>
        </>
    );
};

export default Common;