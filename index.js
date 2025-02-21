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

function mergeNameAndSurname(){
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

const selectExamButtons = document.querySelectorAll(".select-exam__button");

selectExamButtons.forEach(button => {
    button.addEventListener('click', () => {
        switch (button.textContent) {
            case "Starters":
                const examFormStarters = document.querySelector(".exam-form-starters");
                examFormStarters.classList.toggle("disabled");
                break;
            case "Movers":
                const examFormMovers = document.querySelector(".exam-form-movers");
                examFormMovers.classList.toggle("disabled");
                break;
            case "Flyers":
                const examFormFlyers = document.querySelector(".exam-form-flyers");
                examFormFlyers.classList.toggle("disabled");
                break;
            case "KET":
                const examFormKet = document.querySelector(".exam-form-ket");
                examFormKet.classList.toggle("disabled");
                break;
            case "PET":
                const examFormPet = document.querySelector(".exam-form-pet");
                examFormPet.classList.toggle("disabled");
                break;
            case "FCE":
                const examFormFce = document.querySelector(".exam-form-fce");
                examFormFce.classList.toggle("disabled");
                break;
            case "CAE":
                const examFormCae = document.querySelector(".exam-form-cae");
                examFormCae.classList.toggle("disabled");
                break;
        }
    });
});

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
    else if(formattedExamLevel === "ket" || 
        formattedExamLevel === "pet" || 
        formattedExamLevel === "fce" || 
        formattedExamLevel === "cae") {
        return formattedExamLevel.toUpperCase();
    }
}

// const textarea = document.getElementById("teacherLetter");
// const wordCountDisplay = document.getElementById("wordCount");
// const maxWords = 20;

// textarea.addEventListener("input", () => {
//     const words = textarea.value.trim().split(/\s+/).filter(word => word !== "");
//     const wordCount = words.length;

//     if (wordCount > maxWords) {
//         // Truncate the text to the maximum number of words
//         const truncatedText = words.slice(0, maxWords).join(" ");
//         textarea.value = truncatedText;
//         wordCountDisplay.textContent = `${maxWords}/${maxWords}`;
//     } else {
//         wordCountDisplay.textContent = `${wordCount}/${maxWords}`;
//     }
// });



async function generateStartersCertificate() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

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
        doc.text(String(startersListeningScore), 67, 130, { align: "left" });

        doc.setFontSize(16);
        doc.text(String(startersListeningShields), 69, 142, { align: "left" });

        doc.setFontSize(16);
        doc.text(String(startersReadingWritingScore), 102, 130, { align: "left" });

        doc.setFontSize(16);
        doc.text(String(startersReadingWritingShields), 103, 142, { align: "left" });

        doc.setFontSize(16);
        doc.text(String(startersSpeakingScore), 135, 130, { align: "left" });

        doc.setFontSize(16);
        doc.text(String(startersSpeakingShields), 137, 142, { align: "left" });

        doc.setFontSize(16);
        doc.text(startersGrade, 167, 130, { align: "left" });

        doc.setFontSize(16);
        doc.text(String(startersShieldSum), 169, 142, { align: "left" });

        const teacherLetter = document.getElementById("teacherLetter").value;
        const rightMargin = 30;
        const leftMargin = 30;

        const pageWidth = doc.internal.pageSize.getWidth();
        const maxWidth = pageWidth - leftMargin - rightMargin;
    
        doc.text(teacherLetter, leftMargin, 175, { maxWidth: maxWidth });

        doc.save('certificate.pdf');
    }
}

