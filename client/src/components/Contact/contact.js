import React, { useState } from "react";
import axios from "axios";

export default function Contact(){
    const [input, setInput] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleInputChange = event => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        }, 
        console.log(input)
        );
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        document.getElementById("errorMsg").style.display = "none";
        document.getElementById("successMsg").style.display = "none";
        if (input.name == "" || input.email == "" || input.message == ""){
            document.getElementById("errorMsg").style.display = "block";
            return
        }
        axios.post("/api/submit", input).then(res => {
            document.getElementById("successMsg").style.display = "block";
            setInput({
                name: "",
                email: "",
                subject: "",
                message: ""
            });
        })
    }
    return (
        <div className="container pt-4 pb-3">
            <section className="row">
                <section className="col-lg-7 col-md-12 col-sm-12">
                    <div className="card">
                        <div className="card-title border-bottom ml-3 mb-0">
                            <h2 className="mt-3 ml textLightBlue">Contact</h2>
                        </div>
                        <div className="card-body mb-5 pb-4">
                            <form>
                                <div className="form-group">
                                    <label for="inputName">Name</label>
                                    <input className="form-control" value={input.name} name="name" placeholder="John Smith" onChange={handleInputChange}/>
                                </div>
                                <div className="form-group">
                                    <label for="inputEmail">Email</label>
                                    <input className="form-control" value={input.email} name="email" placeholder="Your email: example@mail.com" onChange={handleInputChange}/>
                                </div>
                                <div className="form-group">
                                    <label for="inputEmail">Subject</label>
                                    <input className="form-control" value={input.subject} name="subject" placeholder="" onChange={handleInputChange}/>
                                </div>
                                <div className="form-group">
                                    <label for="inputMessage">Message</label>
                                    <input className="form-control" value={input.message} name="message" style={{height: "100px"}} onChange={handleInputChange}/>
                                </div>
                                <button type="submit" onClick={handleFormSubmit} className="btn btn-success">Submit</button>
                                <h3 className="mt-3" id="successMsg" style={{display: "none"}}>Your email was successfully sent! ✔️</h3>
                                <h3 className="mt-3" id="errorMsg" style={{display: "none"}}>Please fill out all form fields. ❌</h3>
                            </form>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}