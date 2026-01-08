let cardsList = document.querySelector(".cards");
let cards = [
  { title: "My secret life", url: "project_1/inner.html" },
  { title: "Hello", url: "project_2/index.html" },
];

// look up what an object in JavaScript is, when you find the syntax for an object, include a title and a url link
// Look up how to push an object to an array

//write the following code to start creating your map:

cards.map((card) => {
  cardsList.innerHTML += `
    <div class = "card_1">
        <img src ="https://cdn.vectorstock.com/i/500p/23/04/kawaii-cat-banner-with-red-yarn-vector-29582304.jpg" alt="project image" />
        <h2>${card.title}</h2>
        <a href ="${card.url}" target="_blank" class="link">View Project</a>
    </div>

`;
});

