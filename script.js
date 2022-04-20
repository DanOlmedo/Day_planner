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
document.getElementById("taskText1").innerHTML = localStorage.getItem("save1");
document.getElementById("taskText2").innerHTML = localStorage.getItem("save2");
document.getElementById("taskText3").innerHTML = localStorage.getItem("save3");
document.getElementById("taskText4").innerHTML = localStorage.getItem("save4");
document.getElementById("taskText5").innerHTML = localStorage.getItem("save5");
document.getElementById("taskText6").innerHTML = localStorage.getItem("save6");
document.getElementById("taskText7").innerHTML = localStorage.getItem("save7");
document.getElementById("taskText8").innerHTML = localStorage.getItem("save8");
document.getElementById("taskText9").innerHTML = localStorage.getItem("save9");
document.getElementById("taskText10").innerHTML = localStorage.getItem("save10");

var saveAll = document.getElementsByTagName("button")
console.log(saveAll)

for (let i = 0; i < saveAll.length; i++) {
    saveAll[i].addEventListener("click",function(){
        var blockValue = this.parentElement.previousElementSibling.children[0].value
        localStorage.setItem(this.id,blockValue)
    })
}

//Run necessary functions
setInterval(showCurrent, 100);
blockHours();
blockColor();

