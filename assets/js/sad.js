export function openGateFor(someOne) {
    var target = someOne || false
    if (target){
        var el = document.querySelectorAll('#planHouse .preview');
        if(el.length) {
            var current = el[someOne];
            console.log(current)
        }
    } 
}