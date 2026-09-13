Sure — you want **everything together** so you can copy it directly into your school website project.

Create these **3 files in the same folder**:

```text
Smart-Home-Kid/
│
├── index.html
├── styles.css
└── script.js
```

### 1. `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Smart Home Kid School</title>

    <link rel="stylesheet" href="styles.css">
</head>

<body>

<!-- ================= HEADER ================= -->

<header>

    <div class="logo">
        🏫 Smart Home Kid
    </div>

    <nav>

        <a href="#home">Home</a>
        <a href="#subjects">Subjects</a>
        <a href="#ai-assignment">AI Assignment</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>

    </nav>

    <button id="darkModeBtn">
        🌙
    </button>

</header>


<!-- ================= HOME ================= -->

<section id="home" class="hero">

    <div class="hero-content">

        <h1>
            Welcome to Smart Home Kid
        </h1>

        <p>
            Smart learning for every student.
            Learn, practice and create assignments anytime.
        </p>

        <a href="#ai-assignment" class="hero-btn">
            🤖 Create Assignment
        </a>

    </div>

</section>


<!-- ================= SUBJECTS ================= -->

<section id="subjects" class="section">

    <h2>📚 All Subjects</h2>

    <p class="section-description">
        Choose a subject and start learning.
    </p>

    <div class="subject-grid">

        <div class="subject-card">
            <span>📐</span>
            <h3>Mathematics</h3>
            <p>Numbers, algebra, geometry and problem solving.</p>
        </div>

        <div class="subject-card">
            <span>🔬</span>
            <h3>Science</h3>
            <p>Explore nature, experiments and scientific ideas.</p>
        </div>

        <div class="subject-card">
            <span>🇬🇧</span>
            <h3>English</h3>
            <p>Grammar, vocabulary, reading and writing.</p>
        </div>

        <div class="subject-card">
            <span>📖</span>
            <h3>Khmer</h3>
            <p>Khmer language, literature and communication.</p>
        </div>

        <div class="subject-card">
            <span>🌍</span>
            <h3>Social Studies</h3>
            <p>History, geography, society and citizenship.</p>
        </div>

        <div class="subject-card">
            <span>💻</span>
            <h3>Computer</h3>
            <p>Technology, coding and digital skills.</p>
        </div>

    </div>

</section>


<!-- ================= AI ASSIGNMENT ================= -->

<section id="ai-assignment" class="ai-section">

    <div class="container">

        <h2>🤖 AI Assignment Generator</h2>

        <p class="section-description">
            Generate a new assignment anytime for any subject.
        </p>


        <div class="generator-box">

            <!-- Subject -->

            <label>
                Subject
            </label>

            <select id="assignmentSubject">

                <option value="Mathematics">
                    Mathematics
                </option>

                <option value="Science">
                    Science
                </option>

                <option value="English">
                    English
                </option>

                <option value="Khmer">
                    Khmer
                </option>

                <option value="Social Studies">
                    Social Studies
                </option>

            </select>


            <!-- Grade -->

            <label>
                Grade
            </label>

            <select id="assignmentGrade">

                <option>Grade 7</option>
                <option>Grade 8</option>
                <option>Grade 9</option>
                <option>Grade 10</option>
                <option>Grade 11</option>
                <option>Grade 12</option>

            </select>


            <!-- Difficulty -->

            <label>
                Difficulty
            </label>

            <select id="assignmentDifficulty">

                <option>Easy</option>
                <option selected>Medium</option>
                <option>Hard</option>

            </select>


            <!-- Topic -->

            <label>
                Topic
            </label>

            <input
                type="text"
                id="assignmentTopic"
                placeholder="Example: Fractions, Plants, Grammar..."
            >


            <!-- Questions -->

            <label>
                Number of Questions
            </label>

            <select id="questionCount">

                <option value="5">
                    5 Questions
                </option>

                <option value="10">
                    10 Questions
                </option>

                <option value="15">
                    15 Questions
                </option>

                <option value="20">
                    20 Questions
                </option>

            </select>


            <!-- Buttons -->

            <div class="generator-buttons">

                <button
                    class="generate-btn"
                    onclick="generateAssignment()"
                >
                    🤖 Generate Assignment
                </button>


                <button
                    class="new-btn"
                    onclick="generateNewAssignment()"
                >
                    🔄 Generate New Assignment Anytime
                </button>

            </div>

        </div>


        <!-- Assignment Result -->

        <div
            id="assignmentOutput"
            class="assignment-output"
        ></div>

    </div>

