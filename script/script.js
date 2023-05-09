// By HookSander || Javascript

const buttonBack = document.getElementById("back");
const openGithubButton = document.getElementById("githubButton");
const downloadCodeSource = document.getElementById("codeSourceButton");
const downloadButton = document.getElementById("downloadButton");

openGithubButton.addEventListener("click", function() {
    window.open("https://github.com/HookSandeer/ASCII-Art", "_blank");
});

downloadCodeSource.addEventListener("click", function() {
    window.open("https://github.com/HookSandeer/ASCII-Art/archive/refs/tags/v4.0.zip");
});

downloadButton.addEventListener("click", function() {
    window.open("https://github.com/HookSandeer/ASCII-Art/releases/download/v4.0/Ascii_Art_Generator.exe");
});

buttonBack.addEventListener("click", function() {
    window.location.href = "main.html";
});
