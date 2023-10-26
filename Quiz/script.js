var quizdata=[
    {
        question: 'which frame is releated to js',
        a:'.net',
        b:'flask',
        c:'react',
        d:'django',
        correct:'a'
    },
    {
        question: 'which is not programing language',
        a:'html',
        b:'python',
        c:'js',
        d:'cpp',
        correct:'a'
    },
    {
        question: 'which is not framwork',
        a:'react',
        b:'javascript',
        c:'angular',
        d:'django',
        correct:'b'
    },
    {
        question: 'css stands for',
        a:'cascading style state',
        b:'cascading style sheet',
        c:'cascading sheet style',
        d:'none',
        correct:'b'
    }
]
var quiz=document.getElementById('quiz')
var answer=document.querySelectorAll('.answer')
var  question =document.getElementById('question')
var   option_a=document.getElementById('a_value')
var   option_b=document.getElementById('b_value')
var   option_c=document.getElementById('c_value')
var   option_d=document.getElementById('d_value')
var submit =document.getElementById('submit')
var currentData=0
var quizscore=0

 loadQuiz()

 function loadQuiz(){
    deselect()
    question.innerHTML=quizdata[currentData].question
    option_a.innerHTML=quizdata[currentData].a
    option_b.innerHTML=quizdata[currentData].b
    option_c.innerHTML=quizdata[currentData].c
    option_d.innerHTML=quizdata[currentData].d
 }
 function deselect(){
      answer.forEach(answer=>answer.checked=false)
 }
   
 submit.addEventListener('click',()=>{
     var selected;
     answer.forEach(answer=>{
     if(answer.checked){
        selected=answer
     }
    })
    if(selected==quizdata[currentData].correct)
    {
        quizscore+=1
    }
    currentData+=1
    if(currentData==quizdata.length){
         document.getElementById('quizdiv').innerHTML=`<h1 style="background-color: white;">you have answerd ${quizscore}/${currentData} correct</h1>`
    }
    else{
        loadQuiz()
    }
 })