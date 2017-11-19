exports.printMsg = function() {
  console.log("This message is from the npm-1 package.");
}

exports.check = function(msg, loud){
  return loud ? msg.toUpperCase() : msg;
}

