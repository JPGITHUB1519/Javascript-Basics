
function validar_numero(objeto)
{
	if(isNaN(objeto))
	{
		return false;
	}
	else
	{
		return true;
	}
}


function getRelationship(x, y) {
    // Your code goes here!

    if ((validar_numero(x) == false) && (validar_numero(y) == false))
    {
    	return "Can't compare relationships because " + x + " and " + y + " are not numbers";
    }
    
    if (validar_numero(x) == false)
    {
    	return "Can't compare relationships because " + x +  " is not number";
    }
    if (validar_numero(x) == false)
    {
    	return "Can't compare relationships because " + y +  " is not number";
    }


    if(x > y)
    {
    	return ">"
    }

    if(x < y)
    {
    	return "<"
    }
    else
    {
    	return "="
    }




};

// Try logging these functions to test your code!
//console.log(getRelationship(1,4));
//console.log(getRelationship(1,1));
//console.log(getRelationship("that",2));
//console.log(getRelationship("this"," something else"));
console.log(getRelationship(3));
//console.log(getRelationship("hi"));
//console.log(getRelationship(NaN));
//console.log(getRelationship(NaN, undefined));

