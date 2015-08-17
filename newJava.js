//Declare global variables
var dict2011 = {};
var dict2012 = {};
var dict2013 = {};

//Build dictionaries function definitions
function convertToDict2011(stuff) {	
	for(var i = 0; i < stuff.length; i++) {
		var college = stuff[i]['c'];
		var x = stuff[i]['z'];
		dict2011[college] = x;
    }
}
function convertToDict2012(stuff) {
	for(var i = 0; i < stuff.length; i++) {
		var college = stuff[i]['c'];
		var x = stuff[i]['z'];
		dict2012[college] = x;
    }
}
function convertToDict2013(stuff) {
	for(var i = 0; i < stuff.length; i++) {
		var college = stuff[i]['c'];
		var x = stuff[i]['z'];
		dict2013[college] = x;
    }
}

//Build 2011 Dictionary
$(document).ready(function(){
	$("#div2").hide();
	var URL = "1AY0F4K0fpUqVRW-8BDRHsdayJVutbHdCsiaP_5SI3ao";
    Tabletop.init( { key: URL, callback: convertToDict2011, simpleSheet: true } )
	var URL2 = "1NmuGkNYy0LNXLw5p47V828_KPjd3Cb6UkxSvLfXO3oU";
    Tabletop.init( { key: URL2, callback: convertToDict2012, simpleSheet: true } )
	var URL3 = "1roSdVUUe2sxRN0WcKMYsYMexITz-IyXaXhXDKhe-Z1w";
    Tabletop.init( { key: URL3, callback: convertToDict2013, simpleSheet: true } )
});


/*function averageDicts(){
	var totalDict = {};
	var d;
	var n;
	for(var key in dict2013){
		d = 1;
		n = dict2013[key];
		if(key in dict2011){
			d = d + 1;
			n = n + dict2011[key];
		}if(key in dict2012){
			d = d + 1;
			n = n + dict2012[key];
		}
		totalDict[key] = (n/d);
	}
	return totalDict;
}*/

//Function definition: input is chosenSchool, returns average z-score
function averageforSchool(schNam){
	var d = 0;
	var n = 0;
	if(schNam in dict2011){
		if(typeof parseInt(dict2011[schNam], 10) === "number"){
			d = d + 1;
			n = n + parseInt(dict2011[schNam], 10);
		}
	}if(schNam in dict2012){
		if(typeof parseInt(dict2012[schNam], 10) === "number"){
			d = d + 1;
			n = n + parseInt(dict2012[schNam], 10);
		}
	}if(schNam in dict2013){
		if(typeof parseInt(dict2013[schNam], 10) === "number"){
			d = d + 1;
			n = n + parseInt(dict2013[schNam], 10);
		}
	}
	return(n/d);

}

function showImage(src, width, height, alt) {
	var img = document.createElement("img");
	img.src = src;
	img.width = width;
	img.height = height;
	img.alt = alt;
 document.getElementById('imgdiv').appendChild(img);
}

function hideImage() {
	var images = document.getElementsByTagName('img');
	for (i = 0; i < images.length;i++ ) {
    images[i].style.display = "none";
}
}

