// Feet to Mile Converter
//-----------------------------
function feetToMile(feet)
{
    mile = feet/5280;
    return mile;
}
var MileIs = feetToMile(65500);
console.log(MileIs.toFixed(4));


//Wood Calculator
//-----------------------------
function woodCalculator(chair, table, bed)
{
    chairWood = chair * 1;
    tableWood = table * 3;
    bedWood = bed * 5;
    total = chairWood + tableWood + bedWood;
    return total;
}
var chair = 12;
var table = 10;
var bed = 3;
var totalWoodNeed = woodCalculator(chair,table,bed);
console.log(totalWoodNeed, 'Qubic Feet wood need');


//Brick Calculator
//-----------------------------
function brickCalculator(floor)
{
    oneFeetBrick = 1000;
    if(floor<=10)
    {
        eachFloor = floor*oneFeetBrick*15;
    }
    else if(floor>=11 && floor<=20)
    {
        eachFloor = floor*oneFeetBrick*12;
    }
    else{
        eachFloor = floor*oneFeetBrick*10;
    }
    return eachFloor;
}
var floor = 45;
var totalBrick = brickCalculator(floor);
console.log(floor, "Floor = ",totalBrick, "Brick Need");


// Tiny Friend
//-----------------------------
function tinyFriend()
{
    var friendList = ["li","Salim","Khanakjhkj","Mithu","Nazmul","joly","DoeJohn","q"];
    var min = friendList[0];
    for(i=0;i<friendList.length;i++)
    {
        if(min.length > friendList[i].length)
        {
            min = friendList[i];
        }
    }
    return min;
}
var smallFriend = tinyFriend();
console.log(smallFriend);
