const numbers = document.querySelectorAll(".numbers");
const buttons = document.querySelectorAll(".btn, .numbers");
const screen = document.getElementById("screen");
const all_clear = document.getElementById("clear");
const del = document.getElementById("del");
const num_array = [];

const operatorMap = 
{
    '+': (a, b) => a + b,
    
    '-': (a, b) => a - b,
    
    'X': (a, b) => a * b,
    
    '/': (a, b) => a / b,

};

function operate(num1,num2,operator)
{
    return operatorMap[operator](parseInt(num1), parseInt(num2));
};

function updateScreen(str)
{   
    if(screen.textContent != "")
    {
        screen.textContent = "";
    }

    screen.textContent = str;
};

let num1 = "";
let num2 = "";
let result = 0;
let num_count = 0;
let op_count = 0;
let op = "";

// console.log(buttons.length)

for (let i = 0; i<buttons.length; i++)
{
    if(buttons[i].classList.contains('numbers'))
    {   
        
        buttons[i].onclick = function()
        {      
            
            if(num_count > 0)
            {
                screen.textContent += buttons[i].textContent;
            }
            else
            {
                updateScreen(buttons[i].textContent);
                num_count+=1;
            }
            
            if(op_count>0)
            {
                num2 = screen.textContent;
            }
            else
            {
                num1 = screen.textContent;
            }
            
        }

    }
    else if(buttons[i].classList.contains('btn'))
    {   
        if(buttons[i].id == 'equal')
        {
            buttons[i].onclick = function()
            {
                result = operate(num1, num2, op);
                console.log(`${num1}, ${num2} -> ${result}`);
                updateScreen(result.toString());
            }
        }
        else
        {
            buttons[i].onclick = function()
            {   
                 op = buttons[i].textContent;
                
                num_count = 0;
                op_count+=1;
            }
        }
    }

}

all_clear.onclick = function()
{
    updateScreen();
    result = 0;
    num1 = "";
    num2 = "";
    num_count = 0; 
    op_count = 0;
}
