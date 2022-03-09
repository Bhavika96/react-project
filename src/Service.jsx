import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Service = () => {
    return (
        <>
            <div className="service-page my-5">
                <div class="container-fluid">
                    <h1 className="text-center mb-4">Services</h1>    
                </div>    

                <div class="service-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-10 mx-auto">
                                <div className="row gy-4">
                                {
                                    Sdata.map((val, ind)=>{
                                        return <Card 
                                        key = {ind}
                                        imgsrc= {val.imgsrc}
                                        title= {val.title}
                                        />
                                    })
                                }
                                </div>
                            </div>    
                        </div>
                            
                    </div>    
                </div>
            </div>
        </>
    );
};

export default Service;