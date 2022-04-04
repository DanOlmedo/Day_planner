//Function for date and clock in header
function showCurrent(){
    const today = moment();
    $("#currentDay").text(today.format('MMMM Do YYYY, h:mm a'));
    $("#currentDay").css("font-size","3rem");
    };

    //Function for setting time in each task block
function blockHours(){
    const timeblock = moment();
    $("#timeblock1").text(timeblock.format('9:00'));
    $("#timeblock1").css("font-size","2rem");

    $("#timeblock2").text(timeblock.format('10:00'));
    $("#timeblock2").css("font-size","2rem");

    $("#timeblock3").text(timeblock.format('11:00'));
    $("#timeblock3").css("font-size","2rem");

    $("#timeblock4").text(timeblock.format('12:00'));
    $("#timeblock4").css("font-size","2rem");

    $("#timeblock5").text(timeblock.format('13:00'));
    $("#timeblock5").css("font-size","2rem");

    $("#timeblock6").text(timeblock.format('14:00'));
    $("#timeblock6").css("font-size","2rem");

    $("#timeblock7").text(timeblock.format('15:00'));
    $("#timeblock7").css("font-size","2rem");

    $("#timeblock8").text(timeblock.format('16:00'));
    $("#timeblock8").css("font-size","2rem");

    $("#timeblock9").text(timeblock.format('17:00'));
    $("#timeblock9").css("font-size","2rem");

    $("#timeblock10").text(timeblock.format('18:00'));
    $("#timeblock10").css("font-size","2rem");
};

//Function fro setting task block color according to current time
function blockColor(){
    var currentHour = (moment().format("H"));
    console.log(currentHour);
    if(currentHour>9){
    $("#taskblock1").css("background-color","rgb(247, 98, 98)");};
        if(currentHour==9){
        $("#taskblock1").css("background-color","rgb(197, 195, 195)");};  
    if(currentHour>10){
    $("#taskblock2").css("background-color","rgb(247, 98, 98)");};
        if(currentHour==10){
        $("#taskblock2").css("background-color","rgb(197, 195, 195)");};  
    if(currentHour>11){
    $("#taskblock3").css("background-color","rgb(247, 98, 98)");};
        if(currentHour==11){
        $("#taskblock3").css("background-color","rgb(197, 195, 195)");};  
    if(currentHour>12){
    $("#taskblock4").css("background-color","rgb(247, 98, 98)");};
        if(currentHour==12){
        $("#taskblock4").css("background-color","rgb(197, 195, 195)");};  
    if(currentHour>13){
    $("#taskblock5").css("background-color","rgb(247, 98, 98)");};
        if(currentHour==13){
        $("#taskblock5").css("background-color","rgb(197, 195, 195)");};  
    if(currentHour>14){
    $("#taskblock6").css("background-color","rgb(247, 98, 98)");};
        if(currentHour==14){
        $("#taskblock6").css("background-color","rgb(197, 195, 195)");};  
    if(currentHour>15){
    $("#taskblock7").css("background-color","rgb(247, 98, 98)");};
        if(currentHour==15){
        $("#taskblock7").css("background-color","rgb(197, 195, 195)");};  
    if(currentHour>16){
    $("#taskblock8").css("background-color","rgb(247, 98, 98)");};
        if(currentHour==16){
        $("#taskblock8").css("background-color","rgb(197, 195, 195)");};  
    if(currentHour>17){
    $("#taskblock9").css("background-color","rgb(247, 98, 98)");};
        if(currentHour==17){
        $("#taskblock9").css("background-color","rgb(197, 195, 195)");};  
    if(currentHour>18){
    $("#taskblock10").css("background-color","rgb(247, 98, 98)");};
        if(currentHour==18){
        $("#taskblock10").css("background-color","rgb(197, 195, 195)");};    
};


//Section for getting items from local storage to show upon refresh
document.getElementById("taskText1").innerHTML = localStorage.getItem("task1");
document.getElementById("taskText2").innerHTML = localStorage.getItem("task2");
document.getElementById("taskText3").innerHTML = localStorage.getItem("task3");
document.getElementById("taskText4").innerHTML = localStorage.getItem("task4");
document.getElementById("taskText5").innerHTML = localStorage.getItem("task5");
document.getElementById("taskText6").innerHTML = localStorage.getItem("task6");
document.getElementById("taskText7").innerHTML = localStorage.getItem("task7");
document.getElementById("taskText8").innerHTML = localStorage.getItem("task8");
document.getElementById("taskText9").innerHTML = localStorage.getItem("task9");
document.getElementById("taskText10").innerHTML = localStorage.getItem("task10");

//Variables for "save" buttons and event listeners for "saving" functionality
var saveItem1 = document.getElementById("save1")
var saveItem2 = document.getElementById("save2")
var saveItem3 = document.getElementById("save3")
var saveItem4 = document.getElementById("save4")
var saveItem5 = document.getElementById("save5")
var saveItem6 = document.getElementById("save6")
var saveItem7 = document.getElementById("save7")
var saveItem8 = document.getElementById("save8")
var saveItem9 = document.getElementById("save9")
var saveItem10 = document.getElementById("save10")


saveItem1.addEventListener("click",function(){
    localStorage.setItem("task1",$("#taskText1").val())
    document.getElementById("taskText1").innerHTML = localStorage.getItem("task1")

});

saveItem2.addEventListener("click",function(){
    localStorage.setItem("task2",$("#taskText2").val())
    document.getElementById("taskText2").innerHTML = localStorage.getItem("task2")
});

saveItem3.addEventListener("click",function(){
    localStorage.setItem("task3",$("#taskText3").val())
    document.getElementById("taskText3").innerHTML = localStorage.getItem("task3")
});

saveItem4.addEventListener("click",function(){
    localStorage.setItem("task4",$("#taskText4").val())
    document.getElementById("taskText4").innerHTML = localStorage.getItem("task4")
});

saveItem5.addEventListener("click",function(){
    localStorage.setItem("task5",$("#taskText5").val())
    document.getElementById("taskText5").innerHTML = localStorage.getItem("task5")
});

saveItem6.addEventListener("click",function(){
    localStorage.setItem("task6",$("#taskText6").val())
    document.getElementById("taskText6").innerHTML = localStorage.getItem("task6")
});

saveItem7.addEventListener("click",function(){
    localStorage.setItem("task7",$("#taskText7").val())
    document.getElementById("taskText7").innerHTML = localStorage.getItem("task7")
});

saveItem8.addEventListener("click",function(){
    localStorage.setItem("task8",$("#taskText8").val())
    document.getElementById("taskText8").innerHTML = localStorage.getItem("task8")
});

saveItem9.addEventListener("click",function(){
    localStorage.setItem("task9",$("#taskText9").val())
    document.getElementById("taskText9").innerHTML = localStorage.getItem("task9")
});

saveItem10.addEventListener("click",function(){
    localStorage.setItem("task10",$("#taskText10").val())
    document.getElementById("taskText10").innerHTML = localStorage.getItem("task10")
});

//Run necessary functions
setInterval(showCurrent, 100);
blockHours();
blockColor();