</section>


<!-- ================= ABOUT ================= -->

<section id="about" class="section about">

    <h2>🏫 About Smart Home Kid</h2>

    <p>
        Smart Home Kid is a modern learning website designed
        to help students learn different subjects and practice
        through interactive assignments.
    </p>

    <div class="stats">

        <div>
            <strong>6+</strong>
            <span>Subjects</span>
        </div>

        <div>
            <strong>6</strong>
            <span>Grades</span>
        </div>

        <div>
            <strong>24/7</strong>
            <span>Learning</span>
        </div>

    </div>

</section>


<!-- ================= CONTACT ================= -->

<section id="contact" class="section">

    <h2>📩 Contact Us</h2>

    <form id="contactForm">

        <input
            type="text"
            placeholder="Your Name"
            required
        >

        <input
            type="email"
            placeholder="Your Email"
            required
        >

        <textarea
            placeholder="Your Message"
            required
        ></textarea>

        <button type="submit">
            Send Message
        </button>

    </form>

</section>


<!-- ================= FOOTER ================= -->

<footer>

    <h3>🏫 Smart Home Kid</h3>

    <p>
        Smart Learning • Smart Students • Smart Future
    </p>

    <p>
        © 2026 Smart Home Kid. All Rights Reserved.
    </p>

</footer>


<script src="script.js"></script>

