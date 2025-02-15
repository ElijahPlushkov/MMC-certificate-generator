const selectExamButtons = document.querySelectorAll(".select-exam__button");

selectExamButtons.forEach(button => {
    button.addEventListener('click', () => {
        switch(button.textContent) {
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
        reading: {petreadingInputValue, readingScore},
        writing: {petWritingInputValue, writingScore},
        speaking: {petSpeakingInputValue, speakingScore},
        petAverageScore,
        petGrade,} = petResults; 

      const name = document.getElementById('participantName').value;
      const surname = document.getElementById('participantSurname').value;
      const examLevel = document.getElementById('examLevel').value;
      const examDate = document.getElementById('examDate').value;

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(24);
      doc.text(name, 105, 140, {align: 'center'});

      doc.setFontSize(16);
      doc.text(`Date: ${examDate}`, 105, 160, {align: 'center'});

      doc.setFontSize(16);
      doc.text(surname, 105, 180, {align: 'center'});

      doc.setFontSize(16);
      doc.text(examLevel, 105, 200, {align: 'center'});

      doc.setFontSize(16);
      doc.text(petListeningInputValue, 105, 210, {align: "right"});

      doc.setFontSize(16);
      doc.text(String(listeningScore), 105, 220, {align: "right"});

      doc.save('certificate.pdf');
    }
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
        startersGrade} = startersResults; 

      const name = document.getElementById('participantName').value;
      const surname = document.getElementById('participantSurname').value;
      const examLevel = document.getElementById('examLevel').value;
      const examDate = document.getElementById('examDate').value;

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(24);
      doc.text(name, 105, 140, {align: 'center'});

      doc.setFontSize(16);
      doc.text(`Date: ${examDate}`, 105, 160, {align: 'center'});

      doc.setFontSize(16);
      doc.text(surname, 105, 180, {align: 'center'});

      doc.setFontSize(16);
      doc.text(examLevel, 105, 200, {align: 'center'});

      doc.setFontSize(16);
      doc.text(String(startersListeningScore), 105, 210, {align: "right"});

      doc.setFontSize(16);
      doc.text(String(startersListeningShields), 105, 220, {align: "right"});

      doc.save('certificate.pdf');
    }
}

async function createCertificate() {
    if (!participantForm()) {
        return;
    }

    let examLevel = levelChoice();

    if(examLevel === "starters"){
        generateStartersCertificate();
    }
    else if(examLevel === "pet"){
        generatePetCertificate();
    }
}

    // const { jsPDF } = window.jspdf;
    // const doc = new jsPDF();

    // // 1) Add your background image
    // // Make sure "certificate-bg.png" is in the correct folder
    // // and adjust x/y/width/height to match your layout.
    // const backgroundImg = new Image();
    // backgroundImg.src = window.YLE_TEMPLATE;
    // backgroundImg.onload = async () => {
    //   // The page size by default is A4: 210mm x 297mm, 
    //   // but jsPDF uses 'pt' by default (596 pts x 842 pts).
    //   // You can do some math or just approximate.
    //   doc.addImage(backgroundImg, 'PNG', 0, 0, 210, 297);

    // const petResults = await calculatePetResult();

    // const {
    //     listening: { petListeningInputValue, listeningScore },
    //     reading: {petreadingInputValue, readingScore},
    //     writing: {petWritingInputValue, writingScore},
    //     speaking: {petSpeakingInputValue, speakingScore},
    //     petAverageScore,
    //     petGrade,} = petResults; 

    //   // 2) Grab input values
    //   const name = document.getElementById('participantName').value;
    //   const surname = document.getElementById('participantSurname').value;
    //   const examLevel = document.getElementById('examLevel').value;
    //   const examDate = document.getElementById('examDate').value;

    //   // 3) Overlay text
    //   // Adjust coordinates, font sizes, etc. to match your background design
    //   doc.setFont('helvetica', 'bold');
    //   doc.setFontSize(24);
    //   doc.text(name, 105, 140, {align: 'center'});

    //   doc.setFontSize(16);
    //   doc.text(`Date: ${examDate}`, 105, 160, {align: 'center'});

    //   doc.setFontSize(16);
    //   doc.text(surname, 105, 180, {align: 'center'});

    //   doc.setFontSize(16);
    //   doc.text(examLevel, 105, 200, {align: 'center'});

    //   doc.setFontSize(16);
    //   doc.text(petListeningInputValue, 105, 210, {align: "right"});

    //   doc.setFontSize(16);
    //   doc.text(String(listeningScore), 105, 220, {align: "right"});

    //   // 4) Save
    //   doc.save('certificate.pdf');
    // };



document.getElementById("generateCertificate").addEventListener("click", async () => {
    await createCertificate();
}) 