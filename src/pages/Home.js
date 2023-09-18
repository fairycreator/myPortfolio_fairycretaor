import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import "../styles/Home.css";
import image from "../images/photo portarit man.png";
import { FiDownload } from "react-icons/fi";
import MenuMobile from "../components/MenuMobile";
import Typed from "typed.js";

function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Front-End Developer", "Web Development Student"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <TitleBar />
      <section className="flex-container">
        <SideBar />
        <section className="main-container">
          <Header />
          <MenuMobile />
          <main className="main-wrapper home">
            <div className="home-content">
              <p>
                <span className="span">{"<"}</span>Hello! 👋 I am
              </p>
              <h1>
                Andrij Csuhran <span className="span">{"/>"}</span>{" "}
              </h1>
              <h2 ref={typedRef}> </h2>
              <a
                href="https://gitconnected.com/fairycreator/resume"
                target="_blank"
                className="btn-download"
                rel="noreferrer"
              >
                Download CV
                <FiDownload />
              </a>
            </div>
            <img src={image} alt=" " className="image-perfil" />
          </main>
        </section>
        <SideBar />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
