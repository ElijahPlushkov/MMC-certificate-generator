function initDropdownMenu() {
    const toggleButton = document.getElementById('participantFormToggleButton');
    const inputField = document.getElementById('examDate');
    const optionsList = document.getElementById('participantFormOptionsList');

    // Toggle the options list when the button is clicked
    toggleButton.addEventListener('click', function (e) {
      e.preventDefault();

      // Toggle the "show" class to display or hide the options
      optionsList.classList.toggle('show');

      // Update the aria-expanded attribute for accessibility
      const expanded = toggleButton.getAttribute('aria-expanded') === 'true';
      toggleButton.setAttribute('aria-expanded', !expanded);
    });

    // When an option is clicked, update the input and hide the list
    optionsList.addEventListener('click', function (e) {
      if (e.target && e.target.tagName.toLowerCase() === 'li') {
        inputField.value = e.target.textContent;

        // Hide the options list
        optionsList.classList.remove('show');
        toggleButton.setAttribute('aria-expanded', 'false');
      }
    });

    // Optional: Hide the drop-down if the user clicks outside of the menu
    document.addEventListener('click', function (e) {
      // Check if the click happened outside of the dropdown container
      if (!e.target.closest('.participant-form__collapsible-menu')) {
        optionsList.classList.remove('show');
        toggleButton.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Initialize the dropdown menu once the DOM is loaded
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

function mergeNameAndSurname(){
    const participantName = document.getElementById("participantName").value.trim();
    const participantSurname = document.getElementById("participantSurname").value.trim();

    const formattedName = participantName.charAt(0).toUpperCase() + participantName.slice(1).toLowerCase();
    const formattedSurname = participantSurname.charAt(0).toUpperCase() + participantSurname.slice(1).toLowerCase();

    const nameSurname = `${formattedName} ${formattedSurname}`;

    return nameSurname;
}

function participantForm() {

    const participantName = document.getElementById("participantName");
    const participantSurname = document.getElementById("participantSurname");
    const examLevel = document.getElementById("examLevel");
    const examDate = document.getElementById("examDate");

    const participantNameError = document.getElementById("participantNameError");
    const participantSurnameError = document.getElementById("participantSurnameError");
    const examLevelError = document.getElementById("examLevelError");
    const examDateError = document.getElementById("examDateError");

    let isValid = true;

    participantNameError.textContent = "";
    participantSurnameError.textContent = "";
    examLevelError.textContent = "";
    examDateError.textContent = "";

    participantName.classList.remove("input_error_theme_notion");
    participantSurname.classList.remove("input_error_theme_notion");
    examLevel.classList.remove("input_error_theme_notion");
    examDate.classList.remove("input_error_theme_notion");

    if (participantName.value.trim() === "") {
        participantName.classList.add("input_error_theme_notion");
        participantNameError.textContent = "Participant's Name is required";
        isValid = false;
    }

    if (participantSurname.value.trim() === "") {
        participantSurname.classList.add("input_error_theme_notion");
        participantSurnameError.textContent = "Participant's Surname is required";
        isValid = false;
    }

    if (examLevel.value.trim() === "") {
        examLevel.classList.add("input_error_theme_notion");
        examLevelError.textContent = "Exam Level is required";
        isValid = false;
    }

    if (examDate.value.trim() === "") {
        examDate.classList.add("input_error_theme_notion");
        examDateError.textContent = "Exam Date is required";
        isValid = false;
    }

    return isValid;
}

function levelChoice() {
    return document.getElementById("examLevel").value.trim().toLowerCase();
}

async function generateStartersCertificate() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const backgroundImg = new Image();
    backgroundImg.src = window.YLE_TEMPLATE;
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

        const examLevel = document.getElementById('examLevel').value;
        const examDate = document.getElementById('examDate').value;

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(24);
        doc.text(fullName, 105, 140, { align: 'center' });

        doc.setFontSize(16);
        doc.text(`Date: ${examDate}`, 105, 160, { align: 'center' });

        doc.setFontSize(16);
        doc.text(examLevel, 105, 200, { align: 'center' });

        doc.setFontSize(16);
        doc.text(String(startersListeningScore), 105, 210, { align: "right" });

        doc.setFontSize(16);
        doc.text(String(startersListeningShields), 105, 220, { align: "right" });

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

        const examLevel = document.getElementById('examLevel').value;
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

        const examLevel = document.getElementById('examLevel').value;
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

        const examLevel = document.getElementById('examLevel').value;
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

        const examLevel = document.getElementById('examLevel').value;
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

        const examLevel = document.getElementById('examLevel').value;
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

        const examLevel = document.getElementById('examLevel').value;
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
}) 