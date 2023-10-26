function add(value){
    document.getElementById('text').value+=value
}
function calc(){
     const value=document.getElementById('text').value
     const answer=eval(value)
     document.getElementById('text').value=answer
}
function clr(){
    document.getElementById('text').value=' '
}