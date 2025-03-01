function participantForm() {

    const participantName = document.getElementById("participantName");
    const participantSurname = document.getElementById("participantSurname");
    const examLevel = document.getElementById("examLevel");
    const examDate = document.getElementById("examDate");
    const teacherLetter = document.getElementById("teacherLetter");

    const participantNameError = document.getElementById("participantNameError");
    const participantSurnameError = document.getElementById("participantSurnameError");
    const examLevelError = document.getElementById("examLevelError");
    const examDateError = document.getElementById("examDateError");
    const teacherLetterError = document.getElementById("teacherLetterError");

    let isValid = true;

    participantNameError.textContent = "";
    participantSurnameError.textContent = "";
    examLevelError.textContent = "";
    examDateError.textContent = "";
    teacherLetterError.textContent = "";

    participantName.classList.remove("input_error_theme_notion");
    participantSurname.classList.remove("input_error_theme_notion");
    examLevel.classList.remove("input_error_theme_notion");
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

    if (examLevel.value.trim() === "") {
        examLevel.classList.add("input_error_theme_notion");
        examLevelError.textContent = "Exam Level is required.";
        isValid = false;
    }

    const examLevels = ["starters", "movers", "flyers", "ket", "pet", "fce", "cae"];

    if (!examLevels.includes(examLevel.value.trim().toLowerCase())) {
        examLevel.classList.add("input_error_theme_notion");
        examLevelError.textContent = "There might be a spelling mistake.";
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

    const formattedName = participantName.charAt(0).toUpperCase() + participantName.slice(1).toLowerCase();
    const formattedSurname = participantSurname.charAt(0).toUpperCase() + participantSurname.slice(1).toLowerCase();

    const nameSurname = `${formattedName} ${formattedSurname}`;

    return nameSurname;
}

function initDropdownMenu() {
    const toggleButton = document.getElementById('participantFormToggleButton');
    const inputField = document.getElementById('examDate');
    const optionsList = document.getElementById('participantFormOptionsList');

    toggleButton.addEventListener('click', function (event) {
        event.preventDefault();

        optionsList.classList.toggle('show');
    });

    optionsList.addEventListener('click', function (event) {
        if (event.target && event.target.tagName.toLowerCase() === 'li') {
            inputField.value = event.target.textContent;

            optionsList.classList.remove('show');
        }
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.participant-form__dropdown-container')) {
            optionsList.classList.remove('show');
        }
    });
}

document.addEventListener('DOMContentLoaded', initDropdownMenu);

function levelChoice() {
    return document.getElementById("examLevel").value.trim().toLowerCase();
}

function formatExamLevel() {
    const examLevel = document.getElementById("examLevel").value;
    const formattedExamLevel = examLevel.trim().toLowerCase();

    if (formattedExamLevel === "starters" ||
        formattedExamLevel === "movers" ||
        formattedExamLevel === "flyers") {
        return formattedExamLevel.charAt(0).toUpperCase() + formattedExamLevel.slice(1).toLowerCase();
    }
    else if (formattedExamLevel === "ket" ||
        formattedExamLevel === "pet" ||
        formattedExamLevel === "fce" ||
        formattedExamLevel === "cae") {
        return formattedExamLevel.toUpperCase();
    }
}

const teacherLetter = document.getElementById("teacherLetter");
const teacherLetterError = document.getElementById("teacherLetterError");
const wordCountDisplay = document.getElementById("wordCountDisplay");
const maxWords = 100;

teacherLetter.addEventListener("input", () => {
    const words = teacherLetter.value.trim().split(/\s+/).filter(word => word !== "");
    const wordCount = words.length;

        if (wordCount >= maxWords) {
            const truncatedText = words.slice(0, maxWords).join(" ");
            teacherLetter.value = truncatedText;
            wordCountDisplay.textContent = `${maxWords}/${maxWords}`;
            teacherLetterError.textContent = "You have exceeded the maximum number of words.";
        }
        else {
            wordCountDisplay.textContent = `${wordCount}/${maxWords}`;
        }
})

