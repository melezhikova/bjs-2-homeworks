function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(",");
    let idx = cache.findIndex((item) => item.hash === hash);
    
    if (idx !== -1) {
      console.log("Из кэша: " + cache[idx].value);
      return "Из кэша: " + cache[idx].value;
    } 
    
    let result = func(...args);
    cache.push({hash: hash, value: result});
    if (cache.length > 5) {
      cache.shift();
    } 
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  
  return wrapper;
}


function debounceDecoratorNew(func, ms) {
  func();
  let isTrottled = true, timeout;
  
  return function() {
    if (!isTrottled) {
      return;
    }
    clearTimeout(timeout);
    isTrottled = false;
    timeout = setTimeout(func, ms);
   };
}

function debounceDecorator2(func, ms) {
  func();
  let isTrottled = true, timeout;
  let count = 0;
    
  return function () {
    if (!isTrottled) {
    return;
    }
    clearTimeout(timeout);
    isTrottled = false;
    timeout = setTimeout(func, ms);
    count += 1;
    console.log(count);
   };
}
