document.addEventListener('keydown', function (event) {
    if (event.code === 'ArrowDown') {
        const participantName = document.getElementById('participantName');
        if (participantName) {
            participantName.focus();
        }
    }
});

//SELECT DATE
document.addEventListener('keydown', function (event) {
    const examDate = document.getElementById("examDate");
    if (event.code === 'ArrowRight') {
        const participantFormToggleButton = document.getElementById('participantFormToggleButton');
        if (participantFormToggleButton) {
            participantFormToggleButton.click();
            examDate.focus();
        }
    }
});

document.addEventListener('keydown', function (event) {
    const examDate = document.getElementById("examDate");
    if (event.code === 'Digit1' && document.activeElement === examDate) {
        event.preventDefault();
        const date1 = document.getElementById('date1');
        if (date1) {
            date1.click();
            examDate.blur();
        }
    }
});

document.addEventListener('keydown', function (event) {
    const examDate = document.getElementById("examDate");
    if (event.code === 'Digit2' && document.activeElement === examDate) {
        event.preventDefault();
        const date2 = document.getElementById('date2');
        if (date2) {
            date2.click();
            examDate.blur();
        }
    }
});

document.addEventListener('keydown', function (event) {
    const examDate = document.getElementById("examDate");
    if (event.code === 'Digit3' && document.activeElement === examDate) {
        event.preventDefault();
        const date3 = document.getElementById('date3');
        if (date3) {
            date3.click();
            examDate.blur();
        }
    }
});

document.addEventListener('keydown', function (event) {
    const examDate = document.getElementById("examDate");
    if (event.code === 'Digit4' && document.activeElement === examDate) {
        event.preventDefault();
        const date4 = document.getElementById('date4');
        if (date4) {
            date4.click();
            examDate.blur();
        }
    }
});

document.addEventListener('keydown', function (event) {
    const examDate = document.getElementById("examDate");
    if (event.code === 'Digit5' && document.activeElement === examDate) {
        event.preventDefault();
        const date5 = document.getElementById('date5');
        if (date5) {
            date5.click();
            examDate.blur();
        }
    }
});

document.addEventListener('keydown', function (event) {
    const examDate = document.getElementById("examDate");
    if (event.code === 'Digit6' && document.activeElement === examDate) {
        event.preventDefault();
        const date6 = document.getElementById('date6');
        if (date6) {
            date6.click();
            examDate.blur();
        }
    }
});

document.addEventListener('keydown', function (event) {
    if (event.code === 'KeyL') {
        const listenings = document.querySelectorAll('.listening');
        listenings.forEach(listening => {
            listening.focus();
        });
        event.preventDefault();
    }
});

//SELECT EXAM
document.addEventListener('keydown', function (event) {
    const participantName = document.getElementById('participantName');
    const participantSurname = document.getElementById("participantSurname");
    const examLevel = document.getElementById("examLevel");
    if (event.code === 'KeyS' && document.activeElement !== participantName &&
        document.activeElement !== participantSurname &&
        document.activeElement !== examLevel) {
        const startersSelect = document.getElementById('startersSelect');
        if (startersSelect) {
            startersSelect.click();
        }
    }
});

document.addEventListener('keydown', function (event) {
    const participantName = document.getElementById('participantName');
    const participantSurname = document.getElementById("participantSurname");
    const examLevel = document.getElementById("examLevel");
    if (event.code === 'KeyM' && document.activeElement !== participantName &&
        document.activeElement !== participantSurname &&
        document.activeElement !== examLevel) {
        const moversSelect = document.getElementById('moversSelect');
        if (moversSelect) {
            moversSelect.click();
        }
    }
});

document.addEventListener('keydown', function (event) {
    const participantName = document.getElementById('participantName');
    const participantSurname = document.getElementById("participantSurname");
    const examLevel = document.getElementById("examLevel");
    if (event.code === 'KeyF' && document.activeElement !== participantName &&
        document.activeElement !== participantSurname &&
        document.activeElement !== examLevel) {
        const flyersSelect = document.getElementById('flyersSelect');
        if (flyersSelect) {
            flyersSelect.click();
        }
    }
});

document.addEventListener('keydown', function (event) {
    const participantName = document.getElementById('participantName');
    const participantSurname = document.getElementById("participantSurname");
    const examLevel = document.getElementById("examLevel");
    if (event.code === 'KeyK' && document.activeElement !== participantName &&
        document.activeElement !== participantSurname &&
        document.activeElement !== examLevel) {
        const ketSelect = document.getElementById('ketSelect');
        if (ketSelect) {
            ketSelect.click();
        }
    }
});

document.addEventListener('keydown', function (event) {
    const participantName = document.getElementById('participantName');
    const participantSurname = document.getElementById("participantSurname");
    const examLevel = document.getElementById("examLevel");
    if (event.code === 'KeyP' && document.activeElement !== participantName &&
        document.activeElement !== participantSurname &&
        document.activeElement !== examLevel) {
        const petSelect = document.getElementById('petSelect');
        if (petSelect) {
            petSelect.click();
        }
    }
});

document.addEventListener('keydown', function (event) {
    const participantName = document.getElementById('participantName');
    const participantSurname = document.getElementById("participantSurname");
    const examLevel = document.getElementById("examLevel");
    if (event.code === 'KeyE' && document.activeElement !== participantName &&
        document.activeElement !== participantSurname &&
        document.activeElement !== examLevel) {
        const fceSelect = document.getElementById('fceSelect');
        if (fceSelect) {
            fceSelect.click();
        }
    }
});

document.addEventListener('keydown', function (event) {
    const participantName = document.getElementById('participantName');
    const participantSurname = document.getElementById("participantSurname");
    const examLevel = document.getElementById("examLevel");
    if (event.code === 'KeyC' && document.activeElement !== participantName &&
        document.activeElement !== participantSurname &&
        document.activeElement !== examLevel) {
        const caeSelect = document.getElementById('caeSelect');
        if (caeSelect) {
            caeSelect.click();
        }
    }
});

//CALCULATE AND GENERATE BUTTONS
document.addEventListener('keydown', function (event) {
    const teacherLetter = document.getElementById("teacherLetter");
    if (event.code === 'Enter' && document.activeElement !== teacherLetter) {
        const button = document.querySelector('.submit-button');
        button.click();
    }
});

// document.addEventListener('keydown', function (event) {
//     if (event.code === 'Enter') {
//         const buttons = document.querySelectorAll('.calculate-button');
//         buttons.forEach(button => {
//             button.click();
//         });
//         event.preventDefault();
//     }
// });