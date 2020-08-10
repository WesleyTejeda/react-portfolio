import React, { useState } from "react";
import styles from "./style.css";

export default function Contact(){
    const [input, setInput] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleInputChange = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        }, 
        console.log(input)
        );
    }

    const submitForm = () => {

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
                            <form action="mailto:wesley.tejeda95@gmail.com">
                                <div className="form-group">
                                    <label for="inputName">Name</label>
                                    <input className="form-control" id="inputName" name="name" placeholder="John Smith" onChange={handleInputChange}/>
                                </div>
                                <div className="form-group">
                                    <label for="inputEmail">Email</label>
                                    <input className="form-control" id="inputEmail" name="email" placeholder="example@mail.com" onChange={handleInputChange}/>
                                </div>
                                <div className="form-group">
                                    <label for="inputMessage">Message</label>
                                    <input className="form-control" id="inputMessage" name="message" style={{height: "100px"}} onChange={handleInputChange}/>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}