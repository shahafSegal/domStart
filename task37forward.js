//general
function getTextInTag(strTag, strText=""){
    return `<${strTag}>${strText}</${strTag}>`
}
function getTextInTagWithAtt(strTag, strAtt ,strText=""){
    return `<${strTag} ${strAtt}>${strText}</${strTag}>`
}

//37

function getNewUserComputer(){
    var newComp={
        manufactur: prompt("Enter name of company:"),
        module: prompt("enter module name:"),
        weight:prompt("Enter weight in KG"),
        inStock : confirm("is product in stock")
    }
    return newComp
}

function printCompArrIfHeavyInStock(computer_arr){
    for (let i = 0; i < computer_arr.length; i++) {
        if( computer_arr[i].weight>2&&computer_arr[i].inStock){
            var curComp= 
            getTextInTag("p",computer_arr[i].manufactur)+
            getTextInTag("p",computer_arr[i].module)+
            getTextInTag("p",computer_arr[i].weight)+
            getTextInTag("p",computer_arr[i].inStock)
            document.body.innerHTML+=curComp
        }
    }
}


function makeUsrCompArrAndPrintHeavyInStock(){
    var comp_count=+prompt("How much computers?")
    var compArr=[]
    for (let i = 0; i < comp_count; i++) {
        compArr.push(getNewUserComputer())
    }
    printCompArrIfHeavyInStock(compArr)

}

makeUsrCompArrAndPrintHeavyInStock();
