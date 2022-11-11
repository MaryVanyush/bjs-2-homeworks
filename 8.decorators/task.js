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
  timeoutId = null;
  let isTrottled = false;
  function wrapper(...args){
    wrapper.allCount ++;
    if(isTrottled){
      return;
    }
    if(timeoutId){
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      timeoutId = null;
      wrapper.count ++;
      func(...args);
    }, dalay)
    isTrottled = true;
    setTimeout(() =>  isTrottled = false, 2000)
  }
  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;
}