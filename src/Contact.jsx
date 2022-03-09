import React from "react";

const Contact = () => {
    return (
        <>
            <div className = "contact-page my-5">
                <div className="container-fluid">
                    <h1 className="text-center mb-4">Contact Us</h1>    
                </div>    
                <div className="form-section">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12 col-md-8 mx-auto">
                            <form class="row g-3">
                            <div class="col-md-6">
                                    <label for="firstName" class="form-label">First Name</label>
                                    <input type="text" class="form-control" id="firstName" />
                                </div>
                                <div class="col-md-6">
                                    <label for="lastName" class="form-label">Last Name</label>
                                    <input type="text" class="form-control" id="lastName"/>
                                </div>
                                <div class="col-md-6">
                                    <label for="inputEmail" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="inputEmail" />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputPassword" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="inputPassword"/>
                                </div>
                                <div class="col-12">
                                    <label for="inputAddress" class="form-label">Address</label>
                                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                                </div>
                                <div class="col-12">
                                    <label for="inputAddress2" class="form-label">Address 2</label>
                                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                                </div>
                                <div class="col-md-4">
                                    <label for="inputCity" class="form-label">City</label>
                                    <input type="text" class="form-control" id="inputCity"/>
                                </div>
                                <div class="col-md-4">
                                    <label for="inputState" class="form-label">State</label>
                                    <input type="text" class="form-control" id="inputState"/>
                                </div>
                                <div class="col-md-4">
                                    <label for="inputZip" class="form-label">Zip</label>
                                    <input type="text" class="form-control" id="inputZip"/>
                                </div>
                                <div class="col-12">
                                    <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck"/>
                                    <label class="form-check-label" for="gridCheck">
                                        Check me out
                                    </label>
                                    </div>
                                </div>
                                <div class="col-12 mt-4">
                                    <button type="submit" class="btn-blue-border">Submit</button>
                                </div>
                                </form>    
                            </div>    
                        </div>    
                    </div>    
                </div>
            </div>
        </>
    );
};

export default Contact;