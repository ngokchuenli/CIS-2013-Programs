//Declare variables intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade
//Get user input to determine grade
//Calculate floatTotalPts (sum of HW and exam pts)
//Get user input on whether the course is audit pass/fail (1) or letter grade (2)
//If the grade option is audit, evaluate total score based upon 80% cutoff scorefor pass/fail
//Else determine letter grade based upon the typical A = 90%, B - 80%, etc.
//Output stringFinalGrade

var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;

floatHwPts = parseFloat(prompt("Please enter final Homework points (0-30):"));

floatMidPts = parseFloat(prompt("please enter midterm points(0-35):"));

floatFinPts = parseFloat(prompt("please enter final points(0-35):")):

floatTotalPts = (floatHwPts+floatMidPts+floatFinPts);

intGradeOption = parseFloat(prompt("please enter ingradeoption(1 && 2)"));

if (intGradeOption===1)
{
    if(floatTotalPts >= 90 && floatTotalPts<100);
       stringFinalGrade="A";
}
else if (floatTotalPts>=80 && floatTotalPts<90);
{
    stringFinalGrade="B"
}
else if (floatTotalPts>=70 && floatTotalPts<80);
{
    stringfinalgrade="C"
}
else if (floatTotalPts>=60 && floatTotalPts<70);
{
    stringfinalgrade="D"
}
else if (intGradeOption==="2")
{
    if (floatTotalPts>=80);
    {
        stringfinalgrade="pass"
    }
else if (floatTotalPts,80);
    {
         stringfinalgrade="fail"
    }


alert("Your final grade is: " +stringFinalGrade);