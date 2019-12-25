
function action(){
	student.name = document.getElementById("usr").value
	student.age= document.getElementById("age").value
	student.mail= document.getElementById("mail").value
	student.contact= document.getElementById("contact").value
	student.college = document.getElementById("college").value
	student.UG.Year1.Chemistry= document.getElementById("chemistry").value
	 student.UG.Year1.Physics= document.getElementById("physics").value
	 student.UG.Year1.Maths= document.getElementById("maths").value
	 student.UG.Year2.Mechanics= document.getElementById("mechanics").value
	 student.UG.Year2.Electronics= document.getElementById("electronics").value
	 student.UG.Year2.Electricals= document.getElementById("electricals").value
	 student.UG.Year3.Thermal= document.getElementById("thermal").value
	student.UG.Year3.Thermodynamics= document.getElementById("thermodynamics").value
	 student.UG.Year3.Heat= document.getElementById("heat").value
	 student.PG.Year1.Computer= document.getElementById("computer").value
	 student.PG.Year1.Robotics= document.getElementById("robotics").value
	 student.PG.Year1.Maintenance= document.getElementById("maintenance").value
	 student.PG.Year2.Programming= document.getElementById("programming").value
	 student.PG.Year2.Designing= document.getElementById("designing").value
	student.PG.Year2.CAD= document.getElementById("cad").value
	student.PG.Year3.Creo= document.getElementById("creo").value
	 student.PG.Year3.Mechatronics= document.getElementById("mechatronics").value
	student.PG.Year3.Development= document.getElementById("development").value
	alert("submitted")
	console.log(student)
}

var student={
	name:"",
	age:"",
	mail:"",
	contact:"",
	college :"",
	 UG : {
		 		Year1 : {
			 		Chemistry : "",
			 		Physics : "",
			 		Maths : "",
			 	},
			 	
			 	Year2 : {
			 		Mechanics : "",
			 		Electronics : "",
			 		Electricals :"" ,
			 	},
			 
			 	Year3 : {
			 		Thermal :"" ,
			 		Thermodynamics :"",
			 		Heat : "",
		 		}
		 	},
		 	PG : {
		 		Year1 : {
		 			Computer :"" ,
		 			Robotics : "",
		 			Maintenance :"" ,
		 		},
		 		
		 		Year2 : {
		 			Programming :"",
		 			Designing :"",
		 			CAD :"",
		 		},
		 		
		 		Year3 : {
		 			Creo :"",
		 			Mechatronics : "",
		 			Development :""
		 		}
		 		}

};  

