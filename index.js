import { calculatePreStartersResult,
    calculateStartersResult,
    calculateMoversResult,
    calculateFlyersResult,
    calculateKetResult,
    calculatePetResult,
    calculateFceResult,
    calculateCaeResult } from './cert_calculator.js';

function participantForm() {

    const participantName = document.getElementById("participantName");
    const participantSurname = document.getElementById("participantSurname");
    const examDate = document.getElementById("examDate");
    const teacherLetter = document.getElementById("teacherLetter");

    const participantNameError = document.getElementById("participantNameError");
    const participantSurnameError = document.getElementById("participantSurnameError");
    const examDateError = document.getElementById("examDateError");
    const teacherLetterError = document.getElementById("teacherLetterError");

    let isValid = true;

    participantNameError.textContent = "";
    participantSurnameError.textContent = "";
    examDateError.textContent = "";
    teacherLetterError.textContent = "";

    participantName.classList.remove("input_error_theme_notion");
    participantSurname.classList.remove("input_error_theme_notion");
    examDate.classList.remove("input_error_theme_notion");
    teacherLetter.classList.remove("input_error_theme_notion");

    if (participantName.value.trim() === "") {
        participantName.classList.add("input_error_theme_notion");
        participantNameError.textContent = "Participant's Name is required.";
        isValid = false;
    }

    if (participantSurname.value.trim() === "") {
        participantSurname.classList.add("input_error_theme_notion");
        participantSurnameError.textContent = "Participant's Surname is required.";
        isValid = false;
    }

    if (examDate.value.trim() === "") {
        examDate.classList.add("input_error_theme_notion");
        examDateError.textContent = "Exam date is required.";
        isValid = false;
    }

    const examDates = document.querySelectorAll(".participant-form__options-list-item");

    const isValidExamDate = Array.from(examDates).some(option =>
        option.textContent.trim().toLocaleLowerCase() === examDate.value.trim().toLowerCase());

    if (!isValidExamDate) {
        examDate.classList.add("input_error_theme_notion");
        examDateError.textContent = "Exam date is invalid.";
        isValid = false;
    }

    if (teacherLetter.value.trim() === "") {
        teacherLetter.classList.add("input_error_theme_notion");
        teacherLetterError.textContent = "Don't forget to include your letter.";
        isValid = false;
    }

    return isValid;
}

function mergeNameAndSurname() {
    const participantName = document.getElementById("participantName").value.trim();
    const participantSurname = document.getElementById("participantSurname").value.trim();

    let formattedName;
    let formattedSurname;

    //check for double name or surname
    if (participantName.includes("-")) {
        formattedName = participantName;
    } else {
        formattedName = participantName.charAt(0).toUpperCase() + participantName.slice(1).toLowerCase();
    }

    if (participantSurname.includes("-")) {
        formattedSurname = participantSurname;
    } else {
        formattedSurname = participantSurname.charAt(0).toUpperCase() + participantSurname.slice(1).toLowerCase();
    }
        
    return `${formattedName} ${formattedSurname}`;
}

// controls the dropdown input
const examDateInput = document.getElementById('examDate');
const dropdownItems = document.querySelectorAll('.participant-form__options-list-item');

dropdownItems.forEach(item => {
  item.addEventListener('click', () => {
    examDateInput.value = item.textContent.trim();
  });
});

// pumpkin weekend mode
const sessionTypeModeSwitcher = document.getElementById("switchToPumpkin");
const certGenPageTitle = document.getElementById("certGenPageTitle");
const examDatesLabel = document.querySelector(".exam-dates-label");
const examDatesInput = document.querySelector(".exam-dates-input");

sessionTypeModeSwitcher.addEventListener("change", function () {
    if (sessionTypeModeSwitcher.checked) {
        document.title = "Pumpkin Weekend Certificates";
        certGenPageTitle.textContent = "Pumpkin Weekend Certificates🎃";
        examDatesLabel.classList.add("disabled");
        examDatesInput.classList.add("disabled");
        examDateInput.value = "October 25th to November 4th";

    } else {
        document.title = "MMC Certificate Generator";
        certGenPageTitle.textContent = "MMC Certificate Generator";
        examDatesLabel.classList.remove("disabled");
        examDatesInput.classList.remove("disabled");
    }
});

const selectExamButtons = document.querySelectorAll(".js-select-exam__button");
const examForms = document.querySelectorAll(".exam-form");

function disableForms() {
    examForms.forEach(form => {
        form.classList.add("disabled");
    });
}

