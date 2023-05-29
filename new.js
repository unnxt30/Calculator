const numbers = document.querySelectorAll(".numbers");
const buttons = document.querySelectorAll(".btn, .numbers");
const screen = document.getElementById("screen");
const all_clear = document.getElementById("clear");
const del = document.getElementById("del");
const num_array = [];

let num1 = "";
let num2 = "";
let op = "";
let result = 0;
let res_count = 0;
let op_count = 0;
let op1 = ""
let op2 =""
let j = 0;
const operators = new Array();

const operatorMap = 
{
    '+': (a, b) => a + b,
    
    '-': (a, b) => a - b,
    
    'X': (a, b) => a * b,
    
    '/': (a, b) => a / b,

};

function getNum()
{
    if(num1.length == 0)
    {
        num1 = screen.textContent;
    }
    else
    {
        num2 = screen.textContent;
    }
}

function operate(num1,num2,operator)
{
    return operatorMap[operator](parseFloat(num1), parseFloat(num2));
};

function updateScreen(str)
{   
    if(screen.textContent != "")
    {
        screen.textContent = "";
    }

    screen.textContent = str;
};



for(let i = 0; i<buttons.length; i++)
{   
    

    if(buttons[i].classList.contains('numbers'))
    {   
        buttons[i].onclick = function()
        {
            if(res_count>0)
            {
                updateScreen()
                res_count = 0;
                // op_count = 0;
            };

            if(op_count > 1)
            {   
                updateScreen();
                op_count = 0;
            }
            screen.textContent += buttons[i].textContent;

             
        }
    }

    if(buttons[i].classList.contains('btn'))
    {   
                    
        if(buttons[i].id == 'equal')
        {   
            buttons[i].onclick = function()
            {   
                getNum();
                result = operate(num1, num2, op);
                updateScreen(result.toString());
                res_count+=1;
                num1 = "";
                num2 = "";
                op_count = 0;
            }
        }
        else
        {   
            
            
            buttons[i].onclick= function()
            {    
                console.log(`${num1} ${num2}`);
                getNum(); 
                updateScreen();
                op = buttons[i].textContent;
                operators[j] = op;
                if(op_count>0)
                {   
                    console.log()
                    num1 = operate(num1, num2, op1);
                    op2 = buttons[i].textContent;
                    updateScreen(num1);
                    // console.log(`${num1} ${num2}`);
                }
                else
                {
                    op1 = buttons[i].textContent;
                    if(op2.length != 0)
                    {
                        num1 = operate(num1, num2, operators[j-1]);
                        updateScreen(num1);
                        op_count+=2;
                    }
                    console.log(`${op1} ${op2}`);
                }
                j++;
                op_count+=1;
                console.log(operators);
                console.log(`${num1} ${num2}`);
            }
            
        }
        
    }
}

// AC button, clears the screen, ready for new operations.
all_clear.onclick = function()
{
    updateScreen();
    result = 0;
    num1 = "";
    num2 = "";
    num_count = 0; 
    op_count = 0;
    res_count = 0;
    op1 = "";
    op2 = "";
    j = 0
    operators.length = 0;
}

// Del button, clears one unit at a time.
del.onclick = function()
{
    screen.textContent = screen.textContent.slice(0,-1);
    getNum();
}
