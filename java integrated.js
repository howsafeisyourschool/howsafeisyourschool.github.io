function showImage(src, width, height, alt) {
	var img = document.createElement("img");
	img.src = src;
	img.width = width;
	img.height = height;
	img.alt = alt;
 document.body.appendChild(img);
}

function hideImage() {
	var images = document.getElementsByTagName('img');
	for (i = 0; i < images.length;i++ ) {
    images[i].style.display = "none";
}
}

function decideScore(num) {
	if(num > 98) {
		console.log("A+");
		console.log("Congratulations! Your school received an A+! This is the highest possible grade that you could receive! This means that your school scored between a 98 and 100 on our grading system so your school has a very low crime rate!")
		showImage("A+.png", 100, 100, "A+");
	}
	else if(num > 96) {
		console.log("A");
		console.log("Not as good as an A+, but your school is still very safe and that’s something to be proud of! Receiving an A means that your school scored between a 96 and a 98 on our grading system (out of 100), so your school has a relatively low crime rate compared to other schools!")
		showImage("A.png", 100, 100, "A");
	}
	else if(num > 94) {
		console.log("A-");
		console.log("Your school is very safe, but not as safe as a school that scored an A+ or an A. Don’t worry though, you’re still above average! If your school received an A-, then it scored between a 94 and a 96 on our grading system out of 100.");
		showImage("A-.png", 100, 100, "A-");
	}
	else if(num > 92) {
		console.log("B+");
		console.log("Your school is about average in terms of safety, nothing to be worried about. Receiving a B+ on our website means that your school received between a 92 and a 94 on our grading system which is out of 100.");
		showImage("B+.png", 100, 100, "B+");
	}
	else if(num > 90) {
		console.log("B");
		console.log("Your school is slightly below average in terms of safety. This means that your school received between a 90 and a 92 on our grading system out of 100. This is nothing to be worried about, there are factors which may have affected the result including size of enrollment and rate of common crimes such as theft and property crime.");
		showImage("B.png", 100, 100, "B");
	}
	else if(num > 87) {
		console.log("B-");
		console.log("Your school is a little below average in terms of safety. This grade means that your school scored between 87 and 90 on our grading system out of 100. This is not much to be worried about, there are factors which may have affected the result including size of enrollment and rate of common crimes such as theft and property crime.");
		showImage("B-.png", 100, 100, "B-");
	}
	else if(num > 84) {
		console.log("C+");
		console.log(" Your school is fairly below average in terms of safety. Your academics might be good, but your crime rate not so much. This means that your school scored between 84 and 87 on our grading system out of 100. Factors such as enrollment size will affect this data. Other factors which could affect this is above average numbers of more serious crimes such as murder.");
		showImage("C+.png", 100, 100, "C+");
	}
	else if(num > 81) {
		console.log("C");
		console.log("Your school’s safety is below average in terms of safety. It doesn’t necessarily mean that your classrooms are full of future felons, the school might have just had a murder or two that screwed things up for everybody. A C on our website means that your school scored between 81 and 84 on our grading system out of 100. Factors such as enrollment size will affect this data. Other factors which could affect this is above average numbers of more serious crimes such as murder.");
		showImage("C.png", 100, 100, "C");
	}
	else if(num > 78) {
		console.log("C-");
		console.log("Your school is bad. Don’t try to deny it - we know. C- means that your school scored between 78 and 81 on our grading system out of 100. The guys on your football team probably all spent a little time in juvy. There are schools which are even worse, but not that many of them. Your school might have a normal crime rate, but it’s the same size as the most progressive of liberal arts schools.");
		showImage("C-.png", 100, 100, "C-");
	}
	else if(num > 72) {
		console.log("D");
		console.log("You probably don’t need an explanation behind the meaning of this grade. Your school is one of the lowest of the low. Watch everyone. Lock yourself in your room the entire night. You are not safe. A D means that your school scored between 72 and 78 on our grading system out of 100. Your school might have a normal crime rate, but it’s the same size as the most progressive of liberal arts schools. Be afraid. Be very afraid.");
		showImage("D.png", 100, 100, "D");
	}
	else if(num <= 72) {	
		console.log("F");
		console.log("Your school is probably the absolute worst place on Earth to be. It scored below a 72 on our grading system out of 100. Murder, theft, rape, assault, and violent crime everywhere! It’s like you go to school in Sodom and Gomorrah. If you still don’t want to transfer, be extremely vigilant and best of luck to you.");
		showImage("F.png", 100, 100, "F");
	}	
}

/* //Miranda's code to input a school
var chosenSchool;

function acceptValue(){
	 var chosenSchool = ($('input[name="school"]').val());
}; */

//Start dictionary 
var dict2011 = {};
//var dict2012 = {};
//var dict2013 = {};
//var data;

/* $(document).ready(function(){
    var URL = "1ALWyaMposwpTXB2Ecv4lJ81d8yd6wBvDybLZE384HgI";
    data = Tabletop.init( { key: URL, callback: convertToDict2011, simpleSheet: true })
}); */


$(document).ready(function(){
    var URL = "1AY0F4K0fpUqVRW-8BDRHsdayJVutbHdCsiaP_5SI3ao";
    Tabletop.init( { key: URL, callback: convertToDict2011, simpleSheet: true } )
});

function convertToDict2011(stuff) {
    //console.log(stuff[17]);
	
	for(var i = 0; i < stuff.length; i++) {
		var college = stuff[i]['c'];
		var x = stuff[i]['z'];
		dict2011[college] = x;
    }
	//Hide images
	hideImage();
	
	//Print out the z value
	console.log(dict2011[chosenSchool]);
	
	//Print out the grade 
	var input = dict2011[chosenSchool];
	decideScore(input);
	
	//console.log(decideScore(input));
}




/*jQuery(function($){
	$("#stuff").click(function(){
		var school = $('#options').val();
		var schoolName = document.getElementById(schoolName);
		var grade = document.getElementById(grade);
		var explanation = document.getElementById(explanation);
		schoolName.innerHTML = "school";
		grade.innerHTML = "grade"; //call function for returning grade
		explanation.innerHTML = "explanation";//call function and input grade to get explanation
		location.replace("school.html");
	});
});

jQuery(function($){
	$("school.html").ready(function(){
		$("#stuff").click(function(){
			$("#schoolName").text("Hello world!");
			$("#grade").text("Hello world!");
			$("#explanation").text("Hello world!");
		});
	});
});
function changeValues(){
	var chosenSchool = $("#schools").val();
	alert(chosenSchool);
}function changeValues(sch){
	var schoolName = ("school.html").getElementById("schoolName");
	var grade = ("school.html").getElementById("grade");
	var explanation = ("school.html").getElementById("explanation");
	schoolName.innerHTML = sch;
	grade.innerHTML = "grade"; //call function for returning grade
	explanation.innerHTML = exp;//call function and input grade to get explanation
};*/




/* $("school.html").ready(function(){
	var schoolName = document.getElementById("schoolName");
	var grade = document.getElementById("grade");
	var explanation = document.getElementById("explanation");
	schoolName.innerHTML = chosenSchool;
	grade.innerHTML = "grade"; //call function for returning grade
	explanation.innerHTML = exp;//call function and input grade to get explanation
}); */