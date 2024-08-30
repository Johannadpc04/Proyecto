const questions = [
    {
        question: "Nombre un género literario",
        answers: [
            { text: "Narrativo", points: 1 },
            { text: "Lirico", points: 2 },
            { text: "Dramatico", points: 3 },
            { text: "Epico", points: 4 },
            { text: "Didactico", points: 5 }
        ]
    },
    {
        question: "Mencione una figura literaria",
        answers: [
            { text: "Metafora", points: 1 },
            { text: "Simil", points: 2 },
            { text: "Hiperbole", points: 3 },
            { text: "Personificacion", points: 4 },
            { text: "Sinestesia", points: 5 }
        ]
    },
    {
        question: "Nombre un autor ecuatoriano",
        answers: [
            { text: "Jorge Icaza", points: 1 },
            { text: "Juan Leon Mera", points: 2 },
            { text: "Joaquin Gallegos Lara", points: 3 },
            { text: "Alicia Yanez Cossío", points: 4 },
            { text: "Eugenio Espejo", points: 5 }
        ]
    },
    {
        question: "Mencione una obra literaria ecuatoriana",
        answers: [
            { text: "Huasipungo", points: 1 },
            { text: "Cumanda", points: 2 },
            { text: "Las cruces sobre el agua", points: 3 },
            { text: "Polvo y ceniza", points: 4 },
            { text: "El chulla Romero y Flores", points: 5 }
        ]
    },
    {
        question: "Nombre un tipo de narrador",
        answers: [
            { text: "Omnisciente", points: 1 },
            { text: "Protagonista", points: 2 },
            { text: "Testigo", points: 3 },
            { text: "Equisciente", points: 4 },
            { text: "Deficiente", points: 5 }
        ]
    },
    {
        question: "Mencione un movimiento literario",
        answers: [
            { text: "Romanticismo", points: 1 },
            { text: "Realismo", points: 2 },
            { text: "Modernismo", points: 3 },
            { text: "Vanguardismo", points: 4 },
            { text: "Costumbrismo", points: 5 }
        ]
    },
    {
        question: "Nombre un tipo de texto no literario",
        answers: [
            { text: "Noticia", points: 1 },
            { text: "Ensayo", points: 2 },
            { text: "Articulo cientifico", points: 3 },
            { text: "Reseña", points: 4 },
            { text: "Editorial", points: 5 }
        ]
    },
    {
        question: "Mencione un elemento de la narración",
        answers: [
            { text: "Personajes", points: 1 },
            { text: "Tiempo", points: 2 },
            { text: "Espacio", points: 3 },
            { text: "Trama", points: 4 },
            { text: "Atmosfera", points: 5 }
        ]
    },
    {
        question: "Nombre un tipo de rima",
        answers: [
            { text: "Consonante", points: 1 },
            { text: "Asonante", points: 2 },
            { text: "Libre", points: 3 },
            { text: "Interna", points: 4 },
            { text: "Encadenada", points: 5 }
        ]
    },
    {
        question: "Mencione un tipo de estrofa",
        answers: [
            { text: "Cuarteto", points: 1 },
            { text: "Terceto", points: 2 },
            { text: "Soneto", points: 3 },
            { text: "Quintilla", points: 4 },
            { text: "Lira", points: 5 }
        ]
    },
    {
        question: "Nombre un tipo de lenguaje figurado",
        answers: [
            { text: "Metafora", points: 1 },
            { text: "Simil", points: 2 },
            { text: "Metonimia", points: 3 },
            { text: "Sinecdoque", points: 4 },
            { text: "Oximoron", points: 5 }
        ]
    },
    {
        question: "Mencione un tipo de narración",
        answers: [
            { text: "Cuento", points: 1 },
            { text: "Novela", points: 2 },
            { text: "Leyenda", points: 3 },
            { text: "Fabula", points: 4 },
            { text: "Epopeya", points: 5 }
        ]
    },
    {
        question: "Nombre un subgénero dramático",
        answers: [
            { text: "Comedia", points: 1 },
            { text: "Tragedia", points: 2 },
            { text: "Tragicomedia", points: 3 },
            { text: "Auto sacramental", points: 4 },
            { text: "Entremes", points: 5 }
        ]
    },
    {
        question: "Mencione un tipo de verso según su métrica",
        answers: [
            { text: "Octosilabo", points: 1 },
            { text: "Endecasilabo", points: 2 },
            { text: "Alejandrino", points: 3 },
            { text: "Heptasilabo", points: 4 },
            { text: "Dodecasilabo", points: 5 }
        ]
    },
    {
        question: "Nombre un recurso estilístico",
        answers: [
            { text: "Aliteracion", points: 1 },
            { text: "Anafora", points: 2 },
            { text: "Epiteto", points: 3 },
            { text: "Hiperbaton", points: 4 },
            { text: "Pleonasmo", points: 5 }
        ]
    },
    {
        question: "Mencione un tipo de oración compuesta",
        answers: [
            { text: "Coordinada", points: 1 },
            { text: "Subordinada", points: 2 },
            { text: "Yuxtapuesta", points: 3 },
            { text: "Adverbial", points: 4 },
            { text: "Sustantiva", points: 5 }
        ]
    },
    {
        question: "Nombre un nivel de la lengua",
        answers: [
            { text: "Fonetico-fonologico", points: 1 },
            { text: "Morfosintáctico", points: 2 },
            { text: "Lexico-semántico", points: 3 },
            { text: "Pragmatico", points: 4 },
            { text: "Sociolingüistico", points: 5 }
        ]
    },
    {
        question: "Mencione una variedad del español de Ecuador",
        answers: [
            { text: "Costa", points: 1 },
            { text: "Sierra", points: 2 },
            { text: "Oriente", points: 3 },
            { text: "Insular", points: 4 },
            { text: "Fronterizo", points: 5 }
        ]
    },
    {
        question: "Nombre un tipo de texto argumentativo",
        answers: [
            { text: "Ensayo", points: 1 },
            { text: "Articulo de opinion", points: 2 },
            { text: "Debate", points: 3 },
            { text: "Reseña critica", points: 4 },
            { text: "Alegato", points: 5 }
        ]
    },
    {
        question: "Mencione una parte de la estructura de un ensayo",
        answers: [
            { text: "Introduccion", points: 1 },
            { text: "Desarrollo", points: 2 },
            { text: "Conclusion", points: 3 },
            { text: "Tesis", points: 4 },
            { text: "Argumentos", points: 5 }
        ]
    }
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function playSound(soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
}

let currentQuestionIndex = 0;
let team1Score = 0;
let team2Score = 0;
let currentTeam = 1;

let timer; 
let timeLimit = 60; 
let timeLeft; 

function startTimer() {
    timeLeft = timeLimit;
    document.getElementById('timer').textContent = `Tiempo restante: ${timeLeft} segundos`;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = `Tiempo restante: ${timeLeft} segundos`;

        if (timeLeft === 10) {
            playSound('/audio/alarma.mp3');
        }

        if (timeLeft <= 0) {
            clearInterval(timer);
            handleTimeOut();
        }
    }, 1000);
}

