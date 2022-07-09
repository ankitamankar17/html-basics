console.log("hello");
let questions=[];
//count score
let userAns=[-1,-1,-1,-1,-1];

function countHandler(e){
 const arr=e.target.id.split("_");
 const questionId=arr[0];
 const optionIndex=arr[1];
const questionIndex=questionId-1;

userAns[questionIndex] = optionIndex;
}
//
function getQue(questions){
  const form=document.getElementById("quizForm");

  for( let j=0; j  < questions.length; j++){
    const Cquestion=questions[j];/////////////main part

    //create elements
    const div=document.createElement("div");
    div.style.padding="8px";
    div.style.color="#fad744";
    document.body.style.fontFamily = '"Source Sans Pro", Arial';
    div.style.borderBottom="1px solid #fad744";
    const question=document.createElement("h4");
    question.innerText="Q" + (j +1)  +"."+Cquestion.question;
    
    div.append(question);


   
    for(let i=0;i<Cquestion.options.length;i++){
      const cOption=Cquestion.options[i];
      
      const input=document.createElement("input");
      
      input.name=`q${j+1}`;
      input.id=Cquestion.id+"_"+i;
      // input.id=`${i+1}` 
      input.type="radio";
      input.value=cOption; 
      input.style.margin="0 8px 8px 8px";
      input.addEventListener("click",countHandler);

      const label=document.createElement("label");
      label.htmlFor=Cquestion.id+"_"+i;
      label.innerText=cOption+"\n";
     
      
    
      div.append(input,label);
    }
form.append(div);
  }
  const button=document.createElement("input");
  button.type="submit";
  button.value="submit";
  button.style.backgroundColor="#fad744";
  button.style.border="none";
  button.style.borderRadius="4px";
  button.style.margin="40px 170px";
  button.style.padding="7px";
  button.style.width="70px";
  form.append(button);
}






function Handler(){
 

;
function onAjaxSuccessHandler(data){
console.log(data);
getQue(data)
questions=data;
}

function onAjaxErrorHandler(e){

}
function submitHandler(e){
  e.preventDefault();
  
  let score=0;
  
  for (let counter = 0; counter < userAns.length; counter++) {
    const currentAns = userAns[counter];
    if(currentAns==questions[counter].answer-1){
      score++;

    }

  }
  const scoreSp=document.getElementById("score");
  scoreSp.innerText= "Score :" +"\n"+ score +"/5";
  scoreSp.style.fontStyle="bold";
  scoreSp.style.fontWeight="30px";
 
}


$.ajax({
  method:"GET",
  url:"https://5d76bf96515d1a0014085cf9.mockapi.io/quiz",
  success:onAjaxSuccessHandler,
  error :onAjaxErrorHandler,
 
});
 
const event=document.getElementById("quizForm");
event.addEventListener("submit",submitHandler)
 



}



$(document).ready(Handler);




