const characters = [
    {
        id: 1,
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Johnny_Galecki_by_Gage_Skidmore.jpg",
        name: "Leonard Leakey Hofstadter",
        job: "Experimental Physicist",
        description: "Shares an apartment with colleague and best friend Dr. Sheldon Cooper. For his portrayal, Galecki was nominated for a Primetime Emmy Award and a Golden Globe Award in 2011."
    },
    {
        id: 2,
        image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Jim_Parsons_at_PaleyFest_2013.jpg",
        name: "Sheldon Lee Cooper",
        job: "Theoretical Physicist",
        description: "Senior theoretical physicist at The California Institute of Technology (Caltech), and for the first ten seasons of The Big Bang Theory shares an apartment with his colleague and best friend, Leonard Hofstadter; they are also friends and coworkers with Howard Wolowitz and Raj Koothrappali. In season 10, Sheldon moves across the hall with his girlfriend Amy Farrah Fowler."
    },
    {
        id: 3,
        image: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Kaley_Cuoco_by_Gage_Skidmore.jpg",
        name: "Penny Hofstadter",
        job: "Salesperson",
        description: "She is the primary female character in the series, befriending her across-the-hall neighbors Leonard Hofstadter and Sheldon Cooper. Penny's lack of advanced education sets her apart from the group, but her outgoing personality and social aptitude drastically contrasts with the personalities of the primary male characters in the series, so she is considered one of them."
    },
    {
        id: 4,
        image: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Simon_Helberg_at_PaleyFest_2013.jpg",
        name: "Howard Joel Wolowitz",
        job: "Aerospace Engineer",
        description: "Is a fictional character on the CBS television series The Big Bang Theory, portrayed by actor Simon Helberg. Among the four main male characters in the show, Howard is distinctive for being an engineer rather than a physicist and lacking a PhD."
    },
    {
        id: 5,
        image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Kunal_Nayyar_by_Gage_Skidmore.jpg",
        name: "Rajesh Raj Ramayan Koothrappali",
        job: "Astrophysicist",
        description:  "He is one of the four characters, along with Howard Wolowitz, Sheldon Cooper, and Leonard Hofstadter, to appear in every episode of The Big Bang Theory. Raj is based on a computer programmer that the show's co-creator, Bill Prady, knew back when he himself was a programmer."
    }
];
let image = document.getElementById('image');
let name = document.getElementById('name');
let job = document.getElementById('job');
let description = document.getElementById('description');

let previousButton = document.getElementById('previousButton');
let nextButton = document.getElementById('nextButton');
let randomButton = document.getElementById('randomButton');

let currentItem = Math.floor(Math.random() * characters.length);

function getCharacter() {
    let character = characters[currentItem];
    image.src = character.image;
    name.textContent = character.name;
    job.textContent = character.job;
    description.textContent = character.description;
};

previousButton.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0) {
        currentItem = characters.length - 1;
    }
    getCharacter();
});

nextButton.addEventListener("click", function(){
    currentItem++;
    if(currentItem > characters.length - 1) {
        currentItem = 0;
    }
    getCharacter();
});

randomButton.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() * characters.length)
    getCharacter()
})

window.addEventListener("DOMContentLoaded", getCharacter())
