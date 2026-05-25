const questions = [
    {
      question: "Você sente dificuldade em falar em público?",
      answers: [
        { text: "Nunca", score: 0 },
        { text: "Às vezes", score: 1 },
        { text: "Frequentemente", score: 2 },
        { text: "Sempre", score: 3 }
      ]
    },
  
    {
      question: "Você evita lugares com muitas pessoas?",
      answers: [
        { text: "Nunca", score: 0 },
        { text: "Às vezes", score: 1 },
        { text: "Frequentemente", score: 2 },
        { text: "Sempre", score: 3 }
      ]
    },
  
    {
      question: "Você sente ansiedade ao conhecer novas pessoas?",
      answers: [
        { text: "Nunca", score: 0 },
        { text: "Às vezes", score: 1 },
        { text: "Frequentemente", score: 2 },
        { text: "Sempre", score: 3 }
      ]
    },
  
    {
      question: "Você fica preocupado com o julgamento dos outros?",
      answers: [
        { text: "Nunca", score: 0 },
        { text: "Às vezes", score: 1 },
        { text: "Frequentemente", score: 2 },
        { text: "Sempre", score: 3 }
      ]
    },
  
    {
      question: "Você sente nervosismo em situações sociais?",
      answers: [
        { text: "Nunca", score: 0 },
        { text: "Às vezes", score: 1 },
        { text: "Frequentemente", score: 2 },
        { text: "Sempre", score: 3 }
      ]
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const quizContainer = document.getElementById("quiz");
  const startButton = document.getElementById("start-btn");
  
  startButton.addEventListener("click", startQuiz);
  
  function startQuiz(){
    startButton.style.display = "none";
    showQuestion();
  }
  
  function showQuestion(){
  
    const questionData = questions[currentQuestion];
  
    quizContainer.innerHTML = `
      <div class="question-card">
        <h2>${questionData.question}</h2>
  
        <div class="answers">
          ${questionData.answers.map(answer => `
            <button class="answer-btn">
              ${answer.text}
            </button>
          `).join("")}
        </div>
      </div>
    `;
  
    const buttons = document.querySelectorAll(".answer-btn");
  
    buttons.forEach((button, index) => {
  
      button.addEventListener("click", () => {
  
        score += questionData.answers[index].score;
  
        currentQuestion++;
  
        if(currentQuestion < questions.length){
          showQuestion();
        } else {
          showResult();
        }
  
      });
  
    });
  
  }
  
  function showResult(){
  
    let message = "";
  
    if(score <= 4){
      message = "Seu nível de ansiedade social parece baixo.";
    }
  
    else if(score <= 8){
      message = "Você apresenta alguns sinais leves de ansiedade social.";
    }
  
    else if(score <= 12){
      message = "Você apresenta sinais moderados de ansiedade social.";
    }
  
    else{
      message = "Você apresenta sinais elevados de ansiedade social.";
    }
  
    quizContainer.innerHTML = `
      <div class="result-card">
        <h2>Resultado</h2>
  
        <p>${message}</p>
  
        <h3>Pontuação: ${score}</h3>
  
        <button onclick="restartQuiz()" class="restart-btn">
          Refazer Quiz
        </button>
      </div>
    `;
  }
  
  function restartQuiz(){
    currentQuestion = 0;
    score = 0;
  
    startButton.style.display = "block";
  
    quizContainer.innerHTML = "";
  }