import React from "react";
import styles from "./style.css";

export default function Footer(){
    return (
        <footer className="text-center bg-dark text-light pb-1">
            <hr className="m-0 pt-3 bgLightBlue" />
            <section className="row justify-content-center pt-2 mr-2">
                <section className="col-2 text-center">
                    <a target="_blank" className="textLightBlue" href="https://github.com/WesleyTejeda"><i className="fab fa-github"></i></a>
                    <p>GitHub</p>
                </section>
                <section className="col-2 text-center">
                    <a target="_blank" className="textLightBlue" href="https://www.linkedin.com/in/wesley-tejeda-574a641a9/"><i className="fab fa-linkedin-in"></i></a>
                    <p>LinkedIn</p>
                </section>
                <section className="col-2 text-center">
                    <a target="_blank" href="images/Wesley_Tejeda_Resume.PDF"><i className="far fa-file-pdf"></i></a>
                    <p>Resume</p>
                </section>
            </section>
        </footer>
    )
}