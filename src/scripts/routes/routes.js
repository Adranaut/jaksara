import Aksara from "../views/pages/aksara";
import Quiz from "../views/pages/quiz";
import Question1 from "../views/pages/question1";
import Question2 from "../views/pages/question2";
import Question3 from "../views/pages/question3";
import Select from "../views/pages/select";
import Home from "../views/pages/home";

const routes = {
    "/": Home,
    "/aksara": Home,
    "/aksara": Aksara,
    "/quiz": Quiz,
    "/question1": Question1,
    "/question2": Question2,
    "/question3": Question3,
    "/select": Select,
};

export default routes;