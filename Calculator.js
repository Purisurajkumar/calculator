function take(index){
    let x=document.getElementById("screen")
    let length=x.innerHTML.length
    x.innerHTML=x.innerHTML+index 
    let operators =['+','-','*','/','%','.']
    if(operators.find(item =>item===x.innerHTML.substring(length-1,length)) && operators.find(item =>item===index)){
        x.innerHTML=x.innerHTML.substring(0,length)  
    }
    }
    function Allclear(){
        let x=document.getElementById("screen")
        x.innerHTML=''
    }
    function solution(){
        let x=document.getElementById("screen")
        let result= eval(x.innerHTML)
        x.innerHTML=''
        x.innerHTML=result
    }
    function remove(){
        let x=document.getElementById("screen")
        let length=x.innerHTML.length
        let subpart=x.innerHTML.substring(0,length-1)
        x.innerHTML=subpart
    }