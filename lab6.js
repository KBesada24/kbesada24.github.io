const fetchButton = document.getElementById("fetchButton");
const factsTable = document.querySelector("#factsTable tbody");
const catImage = document.getElementById("catImage");

fetchButton.addEventListener("click", () => {
  fetch("https://brianobruno.github.io/cats.json")
    .then((response) => response.json())
    .then((data) => {
      const sortedFacts = data.facts.sort((a, b) => a.factId - b.factId);

      factsTable.innerHTML = ""; // Clear existing table data

      sortedFacts.forEach((fact) => {
        const row = factsTable.insertRow();
        const idCell = row.insertCell();
        const factCell = row.insertCell();
        idCell.textContent = fact.factId;
        factCell.textContent = fact.text;
      });

      catImage.src = data.catPhoto; // Update the image source
    });
});