function handleTimeOut() {
    alert('¡Se acabó el tiempo!');
    nextQuestion();  
}

function updateQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('current-question-text').textContent = question.question;
    
    for (let i = 1; i <= question.answers.length; i++) {
        const answerElement = document.querySelector(`.answer:nth-child(${i})`);
        answerElement.querySelector('.text').textContent = question.answers[i-1].text;
        answerElement.querySelector('.points').textContent = question.answers[i-1].points;
        answerElement.classList.remove('correct'); // Remover la clase 'correct' para reiniciar el estilo
        answerElement.classList.add('blurred'); // Añadir clase para desenfoque
    }
    clearInterval(timer); 
    startTimer(); 
}

function showMotivationalMessage(isCorrect) {
    const messages = isCorrect ? [
        "¡Excelente trabajo!",
        "¡Sigue así!",
        "¡Eres increíble!",
        "¡Perfecto!",
        "¡Respuesta correcta!"
    ] : [
        "¡No te rindas!",
        "¡Inténtalo de nuevo!",
        "¡Casi lo tienes!",
        "¡No pasa nada, sigue intentando!",
        "¡Puedes hacerlo!"
    ];

    const message = messages[Math.floor(Math.random() * messages.length)];
    alert(message);
}

function createConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.className = 'confetti-container';
    document.body.appendChild(confettiContainer);
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        confettiContainer.appendChild(confetti);
    }
    
    setTimeout(() => {
        confettiContainer.remove();
    }, 3000); 
}

function checkForWin() {
    const winningScore = 100; 

    if (team1Score >= winningScore) {
        alert('¡El equipo 1 ha ganado!');
        resetGame();
    } else if (team2Score >= winningScore) {
        alert('¡El equipo 2 ha ganado!');
        resetGame();
    }
}

function resetGame() {

    team1Score = 0;
    team2Score = 0;
    currentQuestionIndex = 0;
    shuffleArray(questions);
    updateQuestion();
    updateScores();
    updateQuestionCounter();
}

function submitAnswer() {
    const answerInput = document.getElementById('answer-input');
    const answer = answerInput.value.toLowerCase();
    const question = questions[currentQuestionIndex];
    let foundCorrectAnswer = false;
    
    for (let i = 0; i < question.answers.length; i++) {
        if (question.answers[i].text.toLowerCase() === answer) {
            const answerElement = document.querySelector(`.answer:nth-child(${i+1})`);
            answerElement.classList.add('correct'); 
            answerElement.classList.remove('blurred'); 

            if (currentTeam === 1) {
                team1Score += question.answers[i].points;
            } else {
                team2Score += question.answers[i].points;
            }
            
            updateScores();
            showMotivationalMessage(true);
            createConfetti();
            checkForWin();
            foundCorrectAnswer = true;
            break;
        }
    }
    
    if (!foundCorrectAnswer) {
        showMotivationalMessage(false);       
        alert("Respuesta incorrecta. Intenta nuevamente.");
    } else {
        clearInterval(timer);
    }

    answerInput.value = '';
    currentTeam = currentTeam === 1 ? 2 : 1;
}

