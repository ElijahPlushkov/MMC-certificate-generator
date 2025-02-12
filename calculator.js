//HOTKEY BINDINGS
// This section contains the keybindings used across the entire webpage.
// Specific hotkeys can be found in their respective sections.

document.addEventListener('keydown', function (event) {
    if (event.code === 'KeyL') {
        const inputs = document.querySelectorAll('.listeningLabels');
        inputs.forEach(input => {
            input.focus();
        });
        event.preventDefault();
    }
});

document.addEventListener('keydown', function (event) {
    if (event.code === 'Enter') {
        const buttons = document.querySelectorAll('.calculateBtn');
        buttons.forEach(button => {
            button.click();
        });
        event.preventDefault();
    }
});

function toggleHotkeysInstructions() {
    const hotkeysInstructions = document.getElementById("hotkeysInstructions");
    if (window.innerWidth <= 768) {
        hotkeysInstructions.style.display = 'none';
    }
    else {
        hotkeysInstructions.style.display = '';
    }
}

window.addEventListener("DOMContentLoaded", toggleHotkeysInstructions);
window.addEventListener('resize', toggleHotkeysInstructions);

//STATERS SECTION START
const selectSt = document.getElementById("selectSt");
const parametersSt = document.getElementById("parametersSt");

const calculateSt = document.getElementById("calculateSt");
const listeningStInput = document.getElementById("listeningStInput");
const readingWritingStInput = document.getElementById("readingWritingStInput");
const speakingStInput = document.getElementById("speakingStInput");

const stErrorMessaging = document.getElementById("stErrorMessaging");

const gradeSt = document.getElementById("gradeSt");

const listeningStResult = document.getElementById("listeningStResult");
const listeningStResultShields = document.getElementById("listeningStResultShields");

const readingWritingStResult = document.getElementById("readingWritingStResult");
const readingWritingStResultShields = document.getElementById("readingWritingStResultShields");

const speakingStResult = document.getElementById("speakingStResult");
const speakingStResultShields = document.getElementById("speakingStResultShields");
const shieldSumSt = document.getElementById("shieldSumSt");

document.addEventListener('keydown', function (event) {
    if (event.code === 'KeyS') {
        const stBtn = document.getElementById('selectSt');
        if (stBtn) {
            stBtn.click();
        }
    }
});

selectSt.addEventListener('click', function () {
    parametersSt.classList.toggle("hidden");
});

function calculateListeningScoreSt(listeningStInput) {
    listeningStInput = Number(listeningStInput);

    if (listeningStInput > 20) {
        stErrorMessaging.textContent = "The max score for Starters Listening cannot exceed 20 points.";
        listeningStResult.textContent = "error";
        listeningStResultShields.textContent = "";
        return;
    }

    stErrorMessaging.textContent = "";

    const thresholds = [
        { threshold: 18, shields: "5" },
        { threshold: 16, shields: "4" },
        { threshold: 13, shields: "3" },
        { threshold: 11, shields: "2" },
        { threshold: 1, shields: "1" },
        { threshold: 0, shields: "0" },
    ];

    for (const item of thresholds) {
        if (listeningStInput >= item.threshold) {
            listeningStResult.textContent = listeningStInput;
            listeningStResultShields.textContent = item.shields;
            return;
        }
    }
}

function calculateReadingWritingScoreSt(readingWritingStInput) {
    readingWritingStInput = Number(readingWritingStInput);

    if (readingWritingStInput > 25) {
        stErrorMessaging.textContent = "The max score for Starters Reading&Writing cannot exceed 25 points.";
        readingWritingStResult.textContent = "error";
        readingWritingStResultShields.textContent = "";
        return;
    }

    stErrorMessaging.textContent = "";

    const thresholds = [
        { threshold: 21, shields: "5" },
        { threshold: 19, shields: "4" },
        { threshold: 16, shields: "3" },
        { threshold: 13, shields: "2" },
        { threshold: 1, shields: "1" },
        { threshold: 0, shields: "0" },
    ];

    for (const item of thresholds) {
        if (readingWritingStInput >= item.threshold) {
            readingWritingStResult.textContent = readingWritingStInput;
            readingWritingStResultShields.textContent = item.shields;
            return;
        }
    }
}

