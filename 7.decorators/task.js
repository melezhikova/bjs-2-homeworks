function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
    const hash = args.join(",");
    if (hash in cache) {
      console.log("Из кэша: " + cache(hash));
    } else {
      let result = func(...args);
      if (cache.keys(length) === 5) {

      } cache[hash] = result;
      console.log("Вычисляем: " + result);
    };
  }

  return wrapper;
}

function debounceDecoratorNew(func) {
  // Ваш код
}
