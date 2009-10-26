/**
 * @author Justin
 */
var when = [];
var context = null;
var currentShould = null;
var because = null;
var failure = false;
var anyFailures = false;

var should = function(label)
{
	context = new because();
	currentShouldLabel = label;
}

var specReporter = function(boolValue)
{
	if(boolValue)
	{
		document.write("PASSED when " + currentContextLabel + " it should " + currentShouldLabel + "<br />");
	} else {
		document.write("FAILED when " + currentContextLabel + " it should " + currentShouldLabel + "<br />");
		failure = true;
		anyFailures = true;
	}
}

var assertNotNull = function(value)
{
	specReporter(value != null);
}

var assertAreEqual = function(value1, value2)
{
	failure = false;
	specReporter(value1 == value2);
}

var assertGreaterThanZero = function(value)
{
	failure = false;
	specReporter(value > 0);
}

var assertLessThanZero = function(value)
{
	failure = false;
	specReporter(value < 0);
}


function runTests(){
	for (var testName in when) {
		currentContextLabel = testName;
		document.write("<br />");
		when[testName]();
	}
	
	if(anyFailures)
	{
		document.write("Tests FAILED!");
	}
	else{
		document.write("All tests PASS!");
	}
	
}