selectExamButtons.forEach(button => {
    button.addEventListener('click', () => {
        disableForms();
        
        switch (button.textContent) {
            case "Pre-St":
                const examFormPreStarters = document.querySelector(".js-exam-form-pre-starters");
                examFormPreStarters.classList.toggle("disabled");
                break;
            case "Starters":
                const examFormStarters = document.querySelector(".js-exam-form-starters");
                examFormStarters.classList.toggle("disabled");
                break;
            case "Movers":
                const examFormMovers = document.querySelector(".js-exam-form-movers");
                examFormMovers.classList.toggle("disabled");
                break;
            case "Flyers":
                const examFormFlyers = document.querySelector(".js-exam-form-flyers");
                examFormFlyers.classList.toggle("disabled");
                break;
            case "KET":
                const examFormKet = document.querySelector(".js-exam-form-ket");
                examFormKet.classList.toggle("disabled");
                break;
            case "PET":
                const examFormPet = document.querySelector(".js-exam-form-pet");
                examFormPet.classList.toggle("disabled");
                break;
            case "FCE":
                const examFormFce = document.querySelector(".js-exam-form-fce");
                examFormFce.classList.toggle("disabled");
                break;
            case "CAE":
                const examFormCae = document.querySelector(".js-exam-form-cae");
                examFormCae.classList.toggle("disabled");
                break;
        }
    });
});

let examLevel;

function getExamName() {
    const buttonsId =
    [
        "pre-startersSelect", "startersSelect",
        "moversSelect", "flyersSelect",
        "ketSelect", "petSelect",
        "fceSelect", "caeSelect"
    ];

    buttonsId.forEach(id => {
        const button = document.getElementById(id);
        if (button) {
            button.addEventListener("click", () => {
                examLevel = button.textContent;
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', getExamName);

const teacherLetter = document.getElementById("teacherLetter");
const teacherLetterError = document.getElementById("teacherLetterError");
const wordCountDisplay = document.getElementById("wordCountDisplay");
const maxWords = 130;

teacherLetter.addEventListener("input", () => {
    const words = teacherLetter.value.trim().split(/\s+/).filter(word => word !== "");
    const wordCount = words.length;

        if (wordCount >= maxWords) {
            teacherLetter.value = words.slice(0, maxWords).join(" ");
            wordCountDisplay.textContent = `${maxWords}/${maxWords}`;
            teacherLetterError.textContent = "You have exceeded the maximum number of words.";
        }
        else {
            wordCountDisplay.textContent = `${wordCount}/${maxWords}`;
        }
});

function isTeacherLetterTooLong() {
    const words = teacherLetter.value.trim().split(/\s+/).filter(word => word !== "");
    const wordCount = words.length;
    let isTooLong = true;

    teacherLetter.classList.remove(".input_error_theme_notion");
    teacherLetterError.textContent = "";

    if (wordCount >= maxWords) {
        teacherLetterError.textContent = "You have exceeded the maximum number of words.";
        teacherLetter.classList.add("input_error_theme_notion");
        isTooLong = false;
    }
    else {
        teacherLetterError.textContent = "";
        teacherLetter.classList.remove("input_error_theme_notion");
        isTooLong = true;
    }

    return isTooLong;
}

function generatePreStartersCertificate() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        compress: true,
    });

    const backgroundImg = new Image();
    backgroundImg.src = document.title === "Pumpkin Weekend Certificates" ? window.YLE_TEMPLATE_CERT_PUMPKIN : window.YLE_TEMPLATE_CERT;
    backgroundImg.onload = async () => {

        doc.addImage(backgroundImg, 'PNG', 0, 0, 210, 297);

        const preStartersResults = calculatePreStartersResult();

        const {
            listening: { preStartersListeningScore, preStartersListeningTotal },
            readingWriting: { preStartersReadingWritingScore, preStartersReadingWritingTotal },
            speaking: { preStartersSpeakingScore, preStartersSpeakingTotal },
            preStartersGrade,
            totalSum
         } = preStartersResults;

        const fullName = mergeNameAndSurname();

        const examLevel = "Pre-Starters";

        const examDate = document.getElementById('examDate').value;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(14);
        doc.text(fullName, 95, 72, { align: 'left' });

        doc.setFontSize(14);
        doc.text(examLevel, 95, 84.5, { align: 'left' });

        doc.setFontSize(14);
        doc.text(examDate, 95, 96.4, { align: 'left' });

        doc.setFontSize(16);
        doc.text(`${String(preStartersListeningScore)}`, 67, 130, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(preStartersListeningTotal)}`, 67, 142, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(preStartersReadingWritingScore)}`, 101, 130, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(preStartersReadingWritingTotal)}`, 101, 142, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(preStartersSpeakingScore)}`, 135, 130, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(preStartersSpeakingTotal)}`, 135, 142, { align: "left" });

        doc.setFontSize(16);
        doc.text(preStartersGrade, 167, 130, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(totalSum)}`, 170, 142, { align: "left" });

        const teacherLetter = document.getElementById("teacherLetter").value;
        const rightMargin = 25;
        const leftMargin = 25;

        const pageWidth = doc.internal.pageSize.getWidth();
        const maxWidth = pageWidth - leftMargin - rightMargin;

        doc.setFontSize(14);
        doc.text(teacherLetter, leftMargin, 175, { maxWidth: maxWidth });

        doc.save(fullName + " " + examLevel);

        const studentData = {
            name: fullName,
            date: examDate,
            examType: examLevel,
            overallScore: totalSum,
            grade: preStartersGrade
        };

        sendDataToGoogleSheets(studentData);
    }
}

