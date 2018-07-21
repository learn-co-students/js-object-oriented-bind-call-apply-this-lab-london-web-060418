//Your code here
function justInvoke(fnctn) {
  return fnctn();
}

function setThisWithCall(fnctn, thisValue, argument) {
  return fnctn.call(thisValue, argument);
}

function setThisWithApply(fnctn, thisValue, argument) {
  return fnctn.apply(thisValue, argument);
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  return functionToBeCopied.bind(thisValue);
}
