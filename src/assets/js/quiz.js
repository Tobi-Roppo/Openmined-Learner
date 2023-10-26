// Quiz data
const quizData = [
    {
      question:
        "The vertical to intermediate dipping wall created in rock by excavation actions.",
      answer: "Face",
    },
    {
      question:
        "Ledge that forms a single level of operation above which mineral or waste materials are mined from the bench face.",
      answer: "Bench",
    },
    {
      question: "Which planet is known as the Red Planet?",
      answer: "Mars",
    },
    {
      question:
        "The material that must be removed or excavated to access and extract the ore. The non-valuable material that covers the valuable resource being mined.",
      answer: "Overburden",
    },
    {
      question:
        "Vertical distance or height between the various levels or terraces (benches) created within the walls of the open pit.",
      answer: "Bench Height",
    },
    {
      question:
        "A natural concentration of valuable minerals, metals, or other economically significant substances that can be mined and processed for profit.",
      answer: "Ore Body",
    },
    {
      question: "The lower limit of a surface excavation to extract minerals.",
      answer: "Pit Floor",
    },
    {
      question:
        "A network of roads is constructed within the pit to transport materials, equipment, and personnel.",
      answer: "Haulage Road",
    },
    {
      question:
        "Inclined roadway or access route that is constructed within the pit to allow for the movement of equipment, vehicles, and personnel between different levels or benches of the mine.",
      answer: "Ramp",
    },
  ];
  
  const quizContainer = document.getElementById("quiz");
  const questionContainer = document.getElementById("question");
  const resultContainer = document.getElementById("result");
  const startButton = document.getElementById("start");
  
  let currentQuestion = 0;
  let score = 0;
  
  // Randomly shuffle the quiz questions
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  // Shuffle the quiz data array
  shuffleArray(quizData);
  
  // Select the first 5 questions from the shuffled array
  const selectedQuestions = quizData.slice(0, 5);
  
  function displayQuestion() {
    questionContainer.style.display = "block";
    if (currentQuestion < selectedQuestions.length) {
      questionContainer.innerHTML = `
        <div class="question-container">
          <p class="question mt-5"><strong>Question ${currentQuestion + 1}:</strong></p>
          <p class="question-text m">${selectedQuestions[currentQuestion].question}</p>
          <div class="form-group">
            <label for "answer" class="answer-label mt-5">Answer:</label>
            <input type="text" id="answer" class="form-control" placeholder="Your Answer">
          </div>
          <button id="prev" class="btn btn-secondary mt-5 float-start">Previous Question</button>
          ${
            currentQuestion === selectedQuestions.length - 1
              ? `<button id="submit" class="btn btn-primary mt-5 float-end">Submit</button>`
              : `<button id="next" class="btn btn-primary mt-5 float-end" disabled>Next Question</button>
              `
          }
        </div>
      `;
    } else {
      showResult();
    }
  
    // Show/hide previous button
    const prevButton = document.getElementById("prev");
    prevButton.style.display = currentQuestion === 0 ? "none" : "block";
  
    const answerInput = document.getElementById("answer");
    const nextButton = document.getElementById("next");
  
    answerInput.addEventListener("input", () => {
      nextButton.disabled = answerInput.value.trim() === ''; // Disable the button if the input is empty
    });
  }
  
  function showResult() {
    questionContainer.style.display = "none"; // Hide the question container
    resultContainer.style.display = "block";
    resultContainer.innerHTML = `<div class="score text-center mt-5"><h3>Score:</h3><p>${score}/${selectedQuestions.length}</p></div>
    <button id="tryAgain" class="btn btn-primary mt-5 float-start">Try Again</button>
    <a href="quiz1.2.html" class="float-end">
    <button class="btn btn-primary mt-5 float-end">Proceed</button>
    </a>`;
    
    const tryAgainButton = document.getElementById("tryAgain");
tryAgainButton.addEventListener("click", () => {
  // Reset the quiz and shuffle questions again
  currentQuestion = 0;
  score = 0;
  shuffleArray(selectedQuestions);
  displayQuestion();
  resultContainer.style.display = "none"; // Hide the result screen
});

    
    const proceedButton = document.getElementById("proceed");
    proceedButton.addEventListener("click", () => {
      // Handle what happens when the "Proceed" button is clicked
      // You can navigate to the next part of your application or perform any desired action.
    });
  }
  
  
  function checkAnswer() {
    const userAnswer = document.getElementById("answer").value;
    if (userAnswer.trim().toLowerCase() === selectedQuestions[currentQuestion].answer.toLowerCase()) {
      score++;
    }
    currentQuestion++;
    displayQuestion();
  }
  
  startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    displayQuestion();
  });
  
  // Handle user clicks
  quizContainer.addEventListener("click", (event) => {
    if (event.target.id === "submit") {
      checkAnswer();
    }
    // Handle "Next" and "Previous" button clicks if needed
    if (event.target.id === "next") {
      currentQuestion++;
      displayQuestion();
    }
    if (event.target.id === "prev") {
      currentQuestion--;
      displayQuestion();
    }
  });
  