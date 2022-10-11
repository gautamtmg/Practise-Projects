// Closure --- Funtion inside function -- Inside function is know as closure


function multipy(x){

    function mul(y){
        var res = x * y;

        // console.log("resutl is >>>", res);
        function add(z){
            var product = res+z;
            console.log("total is >>>", product);
        }

        return add;
    }

    return mul;
}

multipy(5)(2)(4);




// As we know, we can only return one item at once from the function. What if there are multiple closure functions.
// To return multiple closure function, we can return by creating objects, Below is demonstration code.


function greet(x){
    function place( y ){

        //code here
    }

    function goodBye( z ){
        //code here
    }

    function test ( x ){

        //code here
    }




    return {
        // key: value;
        place: place,
        goodBye: goodBye,
        test: test,

        // If value of key comes as a function, we call it method.
    }


    //ES6
    // Object shorthand
    // If we use allocated memory name insede an object
    // key will be allocated name and value will be it's assigned value
}