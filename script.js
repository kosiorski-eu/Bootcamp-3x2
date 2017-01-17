function Person(firstName, lastName) {
 
    if( !(this instanceof Person) ) {
        return new Person(firstName, lastName);
    }
 
    this.firstName = firstName;
    this.lastName = lastName;
    this.attempts = 0;
 
}
 
Person.prototype.flirt = function() {

    this.interval = setInterval(()=>{
        console.log("Nazywam się " + this.firstName + " " + this.lastName + "!");
            if(++this.attempts === 10) {
            clearInterval(this.interval);
        }
    },1000);
 
};
 
var person = new Person("Jan", "Nowak");
 
person.flirt();













