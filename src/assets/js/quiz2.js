const quizData = [
    {
      question: "This type of mining involves moving huge amounts of Earth to access ore.",
      answer: "Surface Mining",
    },
    {
      question: "These methods utilized wells to access material values located under the earth.",
      answer: "Borehole Extraction",
    },
    {
      question: "It is a type of placer mining that is known to extract gold in a traditional way which utilizes a pan and water.",
      answer: "Panning",
    },
    {
      question: "Sand, gravel, and granite are examples of what minerals?",
      answer: "Nonmetallic",
    },
    {
      question: "It is a placer mining method where gravel and water are channeled through an inclined sluice box w/riffles, separating heavy minerals from lighter ones.",
      answer: "Sluicing",
    },
    {
      question: "What is the two methods of Aqueous Extraction?",
      answer: "Placer and Solution Mining",
    },
    {
      question: "These methods used chemical extraction of metals of minerals from deposits or mined material. ",
      answer: "Leaching Methods",
    },
    {
      question: "What method that is used to bring up underwater mineral deposit?",
      answer: "Dredge Mining",
    },
    {
      question: "It is a leaching process that occurs at the mineral site, using boreholes or ore in place. ",
      answer: "In situ leaching",
    },
    {
      question: "It is a leaching process that takes place in previously mined areas, where lixiviant seeps through broken ore. ",
      answer: "Heap Leaching/Dump Leaching",
    },
  ];
  
  const questionsElement = document.getElementById("questions");
  const submitButton = document.getElementById("submit");
  const resultElement = document.getElementById("result");
  
  // Initialize the quiz
  function initQuiz() {
    shuffleArray(quizData); // Shuffle the questions
    displayQuestions();
    submitButton.addEventListener("click", showScore);
  
    // Disable the submit button initially
    submitButton.disabled = true;
  
    // Add event listeners to the answer input fields to enable/disable the submit button
    const answerElements = document.querySelectorAll(".answer");
    answerElements.forEach((answerElement) => {
      answerElement.addEventListener("input", checkInputs);
    });
  }
  
  // Shuffle an array in a random order
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  // Display all the questions
  function displayQuestions() {
    let questionsHTML = "";
    quizData.forEach((quizItem, index) => {
      questionsHTML += `
        <div class="row mb-3 mt-5">
          <div class="col-lg-7">
            <p><strong>Question ${index + 1}:</strong> <br /> ${quizItem.question}</p>
          </div>
          <div class="col-lg-5 mt-3">
            <input type="text" data-index="${index}" class="form-control answer" placeholder="Answer">
          </div>
        </div>
        <hr/>
      `;
    });
    questionsElement.innerHTML = questionsHTML;
  }
  
  // Function to enable the submit button if all input fields are filled
  function checkInputs() {
    const answerElements = document.querySelectorAll(".answer");
    const allFilled = Array.from(answerElements).every((element) => element.value.trim() !== "");
  
    submitButton.disabled = !allFilled;
  }
  
  // Show the score and hide questions and the submit button
  function showScore(event) {
    event.preventDefault();
    const answerElements = document.querySelectorAll(".answer");
    let correctCount = 0; // Count of correct answers
  
    answerElements.forEach((answerElement) => {
      const index = answerElement.getAttribute("data-index");
      const userAnswer = answerElement.value.trim();
      const correctAnswer = quizData[index].answer;
  
      if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        correctCount++;
      }
    });
  
    const totalQuestions = quizData.length;
    const userScore = correctCount; // Number of correct answers
  
    let alertClass = "alert-info"; // Default alert class
  
    if (userScore === 7 >= userScore === 10) {
      alertClass = "alert-success"; // Change to success for scores 4 or 5
    } else if (userScore === 4 >= userScore === 6) {
      alertClass = "alert-warning"; // Change to warning for scores 1 or 2
    } else if (userScore === 1 >= userScore === 3) {
      alertClass = "alert-info"; // Change to warning for scores 1 or 2
    } else if (userScore === 0) {
      alertClass = "alert-danger"; // Change to danger for score 0
    }
  
    resultElement.innerHTML = `
      <div class="alert ${alertClass} text-center">
        <h3>Your Score: ${userScore}/${totalQuestions}</h3>
        <a class="btn btn-primary mx-3 mt-3" href="quiz2.html">Try Again</a>
        <a class="btn btn-primary mx 3 mt-3" href="dragdrop1.html">Proceed</a>
      </div>`;
  
    // Hide the questions and submit button
    questionsElement.style.display = "none";
    submitButton.style.display = "none";
  }
  
  
  // Start the quiz
  initQuiz();
  