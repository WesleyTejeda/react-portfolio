import React from "react";
import styles from "./style.css";

export default function Portfolio(){
    return (
        <div class="container pt-4 pb-5">
                <div class="row">
                    <div class="col-lg-7 col-md-12 col-sm-12">
                        <div class="card">
                            <div class="card-title border-bottom pb-2 ml-3 mb-0">
                                <h2 class="mt-3 ml textLightBlue">Portfolio</h2>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <section class="col-lg-6 col-md-6 col-sm-12 siteContainers">
                                        <figure class="card text-white sites">
                                            <img class="card-img" src="images/movie-mentor.gif" alt="Preview of movie site" />
                                            <a href="https://movie-mentor.herokuapp.com/" target="_blank">
                                                <div class="card-img-overlay p-0">
                                                    <p class="card-text text-center bg-dark textLightBlue">Movie-Mentor</p>
                                                </div>
                                            </a>
                                        </figure>
                                        <a href="https://github.com/WesleyTejeda/Movie-Mentor" target="_blank">
                                            <p class="text-center">Movie-Mentor Repository</p>
                                        </a>
                                    </section>
                                    <section class="col-lg-6 col-md-6 col-sm-12 mb-2 siteContainers">
                                        <figure class="card text-white m-0 sites siteExtra">
                                            <img class="img-fluid card-img extra" src="images/TestLocatorDemo.gif" alt="Demo of Test Locator Site" />
                                            <a href="https://WesleyTejeda.github.io/COVID-19-Test-Center-Locator" target="_blank">
                                                <div class="card-img-overlay p-0" >
                                                    <p class="card-text text-center bg-dark textLightBlue">COVID 2019 Test Locator</p>
                                                </div>
                                            </a>
                                        </figure>
                                        <a href="https://github.com/WesleyTejeda/COVID-19-Test-Center-Locator" target="_blank">
                                            <p class="mb-0 mt-3 text-center">Locator Repository</p>
                                        </a>
                                    </section>
                                </div>
                                <div class="row">
                                    <section class="col-lg-6 col-md-6 col-sm-12 mb-2 siteContainers">
                                        <figure class="card text-white sites">
                                            <img class="card-img" src="images/burger-demo.gif" alt="GIF of logger site" />
                                            <a href="https://burger-logger-v1.herokuapp.com/" target="_blank">
                                                <div class="card-img-overlay p-0">
                                                    <p class="card-text text-center bg-dark textLightBlue">Burger Logger</p>
                                                </div>
                                            </a>
                                        </figure>
                                        <a href="https://github.com/WesleyTejeda/Burger-Logger" target="_blank">
                                            <p class="text-center">Logger Repository</p>
                                        </a>
                                    </section>
                                    <section class="col-lg-6 col-md-6 col-sm-12 mb-2 siteContainers">
                                        <figure class="card text-white sites">
                                            <img class="card-img pb-3" src="images/WeatherDashboardDemo.gif" alt="Demo of Weather Dashboard Site" />
                                            <a href="https://wesleytejeda.github.io/Weather-Dashboard" target="_blank">
                                                <div class="card-img-overlay p-0">
                                                    <p class="card-text text-center bg-dark textLightBlue">Weather Dashboard</p>
                                                </div>
                                            </a>
                                        </figure>
                                        <a href="https://github.com/WesleyTejeda/Weather-Dashboard" target="_blank">
                                            <p class="text-center">Dashboard Repository</p>
                                        </a>
                                    </section>
                                </div>
                                <div class="row">
                                    <section class="col-lg-6 col-md-6 col-sm-12 siteContainers w-80">
                                        <figure class="card text-white sites">
                                            <img class="card-img" src="images/Employee-Tracker.png" alt="Preview of viewer site" />
                                            <a href="https://youtu.be/wc5_hsrj6qw" target="_blank">
                                                <div class="card-img-overlay p-0">
                                                    <p class="card-text text-center bg-dark textLightBlue">Employee-Tracker</p>
                                                </div>
                                            </a>
                                        </figure>
                                        <a href="https://github.com/WesleyTejeda/Employee-Tracker" target="_blank">
                                            <p class="text-center">Tracker Repository</p>
                                        </a>
                                    </section>
                                    <section class="col-lg-6 col-md-6 col-sm-12 mb-2 siteContainers">
                                        <figure class="card text-white sites">
                                            <img class="card-img pb-1" src="images/code-QuizDemo.gif" alt="Demo of Javascript Code Quiz" />
                                            <a href="https://wesleytejeda.github.io/code-Quiz" target="_blank">
                                                <div class="card-img-overlay p-0 siteContainers">
                                                    <p class="card-text text-center bg-dark textLightBlue">Javascript Code Quiz</p>
                                                </div>
                                            </a>
                                        </figure>
                                        <a href="https://github.com/WesleyTejeda/code-Quiz" target="_blank">
                                            <p class="text-center">Quiz Repository</p>
                                        </a>
                                    </section>
                                </div>
                                <div class="row">
                                        <section class="col-lg-6 col-md-6 col-sm-12 siteContainers w-80 offset-lg-3 offset-md-3 offset-sm-0">
                                                <figure class="card text-white sites">
                                                    <img class="card-img" src="images/github-viewer.png" alt="Preview of viewer site" />
                                                    <a href="https://github-profile-viewer-v1.herokuapp.com/" target="_blank">
                                                        <div class="card-img-overlay p-0">
                                                            <p class="card-text text-center bg-dark textLightBlue">Github-Viewer</p>
                                                        </div>
                                                    </a>
                                                </figure>
                                                <a href="https://github.com/WesleyTejeda/Github-Viewer" target="_blank">
                                                    <p class="text-center">Github-Viewer Repository</p>
                                                </a>
                                        </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}