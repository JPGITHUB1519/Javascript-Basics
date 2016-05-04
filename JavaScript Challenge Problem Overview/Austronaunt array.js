function format_lastname_name(name)
{
	var lista = name.split(" ");

	console.log(lista);

	var aux = lista[1] + ", " + lista[0];

	return aux;
}

var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(names) 
{
    // Your code goes here!

    converting = []

    //formatting all the names
    for(cont in names)
    {
    	converting.push(format_lastname_name(names[cont]));

    }
    // bubble sort
    for(var i = 0; i < converting.length; i++)
    {
    	for(var j = 0; j < converting.length - 1; j++)
    	{
    		var aux = "";
    		if(converting[j] > converting[j + 1])
    		{
    			aux = converting[j];
    			converting[j] = converting[j + 1];
    			converting[j+1] = aux;

    		}
    	}
    }

    return converting;

   
}

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));