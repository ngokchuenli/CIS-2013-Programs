var $ = function (id) 
{
    return document.getElementById(id);
};

var calculate_click = function () 
{
    var floatHwPts;

    floatHwPts = parseFloat($("hw_pts").value);
    floatMidPts= parseFloat($("mid_pts").value);
    floatFinPts=parseFloat($("fin_pts").value);
    floatGradeoption=parseFloat($("grade_option").value);
    floatfinalgrade=floatHwPts+floatMidPts+floatFinPts;
if (floatGradeoption===1)
{
    if (floatfinalgrade>=80)
    {
        stringfinalgrade="pass";
    }
    else
    {
        stringfinalgrade="fail";
    }
}

else
{
    if (floatfinalgrade>=90)
    {
        stringfinalgrade="A";
    }
    else if (floatfinalgrade >=80&& floatfinalgrade<90)
     {
        stringfinalgrade="B";
     }
     else if (floatfinalgrade >=70&& floatfinalgrade<80)
     {
        stringfinalgrade="C";
     }
     else if (floatfinalgrade >=60&& floatfinalgrade<70)
     {
        stringfinalgrade="D";
     }
     else
     {
        stringfinalgrade="F";
     }
     
}
$("final_grade").value=stringfinalgrade;
};

window.onload = function () 
{
    $("final_grade").value = "finalgrade"; //blanks the final grade text box upon page load
    $("calculate").onclick = calculate_click; //activates main method when the button is clicked 
    $("hw_pts").focus(); //puts the cursor on the first DOM text input box
};