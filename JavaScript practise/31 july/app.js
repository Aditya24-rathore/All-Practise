 
 function display(){
    Year=document.querySelector("#year").value
    let time=new Date()
    let age=time.getFullYear()-Year
    alert(`your age is ${age}`)
}