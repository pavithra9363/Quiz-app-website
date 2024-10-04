 const array=[
        {
            question:"1.the href attribute in the ling tag specifies the:",
            options:["Destination of a link","Link","HyperText","None of the above"],
    
            answer:"Destination of a link"  
        },
        {
            question:"2.Is width=100 and width=100% the same? ",
            options:["No","Yes","none of above","20%"],
    
             answer:"Yes"
        },
        {
            question:"3.what are DIV tags used for?",
            options:["To provide space between tables","To logically divide the document","to logically divide the paragraphs","To replase paragraphs"],
            
             answer:"To logically divide the document"
        },
        {
            question:"4.How can we resize the image?",
            
            options:["Using rs attribute","Using resize Tag","Using height and width","Using resize attribute"],
    
             answer:"Using height and width"
        },
        {
            question:"5.For Frame in HTML, how do you specify the rest of the screen?",
            options:["Using #","Using *","Using $","Using &"],
             answer:"Using *"
    
        },
        {
            question:"6.What does vlink attribute mean:",
            options:["visited link","good link","virutal link","active link"],
    
            answer:"visited link"  
        },
        {
            question:"7.which attribute is used to name an element uniquely? :",
            options:["class","id","dot","all of above"],
    
            answer:"id"  
        },
        {
            question:"8.What is the output of typeof null in JavaScript?",
            options:["number","array","undefined","object"],
    
            answer:"object"  
        },
        {
            question:"9.Which of the following is the correct way to add a comment in CSS?:",
            options:["// This is a comment", " /* This is a comment */", " # This is a comment", " # This is a comment/#" ],
    
                answer:  " /* This is a comment */"
           
        },
        {
            question:"10.Which property controls the text size in CSS?:",
            options:["text-style","font-style","font-size","text-size"],
    
            answer:"text-size"  
        },
 ]

 let questionIndex = 0;
 let score = 0;
 let timer;


let all=document.getElementById("all");
let container=document.getElementById("container");
let para=document.getElementById("para") ;
let startButton=document.getElementById("start");

startButton.addEventListener("click",quesAns);



function quesAns(){

if(questionIndex<array.length){
  
para.style.display="none";

 let questions=document.getElementById("questions");
 questions.style.display="block";

 let options=document.getElementById("options");
 options.style.display="block";
 let next=document.getElementById("next");

 if(questionIndex<array.length-1){
 next.style.display="block";
 }
 else{
 next.style.display="block";
 next.innerHTML="SUBMIT";
 }
  let currentQuestion=(array[questionIndex].question);
  questions.innerHTML=currentQuestion;

       
    options.innerHTML="";
    array[questionIndex].options.forEach((option) => {
    const button=document.createElement("button");
    button.innerHTML=option;
    button.className="button1";
    button.addEventListener("click",()=>checkAnswer(option));
    options.appendChild(button);

   });
   timing();  
 next.addEventListener("click",nextB);

}
   else{
   clearInterval(timer);
    container.style.display="none";
    let  total=document.createElement("button");
    total.className="score";
    all.appendChild(total);     
    total.innerHTML= `<h1>YOU HAVE COMPLETED SUCCESSFULLY!<h1>your score is ${score}/${array.length}`
    console.log(total);
   
}
};
function checkAnswer(selectedOption) {
                const correctAnswer = array[questionIndex].answer;
                if (selectedOption === correctAnswer) { 
                    score++;
                }
                document.querySelectorAll(".button1").forEach((btn) => {
                    if (btn.innerHTML === correctAnswer) {
                      btn.style.backgroundColor = "green";
                    } 
                    else if (btn.innerHTML === selectedOption) {
                        btn.style.backgroundColor = "red";
                    }
                    
                })
            setTimeout(nextB, 1000);       //1second after the next question come

            }   


function nextB(){
            clearInterval(timer);
              questionIndex++;
              quesAns();    
                
            }

function timing(){
    let time =document.getElementById("timer");
    timeLimit=10;   
     time.innerHTML=`Time left ${timeLimit}`;
     clearInterval(timer); 
      timer=setInterval(()=>{
        timeLimit --;
        time.innerHTML=`Time left ${timeLimit}`;
        if(timeLimit<0){
           nextB();
             
        }
    },1000);

};

    
    
    
    
    


    
    




