const mixed = ['PIZZA', 10, true, 25, false, 'Wings']
function lowerCaseWords(mixedArray){
    let myPromise = new Promise(function(myResolve, myReject) {  
        if (Array.isArray(mixedArray) == false){
            myReject("The value is not an array")
        }   
        (() => {
            var tmp = mixedArray.filter(value => typeof value === 'string')
            var result = tmp.map(value => value.toLowerCase())
            myResolve(result)
        })();
    });
    myPromise.then(
        function(value) {console.log(value )},
        function(error) {console.log(error)}
    );
}
lowerCaseWords(mixed)
