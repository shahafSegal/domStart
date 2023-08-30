//general
function getTextInTag(strTag, strText=""){
    return `<${strTag}>${strText}</${strTag}>`
}
function getTextInTagWithAtt(strTag, strAtt ,strText=""){
    return `<${strTag} ${strAtt}>${strText}</${strTag}>`
}

//22
function printUserCountryList(){
    document.body.innerHTML += getTextInTagWithAtt("ol","id='countryList'")
    var countryLi= document.getElementById("countryList")
    for (var i =0;i<5;i++){
        countryLi.innerHTML += getTextInTag("li",prompt("Enter a country name"))
    }
}

//23
function PrintUserTeacharTable(){
    var teachar={}
    teachar.fName= prompt("Enter first name")
    teachar.lName= prompt("Enter last name")
    teachar.age= +prompt("Enter age")
    teachar.salary= +prompt("Enter salary")  

    document.body.innerHTML+= getTextInTagWithAtt("table","id='teacherTab'")
    var teachTable= document.getElementById("teacherTab")

    var tableHead = 
        getTextInTag("th","first name")+
        getTextInTag("th","last name")+
        getTextInTag("th","age")+
        getTextInTag("th","salary");
    var teacharRow = 
        getTextInTag("td",teachar.fName)+
        getTextInTag("td",teachar.lName)+
        getTextInTag("td",teachar.age)+
        getTextInTag("td",teachar.salary);

    teachTable.innerHTML+= getTextInTag("thead",tableHead)
    teachTable.innerHTML+= getTextInTag("tbody",getTextInTag("tr",teacharRow))
}
//24
function printCompaniesTable(){
    var companies=[
        {name:"google",city:"Herzeliya",no_workers:231,lookingForWorkers:true},
        {name:"whatever",city:"Tel Aviv",no_workers:5123,lookingForWorkers:false},
        {name:"Queen",city:"England",no_workers:9162,lookingForWorkers:true}
    ]

    document.body.innerHTML+= getTextInTagWithAtt("table","id='companiesTab' ")
    var companiesTab = document.getElementById('companiesTab')

    var companiesHead = 
    getTextInTag("th","name")+
    getTextInTag("th","city")+
    getTextInTag("th","number of workers")+
    getTextInTag("th","looking for workers");

    companiesTab.innerHTML+=getTextInTagWithAtt("thead","",companiesHead)
    companiesTab.innerHTML+=getTextInTagWithAtt("tbody","id='companiesRows'")

    var companiesRows = document.getElementById('companiesRows')
    for( var i=0;i<companies.length;i++){
        var currRow = 
        getTextInTag("td",companies[i].name)+
        getTextInTag("td",companies[i].city)+
        getTextInTag("td",companies[i].no_workers);

        if(companies[i].lookingForWorkers)
        { currRow+= getTextInTag("td","yes");}
        else{   currRow+= getTextInTag("td","no");}

        companiesRows.innerHTML+= getTextInTag("tr",currRow)
    }
    //25
    companiesTab.style.cssText += 'text-align: center; font-size:200%'
    companiesTab.getElementsByTagName("thead")[0].style.cssText+=' background-color: gold;'
    companiesRows.style.cssText+=' background-color: green;'

    var tdCompCol=companiesRows.getElementsByTagName("td")
    for (let i = 0; i < tdCompCol.length; i++) {
        tdCompCol[i].style.border='3px solid red'    
    }
}


