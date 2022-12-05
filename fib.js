//Simple function used to access elements on the html DOM
var $ = function (id) 
{
    return document.getElementById(id);
}

// Main program function that accepts user input for the total number of the
//Fibonacci series to show and the then runs a loop to create the output
function fib(num) {
        var arr = [];
        if(num == 1){
            return arr = [1];
        }else if(num == 2){
            return arr = [1,1];
        }else{
            arr = [1,1];
            var a=1;
            var b=1;
            var c=2;
            var arrlen =arr.length;
            for(var i=2;i<num;i++){
                arr.push(c);
                a=b;
                b=c;
                c=a+b;
            }
            return arr;

        }

    }
var generate = function () 
{
	var intCount = parseInt($("total_fib").value);  //gets user input from the DOM
	
	//validate user input that intCount is a number and intCount is not less than 2 or intCount not greater than 100
    if (isNaN(intCount) || intCount < 2 || intCount > 100) {
        alert("Error occur! try again!");
    }else{
        var i=0;  // sets the first number in the Fibonacci series to 0
        var j=1;  //sets the second number in the Fibonacci series to 1
        var k;    //k is calculated by adding i+j and represents the next Fibonacci number
        var stringOutput = "0 1 ";//initialize the Fibonacci series output to include the first two numbers
var ret = fib(intCount)
$('output').value = ret.join(',');
	// write whatever kind of loop you want, given the above info, to generate the appropriate
	// number of fibonacci numbers and then post it to the html DOM 
        
    }
	

} 

// Push solution back to Output through DOM

window.onload = function () 
{
    $("total_fib").value = "";
    $("output").value = "";
    $("generate").onclick = generate; //runs the generate function when clicked
}  