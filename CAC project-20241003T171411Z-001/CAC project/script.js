let selectedButton = null;
let indexNum = 0; 
// get current question, be able to change question
const question = document.getElementById("question");
const questionList = ["Test Question 1", "Test Question 2", "Test Question 3"];
let questionNum = 0; 
let score = 0; 

question.textContent = questionList[0];

document.querySelectorAll(".btn").forEach((button, index) => {
    button.addEventListener('click', event => {
        if (selectedButton) {
            selectedButton.classList.remove('selected');
        }

        button.classList.add('selected');
        selectedButton = button;
        
        indexNum = index + 1;  
    })
})

// on next_button click, call function next() 
document.getElementById('next_button').addEventListener('click', () => {
    if (indexNum == 1){
        score += 3; 
        questionNum++;
    } else if (indexNum == 2){
        score += 2;
        questionNum++;
    } else if (indexNum == 3){
        score += 1;
        questionNum++;
    } else if (indexNum == 4){
        questionNum++;
    } else {
        console.log("no button selected")
    }
    question.textContent = questionList[questionNum];
    document.querySelectorAll(".btn").forEach(button =>{
        button.classList.remove('selected');
    })
    if (questionNum == questionList.length){
        console.log("switch")
        let quiz = document.getElementById("quiz");
        let results = document.getElementById("results");
        let resultsBar = document.getElementById("results-bar");
        quiz.style.display = "none";
        results.style.display = "block";

    }
    console.log(score);
})