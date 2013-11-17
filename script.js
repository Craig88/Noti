
// Craig Steele
// July 2013

$('document').ready(main);

function main() {

// check for notifications support
if (window.webkitNotifications) {
  console.log("Notifications are supported!");
}
else {
  console.log("Notifications are not supported for this Browser/OS version yet.");
}

$('#myButton').click(getPermission);

}

 function getPermission() {
  if (window.webkitNotifications.checkPermission() == 0) { // 0 is PERMISSION_ALLOWED
    console.log("You have permission, go nuts!");
    displayNotification();
  } else {
    window.webkitNotifications.requestPermission();
    console.log("You don't have permission");
    
  }
}

function displayNotification() {

	var myNote = window.webkitNotifications.createNotification('icon.png', 'Hey dude!', 'An Awesome Desktop Notification');
	myNote.show();
	
}






  