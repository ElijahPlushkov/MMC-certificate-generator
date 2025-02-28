const calculateSt = document.getElementById("calculateSt");
const resultsYle = document.getElementById("resultsYle");
const scoresTableYle = document.getElementById("scoresTableYle");

//STARTERS
calculateSt.addEventListener("click", async function () {
    resultsYle.classList.remove("disabled");
    const startersResults = await calculateStartersResult();

    const {
        listening: { startersListeningScore, startersListeningShields },
        readingWriting: { startersReadingWritingScore, startersReadingWritingShields },
        speaking: { startersSpeakingScore, startersSpeakingShields },
        startersShieldSum,
        startersGrade } = startersResults;

    if (scoresTableYle) {
        const tbody = scoresTableYle.querySelector("tbody");
        const rows = tbody.querySelectorAll("tr");

        rows[0].children[1].textContent = `${startersListeningScore}/20`;
        rows[0].children[2].textContent = `${startersReadingWritingScore}/25`;
        rows[0].children[3].textContent = `${startersSpeakingScore}/15`;
        rows[0].children[4].textContent = startersGrade;

        rows[1].children[1].textContent = `${startersListeningShields}/5`;
        rows[1].children[2].textContent = `${startersReadingWritingShields}/5`;
        rows[1].children[3].textContent = `${startersSpeakingShields}/5`;
        rows[1].children[4].textContent = `${startersShieldSum}/15`;
    }
});

//MOVERS
const calculateMov = document.getElementById("calculateMov");

calculateMov.addEventListener("click", async function () {
    resultsYle.classList.remove("disabled");
    const moversResults = await calculateMoversResult();

    const {
        listening: { moversListeningScore, moversListeningShields },
        readingWriting: { moversReadingWritingScore, moversReadingWritingShields },
        speaking: { moversSpeakingScore, moversSpeakingShields },
        moversShieldSum,
        moversGrade,
    } = moversResults;

    if (scoresTableYle) {
        const tbody = scoresTableYle.querySelector("tbody");
        const rows = tbody.querySelectorAll("tr");

        rows[0].children[1].textContent = `${moversListeningScore}/25`;
        rows[0].children[2].textContent = `${moversReadingWritingScore}/35`;
        rows[0].children[3].textContent = `${moversSpeakingScore}/15`;
        rows[0].children[4].textContent = moversGrade;

        rows[1].children[1].textContent = `${moversListeningShields}/5`;
        rows[1].children[2].textContent = `${moversReadingWritingShields}/5`;
        rows[1].children[3].textContent = `${moversSpeakingShields}/5`;
        rows[1].children[4].textContent = `${moversShieldSum}/15`;
    }
});

//FLYERS
const calculateFl = document.getElementById("calculateFl");

calculateFl.addEventListener("click", async function () {
    resultsYle.classList.remove("disabled");
    const flyersResults = await calculateFlyersResult();

    const {
        listening: { flyersListeningScore, flyersListeningShields },
        readingWriting: { flyersReadingWritingScore, flyersReadingWritingShields },
        speaking: { flyersSpeakingScore, flyersSpeakingShields },
        flyersShieldSum,
        flyersGrade,
    } = flyersResults;

    if (scoresTableYle) {
        const tbody = scoresTableYle.querySelector("tbody");
        const rows = tbody.querySelectorAll("tr");

        rows[0].children[1].textContent = `${flyersListeningScore}/25`;
        rows[0].children[2].textContent = `${flyersReadingWritingScore}/44`;
        rows[0].children[3].textContent = `${flyersSpeakingScore}/15`;
        rows[0].children[4].textContent = flyersGrade;

        rows[1].children[1].textContent = `${flyersListeningShields}/5`;
        rows[1].children[2].textContent = `${flyersReadingWritingShields}/5`;
        rows[1].children[3].textContent = `${flyersSpeakingShields}/5`;
        rows[1].children[4].textContent = `${flyersShieldSum}/15`;
    }
});

//KET
const calculateKet = document.getElementById("calculateKet");
const resultsKet = document.getElementById("resultsKet");
const scoresTableKet = document.getElementById("scoresTableKet");

calculateKet.addEventListener("click", async function () {
    resultsKet.classList.remove("disabled");
    const ketResults = await calculateKetResult();

    const {
        listening: { ketListeningInputValue, listeningScore },
        readingWriting: { ketReadingWritingInputValue, readingWritingScore },
        speaking: { ketSpeakingInputValue, speakingScore },
        ketAverageScore,
        ketGrade, } = ketResults;

    if (scoresTableKet) {
        const tbody = scoresTableKet.querySelector("tbody");
        const rows = tbody.querySelectorAll("tr");

        rows[0].children[1].textContent = `${ketListeningInputValue}/25`;
        rows[0].children[2].textContent = `${ketReadingWritingInputValue}/60`;
        rows[0].children[3].textContent = `${ketSpeakingInputValue}/45`;
        rows[0].children[4].textContent = ketAverageScore;

        rows[1].children[1].textContent = `${listeningScore}/150`;
        rows[1].children[2].textContent = `${readingWritingScore}/150`;
        rows[1].children[3].textContent = `${speakingScore}/150`;
        rows[1].children[4].textContent = ketGrade;
    }
});