function calculateSpeakingScoreSt(speakingStInput) {
    speakingStInput = Number(speakingStInput);

    if (speakingStInput > 15) {
        stErrorMessaging.textContent = "The max score for Starters Speaking cannot exceed 15 points.";
        speakingStResult.textContent = "error";
        speakingStResultShields.textContent = "";
        return;
    }

    stErrorMessaging.textContent = "";

    const thresholds = [
        { threshold: 13, shields: "5" },
        { threshold: 10, shields: "4" },
        { threshold: 7, shields: "3" },
        { threshold: 4, shields: "2" },
        { threshold: 1, shields: "1" },
        { threshold: 0, shields: "0" },
    ];

    for (const item of thresholds) {
        if (speakingStInput >= item.threshold) {
            speakingStResult.textContent = speakingStInput;
            speakingStResultShields.textContent = item.shields;
            return;
        }
    }
}

calculateSt.addEventListener("click", function () {

    calculateListeningScoreSt(listeningStInput.value);
    calculateReadingWritingScoreSt(readingWritingStInput.value);
    calculateSpeakingScoreSt(speakingStInput.value);

    const listeningResult = Number(listeningStResultShields.textContent);
    const readingWritingResult = Number(readingWritingStResultShields.textContent);
    const speakingResult = Number(speakingStResultShields.textContent);

    shieldSumSt.textContent = listeningResult + readingWritingResult + speakingResult;

    if ((listeningResult + readingWritingResult + speakingResult) >= 10
        && listeningResult > 2
        && readingWritingResult > 2
        && speakingResult > 2) {
        gradeSt.textContent = "Passed";
    }
    else {
        gradeSt.textContent = "Not passed";
    }
});

//STARTERS SECTION END

//MOVERS SECTION START
const selectMov = document.getElementById("selectMov");
const parametersMov = document.getElementById("parametersMov");

const calculateMov = document.getElementById("calculateMov");
const listeningMovInput = document.getElementById("listeningMovInput");
const readingWritingMovInput = document.getElementById("readingWritingMovInput");
const speakingMovInput = document.getElementById("speakingMovInput");

const movErrorMessaging = document.getElementById("movErrorMessaging");

const gradeMov = document.getElementById("gradeMov");

const listeningMovResult = document.getElementById("listeningMovResult");
const listeningMovResultShields = document.getElementById("listeningMovResultShields");

const readingWritingMovResult = document.getElementById("readingWritingMovResult");
const readingWritingMovResultShields = document.getElementById("readingWritingMovResultShields");

const speakingMovResult = document.getElementById("speakingMovResult");
const speakingMovResultShields = document.getElementById("speakingMovResultShields");

document.addEventListener('keydown', function (event) {
    if (event.code === 'KeyM') {
        const movBtn = document.getElementById('selectMov');
        if (movBtn) {
            movBtn.click();
        }
    }
});

selectMov.addEventListener('click', function () {
    parametersMov.classList.toggle("hidden");
});

function calculateListeningScoreMov(listeningMovInput) {
    listeningMovInput = Number(listeningMovInput);

    if (listeningMovInput > 25) {
        movErrorMessaging.textContent = "The max score for Movers Listening cannot exceed 25 points.";
        listeningMovResult.textContent = "error";
        listeningMovResultShields.textContent = "";
        return;
    }

    movErrorMessaging.textContent = "";

    const thresholds = [
        { threshold: 21, shields: "5" },
        { threshold: 18, shields: "4" },
        { threshold: 14, shields: "3" },
        { threshold: 11, shields: "2" },
        { threshold: 1, shields: "1" },
        { threshold: 0, shields: "0" },
    ];

    for (const item of thresholds) {
        if (listeningMovInput >= item.threshold) {
            listeningMovResult.textContent = listeningMovInput;
            listeningMovResultShields.textContent = item.shields;
            return;
        }
    }
}

