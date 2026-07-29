const { Person } = require("../src/models/person");
const connectDB = require("../src/config/db")

const person1 = new Person(
{name: "Tom",
  age:22,
  favoriteFoods:["pasta","pizza"]
});

 
async function addperson(){
   try{
      await person1.save()
      console.log("personne ajoutée avec succes ");
   }
   catch(error){
      console.log("erreur");
      
   }
}
async function main(){
   await connectDB()
   await addperson()
}

main()