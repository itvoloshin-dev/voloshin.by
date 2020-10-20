const answerBtnList = document.querySelectorAll(".answer-button");

const progressItem = document.querySelectorAll(".progress-bar-item");
const progressText = document.querySelectorAll(".progress-bar-text");
const showUrlInputButton = document.querySelectorAll(".yes");
const urlInput = document.querySelectorAll(".url-input-wrapper");

const rangeInput = document.querySelectorAll(".range-input");
const bubble = document.querySelectorAll(".bubble");
const bubble = document.querySelector(".next-step-btn");

let answerArr = {};
let currentStepState = 1;
let currentActiveClass = "st1";

for (let j = 0; j < answerBtnList.length; j++) {
    answerBtnList[j].addEventListener('change', () => {
        let arr = [];

        for (let i = 0; i < answerBtnList.length; i++) {
            if (answerBtnList[i].checked && answerBtnList[i].classList.contains(currentActiveClass) && !answerBtnList[i].classList.contains("yes")) {
                arr.push(true);

                answerArr[`${currentStepState}`] = `${answerBtnList[i].value}`;
            }
        }
        if (arr.some(isTrue => isTrue === true)) {
            const currentStep = document.querySelector(`.step-${currentStepState}`);
            const nextStep = document.querySelector(`.step-${currentStepState + 1}`);

            currentStep.classList.add('hide');
            nextStep.classList.remove('hide');
            currentStep.classList.remove('active');
            nextStep.classList.add('active');


            progressItem[currentStepState].classList.add('progress-bar-active');
            progressText[currentStepState - 1].classList.add('hide');
            progressText[currentStepState].classList.remove('hide');

            currentStepState++;
            currentActiveClass = `st${currentStepState}`
        }
    })
}

for (let j = 0; j < showUrlInputButton.length; j++) {
    showUrlInputButton[j].addEventListener("click", () => {
        answerBtnList[j].classList.add("checked");
        urlInput[0].classList.remove("hide")
    })
}
console.log(rangeInput);
rangeInput[0].addEventListener("input", () => {
    setBubble(rangeInput[0], bubble[0]);
});
setBubble(rangeInput[0], bubble[0]);

function setBubble(range, bubble) {
    const val = range.value;
    const min = range.min ? range.min : 0;
    const max = range.max ? range.max : 100;
    const newVal = Number(((val - min) * 100) / (max - min));
    bubble.innerHTML = val;
    // Sorta magic numbers based on size of the native UI thumb
    bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}

console.log(answerArr)

