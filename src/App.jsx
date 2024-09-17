import "./App.css";
import Yo from "./assets/yo.jpg";

import Zaitex from "./assets/zaitex-pantalla.png";
import ShortUrl from "./assets/short-url.png";
import Decidijc from "./assets/decidijc.png";

import React from "./assets/react.svg";
import Php from "./assets/php_dark.svg";
import Angular from "./assets/angular.svg";
import Spring from "./assets/spring.svg";
import Bootstrap from "./assets/bootstrap.svg";
import Mysql from "./assets/mysql.svg";
import email from "./services/emailjs";
import scroll from "./services/scroll";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        document.getElementById("navbar").classList.add("scrolling");
      } else {
        document.getElementById("navbar").classList.remove("scrolling");
      }
    })
  },[])

  return (
    <>
    <div className="container font-k2d main-container">
      <div className="dividor"></div>
      <header className="w-100 d-flex justify-content-center fixed-top">
        <ul className="d-flex mt-3 list gap-5 p-3 rounded-4 fw-bold navbar-container" id="navbar">
          <li className="fs-6 list-item" onClick={() => scroll("sobre-mi")}>Sobre Mi</li>
          <li className="fs-6 list-item" onClick={() => scroll("proyectos")}>Proyectos</li>
          <li className="fs-6 list-item" onClick={() => scroll("contacto")}>Contacto</li>
        </ul>
      </header>

      <section className="w-100 row-gap-4" style={{ marginTop: "80px" }}>
        <div className="d-flex flex-wrap align-items-center yo-container pt-5" id="sobre-mi">
          <div style={{ width: "50%" }} className="name-container">
            <p
              className="fs-1 fw-bold title-text"
              style={{
                color: "#c1c1c1 ",
                animation: "alternate change-colors 2s ease-in-out infinite",
              }}
            >
              Desarrollador Web
            </p>
            <p className="text-justify fw-medium fs-3 name-text" id="nombre">
              Me llamo Juan Carlos Cajas O.
            </p>
          </div>
          <img src={Yo} alt="yo" className="yo-foto" />
        </div>
        <nav className="redes mt-3 d-flex flex-wrap gap-3 align-items-center">
          <a
            href="https://github.com/RakonaDev"
            target="_blank"
            className="list-item d-flex gap-2 align-items-center justify-content-center"
          >
            <i className="fa-brands fa-github text-white fs-6"></i>
            <span className="fs-6 text-light">Github</span>
          </a>
          <a
            href="https://www.linkedin.com/in/juan-carlos-cajas-a73a0b231/"
            target="_blank"
            className="list-item d-flex gap-2 align-items-center justify-content-center"
          >
            <i className="fa-brands fa-linkedin fs-6 text-light"></i>
            <span className="fs-6 text-light">Linkedin</span>
          </a>
          <a
            href="mailto:juancajas1905@gmail.com"
            className="list-item d-flex gap-2 justify-content-center align-items-center"
          >
            <i className="fa-solid fa-envelope text-white fs-6"></i>
            <span className="text-light">Contáctame</span>
          </a>
        </nav>
      </section>

      <main className="w-100" style={{ marginTop: "150px" }}>
        <h1 className="fs-2 fw-bold text-primary">
          <span className="me-3">
            <i className="fa-solid fa-user-tie"></i>
          </span>
          Sobre mi
        </h1>
        <p className="mt-4 fs-6 text-white">
          Soy estudiante del 7mo ciclo de{" "}
          <span className="fs-6 fw-bold text-warning">
            Ingeniería en Sistemas Computacionales
          </span>
          , ando desarrollando proyectos web desde 2023. Mi objetivo es mejorar
          mi conocimiento y habilidades en el desarrollo web, y me interesa
          aprender nuevas tecnologías y metodologías para mejorar mi trabajo.
        </p>
        <h1 className="fs-2 fw-bold mt-5 text-primary">
          <span className="me-3">
            <i className="fa-solid fa-briefcase"></i>
          </span>
          Experiencia Laboral
        </h1>
        <ol className="mt-5">
          <li className="d-flex container flex-wrap gap-5">
            <span className="rounded-circle circle"></span>
            <div style={{ width: "230px" }}>
              <h2 className="fs-4 fw-bold" style={{ color: "#f1c40e" }}>
                Trabajo Freelance
              </h2>
              <p className="fs-6 text-secondary">Junio 2024</p>
            </div>
            <div style={{ width: "60%" }} className="body-text">
              <p className="text-justify">
                Responsable de desarrollo web para ZaiTex de la industria
                educativa. Administré el desarrollo tanto frontend como backend,
                y logré darle solución al problema.
              </p>
            </div>
          </li>
        </ol>
      </main>
      <section className="pt-5" id="proyectos">
        <h1 className="fs-2 fw-bold text-primary">
          <span className="me-3">
            <i className="fa-solid fa-code"></i>
          </span>
          Proyectos
        </h1>
        <ul className="mt-5 proyect-container">
          {/* ZaiTex */}
          <li className="d-flex justify-content-evenly proyect-item flex-wrap">
            <img src={Zaitex} alt="zaitex" className="proyecto-foto" />
            <div className="proyect-body">
              <h3 className="fs-2 fw-bold">Zai-Tex</h3>
              <p className="text-light gap-1 d-flex flex-wrap">
                <span
                  style={{
                    fontSize: "13px",
                    background: "#000",
                    padding: "8px",
                  }}
                  className="rounded-5 me-2"
                >
                  <img src={React} alt="react" className="logo-tec me-1" />
                  <span className="align-middle">ReactJS</span>
                </span>

                <span
                  style={{
                    fontSize: "13px",
                    background: "#000",
                    padding: "8px",
                  }}
                  className="rounded-5 me-2"
                >
                  <img src={Php} alt="react" className="logo-tec me-1" />
                  <span className="align-middle">PHP</span>
                </span>

                <span
                  style={{
                    fontSize: "13px",
                    background: "#000",
                    padding: "8px",
                  }}
                  className="rounded-5"
                >
                  <img
                    src={Mysql}
                    alt="mysql"
                    className="logo-tec me-1 align-middle"
                  />
                  <span className="align-middle">Mysql</span>
                </span>
              </p>
              <p style={{ height: "110px" }}>
                Pagina Landing Page que muestra todos los cursos que tiene
                Zai-Tex y se puedan matricularse en ellos. También tienen un
                login para los estudiantes matriculados para que entren al panel
                de estudiante.
              </p>
              <a
                href="https://www.zai-tex.com/"
                target="_blank"
                className="text-light link-proyect"
              >
                <span>
                  <i className="fa-solid fa-link me-2"></i>
                </span>{" "}
                Preview
              </a>
            </div>
          </li>

          {/* Short Url */}
          <li className="d-flex justify-content-evenly gap-4 proyect-item mt-4 flex-wrap">
            <img src={ShortUrl} alt="zaitex" className="proyecto-foto" />
            <div className="proyect-body">
              <h3 className="fs-2 fw-bold">Short Url</h3>
              <p className="text-light gap-1 d-flex flex-wrap">
                <span
                  style={{
                    fontSize: "13px",
                    background: "#000",
                    padding: "8px",
                  }}
                  className="rounded-5 me-2"
                >
                  <img src={Angular} alt="angular" className="logo-tec me-1" />
                  <span className="align-middle">Angular</span>
                </span>
                <span
                  style={{
                    fontSize: "13px",
                    background: "#000",
                    padding: "8px",
                  }}
                  className="rounded-5 me-2"
                >
                  <img
                    src={Spring}
                    alt="spring"
                    className="logo-tec me-1 align-middle"
                  />
                  <span className="align-middle">SpringBoot</span>
                </span>
                <span
                  style={{
                    fontSize: "13px",
                    background: "#000",
                    padding: "8px",
                  }}
                  className="rounded-5"
                >
                  <img
                    src={Bootstrap}
                    alt="bootstrap"
                    className="logo-tec me-1 align-middle"
                  />
                  <span className="align-middle">Bootstrap</span>
                </span>
              </p>
              <p style={{ height: "110px" }}>
                Proyecto personal que sirve para acortar un url y que se pueda compartir con otros. Este proyecto nació para poner en práctica mi lógica y aprender a usar springboot y angular.
              </p>
              <a
                href="https://www.zai-tex.com/"
                target="_blank"
                className="text-light link-proyect"
              >
                <span>
                  <i className="fa-brands fa-github me-2"></i>
                </span>{" "}
                Codigo
              </a>
            </div>
          </li>

          {/* DecidiJC */}
          <li className="d-flex justify-content-evenly gap-4 proyect-item mt-4 flex-wrap">
            <img src={Decidijc} alt="decidijc" className="proyecto-foto" />
            <div className="proyect-body">
              <h3 className="fs-2 fw-bold">DecidiJC</h3>
              <p className="text-light gap-1 d-flex flex-wrap">
                <span
                  style={{
                    fontSize: "13px",
                    background: "#000",
                    padding: "8px",
                  }}
                  className="rounded-5 me-2"
                >
                  <img src={Php} alt="angular" className="logo-tec me-1" />
                  <span className="align-middle">PHP</span>
                </span>
                <span
                  style={{
                    fontSize: "13px",
                    background: "#000",
                    padding: "8px",
                  }}
                  className="rounded-5 me-2"
                >
                  <img src={Mysql} alt="angular" className="logo-tec me-1" />
                  <span className="align-middle">Mysql</span>
                </span>
                <span
                  style={{
                    fontSize: "13px",
                    background: "#000",
                    padding: "8px",
                  }}
                  className="rounded-5"
                >
                  <img
                    src={Bootstrap}
                    alt="bootstrap"
                    className="logo-tec me-1 align-middle"
                  />
                  <span className="align-middle">Bootstrap</span>
                </span>
              </p>
              <p style={{ height: "100px" }}>
                Proyecto personal que sirve para aprender a usar una api de un fake store que son pedidos de un servidor para que sea lo más real posible. Esta idea nació para ayudar a la comunidad de desarrolladores que quieran conectar sus paginas web a un servidor.
              </p>
              <div className="d-flex gap-2">
                <a
                  href="https://github.com/RakonaDev/decidijc"
                  target="_blank"
                  className="text-light link-proyect"
                >
                  <span>
                    <i className="fa-brands fa-github me-2"></i>
                  </span>
                  Codigo
                </a>
                <a
                  href="https://github.com/RakonaDev/decidijc"
                  target="_blank"
                  className="text-light link-proyect"
                >
                  <span>
                    <i className="fa-solid fa-link me-2"></i>
                  </span>
                  Preview
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section className="w-100 pt-5" id="contacto">
        <h1 className="fs-2 fw-bold text-primary">
          <span>
            <i className="fa-solid fa-envelope me-3"></i>
          </span>
          Contacto
        </h1>
        <contacto className="mt-5 w-100 d-flex justify-content-center">
          <form className="form-contact mt-3 p-4 rounded-3 d-flex flex-column align-items-center" onSubmit={(event) => email(event)}>
            <div className="container">
              <label htmlFor="email">Contacto: </label>
              <input type="text" name="email" id="email" className="form-control-plaintext text-light" value="juancajas1905@gmail.com" readOnly/>
            </div>
            <div className="container mt-3">
              <label htmlFor="gmail-contact" className="mb-2 fs-6">Email: </label>
              <input type="email" name="gmail-name" id="gmail-contact" className="form-control" placeholder="ejemplo@gmail.com" required/>
            </div>
            <div className="container mt-3">
              <label htmlFor="message" className="mb-2 fs-6">Mensaje: </label>
              <textarea name="message" id="message" className="form-control" placeholder="Escribe aquí tu mensaje..." style={{ height: "170px", resize: "none" }} required></textarea>
            </div>
            <input type="submit" value="Enviar" className="btn btn-primary mt-4" onSubmit={(event) => email(event)}/>
          </form>
        </contacto>
      </section>
    </div>
    <footer className="mt-5 w-100 bg-black text-light footer-container">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <div className="text-footer d-flex justify-content-end align-items-center">
            <span className="me-2">
              <i className="fa-solid fa-copyright"></i>
            </span>
            Copyright 2023 Juan Carlos Cajas
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}

export default App;
