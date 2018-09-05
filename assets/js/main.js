$(document).ready(function () {

//display quiz screen
$('#startScreen a.quiz-start-btn').click(function(e) {
    $('#quizContent').fadeIn('slow');
    $('#startScreen').hide();
});

//Quiz App
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
        var clicked = false;

        $('.option').click(function(){
           clicked==true;
        });
         if (clicked==true) {
                $(this).addClass('feedback1');
            }
    }


    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}

//Question
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;

}

Question.prototype.isNotCorrectAnswer = function(choice) {
    return this.answer != choice;
}
//App

function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);

        }
        
        changeBackground();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();

    }
};


function changeBackground() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    // var element = document.getElementById("progress");
    $('#image-bg-side').addClass('bg'+currentQuestionNumber);
    if (currentQuestionNumber == 2 ){
        $('#image-bg-side').removeClass('bg1');
    } else if (currentQuestionNumber == 3 ){
        $('#image-bg-side').removeClass('bg2 bg1').fadeIn();
    }
    else if (currentQuestionNumber == 4 ){
        $('#image-bg-side').removeClass('bg1 bg2 bg3').fadeIn();
    }
    else if (currentQuestionNumber == 5 ){
        $('#image-bg-side').removeClass('bg1 bg2 bg3 bg4').fadeIn();
    }
    else if (currentQuestionNumber == 6 ){
        $('#image-bg-side').removeClass('bg1 bg2 bg3 bg4 bg5').fadeIn();
    }
};

function showScores() {
    // var gameOverHTML = "<h1>Result</h1>";
    // gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    // var element = document.getElementById("quizContent");
    // element.innerHTML = gameOverHTML;
    $('#quizContent').hide();
    if(quiz.score === 5){
        $('#finishScreen').show();
        $('body').addClass('finishScreen');
    } else if(quiz.score < 5){
        $('#restartScreen').show();
        $('body').addClass('finishScreen'+quiz.score+'star');
        $('body').addClass('redScreen');
        $('#result-content').addClass('star'+quiz.score);
    }
    
};

// create questions
var questions = [
    new Question("Toni mengambil uang kas untuk keperluannya membayar hutang.", ["Opportunity", "Motivation","Rationalization"], "Motivation"),
    new Question("Budi sering menitipkan password akses sistemnya kepada rekan kerja agar dapat melayani transaksi Nasabah dengan jumlah yang besar.", ["Opportunity", "Motivation","Rationalization"], "Rationalization"),
    new Question("Ani menyimpan kelebihan dari uang kas untuk berjaga-jaga jika suatu saat terjadi salah perhitungan.", ["Opportunity", "Motivation","Rationalization"], "Rationalization"),
    new Question("Beny meminta bawahannya untuk meminjamkan sejumlah uang kas dan berjanji mengembalikannya setelah gajian.", ["Opportunity", "Motivation","Rationalization"], "Opportunity"),
    new Question("Andi memanipulasi target penjualan karena target kerjanya tidak tercapai.", ["Opportunity", "Motivation","Rationalization"], "Motivation"),
    // new Question("Anton melakukan pemalsuan kuitansi karena lokasi KLN yang jauh dari Kantor Cabang Utama.", ["Opportunity", "Motivation","Rationalization"], "Opportunity"),
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();

//display screen

$('.finishNextBtn').click(function(){
    $('#finishScreen').hide();
    $('#quitScreen').show();
    $('#startScreen').hide();
});

$('.quitBtn').click(function(){
    $('#finishScreen').hide();
   $('#quitScreen').hide();
   $('#startScreen').show();
    location.reload();
});

$('.restartBtn').click(function(){
    $('#restartScreen').hide();
    $('#quizContent').hide();
    $('#startScreen').show();
    location.reload();
});
     
    
    
});//doc ready