function add(a,b)
{
    return a+b;
}
function divideBy3(num1,num2,addFunc)
{
   return addFunc(num1,num2)/3;
}
function multiply(Func,num1,num2)
{
 return Func(num1,num2,add) * 2;
}
console.log(divideBy3(1,4,add));
multiply(divideBy3,1,4);


