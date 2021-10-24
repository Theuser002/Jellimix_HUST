const btn = document.querySelector("#switch-theme-toggle-btn");
const myTheme = document.querySelector("#theme-link");
const msLogo = document.querySelector("#ms-img");
const msLogoOpen = document.querySelector("#ms-img-open");
const msLogoFooter = document.querySelector("#footer-logo");
// setTimeout(() => {
//     btn.addEventListener("change", function () {
//         // Swap out the URL for the different stylesheets
//         if (this.checked == true) {
//             myTheme.href = "css/style.css";
//         }
//         else {
//             myTheme.href = "css/light-theme.css";
//         }
//     })
// }, 100);


function getTheme() {
    return localStorage.getItem('theme-link') || 'css/style.css';
}
function saveTheme(theme) {
    localStorage.setItem('theme-link', theme);
}

function applyTheme(theme) {
    myTheme.href = theme

}

function rotateTheme(theme) {
    if (theme === 'css/style.css') {
        return 'css/light-theme.css'
    }
    return 'css/style.css';
}


// Mimic heavy load done by other JS scripts
setTimeout(() => {
    let theme = getTheme();
    applyTheme(theme);
    if (theme === 'css/style.css') {
        btn.checked = true;
        msLogo.src = 'images/musical-note-ver2.png';
        msLogoOpen.src = 'images/musical-note-logo-text-ver2.png';
        msLogoFooter.src = 'images/musical-note-logo-text-ver2.png';
    }
    else {
        btn.checked = false;
        msLogo.src = 'images/musical-note-ver1.png';
        msLogoOpen.src = 'images/musical-note-logo-text-ver1.png';
        msLogoFooter.src = 'images/musical-note-logo-text-ver1.png';
    }

    btn.onchange = () => {
        const newTheme = rotateTheme(theme);
        applyTheme(newTheme);
        // themeDisplay.innerText = newTheme;
        saveTheme(newTheme);
        if (newTheme === 'css/style.css') {
            msLogo.src = 'images/musical-note-ver2.png';
            msLogoOpen.src = 'images/musical-note-logo-text-ver2.png';
            msLogoFooter.src = 'images/musical-note-logo-text-ver2.png';

        }
        else {
            msLogo.src = 'images/musical-note-ver1.png';
            msLogoOpen.src = 'images/musical-note-logo-text-ver1.png';
            msLogoFooter.src = 'images/musical-note-logo-text-ver1.png';
        }
        theme = newTheme;
    }
}, 100);