function generateStartersCertificate() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        compress: true,
    });

    const backgroundImg = new Image();
    backgroundImg.src = document.title === "Pumpkin Weekend Certificates" ? window.YLE_TEMPLATE_CERT_PUMPKIN : window.YLE_TEMPLATE_CERT;
    backgroundImg.onload = async () => {

        doc.addImage(backgroundImg, 'PNG', 0, 0, 210, 297);

        const startersResults = calculateStartersResult();

        const {
            listening: { startersListeningScore, startersListeningShields },
            readingWriting: { startersReadingWritingScore, startersReadingWritingShields },
            speaking: { startersSpeakingScore, startersSpeakingShields },
            startersShieldSum,
            startersGrade } = startersResults;

        const fullName = mergeNameAndSurname();

        const examDate = document.getElementById('examDate').value;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(14);
        doc.text(fullName, 95, 72, { align: 'left' });

        doc.setFontSize(14);
        doc.text(examLevel, 95, 84.5, { align: 'left' });

        doc.setFontSize(14);
        doc.text(examDate, 95, 96.4, { align: 'left' });

        doc.setFontSize(16);
        doc.text(`${String(startersListeningScore)}/20`, 64, 130, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(startersListeningShields)}/5`, 67, 142, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(startersReadingWritingScore)}/25`, 98, 130, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(startersReadingWritingShields)}/5`, 101, 142, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(startersSpeakingScore)}/15`, 132, 130, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(startersSpeakingShields)}/5`, 135, 142, { align: "left" });

        doc.setFontSize(16);
        doc.text(startersGrade, 167, 130, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(startersShieldSum)}/15`, 166, 142, { align: "left" });

        const teacherLetter = document.getElementById("teacherLetter").value;
        const rightMargin = 25;
        const leftMargin = 25;

        const pageWidth = doc.internal.pageSize.getWidth();
        const maxWidth = pageWidth - leftMargin - rightMargin;

        doc.setFontSize(14);
        doc.text(teacherLetter, leftMargin, 175, { maxWidth: maxWidth });

        doc.save(fullName + " " + examLevel);

        const studentData = {
            name: fullName,
            date: examDate,
            examType: examLevel,
            overallScore: startersShieldSum,
            grade: startersGrade
        };

        sendDataToGoogleSheets(studentData);
    }
}

