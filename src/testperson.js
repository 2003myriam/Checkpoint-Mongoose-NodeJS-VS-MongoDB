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
/* =========création multiple de personnes ======= */
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
/* ========= Trouvez toutes les personnes ayant un nom donné ======= */
async function findpersonbyname(){
try {
  const findperson = await Person.find(
     {name:"Tom"}

  );
  console.log(findperson);
} catch (error) {
  console.error("Error finding person");
}
}
/* ========= Trouvez une personnes ayant un nom donné ======= */
async function findpersonbyname(){
try {
  const findperson = await Person.find(
     {name:"Tom"}

  );
  console.log(findperson);
} catch (error) {
  console.error("Error finding person");
}
}
/* ========= Trouvez une personnes  qui a un certain aliment dans ses favoris ======= */
async function findpersonbyfood(food){
try {
  const findfood = await Person.findOne(
    {favoriteFoods: food}
  );
  console.log(findfood);
} catch (error) {
  console.error("Error finding person");
}
}
/* ========= Trouvez une personnes par son id  ======= */
async function findpersonbyid(personId ){
try {
  const findbyid = await Person.findById(personId );
  console.log(findbyid);
} catch (error) {
  console.error("Error finding person");
}
}
/* ======= Find, Edit, puis Save======= */
async function updatefavoritefood(personId ){
try {
  const findbyid = await Person.findById(personId );
  console.log(findbyid);
   findbyid.favoriteFoods.push("hamburger")
  await findbyid.save()

} catch (error) {
  console.error("Error finding person");
}
}
/* ======= utiliser la methode findOneAndUpdate() ======= */
async function findandupdateage(personName  ){
try {
  const findandupdate = await Person.findOneAndUpdate({name:personName}, {age:20},{ new : true } );
  console.log(findandupdate);
  

} catch (error) {
  console.error("Error finding person");
}
}

/* ======= utiliser la methode indByIdAndRemove() ======= */
async function findpersonandremove(personId ){
try {
  const findanddelete = await Person.findByIdAndDelete(personId);
  console.log(findanddelete);
  

} catch (error) {
  console.error("Error finding person");
}
}

/* ======= supprimr les personne ayant un nom marry ======= */
async function removeperson(personName ){
try {
  const deleteperson = await Person.deleteMany({name:personName});
  console.log(deleteperson);
  

} catch (error) {
  console.error("Error finding person");
}
}
/* ========= Enchaînez .find(), .sort(), .limit(), .select(), puis .exec()==== */
async function personsteps(){
try {
  const person = await Person.find(
    {favoriteFoods: "burritos"}
  )
  .sort({name:1})  // filtrer le nom par ordre croissant 
  .limit(2)        // limiter le resultatt a deux document seulement
  .select("-age")   // masquer le champs age 
  .exec();         // faire l'execution
  console.log(person);
  

} catch (error) {
  console.error("Error finding person");
}
}
async function main(){
   await connectDB()
   // await addperson() qst1
   // await  createPerson() qst 2
   //await findpersonbyname() qst3
   //await findpersonbyfood("pizza") qst4
   //await findpersonbyid("6a6a011cbfe536c6c26905a1") qst 5 
   //await updatefavoritefood("6a6a011cbfe536c6c26905a1") qst 6 
   // await findandupdateage("Sara") qst 7 
   //await findpersonandremove("6a69fc95144bab7bfb95bd38") qst 8
  // await removeperson("marry") qst 9 
  await personsteps()
}

main()