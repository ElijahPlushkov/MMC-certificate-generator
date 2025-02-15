const startersListeningInput = document.getElementById("startersListeningInput");
const startersReadingWritingInput = document.getElementById("startersReadingWritingInput");
const startersSpeakingInput = document.getElementById("startersSpeakingInput");
const startersError = document.getElementById("startersError");
const calculateButton1 = document.getElementById("calculateButton1"); 

function calculateScore(input, thresholds, maxScore) {
    const score = Number(input);

    if (score < 0 || score > maxScore) {
        return null; 
    }

    for (const { threshold, shields } of thresholds) {
        if (score >= threshold) {
            return { result: score, shields };
        }
    }

    return { result: 0, shields: "0" }; 
}

async function calculateStartersResult() {

    startersError.textContent = ""; 
    startersListeningInput.classList.remove("input_error_theme_notion");
    startersReadingWritingInput.classList.remove("input_error_theme_notion");
    startersSpeakingInput.classList.remove("input_error_theme_notion");

    const listeningThresholds = [
        { threshold: 18, shields: "5" },
        { threshold: 16, shields: "4" },
        { threshold: 13, shields: "3" },
        { threshold: 11, shields: "2" },
        { threshold: 1, shields: "1" },
        { threshold: 0, shields: "0" },
    ];

    const readingWritingThresholds = [
        { threshold: 21, shields: "5" },
        { threshold: 19, shields: "4" },
        { threshold: 16, shields: "3" },
        { threshold: 13, shields: "2" },
        { threshold: 1, shields: "1" },
        { threshold: 0, shields: "0" },
    ];

    const speakingThresholds = [
        { threshold: 13, shields: "5" },
        { threshold: 10, shields: "4" },
        { threshold: 7, shields: "3" },
        { threshold: 4, shields: "2" },
        { threshold: 1, shields: "1" },
        { threshold: 0, shields: "0" },
    ];

    const listeningScore = calculateScore(startersListeningInput.value, listeningThresholds, 20);
    if (listeningScore === null || startersListeningInput.value.trim === "") {
        startersError.textContent = "Invalid input for Listening.";
        startersListeningInput.classList.add("input_error_theme_notion");
        return;
    }
    const readingWritingScore = calculateScore(startersReadingWritingInput.value, readingWritingThresholds, 25);
    if (readingWritingScore === null || startersReadingWritingInput.value.trim === "") {
        startersError.textContent = "Invalid input for R&W.";
        startersReadingWritingInput.classList.add("input_error_theme_notion");
        return;
    }
    const speakingScore = calculateScore(startersSpeakingInput.value, speakingThresholds, 15);
    if (speakingScore === null || startersSpeakingInput.value.trim === "") {
        startersError.textContent = "Invalid input for Speaking.";
        startersSpeakingInput.classList.add("input_error_theme_notion");
        return;
    }

    if (listeningScore && readingWritingScore && speakingScore) {
        const startersShieldSum = Number(listeningScore.shields) + Number(readingWritingScore.shields) + Number(speakingScore.shields);

        let startersGrade;
        if (startersShieldSum >= 10 && Number(listeningScore.shields) > 2 && Number(readingWritingScore.shields) > 2 && Number(speakingScore.shields) > 2) {
            startersGrade = "Passed";
        } else {
            startersGrade = "Not passed";
        }
    
    return {
        listening: {
            startersListeningScore: listeningScore.result,
            startersListeningShields: listeningScore.shields
        },
        readingWriting: {
            startersReadingWritingScore: readingWritingScore.result,
            startersReadingWritingShields: readingWritingScore.shields
        },
        speaking: {
            startersSpeakingScore: speakingScore.result,
            startersSpeakingShields: speakingScore.shields
        },
        startersShieldSum,
        startersGrade
        };
    }
}

//MOVERS SECTION
const moversListeningInput = document.getElementById("moversListeningInput");
const moversReadingWritingInput = document.getElementById("moversReadingWritingInput");
const moversSpeakingInput = document.getElementById("moversSpeakingInput");
const moversError = document.getElementById("moversError");
const calculateMovers = document.getElementById("calculateMovers");

