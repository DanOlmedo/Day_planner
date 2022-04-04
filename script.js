function showCurrent(){
    const today = moment();
    $("#currentDay").text(today.format('MMMM Do YYYY, h:mm a'));
    $("#currentDay").css("font-size","3rem");
    };

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

function blockColor(){
    var currentHour = (moment().format("H"));
    console.log(currentHour);
    if(currentHour>9){
    $("#taskblock1").css("background-color","rgb(247, 98, 98)");};
        if(currentHour==9){
        $("#taskblock10").css("background-color","rgb(197, 195, 195)");};  
    if(currentHour>10){
    $("#taskblock2").css("background-color","rgb(247, 98, 98)");};
        if(currentHour==10){
        $("#taskblock10").css("background-color","rgb(197, 195, 195)");};  
    if(currentHour>11){
    $("#taskblock3").css("background-color","rgb(247, 98, 98)");};
        if(currentHour==11){
        $("#taskblock10").css("background-color","rgb(197, 195, 195)");};  
    if(currentHour>12){
    $("#taskblock4").css("background-color","rgb(247, 98, 98)");};
        if(currentHour==12){
        $("#taskblock10").css("background-color","rgb(197, 195, 195)");};  
    if(currentHour>13){
    $("#taskblock5").css("background-color","rgb(247, 98, 98)");};
        if(currentHour==13){
        $("#taskblock10").css("background-color","rgb(197, 195, 195)");};  
    if(currentHour>14){
    $("#taskblock6").css("background-color","rgb(247, 98, 98)");};
        if(currentHour==14){
        $("#taskblock10").css("background-color","rgb(197, 195, 195)");};  
    if(currentHour>15){
    $("#taskblock7").css("background-color","rgb(247, 98, 98)");};
        if(currentHour==15){
        $("#taskblock10").css("background-color","rgb(197, 195, 195)");};  
    if(currentHour>16){
    $("#taskblock8").css("background-color","rgb(247, 98, 98)");};
        if(currentHour==16){
        $("#taskblock10").css("background-color","rgb(197, 195, 195)");};  
    if(currentHour>17){
    $("#taskblock9").css("background-color","rgb(247, 98, 98)");};
        if(currentHour==17){
        $("#taskblock10").css("background-color","rgb(197, 195, 195)");};  
    if(currentHour>18){
    $("#taskblock10").css("background-color","rgb(247, 98, 98)");};
        if(currentHour==18){
        $("#taskblock10").css("background-color","rgb(197, 195, 195)");};    
};

function setSaved(){
    
}

setInterval(showCurrent, 100);
blockHours()
blockColor()

var saveItem = document.getElementById("save1")

saveItem.addEventListener("click",function(){
    // console.log($("#taskText1").val())
    localStorage.setItem("task1",$("#taskText1").val())
    console.log(localStorage.getItem("task1"))
})

var temptest1 = localStorage.getItem("task1")
console.log(temptest1)
// document.getElementById("taskblock2").textContent = temptest1
// document.getElementById("taskblock2").setAttribute("style","color:red;")
$("#taskblock3").textContent = temptest1