// ================================
// AI ASSIGNMENT GENERATOR
// ================================

const assignmentTemplates = {
  Mathematics: [
    {
      question: "Calculate: {a} + {b} × {c}.",
      answer: "{result}"
    },
    {
      question: "A rectangle has a length of {a} cm and a width of {b} cm. Find its area.",
      answer: "{result} cm²"
    },
    {
      question: "Solve for x: x + {a} = {b}.",
      answer: "x = {result}"
    }
  ],

  Science: [
    {
      question: "Explain why plants need sunlight to grow.",
      answer: "Plants use sunlight to make food through photosynthesis."
    },
    {
      question: "What are the three main states of matter?",
      answer: "Solid, liquid, and gas."
    },
    {
      question: "Why is water important for living things?",
      answer: "Water is necessary for life processes and helps living things survive."
    }
  ],

  English: [
    {
      question: "Write a sentence using the word: '{word}'.",
      answer: "Student's own correct sentence."
    },
    {
      question: "Change this sentence into the past tense: 'She walks to school.'",
      answer: "She walked to school."
    },
    {
      question: "Write three adjectives that can describe a school.",
      answer: "Example: modern, clean, friendly."
    }
  ],

  Khmer: [
    {
      question: "ចូរពន្យល់ពីសារៈសំខាន់នៃការអប់រំ។",
      answer: "ការអប់រំជួយឱ្យមនុស្សមានចំណេះដឹង ជំនាញ សីលធម៌ និងអាចចូលរួមអភិវឌ្ឍសង្គម។"
    },
    {
      question: "ចូររៀបរាប់អំពីតួនាទីរបស់សិស្សល្អ។",
      answer: "សិស្សល្អត្រូវខិតខំរៀន គោរពគ្រូ មាតាបិតា មានវិន័យ និងជួយអ្នកដទៃ។"
    }
  ],

  "Social Studies": [
    {
      question: "Why are natural resources important to a country?",
      answer: "They provide materials, food, energy, jobs, and support economic development."
    },
    {
      question: "Explain two ways people can protect the environment.",
      answer: "Reduce waste and protect forests and natural resources."
    }
  ]
};


// Generate random numbers
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Replace variables in questions
function createQuestion(template) {

  const a = randomNumber(5, 30);
  const b = randomNumber(2, 15);
  const c = randomNumber(2, 10);

  let result = a + b * c;

  if (template.question.includes("rectangle")) {
    result = a * b;
  }

  if (template.question.includes("x +")) {
    result = b - a;
  }

  let question = template.question
    .replaceAll("{a}", a)
    .replaceAll("{b}", b)
    .replaceAll("{c}", c)
    .replaceAll("{result}", result);

  let answer = template.answer
    .replaceAll("{a}", a)
    .replaceAll("{b}", b)
    .replaceAll("{c}", c)
    .replaceAll("{result}", result);

  return {
    question: question,
    answer: answer
  };
}


// ================================
// GENERATE ASSIGNMENT
// ================================

function generateAssignment() {

  const subject =
    document.getElementById("assignmentSubject").value;

  const grade =
    document.getElementById("assignmentGrade").value;

  const difficulty =
    document.getElementById("assignmentDifficulty").value;

  const topic =
    document.getElementById("assignmentTopic").value ||
    "General Topic";

  const questionCount =
    Number(document.getElementById("questionCount").value) || 5;

  const templates = assignmentTemplates[subject];

  if (!templates) {
    alert("Please select a subject.");
    return;
  }

  let questions = [];

  for (let i = 0; i < questionCount; i++) {

    const template =
      templates[randomNumber(0, templates.length - 1)];

    const generated =
      createQuestion(template);

    questions.push(generated);
  }


  // Create assignment title
  let output = `
    <div class="assignment-header">
      <h2>🤖 AI Generated Assignment</h2>

      <p>
        <strong>Subject:</strong> ${subject}
      </p>

      <p>
        <strong>Grade:</strong> ${grade}
      </p>

      <p>
        <strong>Difficulty:</strong> ${difficulty}
      </p>

      <p>
        <strong>Topic:</strong> ${topic}
      </p>

      <hr>
    </div>
  `;


  // Add questions
  output += `<div class="questions">`;

  questions.forEach((item, index) => {

    output += `
      <div class="question-card">

        <h3>Question ${index + 1}</h3>

        <p>${item.question}</p>

        <div class="student-answer">
          <label>Your Answer:</label>

          <textarea
            placeholder="Write your answer here..."
          ></textarea>
        </div>

      </div>
    `;
  });

  output += `</div>`;


  // Answer key
  output += `
    <div class="answer-key">

      <h2>🔑 Answer Key</h2>

      <button
        class="show-answer-btn"
        onclick="toggleAnswers()"
      >
        Show / Hide Answers
      </button>

      <div id="answers" style="display:none;">
  `;

  questions.forEach((item, index) => {

    output += `
      <p>
        <strong>${index + 1}.</strong>
        ${item.answer}
      </p>
    `;

  });

  output += `
      </div>
    </div>
  `;


  document.getElementById("assignmentOutput").innerHTML = output;

  document
    .getElementById("assignmentOutput")
    .scrollIntoView({
      behavior: "smooth"
    });
}


// ================================
// SHOW / HIDE ANSWERS
// ================================

function toggleAnswers() {

  const answers =
    document.getElementById("answers");

  if (answers.style.display === "none") {

    answers.style.display = "block";

  } else {

    answers.style.display = "none";

  }
}


// ================================
// GENERATE NEW ASSIGNMENT ANYTIME
// ================================

function generateNewAssignment() {

  generateAssignment();

  showNotification(
    "✨ New assignment generated successfully!"
  );
}


// ================================
// NOTIFICATION
// ================================

function showNotification(message) {

  const notification =
    document.createElement("div");

  notification.className =
    "notification";

  notification.textContent =
    message;

  document.body.appendChild(notification);

  setTimeout(() => {

    notification.remove();

  }, 3000);
}