calculateMovers.addEventListener("click", function(event) {
    event.preventDefault();

    moversError.textContent = ""; 
    moversListeningInput.classList.remove("input_error_theme_notion");
    moversReadingWritingInput.classList.remove("input_error_theme_notion");
    moversSpeakingInput.classList.remove("input_error_theme_notion");

    const listeningThresholds = [
        { threshold: 21, shields: "5" },
        { threshold: 18, shields: "4" },
        { threshold: 14, shields: "3" },
        { threshold: 11, shields: "2" },
        { threshold: 1, shields: "1" },
        { threshold: 0, shields: "0" },
    ];

    const readingWritingThresholds = [
        { threshold: 33, shields: "5" },
        { threshold: 29, shields: "4" },
        { threshold: 24, shields: "3" },
        { threshold: 18, shields: "2" },
        { threshold: 1, shields: "1" },
        { threshold: 0, shields: "0" },
    ];

    const speakingThresholds = [
        { threshold: 13, shields: "5" },
        { threshold: 10, shields: "4" },
        { threshold: 7, shields: "3" },
        { threshold: 4, shields: "2" },
        { threshold: 1, shields: "1" },
        { threshold: 0, shields: "0" },
    ];

    const listeningScore = calculateScore(moversListeningInput.value, listeningThresholds, 25);
    if (listeningScore === null) {
        moversError.textContent = "Invalid input for Listening.";
        moversListeningInput.classList.add("input_error_theme_notion");
        return;
    }
    const readingWritingScore = calculateScore(moversReadingWritingInput.value, readingWritingThresholds, 35);
    if (readingWritingScore === null) {
        moversError.textContent = "Invalid input for R&W.";
        moversReadingWritingInput.classList.add("input_error_theme_notion");
        return;
    }
    const speakingScore = calculateScore(moversSpeakingInput.value, speakingThresholds, 15);
    if (speakingScore === null) {
        moversError.textContent = "Invalid input for Speaking.";
        moversSpeakingInput.classList.add("input_error_theme_notion");
        return;
    }

    if (listeningScore && readingWritingScore && speakingScore) {
        const moversShieldSum = Number(listeningScore.shields) + Number(readingWritingScore.shields) + Number(speakingScore.shields);

        let moversGrade;
        if (moversShieldSum >= 10 && Number(listeningScore.shields) > 2 && Number(readingWritingScore.shields) > 2 && Number(speakingScore.shields) > 2) {
            moversGrade = "Passed";
        } else {
            moversGrade = "Not passed";
        }
    let moversResults = {};
    
    moversResults = {
        listening: {
            result: listeningScore.result,
            shields: listeningScore.shields
        },
        readingWriting: {
            result: readingWritingScore.result,
            shields: readingWritingScore.shields
        },
        speaking: {
            result: speakingScore.result,
            shields: speakingScore.shields
        },
        totalShields: moversShieldSum,
        grade: moversGrade
        };

        console.log("movers Results:", moversResults);
    }
})

//FLYERS SECTION
const  flyersListeningInput = document.getElementById("flyersListeningInput");
const flyersReadingWritingInput = document.getElementById("flyersReadingWritingInput");
const flyersSpeakingInput = document.getElementById("flyersSpeakingInput");
const flyersError = document.getElementById("flyersError");
const calculateFlyers = document.getElementById("calculateFlyers");

