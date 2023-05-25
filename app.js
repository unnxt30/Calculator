
const numbers = document.querySelectorAll(".numbers");
const buttons = document.querySelectorAll(".btn, .numbers");
const screen = document.getElementById("screen");
const all_clear = document.getElementById("clear");
const del = document.getElementById("del");
const num_array = [];

const operatorMap = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    'X': (a, b) => a * b,
    '/': (a, b) => a / b,
  };
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

function updateScreen(str)
{   
    if(screen.textContent!= "")
    {
        screen.textContent = "";
    }
    screen.textContent = str;
}

let num1 = "";
let num2 = "";
let op = "";
let result = 0;
let op_count = 0;
let num_count = 0;

for(let i = 0; i<16; i++)
{   
    if(buttons[i].classList.contains('numbers'))
    {   
        
        buttons[i].onclick = function()
        {   
            screen.textContent += buttons[i].textContent;      
            if(num_count<1)
            {
                num1 = screen.textContent;
            }
            else if(num_count>0)
            {
                num2 = screen.textContent;
            }
            
        }
        
    }

    else if(buttons[i].id == 'addition'){
        buttons[i].onclick = function()
        {   
            num_count+=1;
            updateScreen();
            op = buttons[i].textContent;
            op_count += 1;
            if(op_count>1)
            {   
                if(num1 == "" || num2 == "")
                {
                    result += parseInt(num1);
                    num2 = num1;
                    num1 = result;
                    // num2 = num1;
                    result = operatorMap[op](parseInt(num1), parseInt(num2)).toString();
                }
                else
                {
                    num_count = 0;
                    num2 = num1;
                    num1 = result;
                    result = operatorMap[op](parseInt(num1), parseInt(num2)).toString();
                }
                updateScreen(result.toString());
            }
        }
    }

    else if(buttons[i].id == 'equal')
    {   
        buttons[i].onclick = function()
        {   
            console.log(`${parseInt(num1)}, ${parseInt(num2)}`)
            result = operatorMap[op](parseInt(num1), parseInt(num2)).toString();
            // console.log(result);
            updateScreen(result.toString());
            op_count = 0;
        }
        
    }
        // screen.textContent = result.toString();
        // updateScreen();
}

all_clear.onclick = function()
{
    updateScreen();
    result = 0;
    num1 = "";
    num2 = "";
    op_count = 0;  
    num_count = 0; 
}

del.onclick = function()
{
    screen.textContent = (screen.textContent).slice(0,-1);
    if(num_count<1)
    {
        num1 = screen.textContent;
    }
    else if(num_count>0)
    {
        num2 = screen.textContent;
    }   

}