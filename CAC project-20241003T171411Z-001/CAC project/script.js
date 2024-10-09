let selectedButton = null;
let indexNum = 0; 
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
    });
});

function updateProgressDial(scorePercentage) {
    const circle = document.querySelector('.progress-ring__circle');
    const radius = circle.r.baseVal.value;
    const circumference = Math.PI * radius;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    const offset = circumference - (scorePercentage / 100) * circumference;
    circle.style.strokeDashoffset = offset;

    const needle = document.querySelector('.needle');
    const needleRotation = (-90 + (scorePercentage / 100) * 180); 
    needle.style.transform = `rotate(${needleRotation}deg)`;
}

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
        console.log("no button selected");
    }

    if (questionNum == questionList.length) {
        let quiz = document.getElementById("quiz");
        let results = document.getElementById("results");

        quiz.style.display = "none";
        results.style.display = "block";

        let scorePercentage = (score / (questionList.length * 3)) * 100;
        updateProgressDial(scorePercentage);
    } else {
        question.textContent = questionList[questionNum];
        document.querySelectorAll(".btn").forEach(button => {
            button.classList.remove('selected');
        });
    }

    indexNum = 0;
});

