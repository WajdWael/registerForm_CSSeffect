const prevBtns = document.querySelectorAll(".btn-prev")
const nextBtns = document.querySelectorAll(".btn-next")

const progress = document.getElementById("progress")
const formSteps = document.querySelectorAll(".form-step")
const progressStep = document.querySelectorAll(".progress-step")


let formStepNum = 0


nextBtns.forEach(btn =>{
    btn.addEventListener('click', () => {
        formStepNum++
        updateFormSteps()
        updateProgressbar()
    })
})

prevBtns.forEach(btn =>{
    btn.addEventListener('click', () => {
        formStepNum--
        updateFormSteps()
        updateProgressbar()
    })
})

function updateFormSteps() {

    formSteps.forEach((formStep) => {
        formStep.classList.contains('form-step-active') &&
            formStep.classList.remove('form-step-active') 
    })

    formSteps[formStepNum].classList.add('form-step-active')
}

function updateProgressbar() {
    progressStep.forEach((progressStep, idx) => {
        if (idx < formStepNum + 1) {
            progressStep.classList.add("step-active")
        } else {
            progressStep.classList.remove("step-active")
        }
    })

    const progressActive = document.querySelectorAll(".step-active")
    progress.style.width =
        ((progressActive.length - 1) / (progressStep.length - 1)) * 100 + "%"
}
