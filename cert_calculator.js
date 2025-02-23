const startersListeningInput = document.getElementById("startersListeningInput");
const startersReadingWritingInput = document.getElementById("startersReadingWritingInput");
const startersSpeakingInput = document.getElementById("startersSpeakingInput");
const startersError = document.getElementById("startersError");

function calculateScoreYLE(input, thresholds, maxScore) {
    const score = Number(input);

    if (score < 0 || score > maxScore) {
        return null;
    }

    for (const { threshold, shields } of thresholds) {
        if (score >= threshold) {
            return { result: score, shields };
        }
    }
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

    const listeningScore = calculateScoreYLE(startersListeningInput.value, listeningThresholds, 20);
    if (listeningScore === null || startersListeningInput.value.trim() === "") {
        startersError.textContent = "Invalid input for Listening.";
        startersListeningInput.classList.add("input_error_theme_notion");
        return;
    }
    const readingWritingScore = calculateScoreYLE(startersReadingWritingInput.value, readingWritingThresholds, 25);
    if (readingWritingScore === null || startersReadingWritingInput.value.trim() === "") {
        startersError.textContent = "Invalid input for R&W.";
        startersReadingWritingInput.classList.add("input_error_theme_notion");
        return;
    }
    const speakingScore = calculateScoreYLE(startersSpeakingInput.value, speakingThresholds, 15);
    if (speakingScore === null || startersSpeakingInput.value.trim() === "") {
        startersError.textContent = "Invalid input for Speaking.";
        startersSpeakingInput.classList.add("input_error_theme_notion");
        return;
    }

    if (listeningScore && readingWritingScore && speakingScore) {
        const startersShieldSum = Number(listeningScore.shields) + Number(readingWritingScore.shields) + Number(speakingScore.shields);

        let startersGrade;
        if (startersShieldSum >= 10 && Number(listeningScore.shields) > 2 && Number(readingWritingScore.shields) > 2 && Number(speakingScore.shields) > 2) {
            startersGrade = "Pass";
        } else {
            startersGrade = "Fail";
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

async function calculateMoversResult() {

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

    const listeningScore = calculateScoreYLE(moversListeningInput.value, listeningThresholds, 25);
    if (listeningScore === null || moversListeningInput.value.trim() === "") {
        moversError.textContent = "Invalid input for Listening.";
        moversListeningInput.classList.add("input_error_theme_notion");
        return;
    }
    const readingWritingScore = calculateScoreYLE(moversReadingWritingInput.value, readingWritingThresholds, 35);
    if (readingWritingScore === null || moversReadingWritingInput.value.trim() === "") {
        moversError.textContent = "Invalid input for R&W.";
        moversReadingWritingInput.classList.add("input_error_theme_notion");
        return;
    }
    const speakingScore = calculateScoreYLE(moversSpeakingInput.value, speakingThresholds, 15);
    if (speakingScore === null || moversSpeakingInput.value.trim() === "") {
        moversError.textContent = "Invalid input for Speaking.";
        moversSpeakingInput.classList.add("input_error_theme_notion");
        return;
    }

    if (listeningScore && readingWritingScore && speakingScore) {
        const moversShieldSum = Number(listeningScore.shields) + Number(readingWritingScore.shields) + Number(speakingScore.shields);

        let moversGrade;
        if (moversShieldSum >= 10 && Number(listeningScore.shields) > 2 && Number(readingWritingScore.shields) > 2 && Number(speakingScore.shields) > 2) {
            moversGrade = "Pass";
        } else {
            moversGrade = "Fail";
        }

        return {
            listening: {
                moversListeningScore: listeningScore.result,
                moversListeningShields: listeningScore.shields
            },
            readingWriting: {
                moversReadingWritingScore: readingWritingScore.result,
                moversReadingWritingShields: readingWritingScore.shields
            },
            speaking: {
                moversSpeakingScore: speakingScore.result,
                moversSpeakingShields: speakingScore.shields
            },
            moversShieldSum,
            moversGrade
        };
    }
}

//FLYERS SECTION
const flyersListeningInput = document.getElementById("flyersListeningInput");
const flyersReadingWritingInput = document.getElementById("flyersReadingWritingInput");
const flyersSpeakingInput = document.getElementById("flyersSpeakingInput");
const flyersError = document.getElementById("flyersError");

async function calculateFlyersResult() {

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

    const listeningScore = calculateScoreYLE(flyersListeningInput.value, listeningThresholds, 25);
    if (listeningScore === null || flyersListeningInput.value.trim() === "") {
        flyersError.textContent = "Invalid input for Listening.";
        flyersListeningInput.classList.add("input_error_theme_notion");
        return;
    }
    const readingWritingScore = calculateScoreYLE(flyersReadingWritingInput.value, readingWritingThresholds, 44);
    if (readingWritingScore === null || flyersReadingWritingInput.value.trim() === "") {
        flyersError.textContent = "Invalid input for R&W.";
        flyersReadingWritingInput.classList.add("input_error_theme_notion");
        return;
    }
    const speakingScore = calculateScoreYLE(flyersSpeakingInput.value, speakingThresholds, 15);
    if (speakingScore === null || flyersSpeakingInput.value.trim() === "") {
        flyersError.textContent = "Invalid input for Speaking.";
        flyersSpeakingInput.classList.add("input_error_theme_notion");
        return;
    }

    if (listeningScore && readingWritingScore && speakingScore) {
        const flyersShieldSum = Number(listeningScore.shields) + Number(readingWritingScore.shields) + Number(speakingScore.shields);

        let flyersGrade;
        if (flyersShieldSum >= 10 && Number(listeningScore.shields) > 2 && Number(readingWritingScore.shields) > 2 && Number(speakingScore.shields) > 2) {
            flyersGrade = "Pass";
        } else {
            flyersGrade = "Fail";
        }

        return {
            listening: {
                flyersListeningScore: listeningScore.result,
                flyersListeningShields: listeningScore.shields
            },
            readingWriting: {
                flyersReadingWritingScore: readingWritingScore.result,
                flyersReadingWritingShields: readingWritingScore.shields
            },
            speaking: {
                flyersSpeakingScore: speakingScore.result,
                flyersSpeakingShields: speakingScore.shields
            },
            flyersShieldSum,
            flyersGrade
        };
    }
}

//function to calculate KET, PET, FCE, CAE
function calculateScoreIntermediate(rawScore, scoresTable, maxScore) {
    const score = Number(rawScore);

    if (score < 0 || score > maxScore) {
        return null;
    }

    let cambridgeScore = scoresTable[rawScore];
    return cambridgeScore;
}

//KET SECTION
const ketListeningInput = document.getElementById("ketListeningInput");
const ketReadingWritingInput = document.getElementById("ketReadingWritingInput");
const ketSpeakingInput = document.getElementById("ketSpeakingInput");
const ketError = document.getElementById("ketError");

async function calculateKetResult(){

    ketError.textContent = "";
    ketListeningInput.classList.remove("input_error_theme_notion");
    ketReadingWritingInput.classList.remove("input_error_theme_notion");
    ketSpeakingInput.classList.remove("input_error_theme_notion");

    ketListeningScoresTable = {
        25: 150,
        24: 145,
        23: 140,
        22: 137,
        21: 133,
        20: 130,
        19: 127,
        18: 123,
        17: 120,
        16: 117,
        15: 113,
        14: 110,
        13: 107,
        12: 103,
        11: 100,
        10: 96,
        9: 93,
        8: 89,
        7: 86,
        6: 82,
        5: 68,
        4: 55,
        3: 41,
        2: 27,
        1: 14,
        0: 0
    };
    
    ketReadingWritingScoresTable = {
        60: 150,
        59: 148,
        58: 146,
        57: 144,
        56: 142,
        55: 140,
        54: 137,
        53: 135,
        52: 133,
        51: 131,
        50: 130,
        49: 129,
        48: 128,
        47: 127,
        46: 126,
        45: 125,
        43: 124,
        42: 123,
        41: 121,
        40: 120,
        39: 119,
        38: 118,
        37: 117,
        36: 116,
        35: 115,
        34: 114,
        33: 113,
        32: 112,
        31: 111,
        30: 110,
        29: 108,
        28: 106,
        27: 104,
        26: 102,
        25: 100,
        24: 98,
        23: 96,
        22: 94,
        21: 92,
        20: 90,
        19: 89,
        18: 88,
        17: 86,
        16: 85,
        15: 84,
        14: 83,
        13: 82,
        12: 80,
        11: 75,
        10: 70,
        9: 65,
        8: 60,
        7: 50,
        6: 40,
        5: 30,
        4: 20,
        3: 15,
        2: 10,
        1: 5,
        0:0
    };
    
    ketSpeakingScoresTable = {
        45: 150,
        44: 148,
        43: 145,
        42: 143,
        41: 140,
        40: 139,
        39: 137,
        38: 136,
        37: 134,
        36: 133,
        35: 131,
        34: 130,
        33: 129,
        32: 127,
        31: 126,
        30: 124,
        29: 123,
        28: 121,
        27: 120,
        26: 118,
        25: 116,
        24: 113,
        23: 111,
        22: 109,
        21: 107,
        20: 104,
        19: 102,
        18: 100,
        17: 98,
        16: 96,
        15: 93,
        14: 91,
        13: 89,
        12: 87,
        11: 84,
        10: 82,
        9: 74,
        8: 66,
        7: 57,
        6: 49,
        5: 41,
        4: 33,
        3: 25,
        2: 16,
        1: 8,
        0: 0
    };

    const listeningScore = calculateScoreIntermediate(ketListeningInput.value, ketListeningScoresTable, 25);
    if (listeningScore === null || ketListeningInput.value.trim() === "") {
        ketError.textContent = "Invalid input for Listening.";
        ketListeningInput.classList.add("input_error_theme_notion");
        return;
    }
    const readingWritingScore = calculateScoreIntermediate(ketReadingWritingInput.value, ketReadingWritingScoresTable, 60);
    if (readingWritingScore === null || ketReadingWritingInput.value.trim() === "") {
        ketError.textContent = "Invalid input for R&W.";
        ketReadingWritingInput.classList.add("input_error_theme_notion");
        return;
    }
    const speakingScore = calculateScoreIntermediate(ketSpeakingInput.value, ketSpeakingScoresTable, 45);
    if (speakingScore === null || ketSpeakingInput.value.trim() === "") {
        ketError.textContent = "Invalid input for Speaking.";
        ketSpeakingInput.classList.add("input_error_theme_notion");
        return;
    }

    const ketAverageScore = Math.round((0.25 * listeningScore) + (0.50 * readingWritingScore) + (0.25 * speakingScore));

    let ketGrade;

    if (ketAverageScore >= 140) {
        ketGrade = "Grade A (B1)";
    }
    else if (ketAverageScore >= 133) {
        ketGrade = "Grade B (A2)";
    }
    else if (ketAverageScore >= 120) {
        ketGrade = "Grade C (A2)";
    }
    else {
        ketGrade = "A1 level";
    }

    return {
        listening: {
            ketListeningInputValue: ketListeningInput.value,
            listeningScore,
        },
        readingWriting: {
            ketReadingWritingInputValue: ketReadingWritingInput.value,
            readingWritingScore,
        },
        speaking: {
            ketSpeakingInputValue: ketSpeakingInput.value,
            speakingScore,
        },
        ketAverageScore,
        ketGrade,
    };
}

//PET SECTION
const petListeningInput = document.getElementById("petListeningInput");
const petReadingInput = document.getElementById("petReadingInput");
const petWritingInput = document.getElementById("petWritingInput");
const petSpeakingInput = document.getElementById("petSpeakingInput");
const petError = document.getElementById("petError");

async function calculatePetResult() {

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

    const listeningScore = calculateScoreIntermediate(petListeningInput.value, petListeningScoresTable, 25);
    if (listeningScore === null || petListeningInput.value.trim() === "") {
        petError.textContent = "Invalid input for Listening.";
        petListeningInput.classList.add("input_error_theme_notion");
        return;
    }
    const readingScore = calculateScoreIntermediate(petReadingInput.value, petReadingScoresTable, 32);
    if (readingScore === null || petReadingInput.value.trim() === "") {
        petError.textContent = "Invalid input for Reading.";
        petReadingInput.classList.add("input_error_theme_notion");
        return;
    }
    const writingScore = calculateScoreIntermediate(petWritingInput.value, petWritingScoresTable, 40);
    if (writingScore === null || petWritingInput.value.trim() === "") {
        petError.textContent = "Invalid input for Writing.";
        petWritingInput.classList.add("input_error_theme_notion");
        return;
    }
    const speakingScore = calculateScoreIntermediate(petSpeakingInput.value, petSpeakingScoresTable, 30);
    if (speakingScore === null || petSpeakingInput.value.trim() === "") {
        petError.textContent = "Invalid input for Speaking.";
        petSpeakingInput.classList.add("input_error_theme_notion");
        return;
    }

    const petAverageScore = Math.round((0.25 * listeningScore) + 
    (0.25 * readingScore) + 
    (0.25 * writingScore) + 
    (0.25 * speakingScore));

    let petGrade;

    if (petAverageScore >= 160) {
        petGrade = "Grade A (B2)";
    }
    else if (petAverageScore >= 153) {
        petGrade = "Grade B (B1)";
    }
    else if (petAverageScore >= 140) {
        petGrade = "Grade C (B1)";
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


//FCE SECTION
const fceListeningInput = document.getElementById("fceListeningInput");
const fceReadingInput = document.getElementById("fceReadingInput");
const fceUseInput = document.getElementById("fceUseInput");
const fceWritingInput = document.getElementById("fceWritingInput");
const fceSpeakingInput = document.getElementById("fceSpeakingInput");
const fceError = document.getElementById("fceError");

async function calculateFceResult() {
    fceError.textContent = "";
    fceListeningInput.classList.remove("input_error_theme_notion");
    fceReadingInput.classList.remove("input_error_theme_notion");
    fceUseInput.classList.remove("input_error_theme_notion");
    fceWritingInput.classList.remove("input_error_theme_notion");
    fceSpeakingInput.classList.remove("input_error_theme_notion");

    fceListeningScoresTable = {
        30: 190,
        29: 187,
        28: 183,
        27: 180,
        26: 178,
        25: 176,
        24: 173,
        23: 171,
        22: 169,
        21: 167,
        20: 164,
        19: 162,
        18: 160,
        17: 157,
        16: 153,
        15: 150,
        14: 147,
        13: 143,
        12: 140,
        11: 136,
        10: 131,
        9: 127,
        8: 122,
        7: 107,
        6: 92,
        5: 76,
        4: 61,
        3: 46,
        2: 31,
        1: 15,
        0: 0
    };
    
    fceReadingScoresTable = {
        42: 190,
        41: 188,
        40: 186,
        39: 184,
        38: 182,
        37: 180,
        36: 178,
        35: 177,
        34: 175,
        33: 174,
        32: 172,
        31: 171,
        30: 169,
        29: 168,
        28: 166,
        27: 165,
        26: 163,
        25: 162,
        24: 160,
        23: 158,
        22: 155,
        21: 153,
        20: 150,
        19: 148,
        18: 145,
        17: 143,
        16: 140,
        15: 137,
        14: 134,
        13: 131,
        12: 128,
        11: 125,
        10: 122,
        9: 110,
        8: 98,
        7: 85,
        6: 73,
        5: 61,
        4: 49,
        3: 37,
        2: 24,
        1: 12,
        0: 0
    };
    
    fceUseScoresTable = {
        28: 190,
        27: 188,
        26: 185,
        25: 183,
        24: 180,
        23: 177,
        22: 173,
        21: 170,
        20: 167,
        19: 163,
        18: 160,
        17: 157,
        16: 154,
        15: 151,
        14: 149,
        13: 146,
        12: 143,
        11: 140,
        10: 136,
        9: 131,
        8: 127,
        7: 122,
        6: 105,
        5: 87,
        4: 70,
        3: 52,
        2: 35,
        1: 17,
        0: 0
    };
    
    fceWritingScoresTable = {
        40: 190,
        39: 188,
        38: 187,
        37: 185,
        36: 183,
        35: 182,
        34: 180,
        33: 178,
        32: 176,
        31: 174,
        30: 172,
        29: 170,
        28: 168,
        27: 166,
        26: 164,
        25: 162,
        24: 160,
        23: 158,
        22: 155,
        21: 153,
        20: 150,
        19: 148,
        18: 145,
        17: 143,
        16: 140,
        15: 137,
        14: 134,
        13: 131,
        12: 128,
        11: 125,
        10: 122,
        9: 110,
        8: 98,
        7: 85,
        6: 73,
        5: 61,
        4: 49,
        3: 37,
        2: 24,
        1: 12,
        0: 0
    };
    
    fceSpeakingScoresTable = {
        60: 190,
        59: 189,
        58: 187,
        57: 185,
        56: 183,
        55: 182,
        54: 180,
        53: 179,
        52: 178,
        51: 177,
        50: 176,
        49: 174,
        48: 173,
        47: 172,
        46: 171,
        45: 170,
        44: 169,
        43: 168,
        42: 167,
        41: 166,
        40: 164,
        39: 163,
        38: 162,
        37: 161,
        36: 160,
        35: 158,
        34: 157,
        33: 155,
        32: 153,
        31: 152,
        30: 150,
        29: 148,
        28: 147,
        27: 145,
        26: 143,
        25: 142,
        24: 140,
        23: 138,
        22: 136,
        21: 135,
        20: 133,
        19: 131,
        18: 129,
        17: 127,
        16: 126,
        15: 124,
        14: 122,
        13: 113,
        12: 102,
        11: 96,
        10: 87,
        9: 78,
        8: 70,
        7: 61,
        6: 52,
        5: 44,
        4: 35,
        3: 26,
        2: 17,
        1: 9,
        0: 0
    };

    const listeningScore = calculateScoreIntermediate(fceListeningInput.value, fceListeningScoresTable, 30);
    if (listeningScore === null || fceListeningInput.value.trim() === "") {
        fceError.textContent = "Invalid input for Listening.";
        fceListeningInput.classList.add("input_error_theme_notion");
        return;
    }
    const readingScore = calculateScoreIntermediate(fceReadingInput.value, fceReadingScoresTable, 42);
    if (readingScore === null || fceReadingInput.value.trim() === "") {
        fceError.textContent = "Invalid input for Reading.";
        fceReadingInput.classList.add("input_error_theme_notion");
        return;
    }
    const useScore = calculateScoreIntermediate(fceUseInput.value, fceUseScoresTable, 28);
    if (useScore === null || fceUseInput.value.trim() === "") {
        fceError.textContent = "Invalid input for Use of English.";
        fceUseInput.classList.add("input_error_theme_notion");
    }
    const writingScore = calculateScoreIntermediate(fceWritingInput.value, fceWritingScoresTable, 40);
    if (writingScore === null || fceWritingInput.value.trim() === "") {
        fceError.textContent = "Invalid input for Writing.";
        fceWritingInput.classList.add("input_error_theme_notion");
        return;
    }
    const speakingScore = calculateScoreIntermediate(fceSpeakingInput.value, fceSpeakingScoresTable, 60);
    if (speakingScore === null || fceSpeakingInput.value.trim() === "") {
        fceError.textContent = "Invalid input for Speaking.";
        fceSpeakingInput.classList.add("input_error_theme_notion");
        return;
    }

    const fceAverageScore = Math.round((0.20 * listeningScore) + 
    (0.20 * readingScore) + 
    (0.20 * useScore) + 
    (0.20 * writingScore) + 
    (0.20 * speakingScore));

    let fceGrade;

    if (fceAverageScore >= 180) {
        fceGrade = "Grade A (C1)";
    }
    else if (fceAverageScore >= 173) {
        fceGrade = "Grade B (B2)";
    }
    else if (fceAverageScore >= 160) {
        fceGrade = "Grade C (B2)";
    }
    else if (fceAverageScore >= 140) {
        fceGrade = "B1 level";
    }
    else if (fceAverageScore >= 120) {
        fceGrade = "A2 level";
    }
    else {
        fceGrade = "A1 level";
    }

    return {
        listening: {
            fceListeningInputValue: fceListeningInput.value,
            listeningScore,
        },
        reading: {
            fceReadingInputValue: fceReadingInput.value,
            readingScore,
        },
        use: {
            fceUseInputValue: fceUseInput.value,
            useScore,
        },
        writing: {
            fceWritingInputValue: fceWritingInput.value,
            writingScore,
        },
        speaking: {
            fceSpeakingInputValue: fceSpeakingInput.value,
            speakingScore,
        },
        fceAverageScore,
        fceGrade,
    };
}

//CAE SECTION

const caeListeningInput = document.getElementById("caeListeningInput");
const caeReadingInput = document.getElementById("caeReadingInput");
const caeUseInput = document.getElementById("caeUseInput");
const caeWritingInput = document.getElementById("caeWritingInput");
const caeSpeakingInput = document.getElementById("caeSpeakingInput");
const caeError = document.getElementById("caeError");

async function calculateCaeResult() {
    caeError.textContent = "";
    caeListeningInput.classList.remove("input_error_theme_notion");
    caeReadingInput.classList.remove("input_error_theme_notion");
    caeUseInput.classList.remove("input_error_theme_notion");
    caeWritingInput.classList.remove("input_error_theme_notion");
    caeSpeakingInput.classList.remove("input_error_theme_notion");

    caeListeningScoresTable = {
        30: 210,
        29: 208,
        28: 205,
        27: 203,
        26: 200,
        25: 198,
        24: 195,
        23: 193,
        22: 190,
        21: 188,
        20: 185,
        19: 183,
        18: 180,
        17: 176,
        16: 172,
        15: 168,
        14: 164,
        13: 160,
        12: 151,
        11: 142,
        10: 129,
        9: 116,
        8: 103,
        7: 90,
        6: 77,
        5: 65,
        4: 52,
        3: 39,
        2: 26,
        1: 13,
        0: 0
    };
    
    caeReadingScoresTable = {
        50: 210,
        49: 209,
        48: 207,
        47: 206,
        46: 204,
        45: 203,
        44: 201,
        43: 200,
        42: 198,
        41: 196,
        40: 195,
        39: 193,
        38: 191,
        37: 189,
        36: 187,
        35: 185,
        34: 184,
        33: 182,
        32: 180,
        31: 178,
        30: 176,
        29: 173,
        28: 171,
        27: 169,
        26: 167,
        25: 164,
        24: 162,
        23: 160,
        22: 157,
        21: 154,
        20: 151,
        19: 148,
        18: 145,
        17: 142,
        16: 134,
        15: 125,
        14: 117,
        13: 109,
        12: 100,
        11: 92,
        10: 84,
        9: 75,
        8: 67,
        7: 58,
        6: 50,
        5: 42,
        4: 33,
        3: 25,
        2: 17,
        1: 8,
        0: 0
    };
    
    caeUseScoresTable = {
        28: 210,
        27: 208,
        26: 206,
        25: 204,
        24: 202,
        23: 200,
        22: 197,
        21: 194,
        20: 191,
        19: 189,
        18: 186,
        17: 183,
        16: 180,
        15: 176,
        14: 172,
        13: 168,
        12: 164,
        11: 160,
        10: 154,
        9: 148,
        8: 142,
        7: 124,
        6: 107,
        5: 89,
        4: 71,
        3: 53,
        2: 36,
        1: 18,
        0: 0
    };
    
    caeWritingScoresTable = {
        40: 210,
        39: 208,
        38: 207,
        37: 205,
        36: 203,
        35: 202,
        34: 200,
        33: 198,
        32: 196,
        31: 194,
        30: 192,
        29: 190,
        28: 188,
        27: 186,
        26: 184,
        25: 182,
        24: 180,
        23: 178,
        22: 175,
        21: 173,
        20: 170,
        19: 168,
        18: 165,
        17: 163,
        16: 160,
        15: 157,
        14: 154,
        13: 151,
        12: 148,
        11: 145,
        10: 142,
        9: 128,
        8: 114,
        7: 99,
        6: 85,
        5: 71,
        4: 57,
        3: 43,
        2: 28,
        1: 14,
        0: 0
    };
    
    caeSpeakingScoresTable = {
        75: 210,
        74: 209,
        73: 208,
        72: 207,
        71: 206,
        70: 204,
        69: 203,
        68: 202,
        67: 201,
        66: 200,
        65: 199,
        64: 198,
        63: 197,
        62: 196,
        61: 195,
        60: 194,
        59: 193,
        58: 192,
        57: 191,
        56: 190,
        55: 189,
        54: 188,
        53: 187,
        52: 186,
        51: 185,
        50: 184,
        49: 183,
        48: 182,
        47: 181,
        46: 180,
        45: 179,
        44: 177,
        43: 176,
        42: 175,
        41: 173,
        40: 172,
        39: 171,
        38: 169,
        37: 168,
        36: 167,
        35: 165,
        34: 164,
        33: 163,
        32: 161,
        31: 160,
        30: 159,
        29: 157,
        28: 156,
        27: 154,
        26: 153,
        25: 152,
        24: 150,
        23: 149,
        22: 148,
        21: 146,
        20: 145,
        19: 143,
        18: 142,
        17: 134,
        16: 125,
        15: 117,
        14: 109,
        13: 100,
        12: 92,
        11: 84,
        10: 75,
        9: 67,
        8: 58,
        7: 50,
        6: 42,
        5: 33,
        4: 25,
        3: 17,
        2: 8,
        1: 1,
        0: 0
    };

    const listeningScore = calculateScoreIntermediate(caeListeningInput.value, caeListeningScoresTable, 30);
    if (listeningScore === null || caeListeningInput.value.trim() === "") {
        caeError.textContent = "Invalid input for Listening.";
        caeListeningInput.classList.add("input_error_theme_notion");
        return;
    }
    const readingScore = calculateScoreIntermediate(caeReadingInput.value, caeReadingScoresTable, 50);
    if (readingScore === null || caeReadingInput.value.trim() === "") {
        caeError.textContent = "Invalid input for Reading.";
        caeReadingInput.classList.add("input_error_theme_notion");
        return;
    }
    const useScore = calculateScoreIntermediate(caeUseInput.value, caeUseScoresTable, 28);
    if (useScore === null || caeUseInput.value.trim() === "") {
        caeError.textContent = "Invalid input for Use of English.";
        caeUseInput.classList.add("input_error_theme_notion");
    }
    const writingScore = calculateScoreIntermediate(caeWritingInput.value, caeWritingScoresTable, 40);
    if (writingScore === null || caeWritingInput.value.trim() === "") {
        caeError.textContent = "Invalid input for Writing.";
        caeWritingInput.classList.add("input_error_theme_notion");
        return;
    }
    const speakingScore = calculateScoreIntermediate(caeSpeakingInput.value, caeSpeakingScoresTable, 75);
    if (speakingScore === null || caeSpeakingInput.value.trim() === "") {
        caeError.textContent = "Invalid input for Speaking.";
        caeSpeakingInput.classList.add("input_error_theme_notion");
        return;
    }

    const caeAverageScore = Math.round((0.20 * listeningScore) + 
    (0.20 * readingScore) + 
    (0.20 * useScore) + 
    (0.20 * writingScore) + 
    (0.20 * speakingScore));

    let caeGrade;

    if (caeAverageScore >= 200) {
        caeGrade = "Grade A (C2)";
    }
    else if (caeAverageScore >= 193) {
        caeGrade = "Grade B (C1)";
    }
    else if (caeAverageScore >= 180) {
        caeGrade = "Grade C (C1)";
    }
    else if (caeAverageScore >= 160) {
        caeGrade = "B2 level";
    }
    else if (caeAverageScore >= 140) {
        caeGrade = "B1 level";
    }
    else if (caeAverageScore >= 120) {
        caeGrade = "A2 level";
    }
    else {
        caeGrade = "A1 level";
    }

    return {
        listening: {
            caeListeningInputValue: caeListeningInput.value,
            listeningScore,
        },
        reading: {
            caeReadingInputValue: caeReadingInput.value,
            readingScore,
        },
        use: {
            caeUseInputValue: caeUseInput.value,
            useScore,
        },
        writing: {
            caeWritingInputValue: caeWritingInput.value,
            writingScore,
        },
        speaking: {
            caeSpeakingInputValue: caeSpeakingInput.value,
            speakingScore,
        },
        caeAverageScore,
        caeGrade,
    };
}