//general
function getTextInTag(strTag, strText=""){
    return `<${strTag}>${strText}</${strTag}>`
}
function getTextInTagWithAtt(strTag, strAtt ,strText=""){
    return `<${strTag} ${strAtt}>${strText}</${strTag}>`
}


// //1
// var elem1= document.getElementById("task1");
// console.log(elem1.textContent);
// //2
// var elem2= document.getElementById("task2");
// elem2.textContent = "my dom app";
// //3
// console.log(document.getElementById("task3_1").innerText);
// console.log(document.getElementById("task3_2").innerText);
// console.log(document.getElementById("task3_3").innerText);
// console.log(document.getElementById("task3_4").innerText);
// //4
// var elem4Col= document.getElementsByClassName("task4Li")
// for (var i = 0; i < elem4Col.length; i++) {
//         console.log(elem4Col[i].innerText);  
    
// }
// //5
// console.log(elem4Col[1]);
// //6
// console.log(elem4Col[2].innerText);
// //7
// var elem7Col= document.getElementsByTagName("p") 
// for (var i = 0; i < elem7Col.length; i++) {
//     console.log(elem7Col[i]);  

// }
// //8
// var elem8 = document.getElementById("task8")
// elem8.innerHTML+= "<h2>"+ prompt("Enter a name")+"</h2>"
//9
function printUserTimesColor(){
    var usrTimes= +prompt("Enter a number")
    var usrCol=prompt("Enter a color")
    for(var i=0;i<usrTimes;i++){
        document.body.innerHTML+= "<span>"+usrCol+"</span>"
    }
}
//10
function printNewUserTag(){
    document.body.innerHTML+= getTextInTag(prompt("Enter a tag"),prompt("enter text to put in"));
}

//11
function printNewUserInput()
{
    document.body.innerHTML+= getTextInTagWithAtt("input",`type='${prompt("Enter type for input")}'`)
}
// printNewUserInput();
//12
function changeAllClassText(className,inText){
    var classNCol= document.getElementsByClassName(className)
    for (var i=0;i<classNCol.length;i++){
        classNCol[i].innerText=inText;
    }
}

// changeAllClassText("cl12",prompt("Enter text to change"))

//13
function printP13WithSpan(){
    for (var i=0;i<6;i++){
        document.body.innerHTML+= getTextInTagWithAtt("p","class='cl13'","sample text")
    }
    addSpanInP13()
}
function addSpanInP13(){
    var p13Col= document.getElementsByClassName("cl13")
    for (let i = 0; i < p13Col.length; i++) {
        p13Col[i].innerHTML+= getTextInTag("span","   text   ")
        
    }
}
document.que
printP13WithSpan()
//14


