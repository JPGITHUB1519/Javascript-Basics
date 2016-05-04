name = "Jean Pier";
var formmatedName = HTMLheaderName.replace("%data%",name);

var role = "Web Developer";

var formmatedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formmatedRole);
$("#header").prepend(formmatedName);


var bio = {  "name" : " Jean",
			 "role" : "Programmer",
			 "contact_s" : {
			 "mobile" : "8095555555",
			 "email" : "juanpedro1519@gmail.com",
			 "github" : "JPGITHUB1519",
			 "location" : "Santiago" 
			},

			 "picture_url" : "http://www.manejandodatos.es/wp-content/uploads/2015/03/javascript.png",
			 "welcome_message" : "Welcome to my Curriculum Web",
			 "skills" : ["Programmer","Web Developer", "Data Analyst", "Python Ninja"]
			};


// work object
work = {};

work.position = "Programmer";
work.employer = "NONE";
work.years = 10;
work.city = "Santiago"

// education object

education = {};

education["name"] = "PBP";
education["years"] = 4;
education["city"] = "Santiago"; 


$("#main").append(education["name"]);
