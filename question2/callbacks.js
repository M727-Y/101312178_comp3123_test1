function check(val){
    let myPromise = new Promise(function(myResolve, myReject) {  
        setTimeout(()=>{
            if(val == true) {
                let message = {'message' : 'delayed success!'}
                myResolve(message)
            } else {
                let message = {'error' : 'delayed exception!'}
                myReject(message)
            }
        },500)
    });
    myPromise.then(
        function(message) {console.log(message)},
        function(message) {console.log(message)}
    );
}
function resolvedPromise(){
    check(true)
}
function rejectedPromise(){
    check(false)
}
resolvedPromise()
rejectedPromise()