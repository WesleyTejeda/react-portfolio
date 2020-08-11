import React from "react";

export default function About() {
    return (
        <div className="container pt-4 mb-4">
            <section className="row">
                <div className="ml-1 card col-lg-7 col-m-12 col-sm-12">
                    <div className="card-title border-bottom pb-2 ml-3 mb-0">
                        <h2 className="mt-3 ml textLightBlue">About Me</h2>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 card-body p-2">
                        <img className="aboutPic" src="images/myPic.png" alt="Wesley Tejeda, thumbs up!" />
                    </div>
                    <article className="pb-4 mb-2" style={{fontSize: "18px"}}>
                        Welcome, I'm Wesley, or Wes for short. I'm a full-stack web developer currently residing in Philadelphia, PA. I'm a confident, skillful, and dedicated individual with a love for technology and programming. Along with using present day programming technologies I possess great knowledge in regards to software development, backend server configuration, object-oriented programming and I'm highly adept in both solo and team-based environments. Now that you know more about me you can navigate to the other webpages on this site, such as the portfolio section which showcases a few of my web applications. Safe travels.
                            </article>
                    <p className="pt-1">Email: <a href="/#/contact">Wesley.Tejeda95@gmail.com </a> </p>
                </div>
            </section>
        </div>
    )
}