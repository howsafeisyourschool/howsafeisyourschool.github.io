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
var chosenSchool;


var exp = "This school is so great!";



function acceptValue(){
	 var chosenSchool = ($('input[name="school"]').val());
};



$("school.html").ready(function(){
	var schoolName = document.getElementById("schoolName");
	var grade = document.getElementById("grade");
	var explanation = document.getElementById("explanation");
	schoolName.innerHTML = chosenSchool;
	grade.innerHTML = "grade"; //call function for returning grade
	explanation.innerHTML = exp;//call function and input grade to get explanation
});