function generateMoversCertificate() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        compress: true,
    });

    const backgroundImg = new Image();
    backgroundImg.src = document.title === "Pumpkin Weekend Certificates" ? window.YLE_TEMPLATE_CERT_PUMPKIN : window.YLE_TEMPLATE_CERT;
    backgroundImg.onload = async () => {

        doc.addImage(backgroundImg, 'PNG', 0, 0, 210, 297);

        const moversResults = calculateMoversResult();

        const {
            listening: { moversListeningScore, moversListeningShields },
            readingWriting: { moversReadingWritingScore, moversReadingWritingShields },
            speaking: { moversSpeakingScore, moversSpeakingShields },
            moversShieldSum,
            moversGrade,
        } = moversResults;

        const fullName = mergeNameAndSurname();

        const examDate = document.getElementById('examDate').value;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(14);
        doc.text(fullName, 95, 72, { align: 'left' });

        doc.setFontSize(14);
        doc.text(examLevel, 95, 84.5, { align: 'left' });

        doc.setFontSize(14);
        doc.text(examDate, 95, 96.4, { align: 'left' });

        doc.setFontSize(16);
        doc.text(`${String(moversListeningScore)}/25`, 64, 130, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(moversListeningShields)}/5`, 67, 142, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(moversReadingWritingScore)}/39`, 98, 130, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(moversReadingWritingShields)}/5`, 101, 142, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(moversSpeakingScore)}/15`, 132, 130, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(moversSpeakingShields)}/5`, 135, 142, { align: "left" });

        doc.setFontSize(16);
        doc.text(moversGrade, 167, 130, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(moversShieldSum)}/15`, 166, 142, { align: "left" });

        const teacherLetter = document.getElementById("teacherLetter").value;
        const rightMargin = 25;
        const leftMargin = 25;

        const pageWidth = doc.internal.pageSize.getWidth();
        const maxWidth = pageWidth - leftMargin - rightMargin;

        doc.setFontSize(14);
        doc.text(teacherLetter, leftMargin, 175, { maxWidth: maxWidth });

        doc.save(fullName + " " + examLevel);

        const studentData = {
            name: fullName,
            date: examDate,
            examType: examLevel,
            overallScore: moversShieldSum,
            grade: moversGrade
        };

        sendDataToGoogleSheets(studentData);
    }
}

function generateFlyersCertificate() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        compress: true,
    });

    const backgroundImg = new Image();
    backgroundImg.src = document.title === "Pumpkin Weekend Certificates" ? window.YLE_TEMPLATE_CERT_PUMPKIN : window.YLE_TEMPLATE_CERT;
    backgroundImg.onload = async () => {

        doc.addImage(backgroundImg, 'PNG', 0, 0, 210, 297);

        const flyersResults = calculateFlyersResult();

        const {
            listening: { flyersListeningScore, flyersListeningShields },
            readingWriting: { flyersReadingWritingScore, flyersReadingWritingShields },
            speaking: { flyersSpeakingScore, flyersSpeakingShields },
            flyersShieldSum,
            flyersGrade,
        } = flyersResults;

        const fullName = mergeNameAndSurname();

        const examDate = document.getElementById('examDate').value;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(14);
        doc.text(fullName, 95, 72, { align: 'left' });

        doc.setFontSize(14);
        doc.text(examLevel, 95, 84.5, { align: 'left' });

        doc.setFontSize(14);
        doc.text(examDate, 95, 96.4, { align: 'left' });

        doc.setFontSize(16);
        doc.text(`${String(flyersListeningScore)}/25`, 64, 130, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(flyersListeningShields)}/5`, 67, 142, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(flyersReadingWritingScore)}/48`, 98, 130, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(flyersReadingWritingShields)}/5`, 101, 142, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(flyersSpeakingScore)}/15`, 132, 130, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(flyersSpeakingShields)}/5`, 135, 142, { align: "left" });

        doc.setFontSize(16);
        doc.text(flyersGrade, 167, 130, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(flyersShieldSum)}/15`, 166, 142, { align: "left" });

        const teacherLetter = document.getElementById("teacherLetter").value;
        const rightMargin = 25;
        const leftMargin = 25;

        const pageWidth = doc.internal.pageSize.getWidth();
        const maxWidth = pageWidth - leftMargin - rightMargin;

        doc.setFontSize(14);
        doc.text(teacherLetter, leftMargin, 175, { maxWidth: maxWidth });

        doc.save(fullName + " " + examLevel);

        const studentData = {
            name: fullName,
            date: examDate,
            examType: examLevel,
            overallScore: flyersShieldSum,
            grade: flyersGrade
        };

        sendDataToGoogleSheets(studentData);
    }
}