calculateFlyers.addEventListener("click", function(event) {
    event.preventDefault();

    flyersError.textContent = ""; 
    flyersListeningInput.classList.remove("input_error_theme_notion");
    flyersReadingWritingInput.classList.remove("input_error_theme_notion");
    flyersSpeakingInput.classList.remove("input_error_theme_notion");

    const listeningThresholds = [
        { threshold: 23, shields: "5" },
        { threshold: 20, shields: "4" },
        { threshold: 17, shields: "3" },
        { threshold: 14, shields: "2" },
        { threshold: 1, shields: "1" },
        { threshold: 0, shields: "0" },
    ];

    const readingWritingThresholds = [
        { threshold: 42, shields: "5" },
        { threshold: 36, shields: "4" },
        { threshold: 30, shields: "3" },
        { threshold: 24, shields: "2" },
        { threshold: 1, shields: "1" },
        { threshold: 0, shields: "0" },
    ];

    const speakingThresholds = [
        { threshold: 13, shields: "5" },
        { threshold: 10, shields: "4" },
        { threshold: 7, shields: "3" },
        { threshold: 4, shields: "2" },
        { threshold: 1, shields: "1" },
        { threshold: 0, shields: "0" },
    ];

    const listeningScore = calculateScore(flyersListeningInput.value, listeningThresholds, 25);
    if (listeningScore === null) {
        flyersError.textContent = "Invalid input for Listening.";
        flyersListeningInput.classList.add("input_error_theme_notion");
        return;
    }
    const readingWritingScore = calculateScore(flyersReadingWritingInput.value, readingWritingThresholds, 44);
    if (readingWritingScore === null) {
        flyersError.textContent = "Invalid input for R&W.";
        flyersReadingWritingInput.classList.add("input_error_theme_notion");
        return;
    }
    const speakingScore = calculateScore(flyersSpeakingInput.value, speakingThresholds, 15);
    if (speakingScore === null) {
        flyersError.textContent = "Invalid input for Speaking.";
        flyersSpeakingInput.classList.add("input_error_theme_notion");
        return;
    }

    if (listeningScore && readingWritingScore && speakingScore) {
        const flyersShieldSum = Number(listeningScore.shields) + Number(readingWritingScore.shields) + Number(speakingScore.shields);

        let flyersGrade;
        if (flyersShieldSum >= 10 && Number(listeningScore.shields) > 2 && Number(readingWritingScore.shields) > 2 && Number(speakingScore.shields) > 2) {
            flyersGrade = "Passed";
        } else {
            flyersGrade = "Not passed";
        }
    let flyersResults = {};
    
    flyersResults = {
        listening: {
            result: listeningScore.result,
            shields: listeningScore.shields
        },
        readingWriting: {
            result: readingWritingScore.result,
            shields: readingWritingScore.shields
        },
        speaking: {
            result: speakingScore.result,
            shields: speakingScore.shields
        },
        totalShields: flyersShieldSum,
        grade: flyersGrade
        };

        console.log("flyers Results:", flyersResults);
    }
})
//KET SECTION


//PET SECTION
const petListeningInput = document.getElementById("petListeningInput");
const petReadingInput = document.getElementById("petReadingInput");
const petWritingInput = document.getElementById("petWritingInput");
const petSpeakingInput = document.getElementById("petSpeakingInput");
const petError = document.getElementById("petError");
const calculateButton2 = document.getElementById("calculateButton2");

function calculateScorePet(rawScore, scoresTable, maxScore) {
    const score = Number(rawScore);
    
    if (score < 0 || score > maxScore){
        return null;
    }

    let cambridgeScore = scoresTable[rawScore];
    return cambridgeScore;
}