async function generateMoversCertificate() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const backgroundImg = new Image();
    backgroundImg.src = window.YLE_TEMPLATE;
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

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(24);
        doc.text(fullName, 105, 140, { align: 'center' });

        doc.setFontSize(16);
        doc.text(`Date: ${examDate}`, 105, 160, { align: 'center' });

        doc.setFontSize(16);
        doc.text(examLevel, 105, 200, { align: 'center' });

        doc.setFontSize(16);
        doc.text(String(moversListeningScore), 105, 210, { align: "right" });

        doc.setFontSize(16);
        doc.text(String(moversListeningShields), 105, 220, { align: "right" });

        const teacherLetter = document.getElementById("teacherLetter").value;
        const rightMargin = 50;
        const leftMargin = 50;

        const pageWidth = doc.internal.pageSize.getWidth();
        const maxWidth = pageWidth - leftMargin - rightMargin;
    
        doc.text(teacherLetter, leftMargin, 225, { maxWidth: maxWidth });

        doc.save('certificate.pdf');
    }
}

async function generateFlyersCertificate() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const backgroundImg = new Image();
    backgroundImg.src = window.YLE_TEMPLATE;
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

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(24);
        doc.text(fullName, 105, 140, { align: 'center' });

        doc.setFontSize(16);
        doc.text(`Date: ${examDate}`, 105, 160, { align: 'center' });

        doc.setFontSize(16);
        doc.text(examLevel, 105, 200, { align: 'center' });

        doc.setFontSize(16);
        doc.text(String(flyersListeningScore), 105, 210, { align: "right" });

        doc.setFontSize(16);
        doc.text(String(flyersListeningShields), 105, 220, { align: "right" });

        const teacherLetter = document.getElementById("teacherLetter").value;
        const rightMargin = 50;
        const leftMargin = 50;

        const pageWidth = doc.internal.pageSize.getWidth();
        const maxWidth = pageWidth - leftMargin - rightMargin;
    
        doc.text(teacherLetter, leftMargin, 225, { maxWidth: maxWidth });

        doc.save('certificate.pdf');
    }
}

async function generateKetCertificate() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const backgroundImg = new Image();
    backgroundImg.src = window.YLE_TEMPLATE;
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

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(24);
        doc.text(fullName, 105, 140, { align: 'center' });

        doc.setFontSize(16);
        doc.text(`Date: ${examDate}`, 105, 160, { align: 'center' });

        doc.setFontSize(16);
        doc.text(examLevel, 105, 200, { align: 'center' });

        doc.setFontSize(16);
        doc.text(ketListeningInputValue, 105, 210, { align: "right" });

        doc.setFontSize(16);
        doc.text(String(listeningScore), 105, 220, { align: "right" });

        const teacherLetter = document.getElementById("teacherLetter").value;
        const rightMargin = 50;
        const leftMargin = 50;

        const pageWidth = doc.internal.pageSize.getWidth();
        const maxWidth = pageWidth - leftMargin - rightMargin;
    
        doc.text(teacherLetter, leftMargin, 225, { maxWidth: maxWidth });

        doc.save('certificate.pdf');
    }
}

async function generatePetCertificate() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const backgroundImg = new Image();
    backgroundImg.src = window.YLE_TEMPLATE;
    backgroundImg.onload = async () => {

        doc.addImage(backgroundImg, 'PNG', 0, 0, 210, 297);

        const petResults = await calculatePetResult();

        const {
            listening: { petListeningInputValue, listeningScore },
            reading: { petreadingInputValue, readingScore },
            writing: { petWritingInputValue, writingScore },
            speaking: { petSpeakingInputValue, speakingScore },
            petAverageScore,
            petGrade, } = petResults;

        const fullName = mergeNameAndSurname();

        const examLevel = formatExamLevel();

        const examDate = document.getElementById('examDate').value;

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(24);
        doc.text(fullName, 105, 140, { align: 'center' });

        doc.setFontSize(16);
        doc.text(`Date: ${examDate}`, 105, 160, { align: 'center' });

        doc.setFontSize(16);
        doc.text(examLevel, 105, 200, { align: 'center' });

        doc.setFontSize(16);
        doc.text(petListeningInputValue, 105, 210, { align: "right" });

        doc.setFontSize(16);
        doc.text(String(listeningScore), 105, 220, { align: "right" });

        const teacherLetter = document.getElementById("teacherLetter").value;
        const rightMargin = 50;
        const leftMargin = 50;

        const pageWidth = doc.internal.pageSize.getWidth();
        const maxWidth = pageWidth - leftMargin - rightMargin;
    
        doc.text(teacherLetter, leftMargin, 225, { maxWidth: maxWidth });

        doc.save('certificate.pdf');
    }
}

