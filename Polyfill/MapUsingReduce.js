if (!Array.prototype.mapUsingReduce) {
    Array.prototype.mapUsingReduce = function(callback, initialValue) {
      return this.reduce(function(mappedArray, currentValue, currentIndex, array) {
        mappedArray[currentIndex] = callback.call(initialValue, currentValue, currentIndex, array)
        return mappedArray
      }, [])
    }
  }
  
  [1, 2, , 3].mapUsingReduce(
    (currentValue, currentIndex, array) => currentValue + currentIndex + array.length
  ) // [5, 7, , 10]