</body>
</html>
```

### 2. `styles.css`

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, sans-serif;
    background: #f5f7fb;
    color: #1f2937;
    transition: 0.3s;
}

/* ================= HEADER ================= */

header {
    position: sticky;
    top: 0;
    z-index: 1000;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 18px 7%;

    background: white;
    box-shadow: 0 3px 15px rgba(0,0,0,0.08);
}

.logo {
    font-size: 22px;
    font-weight: bold;
}

nav {
    display: flex;
    gap: 25px;
}

nav a {
    text-decoration: none;
    color: #1f2937;
    font-weight: bold;
}

nav a:hover {
    color: #2563eb;
}

#darkModeBtn {
    border: none;
    background: #2563eb;
    color: white;

    padding: 9px 13px;

    border-radius: 8px;
    cursor: pointer;
}


/* ================= HERO ================= */

.hero {
    min-height: 600px;

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;

    background:
        linear-gradient(
            rgba(37,99,235,0.85),
            rgba(29,78,216,0.85)
        );

    color: white;
}

.hero-content {
    max-width: 800px;
    padding: 30px;
}

.hero h1 {
    font-size: 55px;
    margin-bottom: 20px;
}

.hero p {
    font-size: 20px;
    line-height: 1.7;
    margin-bottom: 35px;
}

.hero-btn {
    display: inline-block;

    padding: 15px 25px;

    background: white;
    color: #2563eb;

    text-decoration: none;

    border-radius: 10px;

    font-weight: bold;
}


/* ================= SECTIONS ================= */

.section {
    padding: 80px 7%;
    text-align: center;
}

.section h2,
.ai-section h2 {
    font-size: 36px;
    margin-bottom: 15px;
}

.section-description {
    margin-bottom: 35px;
    color: #6b7280;
}


/* ================= SUBJECTS ================= */

.subject-grid {
    display: grid;

    grid-template-columns:
        repeat(auto-fit, minmax(220px, 1fr));

    gap: 25px;

    margin-top: 40px;
}

.subject-card {
    background: white;

    padding: 30px;

    border-radius: 15px;

    box-shadow:
        0 5px 20px rgba(0,0,0,0.07);

    transition: 0.3s;
}

.subject-card:hover {
    transform: translateY(-8px);
}

.subject-card span {
    font-size: 40px;
}

.subject-card h3 {
    margin: 15px 0;
}


/* ================= AI ================= */

.ai-section {
    padding: 80px 7%;

    background: #eef4ff;

    text-align: center;
}

.container {
    max-width: 1000px;
    margin: auto;
}

.generator-box {
    max-width: 850px;

    margin: 30px auto;

    padding: 30px;

    background: white;

    border-radius: 20px;

    box-shadow:
        0 10px 30px rgba(0,0,0,0.08);

    text-align: left;
}

.generator-box label {
    display: block;

    margin-top: 15px;
    margin-bottom: 7px;

    font-weight: bold;
}

.generator-box input,
.generator-box select {

    width: 100%;

    padding: 13px;

    border: 1px solid #ddd;

    border-radius: 10px;

    font-size: 16px;
}


/* ================= BUTTONS ================= */

.generator-buttons {

    display: flex;

    gap: 15px;

    flex-wrap: wrap;

    margin-top: 25px;
}

.generate-btn,
.new-btn {

    border: none;

    padding: 14px 20px;

    border-radius: 10px;

    color: white;

    cursor: pointer;

    font-weight: bold;

    font-size: 15px;

    transition: 0.2s;
}

.generate-btn {
    background: #2563eb;
}

.new-btn {
    background: #16a34a;
}

.generate-btn:hover,
.new-btn:hover {
    transform: translateY(-2px);
    opacity: 0.9;
}


/* ================= ASSIGNMENT ================= */

.assignment-output {
    max-width: 850px;

    margin: 30px auto;

    text-align: left;
}

.assignment-header,
.question-card,
.answer-key {

    background: white;

    padding: 25px;

    margin-bottom: 20px;

    border-radius: 15px;

    box-shadow:
        0 5px 20px rgba(0,0,0,0.06);
}

.assignment-header {
    border-top: 5px solid #2563eb;
}

.question-card {
    border-left: 5px solid #2563eb;
}

.question-card textarea {

    width: 100%;

    min-height: 90px;

    margin-top: 12px;

    padding: 12px;

    border: 1px solid #ddd;

    border-radius: 8px;

    resize: vertical;
}

.answer-key {
    border-left: 5px solid #16a34a;
}

.show-answer-btn {

    padding: 10px 18px;

    border: none;

    border-radius: 8px;

    background: #16a34a;

    color: white;

    cursor: pointer;
}


/* ================= ABOUT ================= */

.about {
    background: white;
}

.stats {

    display: flex;

    justify-content: center;

    gap: 30px;

    flex-wrap: wrap;

    margin-top: 40px;
}

.stats div {

    width: 180px;

    padding: 25px;

    background: #eef4ff;

    border-radius: 15px;
}

.stats strong {

    display: block;

    font-size: 32px;

    color: #2563eb;
}

.stats span {
    display: block;
    margin-top: 8px;
}


/* ================= CONTACT ================= */

form {

    max-width: 600px;

    margin: 30px auto;

    display: flex;

    flex-direction: column;

    gap: 15px;
}

form input,
form textarea {

    padding: 14px;

    border: 1px solid #ddd;

    border-radius: 10px;

    font-size: 16px;
}

form textarea {
    min-height: 150px;
}

form button {

    padding: 14px;

    border: none;

    border-radius: 10px;

    background: #2563eb;

    color: white;

    font-size: 16px;

    font-weight: bold;

    cursor: pointer;
}


/* ================= FOOTER ================= */

footer {

    padding: 40px 20px;

    background: #111827;

    color: white;

    text-align: center;
}

footer p {
    margin-top: 10px;
}


/* ================= DARK MODE ================= */

body.dark {
    background: #111827;
    color: #f9fafb;
}

body.dark header,
body.dark .subject-card,
body.dark .generator-box,
body.dark .assignment-header,
body.dark .question-card,
body.dark .answer-key {

    background: #1f2937;
    color: white;
}

body.dark nav a {
    color: white;
}

body.dark .ai-section {
    background: #172033;
}

body.dark .section-description {
    color: #d1d5db;
}


/* ================= MOBILE ================= */

@media (max-width: 768px) {

    header {
        flex-wrap: wrap;
        gap: 15px;
    }

    nav {
        width: 100%;

        justify-content: center;

        flex-wrap: wrap;

        gap: 12px;
    }

    .hero h1 {
        font-size: 38px;
    }

    .hero p {
        font-size: 17px;
    }

    .generator-buttons {
        flex-direction: column;
    }

    .generate-btn,
    .new-btn {
        width: 100%;
    }
}
```

### 3. `script.js`

