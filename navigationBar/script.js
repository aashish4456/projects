var navStatus=0;
function openNav(){
    if(!navStatus){
        $('.container').css('width','100%')
        $('li').css('display','block')
        navStatus=1
    }
    else{
        $('.container').css('width','0')
        $('li').css('display','none')
        navStatus=0;
    }
}