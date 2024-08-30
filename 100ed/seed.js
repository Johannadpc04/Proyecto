const mongoose = require('mongoose');
const Question = require('./models/Question'); 
const db = require('./db'); 

const questions = [
    {
        question: "Nombre un género literario",
        answers: [
            { text: "Narrativo", points: 1 },
            { text: "Lírico", points: 2 },
            { text: "Dramático", points: 3 },
            { text: "Épico", points: 4 },
            { text: "Didáctico", points: 5 }
        ]
    },
    {
        question: "Mencione una figura literaria",
        answers: [
            { text: "Metáfora", points: 1 },
            { text: "Símil", points: 2 },
            { text: "Hipérbole", points: 3 },
            { text: "Personificación", points: 4 },
            { text: "Sinestesia", points: 5 }
        ]
    },
    {
        question: "Nombre un autor ecuatoriano",
        answers: [
            { text: "Jorge Icaza", points: 1 },
            { text: "Juan León Mera", points: 2 },
            { text: "Joaquín Gallegos Lara", points: 3 },
            { text: "Alicia Yánez Cossío", points: 4 },
            { text: "Eugenio Espejo", points: 5 }
        ]
    },
    {
        question: "Mencione una obra literaria ecuatoriana",
        answers: [
            { text: "Huasipungo", points: 1 },
            { text: "Cumandá", points: 2 },
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
            { text: "Artículo científico", points: 3 },
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
            { text: "Atmósfera", points: 5 }
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
            { text: "Metáfora", points: 1 },
            { text: "Símil", points: 2 },
            { text: "Metonimia", points: 3 },
            { text: "Sinécdoque", points: 4 },
            { text: "Oxímoron", points: 5 }
        ]
    },
    {
        question: "Mencione un tipo de narración",
        answers: [
            { text: "Cuento", points: 1 },
            { text: "Novela", points: 2 },
            { text: "Leyenda", points: 3 },
            { text: "Fábula", points: 4 },
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
            { text: "Entremés", points: 5 }
        ]
    },
    {
        question: "Mencione un tipo de verso según su métrica",
        answers: [
            { text: "Octosílabo", points: 1 },
            { text: "Endecasílabo", points: 2 },
            { text: "Alejandrino", points: 3 },
            { text: "Heptasílabo", points: 4 },
            { text: "Dodecasílabo", points: 5 }
        ]
    },
    {
        question: "Nombre un recurso estilístico",
        answers: [
            { text: "Aliteración", points: 1 },
            { text: "Anáfora", points: 2 },
            { text: "Epíteto", points: 3 },
            { text: "Hipérbaton", points: 4 },
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
            { text: "Fonético-fonológico", points: 1 },
            { text: "Morfosintáctico", points: 2 },
            { text: "Léxico-semántico", points: 3 },
            { text: "Pragmático", points: 4 },
            { text: "Sociolingüístico", points: 5 }
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
            { text: "Artículo de opinión", points: 2 },
            { text: "Debate", points: 3 },
            { text: "Reseña crítica", points: 4 },
            { text: "Alegato", points: 5 }
        ]
    },
    {
        question: "Mencione una parte de la estructura de un ensayo",
        answers: [
            { text: "Introducción", points: 1 },
            { text: "Desarrollo", points: 2 },
            { text: "Conclusión", points: 3 },
            { text: "Tesis", points: 4 },
            { text: "Argumentos", points: 5 }
        ]
    }
];

async function seedDB() {
    try {
        await Question.deleteMany(); 
        await Question.insertMany(questions);
        console.log("Base de datos poblada con éxito");
    } catch (err) {
        console.error(err);
    } finally {
        mongoose.connection.close();
    }
}

seedDB();
