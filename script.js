//console.log(this);

calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}

var ivan = {
    name: 'Ivan',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);

        
        //function innerFunction () {   //this is a regular function, not a method and that's why 'this' keyword refers to window object
           // console.log(this);
        //}
        //innerFunction();
        
    }
};
ivan.calculateAge();
//console.log(ivan);

var peter = {
    name: 'Peter',
    yearOfBirth: 1984
};

peter.calculateAge = ivan.calculateAge;
peter.calculateAge();

// 'this' variable is only assigned a value when the object calls the method.
// So, if it wouldn't be like this, then this 'this' variable here would always be Ivan.
// Because it's in fact attached to the Ivan object. 
// But when we now call this same method from the Peter object, then the 'this' variable becomes the Peter object.

// So again, the 'this' keyword only becomes something as soon as the method gets called.
// This is something really important.