function generateKetCertificate() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        compress: true,
    });

    const backgroundImg = new Image();
    backgroundImg.src = document.title === "Pumpkin Weekend Certificates" ? window.KET_TEMPLATE_CERT_PUMPKIN : window.KET_TEMPLATE_CERT;
    backgroundImg.onload = async () => {

        doc.addImage(backgroundImg, 'PNG', 0, 0, 210, 297);

        const ketResults = calculateKetResult();

        const {
            listening: { ketListeningInputValue, listeningScore },
            readingWriting: { ketReadingWritingInputValue, readingWritingScore },
            speaking: { ketSpeakingInputValue, speakingScore },
            ketAverageScore,
            ketGrade, } = ketResults;

        const fullName = mergeNameAndSurname();

        const examDate = document.getElementById('examDate').value;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(14);
        doc.text(fullName, 95, 72, { align: 'left' });

        doc.setFontSize(14);
        doc.text(examLevel, 95, 84.5, { align: 'left' });

        doc.setFontSize(14);
        doc.text(examDate, 95, 96.4, { align: 'left' });

        doc.setFontSize(16);
        doc.text(`${String(ketListeningInputValue)}/25`, 64, 130, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(listeningScore)}/150`, 61, 142, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(ketReadingWritingInputValue)}/60`, 98, 130, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(readingWritingScore)}/150`, 95, 142, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(ketSpeakingInputValue)}/45`, 132, 130, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(speakingScore)}/150`, 129, 142, { align: "left" });

       if (ketAverageScore <= 99) {
            doc.setFontSize(16);
            doc.text(String(ketAverageScore), 170, 130, { align: "left" });

            doc.setFontSize(14);
            doc.text(ketGrade, 164, 142, { align: "left" }); 
        }

        else if (ketAverageScore <= 119) {
            doc.setFontSize(16);
            doc.text(String(ketAverageScore), 168, 130, { align: "left" });
            
            doc.setFontSize(14);
            doc.text(ketGrade, 164, 142, { align: "left" }); 
        }

        else {
            doc.setFontSize(16);
            doc.text(String(ketAverageScore), 168, 130, { align: "left" });

            doc.setFontSize(14);
            doc.text(ketGrade, 159, 142, { align: "left" }); 
        }

        const teacherLetter = document.getElementById("teacherLetter").value;
        const rightMargin = 25;
        const leftMargin = 25;

        const pageWidth = doc.internal.pageSize.getWidth();
        const maxWidth = pageWidth - leftMargin - rightMargin;

        doc.setFontSize(14);
        doc.text(teacherLetter, leftMargin, 175, { maxWidth: maxWidth });

        doc.save(fullName + " " + examLevel);

        const studentData = {
            name: fullName,
            date: examDate,
            examType: examLevel,
            overallScore: ketAverageScore,
            grade: ketGrade
        };

        sendDataToGoogleSheets(studentData);
    }
}

function generatePetCertificate() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        compress: true,
    });

    const backgroundImg = new Image();
    backgroundImg.src = document.title === "Pumpkin Weekend Certificates" ? window.PET_TEMPLATE_CERT_PUMPKIN : window.PET_TEMPLATE_CERT;
    backgroundImg.onload = () => {

        doc.addImage(backgroundImg, 'PNG', 0, 0, 210, 297);

        const petResults = calculatePetResult();

        const {
            listening: { petListeningInputValue, listeningScore },
            reading: { petReadingInputValue, readingScore },
            writing: { petWritingInputValue, writingScore },
            speaking: { petSpeakingInputValue, speakingScore },
            petAverageScore,
            petGrade, } = petResults;

        const fullName = mergeNameAndSurname();

        const examDate = document.getElementById('examDate').value;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(14);
        doc.text(fullName, 95, 72, { align: 'left' });

        doc.setFontSize(14);
        doc.text(examLevel, 95, 84.5, { align: 'left' });

        doc.setFontSize(14);
        doc.text(examDate, 95, 96.4, { align: 'left' });

        doc.setFontSize(16);
        doc.text(`${String(petListeningInputValue)}/25`, 56, 130, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(listeningScore)}/170`, 53, 142, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(petReadingInputValue)}/32`, 85, 130, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(readingScore)}/170`, 81, 142, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(petWritingInputValue)}/40`, 113, 130, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(writingScore)}/170`, 109, 142, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(petSpeakingInputValue)}/30`, 141, 130, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(speakingScore)}/170`, 138, 142, { align: "left" });

       if (petAverageScore <= 99) {
            doc.setFontSize(16);
            doc.text(String(petAverageScore), 173, 130, { align: "left" });

            doc.setFontSize(14);
            doc.text(petGrade, 168, 142, { align: "left" }); 
        }

        else if (petAverageScore <= 129) {
            doc.setFontSize(16);
            doc.text(String(petAverageScore), 171, 130, { align: "left" });
            
            doc.setFontSize(14);
            doc.text(petGrade, 168, 142, { align: "left" }); 
        }

        else {
            doc.setFontSize(16);
            doc.text(String(petAverageScore), 171, 130, { align: "left" });

            doc.setFontSize(12);
            doc.text(petGrade, 164, 142, { align: "left" }); 
        }

        const teacherLetter = document.getElementById("teacherLetter").value;
        const rightMargin = 25;
        const leftMargin = 25;

        const pageWidth = doc.internal.pageSize.getWidth();
        const maxWidth = pageWidth - leftMargin - rightMargin;

        doc.setFontSize(14);
        doc.text(teacherLetter, leftMargin, 175, { maxWidth: maxWidth });

        doc.save(fullName + " " + examLevel);

        const studentData = {
            name: fullName,
            date: examDate,
            examType: examLevel,
            overallScore: petAverageScore,
            grade: petGrade
        };

        sendDataToGoogleSheets(studentData);
    }
}

