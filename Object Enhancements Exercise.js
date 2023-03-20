function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }


  /* Write an ES2015 Version */
  function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
  }


/**var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!" */  

/* Write an ES2015 Version */
let favoriteNumber = 42;

const instructor_1 = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
}

/**var instructor = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi!";
  },
  sayBye: function(){
    return this.firstName " + "says bye!";
  }
} */

const instructor_2 = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }

/**Write a function which generates an animal object. The function should accepts 3 arguments:

species: the species of animal (‘cat’, ‘dog’)
verb: a string used to name a function (‘bark’, ‘bleet’)
noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
Use one or more of the object enhancements we’ve covered. */

function generateAnimal(species, verb, noise) {
    return {
      species,
      [verb]() {
        console.log(noise);
      }
    };
  }

  const c = generateAnimal('cat', 'meow', 'meeeeeooooowww');
console.log(cat.species); 
c.meow(); 

