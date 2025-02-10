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

function generateCertificate() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // 1) Add your background image
    // Make sure "certificate-bg.png" is in the correct folder
    // and adjust x/y/width/height to match your layout.
    const backgroundImg = new Image();
    backgroundImg.src = window.YLE_TEMPLATE;
    backgroundImg.onload = () => {
      // The page size by default is A4: 210mm x 297mm, 
      // but jsPDF uses 'pt' by default (596 pts x 842 pts).
      // You can do some math or just approximate.
      doc.addImage(backgroundImg, 'PNG', 0, 0, 210, 297);

      // 2) Grab input values
      const name = document.getElementById('studentName').value;
      const surname = document.getElementById('studentSurname').value;
      const examLevel = document.getElementById('examLevel').value;
      const examDate = document.getElementById('examDate').value;


      // 3) Overlay text
      // Adjust coordinates, font sizes, etc. to match your background design
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(24);
      doc.text(name, 105, 140, {align: 'center'});

      doc.setFontSize(16);
      doc.text(`Date: ${examDate}`, 105, 160, {align: 'center'});

      doc.setFontSize(16);
      doc.text(surname, 105, 180, {align: 'center'});

      doc.setFontSize(16);
      doc.text(examLevel, 105, 200, {align: 'center'});

      // 4) Save
      doc.save('certificate.pdf');
    };
  }