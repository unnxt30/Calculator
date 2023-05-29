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

let num1 = "";
let num2 = "";
let result = 0;
let num_count = 0;
let op_count = 0;
let op = "";
let op1 = "";
let op2 = "";
let res_count = 0;


for (let i = 0; i<buttons.length; i++)
{
    if(buttons[i].classList.contains('numbers'))
    {   
        
        buttons[i].onclick = function()
        {      
            // console.log(`${num1}, ${num2}, ${op1}, ${op2}`)
            if(res_count>0)
            {
                updateScreen();
                result = 0;
                num1 = "";
                num2 = "";
                num_count = 0; 
                // op_count = 0;
                res_count = 0;

            }

            if(num_count > 0)
            {
                screen.textContent += buttons[i].textContent;
            }
            else
            {
                updateScreen(buttons[i].textContent);
                num_count+=1;
            }
            
            if(op_count>0 && op_count <=1)
            {   
                console.log(result);
                num2 = screen.textContent;
            }
            else if(op_count == 0)
            {
                num1 = screen.textContent;
            }
            else if(op_count>0 && (op == '-' || op == '/'))
            {
                num2 = screen.textContent;
                num1 = result.toString();
            }
            else
            {
                num2 = result.toString();   
                num1 = screen.textContent;
            }
            
            // console.log(`${num1}, ${num2}, ${op1}, ${op2}`)
        }

    }
    else if(buttons[i].classList.contains('btn'))
    {   
        if(buttons[i].id == 'equal')
        {   
            buttons[i].onclick = function()
            {
                result = operate(num1, num2, op);
                console.log(`${num1} ${op} ${num2} ${op_count}`);
                updateScreen(result.toString());
                res_count+=1;

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


// AC button, clears the screen, ready for new operations.
all_clear.onclick = function()
{
    updateScreen();
    result = 0;
    num1 = "";
    num2 = "";
    num_count = 0; 
    op_count = 0;
}

// Del button, clears one unit at a time.
del.onclick = function()
{
    screen.textContent = (screen.textContent).slice(0,-1);
    if(op_count>0 && op_count <=1)
    {
        num2 = screen.textContent;
    }
    else if(op_count == 0)
    {
        num1 = screen.textContent;
    }
    else
    {
        num2 = result.toString();   
        num1 = screen.textContent;
    }
}
