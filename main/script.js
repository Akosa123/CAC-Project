// button "selected" functionality
let selectedButton = null;
let indexNum = 0; 
const scores = [3, 2, 1, 0];
// question functionality + question List (edit this for adding more questions) 
// + score var TODO: Add more questions / add real questions
const question = document.getElementById("question");
const questionList = [
    "I feel sad.",
    "I feel discouraged about the future.",
    "I don’t sleep as well as I used to.",
    "I feel like a failure.",
    "I believe that I look ugly.",
    "I feel guilty.",
    "I have thoughts of killing myself.",
    "I cry more now than I used to.",
    "I often find myself overthinking simple tasks.",
    "I have gained or lost a significant amount of weight.",
    "I have repeatedly felt that my life will never get better.",
    "I have repeatedly thought about my past mistakes.",
    "I have repeatedly blamed myself for every setback that happened to me.",
    "I have been sad or unhappy more days than not.",
    "I have felt empty inside most of the time.",
    "I have repeatedly felt that others would be better off without me.",
    "I have Repeatedly felt that I was a failure"
];
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

// on next_button click, call function
document.getElementById('next_button').addEventListener('click', () => {
    // determine which score to add based on current button selected
    if(indexNum != null){
        score += scores[indexNum];
        questionNum++;
        indexNum = null;
    } else {
        alert("Please select an answer to the question");
    }
    question.textContent = questionList[questionNum];
    
    selectedButton.classList.remove('selected')

    // if questionNum is final question in list
    if (questionNum == questionList.length){
        // get all result + quiz elements to change 
        let quiz = document.getElementById("quiz");
        let results = document.getElementById("results");
        let resultsImage = document.getElementById("results-image");

        // hide quiz div
        quiz.style.display = "none";
        
        // display image based on scorePercentage TODO: add text
        let scorePercentage = (score/(questionList.length*3))*100;
        if(scorePercentage > 98){
            resultsImage.src = "images/100chart.png";
        } else if(scorePercentage > 91){
            resultsImage.src = "images/91chart.png";
        } else if(scorePercentage > 84){
            resultsImage.src = "images/84chart.png";
        } else if(scorePercentage > 77){
            resultsImage.src = "images/77chart.png";
        } else if(scorePercentage > 70){
            resultsImage.src = "images/70chart.png";
        } else if(scorePercentage > 63){
            resultsImage.src = "images/63chart.png";
        } else if(scorePercentage > 56){
            resultsImage.src = "images/56chart.png";
        } else if(scorePercentage > 49){
            resultsImage.src = "images/49chart.png";
        } else if(scorePercentage > 42){
            resultsImage.src = "images/42chart.png";
        } else if(scorePercentage > 35){
            resultsImage.src = "images/35chart.png";
        } else if(scorePercentage > 28){
            resultsImage.src = "images/28chart.png";
        } else if(scorePercentage > 21){
            resultsImage.src = "images/21chart.png";
        } else if(scorePercentage > 14){
            resultsImage.src = "images/14chart.png";
        } else if(scorePercentage > 7){
            resultsImage.src = "images/7chart.png";
        } else {
            resultsImage.src = "images/0chart.png";
        }
        // show results div
        results.style.display = "block";
    }
})
