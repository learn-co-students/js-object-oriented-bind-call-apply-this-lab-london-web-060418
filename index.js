//Your code here
const justInvoke = (fn) => {
  return fn()
}

const setThisWithCall = (fn, thisValue, arg) => {
  return fn.call(thisValue, arg)
}

const setThisWithApply = (fn, thisValue, arg) => {
  return fn.apply(thisValue, arg)
}

const returnNewFunctionOf = (fn, thisValue) => {
  return fn.bind(thisValue)
}
