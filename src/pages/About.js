import React from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";
import "../styles/About.css";
import IconCloud from "../components/IconCloud";

function About() {
  return (
    <body>
      <TitleBar />
      <section className="flex-container">
        <section className="main-container">
          <Header />
          <MenuMobile />
          <main className="main-wrapper about">
            <div className="about-container">
              <span className="span-tag html">{"<html>"}</span>
              <br />
              <span className="span-tag body">{"<body>"}</span>
              <br />
              <span className="span-tag content">{"<h1>"}</span>
              <h1 className="title-about">Greetings,</h1>
              <span className="span-tag content">{"</h1>"}</span>
              <br />
              <span className="span-tag content">{"<p>"}</span>
              <p className="text-about">
                My name is{" "}
                <span className="span-highlight">Andrij Csuhran</span> and I
                love solving problems through codes. I have a degree in
                Marketing, but I am in career transition, currently studying{" "}
                <span className="span-highlight">
                  Full Stack Web Development
                </span>
              </p>
              <p className="text-about">
                My focus is on being able to help improve people's lives by
                developing applications that are{" "}
                <span className="span-highlight">
                  accessible and functional
                </span>
                . My experience includes problem-solving and testing, working in
                teams with tight deadlines for projects developed in the context
                of Agile methodologies.
              </p>
              <p className="text-about last">
                Relevant skills include:{" "}
                <span className="span-highlight">
                  Html, CSS, JavaScript, React, Redux, ContextAPI, Hooks,
                  Webpack, Git/Github.
                </span>
              </p>
              <span className="span-tag content">{"</p>"}</span>
              <br />
              <span className="span-tag body">{"</body>"}</span>
              <br />
              <span className="span-tag html">{"</html>"}</span>
            </div>
            <IconCloud />
          </main>
        </section>
        <SideBar />
      </section>
      <Footer />
    </body>
  );
}

export default About;
