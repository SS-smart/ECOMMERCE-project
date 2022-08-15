function Promise(executor){
    this.promiseState = 'pending' 
    this.promiseResult = 'null'
    _this = this
    function resolve(data){
        if(_this.promiseState !== 'pending') return
        _this.promiseState = 'fulfilled' 
        _this.promiseResult = data
    };
    function reject(data){
        if(_this.promiseState !== 'pending') return
        _this.promiseState = 'reject' 
        _this.promiseResult = data
    }
try {
    executor(resolve,reject)
} catch (e) {
    reject(e)
}
}


Promise.prototype.then = function(onResolved,onReject){
    if(this.promiseState === 'fulfilled'){
        onResolved(this.promiseResult)
    }
    if(this.promiseState === 'reject'){
        onReject(this.promiseResult)
    }
}