function generateFceCertificate() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        compress: true,
    });

    const backgroundImg = new Image();
    backgroundImg.src = document.title === "Pumpkin Weekend Certificates" ? window.FCE_TEMPLATE_CERT_PUMPKIN : window.FCE_TEMPLATE_CERT;
    backgroundImg.onload = async () => {

        doc.addImage(backgroundImg, 'PNG', 0, 0, 210, 297);

        const fceResults = calculateFceResult();

        const {
            listening: { fceListeningInputValue, listeningScore },
            reading: { fceReadingInputValue, readingScore },
            use: { fceUseInputValue, useScore },
            writing: { fceWritingInputValue, writingScore },
            speaking: { fceSpeakingInputValue, speakingScore },
            fceAverageScore,
            fceGrade, } = fceResults;

        const fullName = mergeNameAndSurname();

        const examDate = document.getElementById('examDate').value;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(14);
        doc.text(fullName, 95, 72, { align: 'left' });

        doc.setFontSize(14);
        doc.text(examLevel, 95, 84.5, { align: 'left' });

        doc.setFontSize(14);
        doc.text(examDate, 95, 96.4, { align: 'left' });

        doc.setFontSize(16);
        doc.text(`${String(fceListeningInputValue)}/30`, 54, 130, { align: "left" });

        if (listeningScore < 10) {
            doc.setFontSize(16);
            doc.text(`${String(listeningScore)}/190`, 53, 142, { align: "left" });
        }
        else {
            doc.setFontSize(16);
            doc.text(`${String(listeningScore)}/190`, 50.5, 142, { align: "left" });
        }

        doc.setFontSize(16);
        doc.text(`${String(fceReadingInputValue)}/42`, 78, 130, { align: "left" });

        if (readingScore < 10) {
            doc.setFontSize(16);
            doc.text(`${String(readingScore)}/190`, 77, 142, { align: "left" });
        }
        else {
            doc.setFontSize(16);
            doc.text(`${String(readingScore)}/190`, 74.5, 142, { align: "left" });
        }

        doc.setFontSize(16);
        doc.text(`${String(fceUseInputValue)}/28`, 101.5, 130, { align: "left" });

        if (useScore < 10) {
            doc.setFontSize(16);
            doc.text(`${String(useScore)}/190`, 101, 142, { align: "left" });
        }

        else if (useScore < 100) {
            doc.setFontSize(16);
            doc.text(`${String(useScore)}/190`, 99, 142, { align: "left" });
        }
        else {
            doc.setFontSize(16);
            doc.text(`${String(useScore)}/190`, 98, 142, { align: "left" });
        }

        doc.setFontSize(16);
        doc.text(`${String(fceWritingInputValue)}/40`, 126, 130, { align: "left" });

        if (writingScore < 10) {
            doc.setFontSize(16);
            doc.text(`${String(writingScore)}/190`, 125, 142, { align: "left" });
        }
        else if (writingScore < 100) {
            doc.setFontSize(16);
            doc.text(`${String(writingScore)}/190`, 123, 142, { align: "left" });
        }
        else {
            doc.setFontSize(16);
            doc.text(`${String(writingScore)}/190`, 122, 142, { align: "left" });
        }

        doc.setFontSize(16);
        doc.text(`${String(fceSpeakingInputValue)}/60`, 151, 130, { align: "left" });

        if (speakingScore < 10) {
            doc.setFontSize(16);
            doc.text(`${String(speakingScore)}/190`, 150, 142, { align: "left" });
        }
        else if (speakingScore < 100) {
            doc.setFontSize(16);
            doc.text(`${String(speakingScore)}/190`, 148, 142, { align: "left" });
        }
        else {
            doc.setFontSize(16);
            doc.text(`${String(speakingScore)}/190`, 147, 142, { align: "left" });
        }

        if (fceAverageScore < 10) {
            doc.setFontSize(16);
            doc.text(String(fceAverageScore), 180, 130, { align: "left" });

            doc.setFontSize(16);
            doc.text(fceGrade, 172, 142, { align: "left" });
        }
        else if (fceAverageScore <= 99) {
            doc.setFontSize(16);
            doc.text(String(fceAverageScore), 178, 130, { align: "left" });

            doc.setFontSize(16);
            doc.text(fceGrade, 172, 142, { align: "left" });
        }

        else if (fceAverageScore <= 159) {
            doc.setFontSize(16);
            doc.text(String(fceAverageScore), 176, 130, { align: "left" });

            doc.setFontSize(16);
            doc.text(fceGrade, 172, 142, { align: "left" });
        }

        else {
            doc.setFontSize(16);
            doc.text(String(fceAverageScore), 176, 130, { align: "left" });

            doc.setFontSize(10);
            doc.text(fceGrade, 171, 142, { align: "left" });
        }

        const teacherLetter = document.getElementById("teacherLetter").value;
        const rightMargin = 25;
        const leftMargin = 25;

        const pageWidth = doc.internal.pageSize.getWidth();
        const maxWidth = pageWidth - leftMargin - rightMargin;

        doc.setFontSize(14);
        doc.text(teacherLetter, leftMargin, 175, { maxWidth: maxWidth });

        doc.save(fullName + " " + examLevel);

        const studentData = {
            name: fullName,
            date: examDate,
            examType: examLevel,
            overallScore: fceAverageScore,
            grade: fceGrade
        };

        sendDataToGoogleSheets(studentData);
    }
}

