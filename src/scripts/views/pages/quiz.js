import JaksaraSource from "../../data/jaksara-source";
import {
    showLoadingSpinner,
    hideLoadingSpinner,
} from "../templates/template-creator";

let correctAnswer = "",
    correctScore = 0,
    answeredCount = 0,
    askedCount = 0,
    totalQuestion = 10;
let questions = [];

const Quiz = {
    async render() {
        return `
        <div class="header-aksara">
          <div class="logo">
              <a href="#">
                  <img src="/logo/brand.svg" alt= "img-logo">
              </a>
          </div>
        </div>

        <div class="flex-container">
          <div class="wrapper-container">
            <div class="quiz-container" id="quizContainer">
              <div class="quiz-head">
                <h1 class="judul-quiz">Kuis Aksara Jawa</h1>
                <div class="score-quiz flex">
                  <span id="answered-count">0</span>/<span id="total-soal">10</span>
                </div>
              </div>

              <div class="body-quiz">
                <h2 class="soal-quiz" id="soal"></h2>
                <span class="gambar-soal" id="gambar-soal"></span>
                <ul class="pilihan-jawaban"></ul>
                <div id="result"></div>
                  <br />
                  <div class="quiz-foot">
                    <button type="button" id="check-answer">Periksa Jawaban</button>
                    <button type="button" id="mulai-kembali">Mainkan lagi!</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    `;
    },

    async afterRender() {
        const navbar = document.querySelector("navbar-content");
        navbar.style.display = "none";

        const _answeredCount = document.getElementById("answered-count");
        const _totalsoal = document.getElementById("total-soal");
        showLoadingSpinner();

        try {
            await this.loadQuestions();
            await this.eventListeners();
        } catch (error) {
            console.error("Error during rendering: ", error);
        }

        if (_totalsoal && _answeredCount) {
            _totalsoal.textContent = totalQuestion;
            _answeredCount.textContent = answeredCount;
        }

        hideLoadingSpinner();
    },

    async eventListeners() {
        const _checkAnswer = document.getElementById("check-answer");
        const _playAgain = document.getElementById("mulai-kembali");
        if (_checkAnswer) {
            _checkAnswer.addEventListener("click", this.checkAnswer.bind(this));
        } else {
            console.error('Element with id "check-answer" not found.');
        }

        if (_playAgain) {
            _playAgain.addEventListener("click", this.playAgain.bind(this));
        } else {
            console.error('Element with id "mulai-kembali" not found.');
        }
    },

    async loadQuestions() {
        const _totalsoal = document.getElementById("total-soal");

        showLoadingSpinner();
        try {
            const quizList = await JaksaraSource.quiz();

            if (
                quizList &&
                quizList.status === "success" &&
                quizList.data &&
                Array.isArray(quizList.data.quiz)
            ) {
                questions = quizList.data.quiz;
                totalQuestion = questions.length;
                if (_totalsoal) _totalsoal.textContent = totalQuestion;
                await this.showQuestion(questions[askedCount]);
            } else {
                throw new Error("Invalid data structure");
            }
        } catch (error) {
            console.error("Failed to load questions: ", error);
        }
        hideLoadingSpinner();
    },

    async showQuestion(data) {
        const _soal = document.getElementById("soal");
        const _gambarsoal = document.getElementById("gambar-soal");
        const _pilihanjawaban = document.querySelector(".pilihan-jawaban");

        if (!data.question ||
            !data.correctAnswer ||
            !data.incorrectAnswer1 ||
            !data.incorrectAnswer2 ||
            !data.incorrectAnswer3
        ) {
            console.error("Invalid question data: ", data);
            return;
        }

        correctAnswer = data.correctAnswer;
        let incorrectAnswers = [
            data.incorrectAnswer1,
            data.incorrectAnswer2,
            data.incorrectAnswer3,
        ];
        let optionsList = incorrectAnswers.slice();
        optionsList.splice(
            Math.floor(Math.random() * (incorrectAnswers.length + 1)),
            0,
            correctAnswer
        );

        if (_soal) {
            _soal.innerHTML = `${data.question}`;
        } else {
            console.error('Element with id "soal" not found.');
        }

        if (_gambarsoal) {
            if (data.hasImg && data.imgUrl) {
                _gambarsoal.innerHTML = `<img src="${data.imgUrl}" alt="Question Image" class="gambar-soal">`;
            } else {
                _gambarsoal.innerHTML = "";
            }
        } else {
            console.error('Element with id "gambar-soal" not found.');
        }

        if (_pilihanjawaban) {
            _pilihanjawaban.innerHTML = optionsList
                .map((option, index) => `<li> <span> ${option}</span></li>`)
                .join("");
        } else {
            console.error('Element with class "pilihan-jawaban" not found.');
        }

        await this.selectOption();
    },

    async selectOption() {
        const _pilihanjawaban = document.querySelector(".pilihan-jawaban");
        if (_pilihanjawaban) {
            _pilihanjawaban.querySelectorAll("li").forEach((option) => {
                option.addEventListener("click", () => {
                    const activeOption = _pilihanjawaban.querySelector(".selected");
                    if (activeOption) {
                        activeOption.classList.remove("selected");
                    }
                    option.classList.add("selected");
                });
            });
        } else {
            console.error('Element with class "pilihan-jawaban" not found.');
        }
    },

    async checkAnswer() {
        const _pilihanjawaban = document.querySelector(".pilihan-jawaban");
        const _answeredCount = document.getElementById("answered-count");
        const _checkAnswer = document.getElementById("check-answer");
        const _playAgain = document.getElementById("mulai-kembali");
        const _result = document.getElementById("result");
        if (!_checkAnswer || !_result || !_answeredCount) return;

        _checkAnswer.disabled = true;
        const selectedOption = _pilihanjawaban.querySelector(".selected span");

        if (selectedOption) {
            let selectedAnswer = selectedOption.textContent;
            if (selectedAnswer.trim() === (await this.HTMLDecode(correctAnswer))) {
                correctScore++;
                _result.innerHTML = `<p>Jawaban Anda benar! </p>`;
            } else {
                _result.innerHTML = `<p>Jawaban Anda salah! </p> <p><small>
            <b>Jawaban benar : ${correctAnswer}</small></p>`;
            }
        }

        answeredCount++;
        _answeredCount.textContent = answeredCount;

        if (answeredCount < totalQuestion) {
            setTimeout(() => {
                this.showQuestion(questions[answeredCount]);
                _checkAnswer.disabled = false;
                _result.innerHTML = "";
            }, 2000);
        } else {
            setTimeout(() => {
                _result.innerHTML += `<p> Quiz selesai! Skor akhir Anda adalah ${correctScore}.</p>`;
                _playAgain.style.display = "block";
                _checkAnswer.style.display = "none";
            }, 2000);
        }
    },

    async HTMLDecode(textString) {
        let doc = new DOMParser().parseFromString(textString, "text/html");
        return doc.documentElement.textContent;
    },

    async playAgain() {
        const _answeredCount = document.getElementById("answered-count");
        const _playAgain = document.getElementById("mulai-kembali");
        const _checkAnswer = document.getElementById("check-answer");
        const _result = document.getElementById("result");
        if (!_answeredCount || !_result || !_playAgain) return;

        correctScore = 0;
        answeredCount = 0;
        askedCount = 0;
        _answeredCount.textContent = answeredCount;
        _result.innerHTML = "";
        _playAgain.style.display = "none";

        if (_checkAnswer) {
            _checkAnswer.style.display = "block";
            _checkAnswer.disabled = false;
        }

        await this.loadQuestions();
    },
};

export default Quiz;