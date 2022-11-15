function cachingDecoratorNew(func) {
    let cache = [];
    function wrapper(...args) {
        const hash = args.join(',');
        let objectInCache = cache.find((item) => item.hash[0] === hash);
        if (objectInCache) {
            console.log("Из кэша: " + objectInCache.value);
            return "Из кэша: " + objectInCache.value;
        }
        let result = func(...args);
        cache.push({hash: [hash], value: result});
        if (cache.length > 5) { 
          cache.shift();
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;  
    }
    return wrapper;

}


function debounceDecoratorNew(func, dalay) {
  let timeoutId = null;
  function wrapper(...args){
    wrapper.allCount++;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      wrapper.count++;
      func(...args);
    }, dalay);
    if(timeoutId === null){
        wrapper.count++;
        func(...args);
    }
  }
  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;
}