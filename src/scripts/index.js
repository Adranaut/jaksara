import "regenerator-runtime";
import "../styles/main.css";
import "../styles/responsive.css";
import App from "./views/app";
import swRegister from "./utils/sw-register";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import "./components/navbar";
import "./components/hero";
import "./components/about";
import "./components/fitur";
import "./components/testimonial";
import "./components/qna";
import "./components/getstarted";
import "./components/footer";
import "./components/selectmenu";
import "./components/list-aksara";

const app = new App({
    button: document.querySelector("#hamburger"),
    drawer: document.querySelector("#drawer"),
    content: document.querySelector("#maincontent"),
    body: document.querySelector("body"),
});

window.addEventListener("hashchange", () => {
    app.renderPage();
});

window.addEventListener("load", () => {
    app.renderPage();
    swRegister();
});