function calculateReadingWritingScoreMov(readingWritingMovInput) {
    readingWritingMovInput = Number(readingWritingMovInput);

    if (readingWritingMovInput > 35) {
        movErrorMessaging.textContent = "The max score for Movers Reading&Writing cannot exceed 35 points.";
        readingWritingMovResult.textContent = "error";
        readingWritingMovResultShields.textContent = "";
        return;
    }

    movErrorMessaging.textContent = "";

    const thresholds = [
        { threshold: 33, shields: "5" },
        { threshold: 29, shields: "4" },
        { threshold: 24, shields: "3" },
        { threshold: 18, shields: "2" },
        { threshold: 1, shields: "1" },
        { threshold: 0, shields: "0" },
    ];

    for (const item of thresholds) {
        if (readingWritingMovInput >= item.threshold) {
            readingWritingMovResult.textContent = readingWritingMovInput;
            readingWritingMovResultShields.textContent = item.shields;
            return;
        }
    }
}

function calculateSpeakingScoreMov(speakingMovInput) {
    speakingMovInput = Number(speakingMovInput);

    if (speakingMovInput > 15) {
        movErrorMessaging.textContent = "The max score for Movers Speaking cannot exceed 15 points.";
        speakingMovResult.textContent = "error";
        speakingMovResultShields.textContent = "";
        return;
    }

    movErrorMessaging.textContent = "";

    const thresholds = [
        { threshold: 13, shields: "5" },
        { threshold: 10, shields: "4" },
        { threshold: 7, shields: "3" },
        { threshold: 4, shields: "2" },
        { threshold: 1, shields: "1" },
        { threshold: 0, shields: "0" },
    ];

    for (const item of thresholds) {
        if (speakingMovInput >= item.threshold) {
            speakingMovResult.textContent = speakingMovInput;
            speakingMovResultShields.textContent = item.shields;
            return;
        }
    }
}

calculateMov.addEventListener("click", function () {

    calculateListeningScoreMov(listeningMovInput.value);
    calculateReadingWritingScoreMov(readingWritingMovInput.value);
    calculateSpeakingScoreMov(speakingMovInput.value);

    const listeningResult = Number(listeningMovResultShields.textContent);
    const readingWritingResult = Number(readingWritingMovResultShields.textContent);
    const speakingResult = Number(speakingMovResultShields.textContent);

    shieldSumMov.textContent = listeningResult + readingWritingResult + speakingResult;

    if ((listeningResult + readingWritingResult + speakingResult) >= 10
        && listeningResult > 2
        && readingWritingResult > 2
        && speakingResult > 2) {
        gradeMov.textContent = "Passed";
    }
    else {
        gradeMov.textContent = "Not passed";
    }
});

//MOVERS SECTION END

//FLYERS SECTION START
const selectFl = document.getElementById("selectFl");
const parametersFl = document.getElementById("parametersFl");

const calculateFl = document.getElementById("calculateFl");
const listeningFlInput = document.getElementById("listeningFlInput");
const readingWritingFlInput = document.getElementById("readingWritingFlInput");
const speakingFlInput = document.getElementById("speakingFlInput");

const flErrorMessaging = document.getElementById("flErrorMessaging");

const gradeFl = document.getElementById("gradeFl");

const listeningFlResult = document.getElementById("listeningFlResult");
const listeningFlResultShields = document.getElementById("listeningFlResultShields");

const readingWritingFlResult = document.getElementById("readingWritingFlResult");
const readingWritingFlResultShields = document.getElementById("readingWritingFlResultShields");

const speakingFlResult = document.getElementById("speakingFlResult");
const speakingFlResultShields = document.getElementById("speakingFlResultShields");

