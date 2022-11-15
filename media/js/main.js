vscode = acquireVsCodeApi();

window.addEventListener('DOMContentLoaded', event => {

    let addOptionButton = document.querySelector("#add-option-button");
    addOptionButton.addEventListener('click', addOption);
    let runButton = document.querySelector("#run-button");
    runButton.addEventListener('click', run);
    let perriButton = document.querySelector("#run-button2")
    perriButton.addEventListener('click',perriFunction);
});

window.addEventListener('message', event => {
    let message = event.data;
    
    document.querySelector("#error").innerText = message;
});
function perriFunction(){
    document.querySelector("#modifiable-summary-header").innerText = "PBTRIG";
    document.querySelector("#modifiable-by-perri-function").innerText = "Modificato da perri function() triggerata da perri-button";
}
function addOption() {
    let optionsContainer = document.querySelector("#options");

    let lastOptionNum = optionsContainer.childNodes.length + 1;

    let newOption = document.createElement("div");
    newOption.classList.add("option");
    newOption.id = "option-" + lastOptionNum;
    
    let optionInput = document.createElement("input");
    optionInput.type = "text";
    optionInput.placeholder = "Option";
    optionInput.id = "option-input-" + lastOptionNum;

    let removeOptionButton = document.createElement("a");
    removeOptionButton.href = "";
    removeOptionButton.classList.add("fas");
    removeOptionButton.classList.add("fa-trash-can");
    removeOptionButton.id = "remove-option-" + lastOptionNum;
    removeOptionButton.addEventListener('click', (e) => {
        let optionNum = e.target.id.match(/\d+/);
        document.querySelector("#option-" + optionNum).remove();
    });

    newOption.appendChild(optionInput);
    newOption.appendChild(removeOptionButton);

    optionsContainer.appendChild(newOption);
}

function run() {
    let options = document.querySelectorAll(".option");
    let optionsValues = [];

    options.forEach(option => {
        optionsValues.push(option.firstChild.value)
    });

    vscode.postMessage({
        options: optionsValues,
        useCustomSolver: document.querySelector("#use-different-solver").checked
    });
}