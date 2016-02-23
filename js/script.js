
$(document).ready(function() {
	getData();
});


function getData() {	
	$.getJSON("js/columbia.json", function(schoolsData) {
		loopThroughData(schoolsData);
	});
}

function loopThroughData(s) {
	for (i=0; i<s.length; i++) {

		var schoolName = s[i].SCHOOL_NAME;
		var year = s[i].YEAR;
		var gradNum = s[i].GRADUATES;
		var dropoutNum = s[i].DROPOUT_9_12_COHORT;
		var barWidth = gradNum * 1.5;
		var barDropOutWidth = dropoutNum * 1.5;
		if (schoolName === "ROCK BRIDGE SR. HIGH" && (gradNum > 0)) {
			$(".chart").append(
				"<div class='val'><hr>"+gradNum+" students graduated and "+dropoutNum+" dropped out in "+year+".</div>"
				)
			$(".chart").append(
				"<div class='bar-item year"+year+"'>"+
				"<div class='bar' style='width: "+barWidth+"px'></div>"+
				"</div>");	
			$(".chart").append(
				"<div class='bar-item year"+year+"'>"+
				"<div class='bar-dropout' style='width: "+barDropOutWidth+"px'></div>"+
				"</div>");
		}
	}
}



