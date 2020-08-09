import React from "react";
import styles from "./style.css";

export default function Contact(){
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
                                    <input className="form-control" id="inputName" placeholder="John Smith" />
                                </div>
                                <div className="form-group">
                                    <label for="inputEmail">Email</label>
                                    <input className="form-control" id="inputEmail" placeholder="example@mail.com" />
                                </div>
                                <div className="form-group">
                                    <label for="inputMessage">Message</label>
                                    <input className="form-control" id="inputMessage" style={{height: "100px"}} />
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