function isTeacherLetterTooLong() {
    const teacherLetter = document.getElementById("teacherLetter");
    const words = teacherLetter.value.trim().split(/\s+/).filter(word => word !== "");
    const wordCount = words.length;
    let isTooLong = true;
    const maxWords = 100;

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

async function generateStartersCertificate() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        compress: true,
    });

    const backgroundImg = new Image();
    backgroundImg.src = window.YLE_TEMPLATE_CERT;
    backgroundImg.onload = async () => {

        doc.addImage(backgroundImg, 'PNG', 0, 0, 210, 297);

        const startersResults = await calculateStartersResult();

        const {
            listening: { startersListeningScore, startersListeningShields },
            readingWriting: { startersReadingWritingScore, startersReadingWritingShields },
            speaking: { startersSpeakingScore, startersSpeakingShields },
            startersShieldSum,
            startersGrade } = startersResults;

        const fullName = mergeNameAndSurname();

        const examLevel = formatExamLevel();

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
        const rightMargin = 30;
        const leftMargin = 30;

        const pageWidth = doc.internal.pageSize.getWidth();
        const maxWidth = pageWidth - leftMargin - rightMargin;

        doc.text(teacherLetter, leftMargin, 175, { maxWidth: maxWidth });

        doc.save('certificate.pdf');

        const studentData = {
            name: fullName,
            date: examDate,
            examType: examLevel,
            overallScore: startersShieldSum,
            grade: startersGrade
        };

        await sendDataToGoogleSheets(studentData);
    }
}

async function generateMoversCertificate() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        compress: true,
    });

    const backgroundImg = new Image();
    backgroundImg.src = window.YLE_TEMPLATE_CERT;
    backgroundImg.onload = async () => {

        doc.addImage(backgroundImg, 'PNG', 0, 0, 210, 297);

        const moversResults = await calculateMoversResult();

        const {
            listening: { moversListeningScore, moversListeningShields },
            readingWriting: { moversReadingWritingScore, moversReadingWritingShields },
            speaking: { moversSpeakingScore, moversSpeakingShields },
            moversShieldSum,
            moversGrade,
        } = moversResults;

        const fullName = mergeNameAndSurname();

        const examLevel = formatExamLevel();

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
        doc.text(`${String(moversReadingWritingScore)}/35`, 98, 130, { align: "left" });

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
        const rightMargin = 30;
        const leftMargin = 30;

        const pageWidth = doc.internal.pageSize.getWidth();
        const maxWidth = pageWidth - leftMargin - rightMargin;

        doc.text(teacherLetter, leftMargin, 175, { maxWidth: maxWidth });

        doc.save('certificate.pdf');

        const studentData = {
            name: fullName,
            date: examDate,
            examType: examLevel,
            overallScore: moversShieldSum,
            grade: moversGrade
        };

        await sendDataToGoogleSheets(studentData);
    }
}

async function generateFlyersCertificate() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        compress: true,
    });

    const backgroundImg = new Image();
    backgroundImg.src = window.YLE_TEMPLATE_CERT;
    backgroundImg.onload = async () => {

        doc.addImage(backgroundImg, 'PNG', 0, 0, 210, 297);

        const flyersResults = await calculateFlyersResult();

        const {
            listening: { flyersListeningScore, flyersListeningShields },
            readingWriting: { flyersReadingWritingScore, flyersReadingWritingShields },
            speaking: { flyersSpeakingScore, flyersSpeakingShields },
            flyersShieldSum,
            flyersGrade,
        } = flyersResults;

        const fullName = mergeNameAndSurname();

        const examLevel = formatExamLevel();

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
        doc.text(`${String(flyersReadingWritingScore)}/44`, 98, 130, { align: "left" });

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
        const rightMargin = 30;
        const leftMargin = 30;

        const pageWidth = doc.internal.pageSize.getWidth();
        const maxWidth = pageWidth - leftMargin - rightMargin;

        doc.text(teacherLetter, leftMargin, 175, { maxWidth: maxWidth });

        doc.save('certificate.pdf');

        const studentData = {
            name: fullName,
            date: examDate,
            examType: examLevel,
            overallScore: flyersShieldSum,
            grade: flyersGrade
        };

        await sendDataToGoogleSheets(studentData);
    }
}