async function generateFceCertificate() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const backgroundImg = new Image();
    backgroundImg.src = window.YLE_TEMPLATE;
    backgroundImg.onload = async () => {

        doc.addImage(backgroundImg, 'PNG', 0, 0, 210, 297);

        const fceResults = await calculateFceResult();

        const {
            listening: { fceListeningInputValue, listeningScore },
            reading: { fcereadingInputValue, readingScore },
            use: { fceUseInputValue, useScore},
            writing: { fceWritingInputValue, writingScore },
            speaking: { fceSpeakingInputValue, speakingScore },
            fceAverageScore,
            fceGrade, } = fceResults;

        const fullName = mergeNameAndSurname();

        const examLevel = formatExamLevel();

        const examDate = document.getElementById('examDate').value;

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(24);
        doc.text(fullName, 105, 140, { align: 'center' });

        doc.setFontSize(16);
        doc.text(`Date: ${examDate}`, 105, 160, { align: 'center' });

        doc.setFontSize(16);
        doc.text(examLevel, 105, 200, { align: 'center' });

        doc.setFontSize(16);
        doc.text(fceListeningInputValue, 105, 210, { align: "right" });

        doc.setFontSize(16);
        doc.text(String(listeningScore), 105, 220, { align: "right" });

        const teacherLetter = document.getElementById("teacherLetter").value;
        const rightMargin = 50;
        const leftMargin = 50;

        const pageWidth = doc.internal.pageSize.getWidth();
        const maxWidth = pageWidth - leftMargin - rightMargin;
    
        doc.text(teacherLetter, leftMargin, 225, { maxWidth: maxWidth });

        doc.save('certificate.pdf');
    }
}

async function generateCaeCertificate() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const backgroundImg = new Image();
    backgroundImg.src = window.YLE_TEMPLATE;
    backgroundImg.onload = async () => {

        doc.addImage(backgroundImg, 'PNG', 0, 0, 210, 297);

        const caeResults = await calculateCaeResult();

        const {
            listening: { caeListeningInputValue, listeningScore },
            reading: { caereadingInputValue, readingScore },
            use: { caeUseInputValue, useScore},
            writing: { caeWritingInputValue, writingScore },
            speaking: { caeSpeakingInputValue, speakingScore },
            caeAverageScore,
            caeGrade, } = caeResults;

        const fullName = mergeNameAndSurname();

        const examLevel = formatExamLevel();

        const examDate = document.getElementById('examDate').value;

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(24);
        doc.text(fullName, 105, 140, { align: 'center' });

        doc.setFontSize(16);
        doc.text(`Date: ${examDate}`, 105, 160, { align: 'center' });

        doc.setFontSize(16);
        doc.text(examLevel, 105, 200, { align: 'center' });

        doc.setFontSize(16);
        doc.text(caeListeningInputValue, 105, 210, { align: "right" });

        doc.setFontSize(16);
        doc.text(String(listeningScore), 105, 220, { align: "right" });

        const teacherLetter = document.getElementById("teacherLetter").value;
        const rightMargin = 50;
        const leftMargin = 50;

        const pageWidth = doc.internal.pageSize.getWidth();
        const maxWidth = pageWidth - leftMargin - rightMargin;
    
        doc.text(teacherLetter, leftMargin, 225, { maxWidth: maxWidth });

        doc.save('certificate.pdf');
    }
}

async function createCertificate() {
    if (!participantForm()) {
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
    else if (examLevel === "cae"){
        generateCaeCertificate();
    }
}

document.getElementById("generateCertificate").addEventListener("click", async () => {
    await createCertificate();
}); 