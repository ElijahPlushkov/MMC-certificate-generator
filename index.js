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