async function generateKetCertificate() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        compress: true,
    });

    const backgroundImg = new Image();
    backgroundImg.src = window.KET_TEMPLATE_CERT;
    backgroundImg.onload = async () => {

        doc.addImage(backgroundImg, 'PNG', 0, 0, 210, 297);

        const ketResults = await calculateKetResult();

        const {
            listening: { ketListeningInputValue, listeningScore },
            readingWriting: { ketReadingWritingInputValue, readingWritingScore },
            speaking: { ketSpeakingInputValue, speakingScore },
            ketAverageScore,
            ketGrade, } = ketResults;

        const fullName = mergeNameAndSurname();

        const examLevel = formatExamLevel();

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
        const rightMargin = 30;
        const leftMargin = 30;

        const pageWidth = doc.internal.pageSize.getWidth();
        const maxWidth = pageWidth - leftMargin - rightMargin;

        doc.setFontSize(16);
        doc.text(teacherLetter, leftMargin, 175, { maxWidth: maxWidth });

        doc.save('certificate.pdf');

        const studentData = {
            name: fullName,
            date: examDate,
            examType: examLevel,
            overallScore: ketAverageScore,
            grade: ketGrade
        };

        await sendDataToGoogleSheets(studentData);
    }
}

async function generatePetCertificate() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        compress: true,
    });

    const backgroundImg = new Image();
    backgroundImg.src = window.PET_TEMPLATE_CERT;
    backgroundImg.onload = async () => {

        doc.addImage(backgroundImg, 'PNG', 0, 0, 210, 297);

        const petResults = await calculatePetResult();

        const {
            listening: { petListeningInputValue, listeningScore },
            reading: { petReadingInputValue, readingScore },
            writing: { petWritingInputValue, writingScore },
            speaking: { petSpeakingInputValue, speakingScore },
            petAverageScore,
            petGrade, } = petResults;

        const fullName = mergeNameAndSurname();

        const examLevel = formatExamLevel();

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
        doc.text(`${String(petSpeakingInputValue)}/45`, 141, 130, { align: "left" });

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
        const rightMargin = 30;
        const leftMargin = 30;

        const pageWidth = doc.internal.pageSize.getWidth();
        const maxWidth = pageWidth - leftMargin - rightMargin;

        doc.setFontSize(16);
        doc.text(teacherLetter, leftMargin, 175, { maxWidth: maxWidth });

        doc.save('certificate.pdf');

        const studentData = {
            name: fullName,
            date: examDate,
            examType: examLevel,
            overallScore: petAverageScore,
            grade: petGrade
        };

        await sendDataToGoogleSheets(studentData);
    }
}

