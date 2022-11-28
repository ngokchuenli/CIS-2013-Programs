//Task 1
var arrayNames = new Array("John", "Rober", "Jimmy","Benzo");
var arrayInstruments = {};
arrayInstruments[0] = "bass";
arrayInstruments[1] = "vocal";
arrayInstruments[2] ="guitar";
arrayInstruments[3] ="drums";

var stringmessage= "";
var intCount;
for (intCount = 0; intCount<arrayNames.length;intCount++)
{
    stringmessage= stringmessage+arrayNames[intCount]+"plays"+ arrayInstruments[intCount]+"\n"
}
alert(stringmessage);



//task 2
var stringTimesTable="";
for (var x=1; x<=12; x++)
{
    for (var y=1; y<=12; y++)
    {
        stringTimesTable= stringTimesTable+" "+x*y+" ";
    }
    stringTimesTable=stringTimesTable+"\n";
}
alert(stringTimesTable);







//task 3