function generateCaeCertificate() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        compress: true,
    });

    const backgroundImg = new Image();
    backgroundImg.src = document.title === "Pumpkin Weekend Certificates" ? window.FCE_TEMPLATE_CERT_PUMPKIN : window.FCE_TEMPLATE_CERT;
    backgroundImg.onload = async () => {

        doc.addImage(backgroundImg, 'PNG', 0, 0, 210, 297);

        const caeResults = calculateCaeResult();

        const {
            listening: { caeListeningInputValue, listeningScore },
            reading: { caeReadingInputValue, readingScore },
            use: { caeUseInputValue, useScore },
            writing: { caeWritingInputValue, writingScore },
            speaking: { caeSpeakingInputValue, speakingScore },
            caeAverageScore,
            caeGrade, } = caeResults;

        const fullName = mergeNameAndSurname();

        const examDate = document.getElementById('examDate').value;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(14);
        doc.text(fullName, 95, 72, { align: 'left' });

        doc.setFontSize(14);
        doc.text(examLevel, 95, 84.5, { align: 'left' });

        doc.setFontSize(14);
        doc.text(examDate, 95, 96.4, { align: 'left' });

        doc.setFontSize(16);
        doc.text(`${String(caeListeningInputValue)}/30`, 54, 130, { align: "left" });

        if (listeningScore < 10) {
            doc.setFontSize(16);
            doc.text(`${String(listeningScore)}/210`, 52.5, 142, { align: "left" });
        }
        else if (listeningScore < 100) {
            doc.setFontSize(16);
            doc.text(`${String(listeningScore)}/210`, 51.5, 142, { align: "left" });
        }
        else {
            doc.setFontSize(16);
            doc.text(`${String(listeningScore)}/210`, 50.5, 142, { align: "left" });
        }

        doc.setFontSize(16);
        doc.text(`${String(caeReadingInputValue)}/50`, 78, 130, { align: "left" });

        if (readingScore < 10) {
            doc.setFontSize(16);
            doc.text(`${String(readingScore)}/210`, 76.5, 142, { align: "left" });
        }
        else if (readingScore < 100) {
            doc.setFontSize(16);
            doc.text(`${String(readingScore)}/210`, 75.5, 142, { align: "left" });
        }
        else {
            doc.setFontSize(16);
            doc.text(`${String(readingScore)}/210`, 74.5, 142, { align: "left" });
        }

        doc.setFontSize(16);
        doc.text(`${String(caeUseInputValue)}/28`, 101.5, 130, { align: "left" });

        if (useScore < 10) {
            doc.setFontSize(16);
            doc.text(`${String(useScore)}/210`, 100, 142, { align: "left" });
        }
        else if (useScore < 100) {
            doc.setFontSize(16);
            doc.text(`${String(useScore)}/210`, 99, 142, { align: "left" });
        }
        else {
            doc.setFontSize(16);
            doc.text(`${String(useScore)}/210`, 98, 142, { align: "left" });
        }

        doc.setFontSize(16);
        doc.text(`${String(caeWritingInputValue)}/40`, 126, 130, { align: "left" });

        if (writingScore < 10) {
            doc.setFontSize(16);
            doc.text(`${String(writingScore)}/210`, 124, 142, { align: "left" });
        }
        else if (writingScore < 100){
            doc.setFontSize(16);
            doc.text(`${String(writingScore)}/210`, 123, 142, { align: "left" });
        }
        else {
            doc.setFontSize(16);
            doc.text(`${String(writingScore)}/210`, 122, 142, { align: "left" });
        }

        doc.setFontSize(16);
        doc.text(`${String(caeSpeakingInputValue)}/75`, 151, 130, { align: "left" });

        if (speakingScore < 10) {
            doc.setFontSize(16);
            doc.text(`${String(speakingScore)}/210`, 149, 142, { align: "left" });
        }
        else if (speakingScore < 100) {
            doc.setFontSize(16);
            doc.text(`${String(speakingScore)}/210`, 148, 142, { align: "left" });
        }
        else {
            doc.setFontSize(16);
            doc.text(`${String(speakingScore)}/210`, 147, 142, { align: "left" });
        }

        if (caeAverageScore < 10) {
            doc.setFontSize(16);
            doc.text(String(caeAverageScore), 180, 130, { align: "left" });

            doc.setFontSize(14);
            doc.text(caeGrade, 173, 142, { align: "left" });
        }
        else if (caeAverageScore <= 99) {
            doc.setFontSize(16);
            doc.text(String(caeAverageScore), 178, 130, { align: "left" });

            doc.setFontSize(14);
            doc.text(caeGrade, 173, 142, { align: "left" });
        }

        else if (caeAverageScore <= 179) {
            doc.setFontSize(16);
            doc.text(String(caeAverageScore), 176, 130, { align: "left" });
            
            doc.setFontSize(14);
            doc.text(caeGrade, 173, 142, { align: "left" }); 
        }

        else {
            doc.setFontSize(16);
            doc.text(String(caeAverageScore), 176, 130, { align: "left" });

            doc.setFontSize(10);
            doc.text(caeGrade, 171, 142, { align: "left" }); 
        }

        const teacherLetter = document.getElementById("teacherLetter").value;
        const rightMargin = 25;
        const leftMargin = 25;

        const pageWidth = doc.internal.pageSize.getWidth();
        const maxWidth = pageWidth - leftMargin - rightMargin;

        doc.setFontSize(14);
        doc.text(teacherLetter, leftMargin, 175, { maxWidth: maxWidth });

        doc.save(fullName + " " + examLevel);

        const studentData = {
            name: fullName,
            date: examDate,
            examType: examLevel,
            overallScore: caeAverageScore,
            grade: caeGrade
        };

        sendDataToGoogleSheets(studentData);
    }
}

