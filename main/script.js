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

// on next_button click, call function
document.getElementById('next_button').addEventListener('click', () => {
    // determine which score to add based on current button selected
    if(indexNum != null){
        if (indexNum == 1){
            score += 3; 
            questionNum++;
        } else if (indexNum == 2){
            score += 2;
            questionNum++;
        } else if (indexNum == 3){
            score += 1;
            questionNum++;
        } else{
            questionNum++;
        }
        indexNum = null;
    }
    question.textContent = questionList[questionNum];
    
    selectedButton.classList.remove('selected')

    // if questionNum is final question in list
    if (questionNum == questionList.length){
        // get all result + quiz elements to change 
        let quiz = document.getElementById("quiz");
        let results = document.getElementById("results");
        let resultsImage = document.getElementById("results-image");
        let resultsText = document.getElementById("results-text");

        // hide quiz div
        quiz.style.display = "none";
        
        // display image based on scorePercentage TODO: add text
        let scorePercentage = (score/(questionList.length*3))*100;
        if(scorePercentage > 98){
            resultsImage.src = "images/100chart.png";
            resultsText.textContent = "placeholder 100%";
        } else if(scorePercentage > 91){
            resultsImage.src = "images/91chart.png";
            resultsText.textContent = "placeholder 91%";
        } else if(scorePercentage > 84){
            resultsImage.src = "images/84chart.png";
            resultsText.textContent = "placeholder 84%";
        } else if(scorePercentage > 77){
            resultsImage.src = "images/77chart.png";
            resultsText.textContent = "placeholder 77%";
        } else if(scorePercentage > 70){
            resultsImage.src = "images/70chart.png";
            resultsText.textContent = "placeholder 70%";
        } else if(scorePercentage > 63){
            resultsImage.src = "images/63chart.png";
            resultsText.textContent = "placeholder 63%";
        } else if(scorePercentage > 56){
            resultsImage.src = "images/56chart.png";
            resultsText.textContent = "placeholder 56%";
        } else if(scorePercentage > 49){
            resultsImage.src = "images/49chart.png";
            resultsText.textContent = "placeholder 49%";
        } else if(scorePercentage > 42){
            resultsImage.src = "images/42chart.png";
            resultsText.textContent = "placeholder 42%";
        } else if(scorePercentage > 35){
            resultsImage.src = "images/35chart.png";
            resultsText.textContent = "placeholder 35%";
        } else if(scorePercentage > 28){
            resultsImage.src = "images/28chart.png";
            resultsText.textContent = "placeholder 28%";
        } else if(scorePercentage > 21){
            resultsImage.src = "images/21chart.png";
            resultsText.textContent = "placeholder 21%";
        } else if(scorePercentage > 14){
            resultsImage.src = "images/14chart.png";
            resultsText.textContent = "placeholder 14%";
        } else if(scorePercentage > 7){
            resultsImage.src = "images/7chart.png";
            resultsText.textContent = "placeholder 7%";
        } else {
            resultsImage.src = "images/0chart.png";
            resultsText.textContent = "placeholder 0%";
        }

        // show results div
        results.style.display = "block";
    }
})
