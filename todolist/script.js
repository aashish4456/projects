function addToList(){
    var search=document.getElementById('search').value
    var mytodo=document.getElementById('mytodo')
      
    var newdiv=document.createElement('div')
    var name=document.createElement('li')
    name.innerHTML=search
    var bttn=document.createElement('i')
     bttn.classList.add('far')
     bttn.classList.add('fa-trash-alt')
     newdiv.appendChild(name)
     newdiv.appendChild(bttn)
     mytodo.appendChild(newdiv)
}

var deletbttn=document.getElementById('mytodo')
deletbttn.addEventListener('click',(e)=>{
      const element=e.target
      if(element.classList[0]=='far'){
        element.parentElement.remove()
      }
})