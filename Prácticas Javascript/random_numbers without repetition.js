
var array = []
var number;

var cont = 0;

while(cont < 10)
{

	number = Math.floor((Math.random() * 10) + 1);

	if (array.indexOf(number) == - 1)
	{
		array.push(number);
		cont ++;

	}
	
}

console.log(array);

