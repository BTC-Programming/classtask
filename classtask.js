/** 
 * The ClassTask program helps students know what to do next.
 * The Title version refers to the date, so ClassTask.11.08 is for 11/8.
 * @author Bram Moreinis
 * @version 1.0
 * @since 2018-11-08
 */

/* INITIALIZATION */
student = null;
statusQuest = null;
var coders=["Andrew", "Ben W", "Hasan", "Joe", "Chris", "Wyatt", "Eli", "Ben M", "Galloway"];
var reviewers=["Wyatt", "Hasan", "Ben W", "Eli", "Ben M", "Eli", "Joe", "Chris", "Andrew"];
var member = false;
var index=0;
var working=false;

/* MAIN */
while (member==false) {
	student=prompt("Enter your capitalized first name or Ben M or Ben W");
	for (n=0;n<coders.length;n++) {
		if (coders[n]==student) {
			index = n;
			console.log(index)
			member = true;
			alert("Thank you, "+student+". ");
		}
	}
	if (member==false) {
		if (student=="stop") {
			working=true;
			break;
		} 
		else {
			alert("Please try again. First letter is capitalized.  If adding last name, space before.")
		}
	}
}

while (working == false) {
	alert("For each question, answer y or n.")
	statusQuest = prompt("Did you finish coding Multiplication?")
	if (statusQuest == "n") {
		alert("Go do that now. Look ONLY at the flowchart - no copying code!") 
		working=true;
		break;
	}
	else statusQuest = prompt("Did you Slack a GIST URL to your partner?")
	if (statusQuest == "n") {
		alert("Your partner is "+reviewers[index]+". Create a GIST URL, Slack it to him and him to review it.")
		working=true;
		break;
	} 
	else statusQuest = prompt("Did you edit your Multiplication code based on "+reviewers[index]+"'s review?")
	if (statusQuest == "n") {
		alert("Go do that now. Then put that code in your Multiplication Repository on Github as multiplication-final.js") 
		working=true;
		break;
	}
	else statusQuest = prompt("Did you submit your Multiplication Repo link as a private comment for the Merit Badge assignment?");
	if (statusQuest == "n") {
		alert("Go do that now.") 
		working=true;
		break;
	}
	else statusQuest = prompt("Do you have an idea for a story yet?");
		if (statusQuest == "n") {
			alert("When this box closes, click on DEFAULT STORY use that.");
		}
	statusQuest = prompt("Have you begun writing a story on a Google Doc?");
	if (statusQuest == "n") {
		alert("When this box closes, click on STORY TEMPLATE and start writing scenes.")
		working=true;
		break;
	} 
	else {
		alert("Great! When this box closes, click on STORY CODING TUTORIAL and as you work through it, START CODING YOUR STORY.");
		working=true;
		break;
	}
}
console.log("Now, get to work!");