function decideScore(num) {
	if(num >= 98) {
		showImage("http://i1128.photobucket.com/albums/m481/Miranda_Faulkner/A_zpshcqokkat.png", 100, 100, "A+");
		return("Congratulations! Your school received an A+! This is the highest possible grade that you could receive! This means that your school scored between a 98 and 100 on our grading system so your school has a very low crime rate!");
	}
	else if(num >= 96) {
		showImage("http://i1128.photobucket.com/albums/m481/Miranda_Faulkner/A_zpsafntvjjj.png", 100, 100, "A");
		return("Not as good as an A+, but your school is still very safe and that is something to be proud of! Receiving an A means that your school scored between a 96 and a 98 on our grading system (out of 100), so your school has a relatively low crime rate compared to other schools!");
		
	}
	else if(num >= 94) {
		showImage("http://i1128.photobucket.com/albums/m481/Miranda_Faulkner/A-_zpsz76ergej.png", 100, 100, "A-");
	return("Your school is very safe, but not as safe as a school that scored an A+ or an A. Don\'t worry though you are still above average! If your school received an A-, then it scored between a 94 and a 96 on our grading system out of 100.");
	}
	else if(num >= 92) {
		showImage("http://i1128.photobucket.com/albums/m481/Miranda_Faulkner/B_zps3udlzaaz.png", 100, 100, "B+");
	return("Your school is about average in terms of safety, nothing to be worried about. Receiving a B+ on our website means that your school received between a 92 and a 94 on our grading system which is out of 100.");
	}
	else if(num >= 90) {
		showImage("http://i1128.photobucket.com/albums/m481/Miranda_Faulkner/B_zps73los5n0.png", 100, 100, "B");
		return("Your school is slightly below average in terms of safety. This means that your school received between a 90 and a 92 on our grading system out of 100. This is nothing to be worried about, there are factors which may have affected the result including size of enrollment and rate of common crimes such as theft and property crime.");
		
	}
	else if(num >= 87) {
		showImage("http://i1128.photobucket.com/albums/m481/Miranda_Faulkner/B-_zpsrrzqs1td.png", 100, 100, "B-");
		return("Your school is a little below average in terms of safety. This grade means that your school scored between 87 and 90 on our grading system out of 100. This is not much to be worried about, there are factors which may have affected the result including size of enrollment and rate of common crimes such as theft and property crime.");
		
	}
	else if(num >= 84) {
		showImage("http://i1128.photobucket.com/albums/m481/Miranda_Faulkner/C_zps7uei7ssj.png", 100, 100, "C+");
		return("Your school is fairly below average in terms of safety. Your academics might be good, but your crime rate not so much. This means that your school scored between 84 and 87 on our grading system out of 100. Factors such as enrollment size will affect this data. Other factors which could affect this is above average numbers of more serious crimes such as murder.");
		
	}
	else if(num >= 81) {
		showImage("http://i1128.photobucket.com/albums/m481/Miranda_Faulkner/C_zpsx1zyohxm.png ", 100, 100, "C");
		return("Your school is below average in terms of safety. It doesnt necessarily mean that your classrooms are full of future felons, the school might have just had a murder or two that screwed things up for everybody. A C on our website means that your school scored between 81 and 84 on our grading system out of 100. Factors such as enrollment size will affect this data. Other factors which could affect this is above average numbers of more serious crimes such as murder.");
		
	}
	else if(num >= 78) {
		showImage("http://i1128.photobucket.com/albums/m481/Miranda_Faulkner/C-_zpsgepuf1o8.png", 100, 100, "C-");
		return("Your school is bad. Don’t try to deny it - we know. C- means that your school scored between 78 and 81 on our grading system out of 100. The guys on your football team probably all spent a little time in juvy. There are schools which are even worse, but not that many of them. Your school might have a normal crime rate, but its the same size as the most progressive of liberal arts schools.");
		
	}
	else if(num >= 72) {
		showImage("http://i1128.photobucket.com/albums/m481/Miranda_Faulkner/D_zpsdvt5ncal.png", 100, 100, "D");
		return("You probably dont need an explanation behind the meaning of this grade. Your school is one of the lowest of the low. Watch everyone. Lock yourself in your room the entire night. You are not safe. A D means that your school scored between 72 and 78 on our grading system out of 100. Your school might have a normal crime rate, but its the same size as the most progressive of liberal arts schools. Be afraid. Be very afraid");
		
	}
	else if(num < 72) {	
		showImage("http://i1128.photobucket.com/albums/m481/Miranda_Faulkner/F_zpsmv1rksam.png", 100, 100, "F");
		return("Your school is probably the absolute worst place on Earth to be. It scored below a 72 on our grading system out of 100. Murder, theft, rape, assault, and violent crime everywhere! Its like you go to school in Sodom and Gomorrah. If you still dont want to transfer, be extremely vigilant and best of luck to you.");
		
	}	
}
	
hideImage();

function acceptValue(){
    $("#div1").fadeOut();
	$("#div2").fadeIn();
}
function roundToFive(num){
	var str = num.toString();
	var end = "";
	for(var i=0; i<5; i++){
		end = end + str[i]
	}
	return end;
}
jQuery(function($){
	$("#stuff").click(function(){
		var chosenSchool = $('input[name="school"]').val();
		if(chosenSchool in dict2013){
			var grade = averageforSchool(chosenSchool);
			if(isNaN(grade)){
				$("#grade").text("Data for this school is insufficient.");
			}
			else{
				$("#schoolName").text(chosenSchool);
				var explain = decideScore(grade);
				$("#explanation").text(explain);
				$("#grade").text(roundToFive(grade));
			}
		}
		});
	});

