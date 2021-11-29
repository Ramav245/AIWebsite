
// we define answers
var answers = ["It is certain", 
                "It is decidedly so", 
                "Without a doubt", 
                "Yes - definitely",
                "You may rely on it", 
                "As I see it, yes", 
                "Most likely", 
                "Outlook good", 
                "Yes", "Signs point to yes",
                "Don't count on it", 
                "My reply is no",
                "My sources say no", 
                "Outlook not so good",
                "Very doubtful", 
                "Reply hazy, try again", 
                "Ask again later", 
                "Better not tell you now",
                "Cannot predict now", 
                "Concentrate and ask again"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
    }              

window.onload = function() 
{
    var eight = document.getElementById("eight");
    var eightball = document.getElementById("eight-ball");
    var question = document.getElementById("question");
    var answer = document.getElementById("answer")

    eightball.addEventListener("click", function() 
    {
        let text = question.value;
        var msg = new SpeechSynthesisUtterance();

        if (question.value.length < 1) 
        {
            alert('Enter a question!');
        } 
        else
        {
            //magic 8 ball
            if( text.includes("chances"))
            {
                eight.innerText = " ";
                var num = Math.floor(Math.random() * Math.floor(answers.length));
                answer.innerText = answers[num];
                msg.text = answers[num];
                window.speechSynthesis.speak(msg);
                
            }
            //inspirational quotes
            else if(text.includes("inspire me"))
            {
                eight.innerText = " ";
                fetch("https://api.quotable.io/random")
                .then(function(data){
                    return data.json();
                })

                .then(function(data)
                {
                    msg.text = data.content;
                    window.speechSynthesis.speak(msg);
                    answer.innerText = data.content;
                })
            }
            //rock paper scissors
            else if( text.includes("rock") || text.includes("paper") || text.includes("scissors"))
            {
                eight.innerText = " ";
                var num = getRandomInt(3);

                if(num == 0)
                {
                    answer.innerText = "rock";
                    msg.text = "rock";
                    
                }
                else if(num == 1)
                {
                    answer.innerText = "paper";
                    msg.text = "paper";
                }
                else if(num == 2)
                {
                    answer.innerText = "scissors";
                    msg.text = "scissors";
                }
                window.speechSynthesis.speak(msg);
            }
            //learn a new activity
            else if( text.includes("bored"))
            {
                eight.innerText = " ";
                fetch("http://www.boredapi.com/api/activity/")
                .then(function(data){
                    return data.json();
                })

                .then(function(data){
                    msg.text = data.activity;
                    window.speechSynthesis.speak(msg);
                    answer.innerText = data.activity;
                })
            }
            else if(text.includes("advice"))
            {
                eight.innerText = " ";
                fetch("https://api.adviceslip.com/advice")
                .then(function(data){
                    return data.json();
                })

                .then(function(data){
                    msg.text = data.slip.advice;
                    window.speechSynthesis.speak(msg);
                    answer.innerText = data.slip.advice;
                })
            }
            else
            {
                eight.innerText = " ";
                msg.text = "sorry no answer";
                window.speechSynthesis.speak(msg);
                answer.innerText = "sorry no answer.";
            }
        }
    });
};  

