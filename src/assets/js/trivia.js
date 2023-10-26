const trivias = [
    "that the Philippines is the fifth most mineral-rich country in the world for gold, nickel, copper, and chromite.",
    "all the regions (except NCR and ARMM) in the country allow mining operations.",
    "that Carmen Copper Mine in Cebu was the largest surface mine in the Philippines, producing approximately 20.15 million metric tons per annum.",
    "Taganito Mine located in Surigao del Norte was the third-largest mine.",
    "that the world's largest open-pit mine is the Bingham Canyon in Utah, the United States, with more than 1.2 km depth and approximately 4 km wide.",
    "Do you know that the Nickel Capital of the Philippines is in Caraga due to its vast nickel deposits. The region accounts for a significant portion of the country's nickel production, which is a crucial component in stainless steel and other industries.",
    "Surigao del Norte is considered as the mining hub of Caraga.",
    "In 2022, mining companies in CARAGA were able to contribute 9 percent share to the Gross Regional Domestic Products in the region in the amount of PHP27.36 billion.",
    "Mining companies operating in CARAGA covered around 50,130.93 hectares or 2.33 percent of the 2,145,835 hectares of the total land area in the Caraga Region.",
    "Dynamite was invented in 1866 and was the most important advance used mainly for demolition and mining.",
    "Pyrite is an iron sulfide that the common mineral mistaken for gold or also known as “fool's gold because of its pale brass-yellow hue.",
    "The average slope of an open-pit mine is about 45 degrees.",
    "Conveyors are the lowest cost method of handling bulk materials.",
    "The largest terrestrial vehicle ever recorded in human history was the Bagger 293, which is a bucket-wheel excavator that is a continuous digging machine in large-scale open-pit mining operations.",
    "An increase in confining pressure causes a decrease in the volume of rocks but an increase in the density.",
  ];

  const triviaCard = document.getElementById("trivia-card");
  const triviaParagraph = document.getElementById("trivia");

  function getRandomTrivia() {
    const randomIndex = Math.floor(Math.random() * trivias.length);
    return trivias[randomIndex];
  }

  function displayRandomTrivia() {
    const randomTrivia = getRandomTrivia();
    triviaParagraph.textContent = randomTrivia;
  }

  displayRandomTrivia();

  setInterval(displayRandomTrivia, 5000);