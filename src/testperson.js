const { Person } = require("../src/models/person");
const arrayOfPeople = require("./data/people");
const connectDB = require("../src/config/db")

const person1 = new Person(
{name: "Tom",
  age:22,
  favoriteFoods:["pasta","pizza"]
});

 /* ===== save une seule personne ===== */
async function addperson(){
   try{
      await person1.save()
      console.log("personne ajoutée avec succes ");
   }
   catch(error){
      console.log("erreur");
      
   }
}
async function createPerson(){
try {
  const newperson = await Person.create(
     arrayOfPeople,

  );
  console.log("user saved");
} catch (error) {
  console.error("Error creating user");
}
}

async function main(){
   await connectDB()
   await addperson()
   await  createPerson()
}

main()