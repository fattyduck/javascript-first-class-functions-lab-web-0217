function countdown(callback){
  setTimeout(callback, 2000);
}

function createMultiplier(num){
  return function(times){
    return num * times;
  };
}

function multiplier(num, times){
  return num * times;
}

var doubler = createMultiplier(2);

var tripler = createMultiplier(3);

var doublerWithBind = multiplier.bind(null, 2);

var triplerWithBind = multiplier.bind(null, 3);