document.addEventListener('keydown', function (event) {
    if (event.code === 'KeyF') {
        const flBtn = document.getElementById('selectFl');
        if (flBtn) {
            flBtn.click();
        }
    }
});

selectFl.addEventListener('click', function () {
    parametersFl.classList.toggle("hidden");
});

function calculateListeningScoreFl(listeningFlInput) {
    listeningFlInput = Number(listeningFlInput);

    if (listeningFlInput > 25) {
        flErrorMessaging.textContent = "The max score for Flyers Listening cannot exceed 25 points.";
        listeningFlResult.textContent = "error";
        listeningFlResultShields.textContent = "";
        return;
    }

    flErrorMessaging.textContent = "";

    const thresholds = [
        { threshold: 23, shields: "5" },
        { threshold: 20, shields: "4" },
        { threshold: 17, shields: "3" },
        { threshold: 14, shields: "2" },
        { threshold: 1, shields: "1" },
        { threshold: 0, shields: "0" },
    ];

    for (const item of thresholds) {
        if (listeningFlInput >= item.threshold) {
            listeningFlResult.textContent = listeningFlInput;
            listeningFlResultShields.textContent = item.shields;
            return;
        }
    }
}

function calculateReadingWritingScoreFl(readingWritingFlInput) {
    readingWritingFlInput = Number(readingWritingFlInput);

    if (readingWritingFlInput > 44) {
        flErrorMessaging.textContent = "The max score for Flyers Reading&Writing cannot exceed 44 points.";
        readingWritingFlResult.textContent = "error";
        readingWritingFlResultShields.textContent = "";
        return;
    }

    flErrorMessaging.textContent = "";

    const thresholds = [
        { threshold: 42, shields: "5" },
        { threshold: 36, shields: "4" },
        { threshold: 30, shields: "3" },
        { threshold: 24, shields: "2" },
        { threshold: 1, shields: "1" },
        { threshold: 0, shields: "0" },
    ];

    for (const item of thresholds) {
        if (readingWritingFlInput >= item.threshold) {
            readingWritingFlResult.textContent = readingWritingFlInput;
            readingWritingFlResultShields.textContent = item.shields;
            return;
        }
    }
}

function calculateSpeakingScoreFl(speakingFlInput) {
    speakingFlInput = Number(speakingFlInput);

    if (speakingFlInput > 15) {
        flErrorMessaging.textContent = "The max score for Flyers Speaking cannot exceed 15 points.";
        speakingFlResult.textContent = "error";
        speakingFlResultShields.textContent = "";
        return;
    }

    flErrorMessaging.textContent = "";

    const thresholds = [
        { threshold: 13, shields: "5" },
        { threshold: 10, shields: "4" },
        { threshold: 7, shields: "3" },
        { threshold: 4, shields: "2" },
        { threshold: 1, shields: "1" },
        { threshold: 0, shields: "0" },
    ];

    for (const item of thresholds) {
        if (speakingFlInput >= item.threshold) {
            speakingFlResult.textContent = speakingFlInput;
            speakingFlResultShields.textContent = item.shields;
            return;
        }
    }
}

calculateFl.addEventListener("click", function () {

    calculateListeningScoreFl(listeningFlInput.value);
    calculateReadingWritingScoreFl(readingWritingFlInput.value);
    calculateSpeakingScoreFl(speakingFlInput.value);

    const listeningResult = Number(listeningFlResultShields.textContent);
    const readingWritingResult = Number(readingWritingFlResultShields.textContent);
    const speakingResult = Number(speakingFlResultShields.textContent);

    shieldSumFl.textContent = listeningResult + readingWritingResult + speakingResult;

    if ((listeningResult + readingWritingResult + speakingResult) >= 10
        && listeningResult > 2
        && readingWritingResult > 2
        && speakingResult > 2) {
        gradeFl.textContent = "Passed";
    }
    else {
        gradeFl.textContent = "Not passed";
    }
});

