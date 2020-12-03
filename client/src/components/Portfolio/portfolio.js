import React from "react";
import repos from "../../JSON/repos.json";

export default function Portfolio() {
    return (
        <div className="container pt-4 pb-5">
            <div className="row col-lg-12 col-md-12 col-sm-12">
                <div className="card" style={{minWidth: "290px"}}>
                    <div className="card-title border-bottom pb-2 ml-3 mb-0">
                        <h2 className="mt-3 ml textLightBlue">Portfolio</h2>
                    </div>
                    <div className="card-body">
                        <div className="row justify-content-center">
                            {repos.map(repo => {
                                return (
                                    <>
                                        <section className="card col-lg-5 col-md-10 col-sm-12 siteContainers mt-3" style={{
                                            marginRight: "20px",
                                            marginBottom: "10px",
                                            marginLeft: "20px",
                                            minWidth: "275px"
                                        }}>
                                            <figure className="card text-white sites" style={{
                                                minWidth: "250px",
                                                maxWidth: "350px",
                                                margin: "auto",
                                                marginTop: "10px",
                                                marginBottom: "10px"
                                            }}>
                                                <img className="card-img" src={repo.src} alt={"Preview of " + repo.name + " site"}/>
                                                <div className="card-img-overlay p-0">
                                                    <p className="card-text text-center bg-dark textLightBlue">{repo.name}</p>
                                                </div>
                                                <a href={repo.repository} target="_blank">
                                                    <button className="col-6 card-text text-center bg-light textLightBlue"
                                                        style={{
                                                            position: "absolute",
                                                            bottom: "0",
                                                            width: "100%",
                                                        }}>
                                                            Respository
                                                    </button>
                                                </a>
                                                <a href={repo.deployed} target="_blank">
                                                    <button className="col-6 offset-6 card-text text-center bgLightBlue"
                                                        style={{
                                                            position: "absolute",
                                                            bottom: "0",
                                                            width: "100%",
                                                            color: "white",
                                                            fontWeight: "bold"
                                                        }}>
                                                            Deployed
                                                    </button>
                                                </a>
                                            </figure>
                                            <div>
                                                <h4 className="textLightBlue">Tech Used</h4>
                                                <p>{repo.tech}</p>
                                                <h4 className="textLightBlue">Description</h4>
                                                <p>{repo.description}</p>
                                            </div>
                                        </section>
                                        
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}