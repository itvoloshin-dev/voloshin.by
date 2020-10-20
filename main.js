const stepOne = document.querySelector(".step-one");
const stepTwo = document.querySelector(".step-two");
const stepThree = document.querySelector(".step-three");
const answerBtnList1 = document.querySelectorAll(".answer-button-st1");
// const activeStep = document.querySelector(".active");
const answerBtnList2 = document.querySelectorAll(".answer-button-st2");
const progressItem = document.querySelectorAll(".progress-bar-item");
const progressText = document.querySelectorAll(".progress-bar-text");

let answerArr ={};

for (let j = 0; j < answerBtnList1.length; j++) {
    answerBtnList1[j].addEventListener('change', () => {
        let arr = [];

        for (let i = 0; i < answerBtnList1.length; i++) {
            if (answerBtnList1[i].checked) {
                arr.push(true);

                answerArr['1'] = `${answerBtnList1[i].value}`;
            }

            else {
                arr.push(false);
            }
        }
        if (arr.some(isTrue => isTrue === true)) {
            stepOne.classList.add('hide');
            stepTwo.classList.remove('hide');
            stepOne.classList.remove('active');
            stepTwo.classList.add('active');

            progressItem[1].classList.add('progress-bar-active');
            progressText[0].classList.add('hide');
            progressText[1].classList.remove('hide');
        }
        else {
            return;
        }
    })
}

for (let j = 0; j < answerBtnList2.length; j++) {
    answerBtnList2[j].addEventListener('change', () => {
        let arr = [];

        for (let i = 0; i < answerBtnList2.length; i++) {
            if (answerBtnList2[i].checked) {
                arr.push(true);

                answerArr['2'] = `${answerBtnList2[i].value}`;
            }

            else {
                arr.push(false);
            }
        }
        if (arr.some(isTrue => isTrue === true)) {
            stepTwo.classList.add('hide');
            stepThree.classList.remove('hide');
            stepTwo.classList.remove('active');
            stepThree.classList.add('active');

            progressItem[2].classList.add('progress-bar-active');
            progressText[1].classList.add('hide');
            progressText[2].classList.remove('hide');
        }
        else {
            return;
        }
    })
}

console.log(answerArr)

