
const numbers = document.querySelectorAll(".numbers");
const buttons = document.querySelectorAll(".btn, .numbers");
const screen = document.getElementById("screen");
const all_clear = document.getElementById("clear");
const del = document.getElementById("del");
const num_array = [];

for (let i in Array.from(numbers))
{
    num_array.push(i);
}
;
// console.log(num_array);

function getInt(digit)
{
    var integer = parseInt(digit.textContent);
    return integer;
}

function updateScreen()
{
    screen.textContent = "";
}

let num1 = "";
let op = "";
let sum = 0;
let op_count = 0;
let num_count = 0;

for(let i = 0; i<16; i++)
{   
    if(buttons[i].classList.contains('numbers'))
    {   
        
        buttons[i].onclick = function()
        {               
            screen.textContent += buttons[i].textContent;  
            num1 = screen.textContent; 
        }
    }
    else if(buttons[i].id == 'addition'){
        buttons[i].onclick = function()
        {   
            updateScreen();
            sum += parseInt(num1);
            // console.log(num1);
            // console.log(sum);  
            op = buttons[i].textContent;
            
            op_count += 1;
            if(op_count>1)
            {   
                screen.textContent = sum.toString();
            }
            
            
        }
        // screen.textContent = sum.toString();
        // updateScreen();
    }
}

all_clear.onclick = function()
{
    updateScreen();
    sum = 0;
    num1 = 0;
    op_count = 0;   
}

del.onclick = function()
{
    screen.textContent = (screen.textContent).slice(0,-1);
    num1 = (screen.textContent.toString());

}