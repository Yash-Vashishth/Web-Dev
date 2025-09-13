function a() {
    var x = 10;
    function b() {
        console.log(x);
    }
    return b;
}

var funB = a();
funB();

// closure property states that when a function is returned for a variable, then it will return a lexical value (object of all variables used in parent function) along withthe function as output
// the lexical value will not be visible with the b() variable but it used in case 