async function createCertificate() {
    if (!participantForm()) {
        return;
    }

    if (!isTeacherLetterTooLong()) {
        return;
    }

    console.log("Exam level: " + examLevel);

    if (examLevel === "Pre-St") {
        await generatePreStartersCertificate();
    } else if (examLevel === "Starters") {
        await generateStartersCertificate();
    } else if (examLevel === "Movers") {
        await generateMoversCertificate();
    } else if (examLevel === "Flyers") {
        await generateFlyersCertificate();
    } else if (examLevel === "KET") {
        await generateKetCertificate();
    } else if (examLevel === "PET") {
        await generatePetCertificate();
    } else if (examLevel === "FCE") {
        await generateFceCertificate();
    } else if (examLevel === "CAE") {
        await generateCaeCertificate();
    }
}

async function sendDataToGoogleSheets(studentData) {
    const url = 'https://script.google.com/macros/s/AKfycbwFvXerK4qqlTq8k6Ysr2Md4jP4uoM7fNd1ZcbKe1U73rwr_8Wr_BMt_hYNfGM5j2HMyw/exec'; 

    try {
        await fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(studentData)
        });
        console.log("Successfully sent data to Google Sheets.");
    } catch (error) {
        console.error("Error sending data to Google Sheets:", error);
    }
}

document.getElementById("generateCertificate").addEventListener("click", async () => {
    await createCertificate();
});