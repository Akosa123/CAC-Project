// button "selected" functionality
let selectedButton = null;
let indexNum = 0; 

// question functionality + question List (edit this for adding more questions) 
// + score var TODO: Add more questions / add real questions
const question = document.getElementById("question");
const questionList = ["Test Question 1", "Test Question 2", "Test Question 3"];
let questionNum = 0; 
let score = 0; 

// initialize questions
question.textContent = questionList[0];

// button select function -- Parameters{button: each button in class btn,
// index: index of current button}
document.querySelectorAll(".btn").forEach((button, index) => {
    button.addEventListener('click', event => {
        // if button already selected, make sure to remove that button on new click
        if (selectedButton) {
            selectedButton.classList.remove('selected');
        }
        // if button is clicked, add class "selected"
        button.classList.add('selected');
        selectedButton = button;
        // iterate to which button is selected
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

// on next_button click, call function
document.getElementById('next_button').addEventListener('click', () => {
    // determine which score to add based on current button selected
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
    // iterate to next question in list
    question.textContent = questionList[questionNum];

    // remove selected class from all buttons
    document.querySelectorAll(".btn").forEach(button =>{
        button.classList.remove('selected');
    })
    // if questionNum is final question in list
    if (questionNum == questionList.length){
        // get all result + quiz elements to change 
        let quiz = document.getElementById("quiz");
        let results = document.getElementById("results");
        let resultsImage = document.getElementById("results-image");
        let resultsText = document.getElementById("results-text");
        // hide quiz div
        quiz.style.display = "none";

        // determine which image to display based on score
        // EDIT IF YOU ADD MORE QUESTIONS
        // TODO: Change placeholders + add more scores 
        if(score == 9){
            resultsImage.src = "images/100_chart.png";
            resultsText.textContent = "PLACEHOLDER 100%";
        } else if(score > 6){
            resultsImage.src = "images/66_chart.png";
            resultsText.textContent = "PLACEHOLDER 66%";
        } else {
            resultsImage.src = "images/33_chart.png";
            resultsText.textContent = "PLACEHOLDER 33%";
        }
        // show results div
        results.style.display = "block";

        let scorePercentage = (score / (questionList.length * 3)) * 100;
        updateProgressDial(scorePercentage);
    } else {
        question.textContent = questionList[questionNum];
        document.querySelectorAll(".btn").forEach(button => {
            button.classList.remove('selected');
        });
    }
})
