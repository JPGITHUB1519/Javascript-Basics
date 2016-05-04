
var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';

var charEscape = function(_html) {
    var newHTML = _html;
    // How will you make sure that newHTML doesn't contain any < or > ?
    // Your code goes here!

    // Don't delete this line!

    //replazar toda la ocurrencia
    newHTML = newHTML.replace(/</g, " ")
    // una sola ocurrencia
    //newHTML = newHTML.replace(">", " ")

    newHTML = newHTML.replace(/>/g, " ")
    
    
    return newHTML;
};

// Did your code work? The line below will tell you!
console.log(charEscape(html));

