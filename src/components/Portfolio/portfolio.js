import React from "react";
import styles from "./style.css";
import repos from "../../JSON/repos.json";

export default function Portfolio() {
    return (
        <div className="container pt-4 pb-5">
            <div className="row">
                <div className="col-lg-7 col-md-12 col-sm-12">
                    <div className="card">
                        <div className="card-title border-bottom pb-2 ml-3 mb-0">
                            <h2 className="mt-3 ml textLightBlue">Portfolio</h2>
                        </div>
                        <div className="card-body">
                            <div className="row justify-content-center">
                                {repos.map(repo => {
                                    return (
                                        <section className="col-lg-6 col-md-6 col-sm-12 siteContainers">
                                            <figure className="card text-white sites">
                                                <img className="card-img" src={repo.src} alt={"Preview of " + repo.name + " site"} />
                                                <a href="https://movie-mentor.herokuapp.com/" target="_blank">
                                                    <div className="card-img-overlay p-0">
                                                        <p className="card-text text-center bg-dark textLightBlue">Movie-Mentor</p>
                                                    </div>
                                                </a>
                                            </figure>
                                            <a href="https://github.com/WesleyTejeda/Movie-Mentor" target="_blank">
                                                <p className="text-center">Movie-Mentor Repository</p>
                                            </a>
                                        </section>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}