const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menuToggle");
const mainContent = document.getElementById("mainContent");
const section1 = document.getElementById("section1");
const placeholderSection = document.getElementById("placeholderSection");
const placeholderTitle = document.getElementById("placeholderTitle");
const htmlSource = document.getElementById("htmlSource");
const htmlSource2 = document.getElementById("htmlSource2");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
const section4 = document.getElementById("section4");
const section5 = document.getElementById("section5");
const section6 = document.getElementById("section6");
const section7 = document.getElementById("section7");
const section8 = document.getElementById("section8");
const runnerDialog = document.getElementById("runnerDialog");
const runnerFrame = document.getElementById("runnerFrame");
const runnerTitle = document.getElementById("runnerTitle");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

function applyTheme(theme) {
    const isDark = theme === "dark";
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
    themeIcon.textContent = isDark ? "☀" : "☾";
    themeToggle.setAttribute("aria-label",
        isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro");
    themeToggle.title = isDark ? "Modo claro" : "Modo oscuro";
}

const savedTheme = localStorage.getItem("exam-theme");
applyTheme(savedTheme === "dark" ? "dark" : "light");

themeToggle.addEventListener("click", () => {
    const nextTheme =
        document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    localStorage.setItem("exam-theme", nextTheme);
});

menuToggle.addEventListener("click", () => {
    const hidden = sidebar.classList.toggle("hidden");
    mainContent.classList.toggle("full", hidden);
    menuToggle.setAttribute("aria-expanded", String(!hidden));
    menuToggle.setAttribute("aria-label", hidden ? "Mostrar menú" : "Ocultar menú");
});

document.querySelectorAll(".section-link").forEach((button) => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".section-link").forEach((item) => {
            item.classList.remove("active");
        });
        button.classList.add("active");

        const sectionNumber = button.dataset.section;
        if (sectionNumber === "1") {
            section1.hidden = false;
            section2.hidden = true;
            section3.hidden = true;
            section4.hidden = true;
            section5.hidden = true;
            section6.hidden = true;
            section7.hidden = true;
            section8.hidden = true;
            placeholderSection.hidden = true;
            return;
        }

        if (sectionNumber === "2") {
            section1.hidden = true;
            section2.hidden = false;
            section3.hidden = true;
            section4.hidden = true;
            section5.hidden = true;
            section6.hidden = true;
            section7.hidden = true;
            section8.hidden = true;
            placeholderSection.hidden = true;
            return;
        }

        if (sectionNumber === "3") {
            section1.hidden = true;
            section2.hidden = true;
            section3.hidden = false;
            section4.hidden = true;
            section5.hidden = true;
            section6.hidden = true;
            section7.hidden = true;
            section8.hidden = true;
            placeholderSection.hidden = true;
            return;
        }

        if (sectionNumber === "4") {
            section1.hidden = true;
            section2.hidden = true;
            section3.hidden = true;
            section4.hidden = false;
            section5.hidden = true;
            section6.hidden = true;
            section7.hidden = true;
            section8.hidden = true;
            placeholderSection.hidden = true;
            return;
        }

        if (sectionNumber === "5") {
            section1.hidden = true;
            section2.hidden = true;
            section3.hidden = true;
            section4.hidden = true;
            section5.hidden = false;
            section6.hidden = true;
            section7.hidden = true;
            section8.hidden = true;
            placeholderSection.hidden = true;
            return;
        }

        if (sectionNumber === "6") {
            section1.hidden = true;
            section2.hidden = true;
            section3.hidden = true;
            section4.hidden = true;
            section5.hidden = true;
            section6.hidden = false;
            section7.hidden = true;
            section8.hidden = true;
            placeholderSection.hidden = true;
            return;
        }

        if (sectionNumber === "7") {
            section1.hidden = true;
            section2.hidden = true;
            section3.hidden = true;
            section4.hidden = true;
            section5.hidden = true;
            section6.hidden = true;
            section7.hidden = false;
            section8.hidden = true;
            placeholderSection.hidden = true;
            return;
        }

        if (sectionNumber === "8") {
            section1.hidden = true;
            section2.hidden = true;
            section3.hidden = true;
            section4.hidden = true;
            section5.hidden = true;
            section6.hidden = true;
            section7.hidden = true;
            section8.hidden = false;
            placeholderSection.hidden = true;
            return;
        }

        section1.hidden = true;
        section2.hidden = true;
        section3.hidden = true;
        section4.hidden = true;
        section5.hidden = true;
        section6.hidden = true;
        section7.hidden = true;
        section8.hidden = true;
        placeholderSection.hidden = false;
        placeholderTitle.textContent =
            "Sección " + sectionNumber + " - " + button.querySelector("small").textContent;
    });
});

async function loadText(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("No se pudo cargar " + url);
    }
    return response.text();
}

loadText("./Actividad 1/pagina.html")
    .then((text) => {
        htmlSource.textContent = text;
    })
    .catch((error) => {
        htmlSource.textContent = error.message;
    });

loadText("./Actividad 2/pagina.html")
    .then((text) => {
        htmlSource2.textContent = text;
    })
    .catch((error) => {
        htmlSource2.textContent = error.message;
    });

document.querySelectorAll(".exercise").forEach((exercise) => {
    const codeBlock = exercise.querySelector("pre code");
    const url = exercise.dataset.source || exercise.dataset.js;
    const sourceType = exercise.dataset.type || "js";

    loadText(url)
        .then((text) => {
            codeBlock.textContent = text;
        })
        .catch((error) => {
            codeBlock.textContent = error.message;
        });

    exercise.querySelector(".run-button").addEventListener("click", async () => {
        const title = exercise.querySelector("h3").textContent;
        runnerTitle.textContent = title;

        try {
            const source = await loadText(url);

            if (sourceType === "html") {
                runnerFrame.srcdoc = source;
            } else {
                const escapedScript = source
                    .replace(/<\/script/gi, "<\\/script");

                runnerFrame.srcdoc = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { margin: 0; padding: 24px; color: #202938; font: 16px/1.5 Arial, sans-serif; }
    </style>
</head>
<body>
    <script>${escapedScript}<\/script>
</body>
</html>`;
            }
            runnerDialog.showModal();
        } catch (error) {
            runnerTitle.textContent = "No se pudo ejecutar el ejercicio";
            runnerFrame.srcdoc = "<p style=\"padding:20px;font-family:Arial\">" + error.message + "</p>";
            runnerDialog.showModal();
        }
    });
});

document.getElementById("closeRunner").addEventListener("click", () => {
    runnerDialog.close();
});