//PET
const calculatePet = document.getElementById("calculatePet");
const resultsPet = document.getElementById("resultsPet");
const scoresTablePet = document.getElementById("scoresTablePet");

calculatePet.addEventListener("click", async function () {
    resultsPet.classList.remove("disabled");
    const petResults = await calculatePetResult();

    const {
        listening: { petListeningInputValue, listeningScore },
        reading: { petReadingInputValue, readingScore },
        writing: { petWritingInputValue, writingScore },
        speaking: { petSpeakingInputValue, speakingScore },
        petAverageScore,
        petGrade, } = petResults;

    if (scoresTablePet) {
        const tbody = scoresTablePet.querySelector("tbody");
        const rows = tbody.querySelectorAll("tr");

        rows[0].children[1].textContent = `${petListeningInputValue}/25`;
        rows[0].children[2].textContent = `${petReadingInputValue}/32`;
        rows[0].children[3].textContent = `${petWritingInputValue}/40`;
        rows[0].children[4].textContent = `${petSpeakingInputValue}/30`;
        rows[0].children[5].textContent = petAverageScore;

        rows[1].children[1].textContent = `${listeningScore}/170`;
        rows[1].children[2].textContent = `${readingScore}/170`;
        rows[1].children[3].textContent = `${writingScore}/170`;
        rows[1].children[4].textContent = `${speakingScore}/170`;
        rows[1].children[5].textContent = petGrade;
    }
});

//FCE
const calculateFce = document.getElementById("calculateFce");
const resultsFceCae = document.getElementById("resultsFceCae");
const scoresTableFceCae = document.getElementById("scoresTableFceCae");

calculateFce.addEventListener("click", async function () {
    resultsFceCae.classList.remove("disabled");
    const fceResults = await calculateFceResult();

    const {
        listening: { fceListeningInputValue, listeningScore },
        reading: { fceReadingInputValue, readingScore },
        use: { fceUseInputValue, useScore },
        writing: { fceWritingInputValue, writingScore },
        speaking: { fceSpeakingInputValue, speakingScore },
        fceAverageScore,
        fceGrade, } = fceResults;
    
    if (scoresTableFceCae) {
        const tbody = scoresTableFceCae.querySelector("tbody");
        const rows = tbody.querySelectorAll("tr");

        rows[0].children[1].textContent = `${fceListeningInputValue}/30`;
        rows[0].children[2].textContent = `${fceReadingInputValue}/42`;
        rows[0].children[3].textContent = `${fceUseInputValue}/28`;
        rows[0].children[4].textContent = `${fceWritingInputValue}/40`;
        rows[0].children[5].textContent = `${fceSpeakingInputValue}/60`;
        rows[0].children[6].textContent = fceAverageScore;

        rows[1].children[1].textContent = `${listeningScore}/190`;
        rows[1].children[2].textContent = `${readingScore}/190`;
        rows[1].children[3].textContent = `${useScore}/190`;
        rows[1].children[4].textContent = `${writingScore}/190`;
        rows[1].children[5].textContent = `${speakingScore}/190`;
        rows[1].children[6].textContent = fceGrade;
    }
});

//CAE
const calculateCae = document.getElementById("calculateCae");

calculateCae.addEventListener("click", async function () {
    resultsFceCae.classList.remove("disabled");
    const caeResults = await calculateCaeResult();

    const {
        listening: { caeListeningInputValue, listeningScore },
        reading: { caeReadingInputValue, readingScore },
        use: { caeUseInputValue, useScore },
        writing: { caeWritingInputValue, writingScore },
        speaking: { caeSpeakingInputValue, speakingScore },
        caeAverageScore,
        caeGrade, } = caeResults;
    
    if (scoresTableFceCae) {
        const tbody = scoresTableFceCae.querySelector("tbody");
        const rows = tbody.querySelectorAll("tr");

        rows[0].children[1].textContent = `${caeListeningInputValue}/30`;
        rows[0].children[2].textContent = `${caeReadingInputValue}/50`;
        rows[0].children[3].textContent = `${caeUseInputValue}/28`;
        rows[0].children[4].textContent = `${caeWritingInputValue}/40`;
        rows[0].children[5].textContent = `${caeSpeakingInputValue}/75`;
        rows[0].children[6].textContent = caeAverageScore;

        rows[1].children[1].textContent = `${listeningScore}/210`;
        rows[1].children[2].textContent = `${readingScore}/210`;
        rows[1].children[3].textContent = `${useScore}/210`;
        rows[1].children[4].textContent = `${writingScore}/210`;
        rows[1].children[5].textContent = `${speakingScore}/210`;
        rows[1].children[6].textContent = caeGrade;
    }
});