async function calculatePetResult(){
    petError.textContent = ""; 
    petListeningInput.classList.remove("input_error_theme_notion");
    petReadingInput.classList.remove("input_error_theme_notion");
    petWritingInput.classList.remove("input_error_theme_notion");
    petSpeakingInput.classList.remove("input_error_theme_notion");

petListeningScoresTable = {
    25: 170,
    24: 165,
    23: 160,
    22: 156,
    21: 152,
    20: 148,
    19: 144,
    18: 140,
    17: 137,
    16: 134,
    15: 131,
    14: 129,
    13: 126,
    12: 123,
    11: 120,
    10: 117,
    9: 114,
    8: 111,
    7: 108,
    6: 105,
    5: 102,
    4: 82,
    3: 61,
    2: 41,
    1: 20,
    0: 0
};

petReadingScoresTable = {
    32: 170,
    31: 167,
    30: 163,
    29: 160,
    28: 157,
    27: 153,
    26: 150,
    25: 147,
    24: 143,
    23: 140,
    22: 138,
    21: 136,
    20: 134,
    19: 132,
    18: 130,
    17: 128,
    16: 126,
    15: 124,
    14: 122,
    13: 120,
    12: 118,
    11: 116,
    10: 113,
    9: 111,
    8: 109,
    7: 107,
    6: 104,
    5: 102,
    4: 82,
    3: 61,
    2: 41,
    1: 20,
    0: 0
};

petWritingScoresTable = {
    40: 170,
    39: 168,
    38: 167,
    37: 165,
    36: 163,
    35: 162,
    34: 160,
    33: 158,
    32: 156,
    31: 154,
    30: 152,
    29: 150,
    28: 148,
    27: 146,
    26: 144,
    25: 142,
    24: 140,
    23: 138,
    22: 135,
    21: 133,
    20: 130,
    19: 128,
    18: 125,
    17: 123,
    16: 120,
    15: 117,
    14: 114,
    13: 111,
    12: 108,
    11: 105,
    10: 102,
    9: 92,
    8: 82,
    7: 71,
    6: 61,
    5: 51,
    4: 41,
    3: 31,
    2: 20,
    1: 10,
    0: 0
};

petSpeakingScoresTable = {
    30: 170,
    29: 167,
    28: 163,
    27: 160,
    26: 158,
    25: 156,
    24: 153,
    23: 151,
    22: 149,
    21: 147,
    20: 144,
    19: 142,
    18: 140,
    17: 137,
    16: 133,
    15: 130,
    14: 127,
    13: 123,
    12: 120,
    11: 116,
    10: 113,
    9: 109,
    8: 106,
    7: 102,
    6: 87,
    5: 73,
    4: 58,
    3: 44,
    2: 29,
    1: 15,
    0: 0
};

const listeningScore = calculateScorePet(petListeningInput.value, petListeningScoresTable, 25);
if (listeningScore === null || petListeningInput.value.trim() === "") {
    petError.textContent = "Invalid input for Listening.";
    petListeningInput.classList.add("input_error_theme_notion");
    return;
}
const readingScore = calculateScorePet(petReadingInput.value, petReadingScoresTable, 32);
if (readingScore === null || petReadingInput.value.trim() === "") {
    petError.textContent = "Invalid input for Reading.";
    petReadingInput.classList.add("input_error_theme_notion");
    return;
}
const writingScore = calculateScorePet(petWritingInput.value, petWritingScoresTable, 40);
if (writingScore === null || petWritingInput.value.trim() === "") {
    petError.textContent = "Invalid input for Writing.";
    petWritingInput.classList.add("input_error_theme_notion");
    return;
}
const speakingScore = calculateScorePet(petSpeakingInput.value, petSpeakingScoresTable, 30);
if (speakingScore === null || petSpeakingInput.value.trim() === "") {
    petError.textContent = "Invalid input for Speaking.";
    petSpeakingInput.classList.add("input_error_theme_notion");
    return;
}

const petAverageScore = Math.round((0.25 * listeningScore) + (0.25 * readingScore) + (0.25 * writingScore) + (0.25 * speakingScore));

let petGrade;

if (petAverageScore >= 160) {
    petGrade = "Grade A (B2 level)";
}
else if (petAverageScore >= 153) {
    petGrade = "Grade B (B1 level)";
}
else if (petAverageScore >= 140) {
    petGrade = "Grade C (B1 level)";
}
else if (petAverageScore >= 120) {
    petGrade = "A2 level";
}
else {
    petGrade = "A1 level";
}

return {
    listening: {
        petListeningInputValue: petListeningInput.value,
        listeningScore,                                   
    },
    reading: {
        petReadingInputValue: petReadingInput.value,
        readingScore,
    },
    writing: {
        petWritingInputValue: petWritingInput.value,
        writingScore,
    },
    speaking: {
        petSpeakingInputValue: petSpeakingInput.value,
        speakingScore,
    },
    petAverageScore,
    petGrade,
};
}

