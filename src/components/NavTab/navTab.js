import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavTab() {
    const location = useLocation();

    return (
        <header className="bg-dark border-bottom">
            <nav>
                <div className="container">
                    <section className="row justify-content-between">
                        <section className="col-lg-4 col-md-4 col-xs-12 pl-2">
                            <h2 className="text-light text-center mb-0 pb-3 bgLightBlue">Wesley Tejeda</h2>
                        </section>
                        <section className="justify-content-end col-lg-6 col-md-6 col-xs-12">
                            <ul className="nav justify-content-center mt-2">
                                <li className="nav-item border-top border-bottom aTextWhite">
                                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                                    About
                                </Link>
                                </li>
                                <li className="nav-item border-top border-bottom aTextWhite">
                                <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                                    Portfolio
                                </Link>
                                </li>
                                <li className="nav-item border-top border-bottom aTextWhite">
                                <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                                    Contact
                                </Link>
                                </li>
                            </ul>
                        </section>
                    </section>
                </div>
            </nav>
        </header>
    )
}