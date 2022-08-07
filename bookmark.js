var ENV_NAME="type1";
var CUR_TAB="Swagger";
function load(tabName) {

  if(this.CUR_TAB == "tab1") {
	  
	return loadTab_1();
  }else if(this.CUR_TAB == "tab2") {
	return loadTab_2();  
  }else if(this.CUR_TAB == "tab3") {
	
	return loadTab_3();  
  }else {
	return loadTab_4();  
  }
	
}

(function() {

  var c=FileReader.readAsText('/home/ankit/links/tabs/raw/tab2.json')
  
  console.log("ahha",c);
})()

function loadTab_1() {
    var tab1Data = JSON.parse(tab1.trim());
    protocol="http";	
    var initialTag='<table class="styled-table"> <thead><tr> <th>Name</th> <th>URL</th> </tr></thead><tbody>' ;	    
    var dynamicTable='';	    
	for (var i = 0; i < tab1Data.length; i++) {
		url=protocol+"://"+tab1Data[i].part1+"-"+ENV_NAME+"/"+tab1Data[i].part2+"/"+tab1Data[i].part3+"/"+tab1Data[i].part4		 
		dynamicTable+='<tr><td>'+tab1Data[i].name+'</td><td><a href='+url+' target="_blank">'+url+'</a></td>'       	
	}	
	var endTags='</tbody></table>'
	var finalTable=initialTag+dynamicTable+endTags;
	var envhtml='<div><label for="urls">Choose env</label> <select name="env" id="env" onchange="setENV(this.value)"> <option value="type1">type1</option> <option value="type2">type2</option> </select> </div>'
	return envhtml+finalTable;

}

function loadTab_2() {
			
	var tab2Data = JSON.parse(tab2.trim());
    var initialTag='<table class="styled-table"> <thead><tr> <th>Name</th> <th>URL</th> </tr></thead><tbody>' ;	    
	var dynamicTable='';	    
	for (var i = 0; i < tab2Data.length; i++) {		
		dynamicTable+='<tr><td>'+tab2Data[i].name+'</td><td><a href='+tab2Data[i].url+' target="_blank">'+tab2Data[i].url+'</a></td>'       	
	}	
	var endTags='</tbody></table>'
	var finalTable=initialTag+dynamicTable+endTags;
	return finalTable;
}

function loadTab_3() {
	  
    var tab3Data = JSON.parse(tab3);
    var initialTag='<table class="styled-table"> <thead><tr> <th>Name</th> <th>URL</th> </tr></thead><tbody>' ;	    
	var dynamicTable='';	    
	for (var i = 0; i < tab3Data.length; i++) {		
		dynamicTable+='<tr><td>'+tab3Data[i].name+'</td><td><a href='+tab3Data[i].url+' target="_blank">'+tab3Data[i].url+'</a></td>'       	
	}	
	var endTags='</tbody></table>'	
	var finalTable=initialTag+dynamicTable+endTags;
	return finalTable;
}

function loadTab_4() {
	var tab4Data = JSON.parse(tab4);
    var initialTag='<table class="styled-table"> <thead><tr> <th>Name</th> <th>URL</th> </tr></thead><tbody>' ;	    
	var dynamicTable='';	    
	for (var i = 0; i < tab4Data.length; i++) {		
		dynamicTable+='<tr><td>'+tab4Data[i].name+'</td><td><a href='+tab4Data[i].url+' target="_blank">'+tab4Data[i].url+'</a></td>'       	
	}	
	var endTags='</tbody></table>'
	var finalTable=initialTag+dynamicTable+endTags;
	return finalTable;
}


function setENV(env) {
  ENV_NAME=env;
  openTab(CUR_TAB);	  
}

function openTab(tabName) {
  this.CUR_TAB=tabName;
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";  
  document.getElementById(tabName).innerHTML=load(tabName);
   document.getElementById("env").value=ENV_NAME;  
  //evt.currentTarget.className += " active";     
 
}

