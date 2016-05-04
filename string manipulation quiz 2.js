var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!

    aux = oldName.split(" ");
    aux[0] = aux[0].toLowerCase();
    prb = aux[0][0].toUpperCase();
    name = prb + aux[0].slice(1);

    lastname = aux[1].toUpperCase();

    finalName = name + " " + lastname;

    
    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));
