/**
 * @author Justin
 */
var when = [];
var context = null;
var currentShould = null;
var because = null;
var failure = false;

var should = function(label)
{
	context = new because();
	currentShouldLabel = label;
}

var assertNotNull = function(value)
{
	if(value == null)
	{
		document.write("FAILED when " + currentContextLabel + " it should " + currentShouldLabel);
		failure = true;
	} else {
		document.write("PASSED when " + currentContextLabel + " it should " + currentShouldLabel + "<br />");
	}
}

function runTests(){
	for (var testName in when) {
		currentContextLabel = testName;
		when[testName]();
		if(failure)
		{
			return;
		}
	}
	
	document.write("All tests PASS!");
}