document.getElementById('answer-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        submitAnswer();
    }
});

function addScore(team, points) {
    const scoreElement = document.getElementById(`team${team}-score`);
    let currentScore = parseInt(scoreElement.textContent);
    currentScore += points;
    scoreElement.textContent = currentScore;
    if (team === 1) {
        team1Score = currentScore;
    } else {
        team2Score = currentScore;
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
        currentQuestionIndex = 0;
    }
    updateQuestion();
    updateQuestionCounter();
}

function previousQuestion() {
    currentQuestionIndex--;
    if (currentQuestionIndex < 0) {
        currentQuestionIndex = questions.length - 1;
    }
    updateQuestion();
    updateQuestionCounter();
}

function spinBonusWheel() {
    const outcomes = [
        { text: "¡Duplica tus puntos!", effect: (team) => { if (team === 1) team1Score *= 2; else team2Score *= 2; } },
        { text: "¡Pierde la mitad de tus puntos!", effect: (team) => { if (team === 1) team1Score = Math.floor(team1Score / 2); else team2Score = Math.floor(team2Score / 2); } },
        { text: "¡Gana 5 puntos extra!", effect: (team) => { if (team === 1) team1Score += 5; else team2Score += 5; } },
        { text: "¡Pierde 3 puntos!", effect: (team) => { if (team === 1) team1Score = Math.max(0, team1Score - 3); else team2Score = Math.max(0, team2Score - 3); } },
        { text: "¡Intercambia puntos con el otro equipo!", effect: () => { [team1Score, team2Score] = [team2Score, team1Score]; } }
    ];

    const outcome = outcomes[Math.floor(Math.random() * outcomes.length)];
    const randomTeam = Math.random() < 0.5 ? 1 : 2;
    
    if (outcome.text === "¡Intercambia puntos con el otro equipo!") {
        outcome.effect();
    } else {
        outcome.effect(randomTeam);
    }
    
    updateScores();
    alert(`Equipo ${randomTeam}: ${outcome.text}`);
}

function getHint() {
    const question = questions[currentQuestionIndex];
    const unansweredHints = question.answers.filter(answer => 
        !document.querySelector(`.answer:nth-child(${question.answers.indexOf(answer) + 1}) .text`).textContent
    );
    
    if (unansweredHints.length > 0) {
        const hint = unansweredHints[Math.floor(Math.random() * unansweredHints.length)];
        alert(`Una de las respuestas empieza con la letra "${hint.text[0].toUpperCase()}"`);
    } else {
        alert("Ya se han revelado todas las respuestas.");
    }
}

function addStrike() {
    const strikesElement = document.getElementById('strikes');
    strikesElement.textContent += 'X';
    if (strikesElement.textContent.length >= 3) {
        strikesElement.textContent = '';
    }
}

function updateQuestionCounter() {
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    document.getElementById('total-questions').textContent = questions.length;
}

function initGame() {
    shuffleArray(questions); 
    updateQuestion();
    updateScores();
    updateQuestionCounter();
}

function updateScores() {
    document.getElementById('team1-score').textContent = team1Score;
    document.getElementById('team2-score').textContent = team2Score;
}

document.addEventListener('DOMContentLoaded', initGame);
document.getElementById('submit-answer').addEventListener('click', submitAnswer);
document.getElementById('next-question').addEventListener('click', nextQuestion);
document.getElementById('previous-question').addEventListener('click', previousQuestion);
document.getElementById('bonus-wheel').addEventListener('click', spinBonusWheel);
document.getElementById('hint').addEventListener('click', getHint);
document.getElementById('sound-llamada').addEventListener('click', () => playSound('audio/llamada.mp3'));
document.getElementById('sound-correcto').addEventListener('click', () => playSound('audio/correcto.mp3'));
document.getElementById('sound-incorrecto').addEventListener('click', () => playSound('audio/incorrecto.mp3'));
document.getElementById('strike-btn').addEventListener('click', addStrike);

document.getElementById('team1-add-5').addEventListener('click', () => addScore(1, 5));
document.getElementById('team1-add-4').addEventListener('click', () => addScore(1, 4));
document.getElementById('team1-add-3').addEventListener('click', () => addScore(1, 3));
document.getElementById('team1-add-2').addEventListener('click', () => addScore(1, 2));
document.getElementById('team1-add-1').addEventListener('click', () => addScore(1, 1));
document.getElementById('team1-subtract').addEventListener('click', () => addScore(1, -1));

document.getElementById('team2-add-5').addEventListener('click', () => addScore(2, 5));
document.getElementById('team2-add-4').addEventListener('click', () => addScore(2, 4));
document.getElementById('team2-add-3').addEventListener('click', () => addScore(2, 3));
document.getElementById('team2-add-2').addEventListener('click', () => addScore(2, 2));
document.getElementById('team2-add-1').addEventListener('click', () => addScore(2, 1));
document.getElementById('team2-subtract').addEventListener('click', () => addScore(2, -1));
