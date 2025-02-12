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

let startersResults = {};

calculateButton1.addEventListener("click", function (event) {
    event.preventDefault();

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
    if (listeningScore === null) {
        startersError.textContent = "Invalid input for Listening.";
        startersListeningInput.classList.add("input_error_theme_notion");
        return;
    }
    const readingWritingScore = calculateScore(startersReadingWritingInput.value, readingWritingThresholds, 25);
    if (readingWritingScore === null) {
        startersError.textContent = "Invalid input for R&W.";
        startersReadingWritingInput.classList.add("input_error_theme_notion");
        return;
    }
    const speakingScore = calculateScore(startersSpeakingInput.value, speakingThresholds, 15);
    if (speakingScore === null) {
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

        startersResults = {
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
            totalShields: startersShieldSum,
            grade: startersGrade
        };

        console.log("Starters Results:", startersResults);
    }
});

const petListeningInput = document.getElementById("petListeningInput");
const petReadingInput = document.getElementById("petReadingInput");
const petWritingInput = document.getElementById("petWritingInput");
const petSpeakingInput = document.getElementById("petSpeakingInput");
const petError = document.getElementById("petError");
const calculateButton2 = document.getElementById("calculateButton2");

function calculateScorePet(input, scoresTable, maxScore) {
    const score = Number(input);
    
    if (score < 0 || score > maxScore){
        return null;
    }

    let cambridgeScore = scoresTable[input];
    return cambridgeScore;
}

let petResults = {};

calculateButton2.addEventListener("click", function(event) {
    event.preventDefault();

    petError.textContent = ""; 
    petListeningInput.classList.remove("input_error_theme_notion");
    petReadingInput.classList.remove("input_error_theme_notion");
    petWritingInput.classList.remove("input_error_theme_notion");
    petSpeakingInput.classList.remove("input_error_theme_notion");

petListening = {
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

petReading = {
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

petWriting = {
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

petSpeaking = {
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

const listeningScore = calculateScorePet(petListeningInput.value, petListening, 25);
if (listeningScore === null) {
    petError.textContent = "Invalid input for Listening.";
    petListeningInput.classList.add("input_error_theme_notion");
    return;
}
const readingScore = calculateScorePet(petReadingInput.value, petReading, 32);
if (readingScore === null) {
    petError.textContent = "Invalid input for Reading.";
    petReadingInput.classList.add("input_error_theme_notion");
    return;
}
const writingScore = calculateScorePet(petWritingInput.value, petWriting, 40);
if (writingScore === null) {
    petError.textContent = "Invalid input for Writing.";
    petWritingInput.classList.add("input_error_theme_notion");
    return;
}
const speakingScore = calculateScorePet(petSpeakingInput.value, petSpeaking, 30);
if (speakingScore === null) {
    petError.textContent = "Invalid input for Speaking.";
    petSpeakingInput.classList.add("input_error_theme_notion");
    return;
}

const petAverage = Math.round((0.25 * listeningScore) + (0.25 * readingScore) + (0.25 * writingScore) + (0.25 * speakingScore));

let petGrade;

if (petAverage >= 160) {
    petGrade = "Grade A (B2 level)";
}
else if (petAverage >= 153) {
    petGrade = "Grade B (B1 level)";
}
else if (petAverage >= 140) {
    petGrade = "Grade C (B1 level)";
}
else if (petAverage >= 120) {
    petGrade = "A2 level";
}
else {
    petGrade = "A1 level";
}

petResults = {
    listening: {
        testScore: petListeningInput.value,
        result: listeningScore,
    },
    reading: {
        testScore: petReadingInput.value,
        result: readingScore,
    },
    writing: {
        testScore: petWritingInput.value,
        result: writingScore,
    },
    speaking: {
        testScore: petSpeakingInput.value,
        result: speakingScore,
    },
    averageScore: petAverage,
    finalGrade: petGrade,
}
console.log("Starters Results:", petResults);
});