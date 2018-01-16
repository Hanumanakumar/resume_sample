(function() {

  function loadJSON(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
        callback(rawFile.responseText);
      }
    }
    rawFile.send(null);
  }

  //usage:
  loadJSON("resources/data.json", function(text){
    let data = JSON.parse(text);
    console.log(data);
    creatingSummary(data.basics.picture);
creatingSummary(data.basics.name);
creatingSummary(data.basics.dob);
creatingSummary(data.basics.label);
creatingSummary(data.basics.email);
creatingSummary(data.basics.phone);
creatingSummary(data.basics.location);
creatingSummary(data.basics.skill);
creatingSummary(data.basics.html1);
creatingSummary(data.basics.html);
creatingSummary(data.basics.css1);
creatingSummary(data.basics.css);
creatingSummary(data.basics.js1);
creatingSummary(data.basics.js);
creatingSummary(data.basics.h1);
  });

  var resumeDiv = document.getElementById("resume");

  function creatingSummary(summary){
    var section = document.createElement("div");
    section.classList.add("col-1");
    	var summary_section = document.createElement("section")
var center=document.createElement("center");
    		var div = document.createElement("div");
		div.classList.add("col-3");
		var div_container=document.createElement("div");
		div_container.classList.add("col-4");
		var div_image=document.createElement("div");
		var img_name=document.createElement("div");
		img_name.classList.add("img-name");
			/*var skil_div=document.createElement("div");
			skill_div.classList.add("scontainer");
			
			/*var skil_inner=document.createElement("div");
			skill_inner.classList.add("html");*/

		div_image.classList.add("img");
    		div_image.innerHTML = summary;

resumeDiv.appendChild(center);
center.appendChild(section);
section.appendChild(summary_section);
    summary_section.appendChild(div);
	div.appendChild(div_image);
	div.appendChild(img_name);

summary_section.appendChild(div_container);
}


})();