async function generateFceCertificate() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        compress: true,
    });

    const backgroundImg = new Image();
    backgroundImg.src = window.FCE_TEMPLATE_CERT;
    backgroundImg.onload = async () => {

        doc.addImage(backgroundImg, 'PNG', 0, 0, 210, 297);

        const fceResults = await calculateFceResult();

        const {
            listening: { fceListeningInputValue, listeningScore },
            reading: { fceReadingInputValue, readingScore },
            use: { fceUseInputValue, useScore },
            writing: { fceWritingInputValue, writingScore },
            speaking: { fceSpeakingInputValue, speakingScore },
            fceAverageScore,
            fceGrade, } = fceResults;

        const fullName = mergeNameAndSurname();

        const examLevel = formatExamLevel();

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

        doc.setFontSize(16);
        doc.text(`${String(listeningScore)}/190`, 50.5, 142, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(fceReadingInputValue)}/42`, 78, 130, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(readingScore)}/190`, 74.5, 142, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(fceUseInputValue)}/28`, 101.5, 130, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(useScore)}/190`, 98, 142, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(fceWritingInputValue)}/40`, 126, 130, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(writingScore)}/190`, 122, 142, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(fceSpeakingInputValue)}/60`, 151, 130, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(speakingScore)}/190`, 147, 142, { align: "left" });

       if (fceAverageScore <= 99) {
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
        const rightMargin = 30;
        const leftMargin = 30;

        const pageWidth = doc.internal.pageSize.getWidth();
        const maxWidth = pageWidth - leftMargin - rightMargin;

        doc.setFontSize(16);
        doc.text(teacherLetter, leftMargin, 175, { maxWidth: maxWidth });

        doc.save('certificate.pdf');

        const studentData = {
            name: fullName,
            date: examDate,
            examType: examLevel,
            overallScore: fceAverageScore,
            grade: fceGrade
        };

        await sendDataToGoogleSheets(studentData);
    }
}

async function generateCaeCertificate() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        compress: true,
    });

    const backgroundImg = new Image();
    backgroundImg.src = window.FCE_TEMPLATE_CERT;
    backgroundImg.onload = async () => {

        doc.addImage(backgroundImg, 'PNG', 0, 0, 210, 297);

        const caeResults = await calculateCaeResult();

        const {
            listening: { caeListeningInputValue, listeningScore },
            reading: { caeReadingInputValue, readingScore },
            use: { caeUseInputValue, useScore },
            writing: { caeWritingInputValue, writingScore },
            speaking: { caeSpeakingInputValue, speakingScore },
            caeAverageScore,
            caeGrade, } = caeResults;

        const fullName = mergeNameAndSurname();

        const examLevel = formatExamLevel();

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

        doc.setFontSize(16);
        doc.text(`${String(listeningScore)}/210`, 50.5, 142, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(caeReadingInputValue)}/50`, 78, 130, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(readingScore)}/210`, 74.5, 142, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(caeUseInputValue)}/28`, 101.5, 130, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(useScore)}/210`, 98, 142, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(caeWritingInputValue)}/40`, 126, 130, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(writingScore)}/210`, 122, 142, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(caeSpeakingInputValue)}/75`, 151, 130, { align: "left" });

        doc.setFontSize(16);
        doc.text(`${String(speakingScore)}/210`, 147, 142, { align: "left" });

       if (caeAverageScore <= 99) {
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
        const rightMargin = 30;
        const leftMargin = 30;

        const pageWidth = doc.internal.pageSize.getWidth();
        const maxWidth = pageWidth - leftMargin - rightMargin;

        doc.setFontSize(16);
        doc.text(teacherLetter, leftMargin, 175, { maxWidth: maxWidth });

        doc.save('certificate.pdf');

        const studentData = {
            name: fullName,
            date: examDate,
            examType: examLevel,
            overallScore: caeAverageScore,
            grade: caeGrade
        };

        await sendDataToGoogleSheets(studentData);
    }
}

async function createCertificate() {
    if (!participantForm()) {
        return;
    }

    if (!isTeacherLetterTooLong()) {
        return;
    }

    let examLevel = levelChoice();

    if (examLevel === "starters") {
        generateStartersCertificate();
    }
    else if (examLevel === "movers") {
        generateMoversCertificate();
    }
    else if (examLevel === "flyers") {
        generateFlyersCertificate();
    }
    else if (examLevel === "ket") {
        generateKetCertificate();
    }
    else if (examLevel === "pet") {
        generatePetCertificate();
    }
    else if (examLevel === "fce") {
        generateFceCertificate();
    }
    else if (examLevel === "cae") {
        generateCaeCertificate();
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