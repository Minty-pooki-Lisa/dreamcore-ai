// DreamCore AI JavaScript

console.log("🌙 DreamCore AI loaded!");

const buttons = document.querySelectorAll(".buttons a");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-6px) scale(1.05)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0) scale(1)";
    });

});