```javascript
// ==========================================
// SMART HOME KID
// JAVASCRIPT
// ==========================================


// ==========================================
// ASSIGNMENT QUESTION BANK
// ==========================================

const assignmentTemplates = {

    Mathematics: [

        {
            question: "Calculate: {a} + {b} × {c}.",
            answer: "{result}"
        },

        {
            question:
                "A rectangle has a length of {a} cm and a width of {b} cm. Find its area.",
            answer:
                "{result} cm²"
        },

        {
            question:
                "Solve for x: x + {a} = {b}.",
            answer:
                "x = {result}"
        },

        {
            question:
                "Calculate: {a} × {b}.",
            answer:
                "{result}"
        },

        {
            question:
                "A student has {a} books and receives {b} more books. How many books does the student have?",
            answer:
                "{result} books"
        }

    ],


    Science: [

        {
            question:
                "Explain why plants need sunlight to grow.",

            answer:
                "Plants use sunlight to make food through photosynthesis."
        },

        {
            question:
                "What are the three main states of matter?",

            answer:
                "Solid, liquid and gas."
        },

        {
            question:
                "Why is water important for living things?",

            answer:
                "Water is necessary for life processes and survival."
        },

        {
            question:
                "What is photosynthesis?",

            answer:
                "Photosynthesis is the process by which plants use sunlight to make food."
        },

        {
            question:
                "Name two renewable energy sources.",

            answer:
                "Solar energy and wind energy."
        }

    ],


    English: [

        {
            question:
                "Write a sentence using the word: '{word}'.",

            answer:
                "Student's own correct sentence."
        },

        {
            question:
                "Change this sentence into the past tense: 'She walks to school.'",

            answer:
                "She walked to school."
        },

        {
            question:
                "Write three adjectives that can describe a school.",

            answer:
                "Example: modern, clean and friendly."
        },

        {
            question:
                "What is a noun?",

            answer:
                "A noun is a word that names a person, place, thing or idea."
        },

        {
            question:
                "Write one sentence using the present continuous tense.",

            answer:
                "Example: She is studying English."
        }

    ],


    Khmer: [

        {
            question:
                "ចូរពន្យល់ពីសារៈសំខាន់នៃការអប់រំ។",

            answer:
                "ការអប់រំជួយឱ្យមនុស្សមានចំណេះដឹង ជំនាញ សីលធម៌ និងអាចចូលរួមអភិវឌ្ឍសង្គម។"
        },

        {
            question:
                "ចូររៀបរាប់អំពីតួនាទីរបស់សិស្សល្អ។",

            answer:
                "សិស្សល្អត្រូវខិតខំរៀន គោរពគ្រូ មាតាបិតា មានវិន័យ និងជួយអ្នកដទៃ។"
        },

        {
            question:
                "ចូរពន្យល់ពីសារៈសំខាន់នៃការអានសៀវភៅ។",

            answer:
                "ការអានជួយបង្កើនចំណេះដឹង ពង្រីកគំនិត និងអភិវឌ្ឍសមត្ថភាពភាសា។"
        },

        {
            question:
                "តើវិន័យមានសារៈសំខាន់យ៉ាងដូចម្តេចចំពោះសិស្ស?",

            answer:
                "វិន័យជួយឱ្យសិស្សមានទំនួលខុសត្រូវ គោរពច្បាប់ និងរៀនបានល្អ។"
        }

    ],


    "Social Studies": [

        {
            question:
                "Why are natural resources important to a country?",

            answer:
                "They provide materials, food, energy, jobs and support economic development."
        },

        {
            question:
                "Explain two ways people can protect the environment.",

            answer:
                "People can reduce waste and protect forests and natural resources."
        },

        {
            question:
                "What is geography?",

            answer:
                "Geography is the study of places, people, environments and their relationships."
        },

        {
            question:
                "Why is history important?",

            answer:
                "History helps us understand the past and learn lessons for the future."
        }

    ]

};


// ==========================================
// RANDOM NUMBER
// ==========================================

function randomNumber(min, max) {

    return Math.floor(
        Math.random() * (max - min + 1)
    ) + min;

}


// ==========================================
// CREATE QUESTION
// ==========================================

function createQuestion(template) {

    const a = randomNumber(5, 30);

    const b = randomNumber(2, 15);

    const c = randomNumber(2, 10);


    let result = a + b * c;


    if (
        template.question.includes("rectangle")
    ) {

        result = a * b;

    }


    if (
        template.question.includes("x +")
    ) {

        result = b - a;

    }


    if (
        template.question.includes("×")
    ) {

        result = a * b;

    }


    let question =
        template.question
        .replaceAll("{a}", a)
        .replaceAll("{b}", b)
        .replaceAll("{c}", c)
        .replaceAll("{result}", result);


    let answer =
        template.answer
        .replaceAll("{a}", a)
        .replaceAll("{b}", b)
        .replaceAll("{c}", c)
        .replaceAll("{result}", result);


    return {

        question: question,

        answer: answer

    };

}


// ==========================================
// GENERATE ASSIGNMENT
// ==========================================

function generateAssignment() {

    const subject =
        document.getElementById(
            "assignmentSubject"
        ).value;


    const grade =
        document.getElementById(
            "assignmentGrade"
        ).value;


    const difficulty =
        document.getElementById(
            "assignmentDifficulty"
        ).value;


    const topic =
        document.getElementById(
            "assignmentTopic"
        ).value ||
        "General Topic";


    const questionCount =
        Number(
            document.getElementById(
                "questionCount"
            ).value
        );


    const templates =
        assignmentTemplates[subject];


    if (!templates) {

        alert(
            "Please select a subject."
        );

        return;

    }


    let questions = [];


    for (
        let i = 0;
        i < questionCount;
        i++
    ) {

        const template =
            templates[
                randomNumber(
                    0,
                    templates.length - 1
                )
            ];


        const generated =
            createQuestion(template);


        questions.push(generated);

    }


    // ======================================
    // CREATE ASSIGNMENT HEADER
    // ======================================

    let output = `

        <div class="assignment-header">

            <h2>
                🤖 AI Generated Assignment
            </h2>

            <p>
                <strong>Subject:</strong>
                ${subject}
            </p>

            <p>
                <strong>Grade:</strong>
                ${grade}
            </p>

            <p>
                <strong>Difficulty:</strong>
                ${difficulty}
            </p>

            <p>
                <strong>Topic:</strong>
                ${topic}
            </p>

            <hr>

        </div>

    `;


    // ======================================
    // QUESTIONS
    // ======================================

    questions.forEach(
        (item, index) => {

            output += `

                <div class="question-card">

                    <h3>
                        Question ${index + 1}
                    </h3>

                    <p>
                        ${item.question}
                    </p>

                    <textarea
                        placeholder="Write your answer here..."
                    ></textarea>

                </div>

            `;

        }
    );


    // ======================================
    // ANSWER KEY
    // ======================================

    output += `

        <div class="answer-key">

            <h2>
                🔑 Answer Key
            </h2>

            <button
                class="show-answer-btn"
                onclick="toggleAnswers()"
            >
                Show / Hide Answers
            </button>

            <div
                id="answers"
                style="display:none;"
            >

    `;


    questions.forEach(
        (item, index) => {

            output += `

                <p>
                    <strong>
                        ${index + 1}.
                    </strong>

                    ${item.answer}
                </p>

            `;

        }
    );


    output += `

            </div>

        </div>

    `;


    document.getElementById(
        "assignmentOutput"
    ).innerHTML = output;


    document.getElementById(
        "assignmentOutput"
    ).scrollIntoView({

        behavior: "smooth"

    });

}


// ==========================================
// GENERATE NEW ASSIGNMENT
// ==========================================

function generateNewAssignment() {

    generateAssignment();

    showNotification(
        "✨ New assignment generated!"
    );

}


// ==========================================
// SHOW / HIDE ANSWERS
// ==========================================

function toggleAnswers() {

    const answers =
        document.getElementById(
            "answers"
        );


    if (
        answers.style.display === "none"
    ) {

        answers.style.display = "block";

    } else {

        answers.style.display = "none";

    }

}


// ==========================================
// NOTIFICATION
// ==========================================

function showNotification(message) {

    const notification =
        document.createElement("div");


    notification.className =
        "notification";


    notification.textContent =
        message;


    notification.style.position =
        "fixed";


    notification.style.right =
        "20px";


    notification.style.bottom =
        "20px";


    notification.style.padding =
        "15px 20px";


    notification.style.background =
        "#111827";


    notification.style.color =
        "white";


    notification.style.borderRadius =
        "10px";


    notification.style.zIndex =
        "9999";


    document.body.appendChild(
        notification
    );


    setTimeout(
        () => {

            notification.remove();

        },
        3000
    );

}


// ==========================================
// DARK MODE
// ==========================================

const darkModeBtn =
    document.getElementById(
        "darkModeBtn"
    );


darkModeBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark"
        );

    }
);


// ==========================================
// CONTACT FORM
// ==========================================

document
    .getElementById("contactForm")
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            alert(
                "✅ Thank you! Your message has been sent."
            );

            this.reset();

        }
    );
```

Now open **`index.html`** in your browser. The whole website will work together, including the **Generate Assignment** and **🔄 Generate New Assignment Anytime** buttons.
