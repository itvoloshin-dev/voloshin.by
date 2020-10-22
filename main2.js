const answerBtnList = document.querySelectorAll(".answer-button");
// const warningButton = document.querySelectorAll(".warning-btn");
const answerCardsList = document.querySelectorAll(".answer-card");
// const warning = document.querySelectorAll(".warning-text");

const siteContinueButton = document.querySelectorAll(".step-continue");
// const siteContinueButton1 = document.querySelector(".step-continue-1");

const progressItem = document.querySelectorAll(".progress-bar-item");
const progressText = document.querySelectorAll(".progress-bar-text");
const showUrlInputButton = document.querySelectorAll(".yes");
const urlInput = document.querySelectorAll(".url-input-wrapper");

const rangeInput = document.querySelectorAll(".range-input");
const bubble = document.querySelectorAll(".bubble");
const rightSiteRange = document.querySelectorAll(".range-background");
// const bubble = document.querySelector(".next-step-btn");

let answerArr = {};
let currentStepState = 1;
let currentActiveClass = "st1";

for (let j = 0; j < answerCardsList.length; j++) {
    answerCardsList[j].addEventListener("click", () => {
        answerArr[`${currentStepState}`] = j + 1;

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
    })
}

siteContinueButton[0].addEventListener("click", () => {
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
})

siteContinueButton[1].addEventListener("click", () => {
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
})

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

        showUrlInputButton[j].parentNode.children[0].classList.add("hide");
        showUrlInputButton[j].parentNode.children[1].classList.remove("hide");

        showUrlInputButton[j].parentNode.parentNode.children[j === 0 ? 1 : 0].children[0].classList.remove("hide");
        showUrlInputButton[j].parentNode.parentNode.children[j === 0 ? 1 : 0].children[1].classList.add("hide");
        urlInput[0].classList.remove("hide")
    })
}

urlInput[0].addEventListener("change", () => {
    answerArr[`${currentStepState}`] = urlInput[0].children[1].value;
})


rangeInput[0].addEventListener("input", () => {
    setBubble(rangeInput[0], bubble[0]);
});

function setBubble(range, bubble) {
    const val = range.value;
    const min = range.min ? range.min : 0;
    const max = range.max ? range.max : 100;
    const newVal = Number(((val - min) * 100) / (max - min));
    bubble.innerHTML = val;
    answerArr[`${currentStepState}`] = val;
    rightSiteRange[0].style = `width: calc(100% - ${newVal}%)`;
    console.log(answerArr);
    bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}


// siteContinueButton1.addEventListener("click", () => {
//         if (urlInput[0].children[1].value == false) {
//
//             warning.classList.remove("visibility-hidden");
//             console.log("123", urlInput[0].children[1].value)
//
//             setTimeout(() =>{
//                 warning.classList.add("visibility-hidden");
//             }, 3000);
//         }
//     })

console.log(answerArr)