//FLYERS SECTION END

//KET SECTION START
const selectKet = document.getElementById("selectKet");
const parametersKet = document.getElementById("parametersKet");

const calculateKet = document.getElementById("calculateKet");

const listeningKetInput = document.getElementById("listeningKetInput");
const readingWritingKetInput = document.getElementById("readingWritingKetInput");
const speakingKetInput = document.getElementById("speakingKetInput");

const ketErrorMessaging = document.getElementById("ketErrorMessaging");

const averageScoreKet = document.getElementById("averageScoreKet");

const listeningKetResult = document.getElementById("listeningKetResult");
const readingWritingKetResult = document.getElementById("readingWritingKetResult");
const speakingKetResult = document.getElementById("speakingKetResult");

const gradeKet = document.getElementById("gradeKet");

document.addEventListener('keydown', function (event) {
    if (event.code === 'KeyK') {
        const ketBtn = document.getElementById('selectKet');
        if (ketBtn) {
            ketBtn.click();
        }
    }
});

selectKet.addEventListener('click', function () {
    parametersKet.classList.toggle("hidden");
});

ketListening = {
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

ketReadingWriting = {
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
    0: 0
};

ketSpeaking = {
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

function calculateListeningScoreKet(inputValue) {
    let result = ketListening[inputValue];
    if (inputValue > 25) {
        ketErrorMessaging.textContent = "The max score for KET Listening cannot exceed 25 points.";
        result = "Error";
    }
    return result;
}

function calculateReadingWritingScoreKet(inputValue) {
    let result = ketReadingWriting[inputValue];
    if (inputValue < 12) {
        result = 0;
    }
    else if (inputValue > 60) {
        ketErrorMessaging.textContent = "The max score for KET Reading&Writing cannot exceed 60 points.";
        result = "Error";
    }
    return result;
}

function calculateSpeakingScoreKet(inputValue) {
    let result = ketSpeaking[inputValue];
    if (inputValue > 45) {
        ketErrorMessaging.textContent = "The max score for KET Speaking cannot exceed 45 points.";
        result = "Error";
    }
    return result;
}

calculateKet.addEventListener('click', function () {
    const resultListening = calculateListeningScoreKet(Number(listeningKetInput.value));
    const resultReadingWriting = calculateReadingWritingScoreKet(Number(readingWritingKetInput.value));
    const resultSpeaking = calculateSpeakingScoreKet(Number(speakingKetInput.value));

    listeningKetResult.textContent = resultListening;
    readingWritingKetResult.textContent = resultReadingWriting;
    speakingKetResult.textContent = resultSpeaking;

    const averageKetResult = Math.round((0.25 * resultListening) + (0.50 * resultReadingWriting) + (0.25 * resultSpeaking));
    averageScoreKet.textContent = averageKetResult;

    if (averageKetResult >= 140) {
        gradeKet.textContent = "Grade A (B1 level)";
    }
    else if (averageKetResult >= 133) {
        gradeKet.textContent = "Grade B (A2 level)";
    }
    else if (averageKetResult >= 120) {
        gradeKet.textContent = "Grade C (A2 level)";
    }
    else {
        gradeKet.textContent = "A1 level";
    }
});

//KET SECTION END

//PET SECTION START
const selectPet = document.getElementById("selectPet");
const parametersPet = document.getElementById("parametersPet");

const calculatePet = document.getElementById("calculatePet");

const listeningPetInput = document.getElementById("listeningPetInput");
const readingPetInput = document.getElementById("readingPetInput");
const writingPetInput = document.getElementById("writingPetInput");
const speakingPetInput = document.getElementById("speakingPetInput");

const petErrorMessaging = document.getElementById("petErrorMessaging");

const averageScorePet = document.getElementById("averageScorePet");

const listeningPetResult = document.getElementById("listeningPetResult");
const readingPetResult = document.getElementById("readingPetResult");
const writingPetResult = document.getElementById("writingPetResult");
const speakingPetResult = document.getElementById("speakingPetResult");

const gradePet = document.getElementById("gradePet");

document.addEventListener('keydown', function (event) {
    if (event.code === 'KeyP') {
        const petBtn = document.getElementById('selectPet');
        if (petBtn) {
            petBtn.click();
        }
    }
});

selectPet.addEventListener('click', function () {
    parametersPet.classList.toggle("hidden");
});

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

function calculateListeningScorePet(inputValue) {
    let result = petListening[inputValue];
    if (inputValue >= 26) {
        petErrorMessaging.textContent = "The max score for PET Listening cannot exceed 25 points.";
        result = "Error";
    }
    return result;
}

function calculateReadingScorePet(inputValue) {
    let result = petReading[inputValue];
    if (inputValue >= 33) {
        petErrorMessaging.textContent = "The max score for PET Reading cannot exceed 32 points.";
        result = "Error";
    }
    return result;
}

function calculateWritingScorePet(inputValue) {
    let result = petWriting[inputValue];
    if (inputValue >= 41) {
        petErrorMessaging.textContent = "The max score for PET Writing cannot exceed 40 points.";
        result = "Error";
    }
    return result;
}

function calculateSpeakingScorePet(inputValue) {
    let result = petSpeaking[inputValue];
    if (inputValue >= 31) {
        petErrorMessaging.textContent = "The max score for PET Speaking cannot exceed 30 points.";
        result = "Error";
    }
    return result;
}

calculatePet.addEventListener('click', function () {
    const resultListening = calculateListeningScorePet(Number(listeningPetInput.value));
    const resultReading = calculateReadingScorePet(Number(readingPetInput.value));
    const resultWriting = calculateWritingScorePet(Number(writingPetInput.value));
    const resultSpeaking = calculateSpeakingScorePet(Number(speakingPetInput.value));

    listeningPetResult.textContent = resultListening;
    readingPetResult.textContent = resultReading;
    writingPetResult.textContent = resultWriting;
    speakingPetResult.textContent = resultSpeaking;

    const averagePetResult = Math.round((0.25 * resultListening) + (0.25 * resultReading) + (0.25 * resultWriting) + (0.25 * resultSpeaking));
    averageScorePet.textContent = averagePetResult;

    if (averagePetResult >= 160) {
        gradePet.textContent = "Grade A (B2 level)";
    }
    else if (averagePetResult >= 153) {
        gradePet.textContent = "Grade B (B1 level)";
    }
    else if (averagePetResult >= 140) {
        gradePet.textContent = "Grade C (B1 level)";
    }
    else if (averagePetResult >= 120) {
        gradePet.textContent = "A2 level";
    }
    else {
        gradePet.textContent = "A1 level";
    }
});

//PET SECTION END

//FCE SECTION START
const selectFCE = document.getElementById("selectFCE");
const parametersFCE = document.getElementById("parametersFCE");

const calculateFCE = document.getElementById("calculateFCE");

const listeningFCEInput = document.getElementById("listeningFCEInput");
const readingFCEInput = document.getElementById("readingFCEInput");
const useFCEInput = document.getElementById("useFCEInput");
const writingFCEInput = document.getElementById("writingFCEInput");
const speakingFCEInput = document.getElementById("speakingFCEInput");

const fceErrorMessaging = document.getElementById("fceErrorMessaging");

const averageScoreFCE = document.getElementById("averageScoreFCE");

const listeningFCEResult = document.getElementById("listeningFCEResult");
const readingFCEResult = document.getElementById("readingFCEResult");
const useFCEResult = document.getElementById("useFCEResult");
const writingFCEResult = document.getElementById("writingFCEResult");
const speakingFCEResult = document.getElementById("speakingFCEResult");

const gradeFCE = document.getElementById("gradeFCE");

document.addEventListener('keydown', function (event) {
    if (event.code === 'KeyE') {
        const fceBtn = document.getElementById('selectFCE');
        if (fceBtn) {
            fceBtn.click();
        }
    }
});

selectFCE.addEventListener('click', function () {
    parametersFCE.classList.toggle("hidden");
});

fceListening = {
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

fceReading = {
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

fceUse = {
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

fceWriting = {
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

fceSpeaking = {
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

function calculateListeningScoreFCE(inputValue) {
    let result = fceListening[inputValue];
    if (inputValue > 30) {
        fceErrorMessaging.textContent = "The max score for FCE Listening cannot exceed 30 points.";
        result = "Error";
    }
    return result;
}

function calculateReadingScoreFCE(inputValue) {
    let result = fceReading[inputValue];
    if (inputValue > 42) {
        fceErrorMessaging.textContent = "The max score for FCE Reading cannot exceed 42 points.";
        result = "Error";
    }
    return result;
}

function calculateUseScoreFCE(inputValue) {
    let result = fceUse[inputValue];
    if (inputValue > 28) {
        fceErrorMessaging.textContent = "The max score for FCE Use of English cannot exceed 28 points.";
        result = "Error";
    }
    return result;
}

function calculateWritingScoreFCE(inputValue) {
    let result = fceWriting[inputValue];
    if (inputValue > 40) {
        fceErrorMessaging.textContent = "The max score for FCE Writing cannot exceed 40 points.";
        result = "Error";
    }
    return result;
}

function calculateSpeakingScoreFCE(inputValue) {
    let result = fceSpeaking[inputValue];
    if (inputValue > 60) {
        fceErrorMessaging.textContent = "The max score for FCE Speaking cannot exceed 60 points.";
        result = "Error";
    }
    return result;
}

calculateFCE.addEventListener('click', function () {
    const resultListening = calculateListeningScoreFCE(Number(listeningFCEInput.value));
    const resultReading = calculateReadingScoreFCE(Number(readingFCEInput.value));
    const resultUse = calculateUseScoreFCE(Number(useFCEInput.value));
    const resultWriting = calculateWritingScoreFCE(Number(writingFCEInput.value));
    const resultSpeaking = calculateSpeakingScoreFCE(Number(speakingFCEInput.value));

    listeningFCEResult.textContent = resultListening;
    readingFCEResult.textContent = resultReading;
    useFCEResult.textContent = resultUse;
    writingFCEResult.textContent = resultWriting;
    speakingFCEResult.textContent = resultSpeaking;

    const averageFCEResult = Math.round((0.20 * resultListening) + (0.20 * resultReading) + (0.20 * resultUse) + (0.20 * resultWriting) + (0.20 * resultSpeaking));
    averageScoreFCE.textContent = averageFCEResult;

    if (averageFCEResult >= 180) {
        gradeFCE.textContent = "Grade A (C1 level)";
    }
    else if (averageFCEResult >= 173) {
        gradeFCE.textContent = "Grade B (B2 level)";
    }
    else if (averageFCEResult >= 160) {
        gradeFCE.textContent = "Grade C (B2 level)";
    }
    else if (averageFCEResult >= 140) {
        gradeFCE.textContent = "B1 level";
    }
    else if (averageFCEResult >= 120) {
        gradeFCE.textContent = "A2 level";
    }
    else {
        gradeFCE.textContent = "A1 level";
    }
});
//FCE SECTION END

//CAE SECTION START
const selectCAE = document.getElementById("selectCAE");
const parametersCAE = document.getElementById("parametersCAE");

const calculateCAE = document.getElementById("calculateCAE");

const listeningCAEInput = document.getElementById("listeningCAEInput");
const readingCAEInput = document.getElementById("readingCAEInput");
const useCAEInput = document.getElementById("useCAEInput");
const writingCAEInput = document.getElementById("writingCAEInput");
const speakingCAEInput = document.getElementById("speakingCAEInput");

const caeErrorMessaging = document.getElementById("caeErrorMessaging");

const averageScoreCAE = document.getElementById("averageScoreCAE");

const listeningCAEResult = document.getElementById("listeningCAEResult");
const readingCAEResult = document.getElementById("readingCAEResult");
const useCAEResult = document.getElementById("useCAEResult");
const writingCAEResult = document.getElementById("writingCAEResult");
const speakingCAEResult = document.getElementById("speakingCAEResult");

const gradeCAE = document.getElementById("gradeCAE");

document.addEventListener('keydown', function (event) {
    if (event.code === 'KeyC') {
        const caeBtn = document.getElementById('selectCAE');
        if (caeBtn) {
            caeBtn.click();
        }
    }
});

selectCAE.addEventListener('click', function () {
    parametersCAE.classList.toggle("hidden");
});
caeListening = {
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

caeReading = {
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

caeUse = {
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

caeWriting = {
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

caeSpeaking = {
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

function calculateListeningScoreCAE(inputValue) {
    let result = caeListening[inputValue];
    if (inputValue > 30) {
        caeErrorMessaging.textContent = "The max score for CAE Listening cannot exceed 30 points.";
        result = "Error";
    }
    return result;
}

function calculateReadingScoreCAE(inputValue) {
    let result = caeReading[inputValue];
    if (inputValue > 50) {
        fceErrorMessaging.textContent = "The max score for CAE Reading cannot exceed 50 points.";
        result = "Error";
    }
    return result;
}

function calculateUseScoreCAE(inputValue) {
    let result = caeUse[inputValue];
    if (inputValue > 28) {
        fceErrorMessaging.textContent = "The max score for CAE Use of English cannot exceed 28 points.";
        result = "Error";
    }
    return result;
}

function calculateWritingScoreCAE(inputValue) {
    let result = caeWriting[inputValue];
    if (inputValue > 40) {
        caeErrorMessaging.textContent = "The max score for CAE Writing cannot exceed 40 points.";
        result = "Error";
    }
    return result;
}

function calculateSpeakingScoreCAE(inputValue) {
    let result = caeSpeaking[inputValue];
    if (inputValue > 75) {
        caeErrorMessaging.textContent = "The max score for CAE Speaking cannot exceed 75 points.";
        result = "Error";
    }
    return result;
}

calculateCAE.addEventListener('click', function () {
    const resultListening = calculateListeningScoreCAE(Number(listeningCAEInput.value));
    const resultReading = calculateReadingScoreCAE(Number(readingCAEInput.value));
    const resultUse = calculateUseScoreCAE(Number(useCAEInput.value));
    const resultWriting = calculateWritingScoreCAE(Number(writingCAEInput.value));
    const resultSpeaking = calculateSpeakingScoreCAE(Number(speakingCAEInput.value));

    listeningCAEResult.textContent = resultListening;
    readingCAEResult.textContent = resultReading;
    useCAEResult.textContent = resultUse;
    writingCAEResult.textContent = resultWriting;
    speakingCAEResult.textContent = resultSpeaking;

    const averageCAEResult = Math.round((0.20 * resultListening) + (0.20 * resultReading) + (0.20 * resultUse) + (0.20 * resultWriting) + (0.20 * resultSpeaking));
    averageScoreCAE.textContent = averageCAEResult;

    if (averageCAEResult >= 200) {
        gradeCAE.textContent = "Grade A (C2 level)";
    }
    else if (averageCAEResult >= 193) {
        gradeCAE.textContent = "Grade B (C1 level)";
    }
    else if (averageCAEResult >= 180) {
        gradeCAE.textContent = "Grade C (C1 level)";
    }
    else if (averageCAEResult >= 160) {
        gradeCAE.textContent = "B2 level";
    }
    else if (averageCAEResult >= 140) {
        gradeCAE.textContent = "B1 level";
    }
    else if (averageCAEResult >= 120) {
        gradeCAE.textContent = "A2 level";
    }
    else {
        gradeCAE.textContent = "A1 level";
    }
});

//CAE SECTION END