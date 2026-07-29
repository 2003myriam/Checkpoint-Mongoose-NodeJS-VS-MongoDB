# Checkpoint Mongoose – Node.js & MongoDB

## 📖 Description

Dans ce checkpoint, l'objectif est de découvrir les principales fonctionnalités de **Mongoose** afin de manipuler une base de données **MongoDB Atlas** avec **Node.js**.

Le projet couvre toutes les opérations CRUD (Create, Read, Update, Delete) ainsi que les requêtes avancées proposées par Mongoose.

> 

 

# Installation

## 1. Cloner le projet

```bash
git clone <url-du-projet>
```

## 2. Installer les dépendances

```bash
npm install
```

---

# Configuration

Créer un fichier **.env** à la racine du projet.

Exemple :

```env
MONGO_URI="Votre_URI_MongoDB"
PORT=5000
```

Connexion à MongoDB :

```javascript
mongoose.connect(process.env.MONGO_URI);
```

---

# Structure du projet

```
.
├── src
│   ├── config
│   │     └── db.js
│   ├── models
│   │     └── person.js
│   ├── data
│   │     └── people.js
│   └── testPerson.js
│
├── .env
├── .gitignore
├── package.json
└── server.js
```

---

# Modèle Person

Le modèle **Person** possède les champs suivants :

| Champ | Type | Description |
|-------|------|-------------|
| name | String | Nom de la personne (obligatoire) |
| age | Number | Âge |
| favoriteFoods | [String] | Liste des aliments favoris |

Exemple :

```javascript
const PersonSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    favoriteFoods:{
        type:[String],
        required:true
    }
})
```

---

# Fonctionnalités réalisées

## 1. Connexion à MongoDB

- Configuration de MongoDB Atlas
- Connexion avec Mongoose
- Gestion des erreurs de connexion

---

## 2. Création d'une personne

Création d'une instance avec :

```javascript
new Person()
```

Puis sauvegarde grâce à :

```javascript
save()
```

---

## 3. Création de plusieurs personnes

Insertion d'un tableau de personnes avec :

```javascript
Person.create(arrayOfPeople)
```

---

## 4. Recherche par nom

Recherche de toutes les personnes ayant un nom donné :

```javascript
Person.find()
```

---

## 5. Recherche d'une seule personne

Recherche d'une personne selon un aliment favori :

```javascript
Person.findOne()
```

---

## 6. Recherche par identifiant

Recherche d'une personne grâce à son `_id` :

```javascript
Person.findById()
```

---

## 7. Find → Edit → Save

Étapes réalisées :

- Recherche avec `findById()`
- Ajout de `"hamburger"` dans `favoriteFoods`
- Sauvegarde avec `save()`

---

## 8. Mise à jour avec findOneAndUpdate()

Modification de l'âge d'une personne :

```javascript
Person.findOneAndUpdate()
```

avec l'option :

```javascript
{ new: true }
```

pour récupérer le document mis à jour.

---

## 9. Suppression par identifiant

Suppression d'une personne avec :

```javascript
Person.findByIdAndDelete()
```

> **Remarque :**
>
> Les anciennes versions du checkpoint utilisent `findByIdAndRemove()`.
>
> Avec les versions récentes de Mongoose, `findByIdAndDelete()` est recommandé.

---

## 10. Suppression de plusieurs documents

Suppression de toutes les personnes portant un nom donné avec :

```javascript
Person.deleteMany()
```

> **Remarque :**
>
> Le checkpoint mentionne `Model.remove()`, mais cette méthode est désormais obsolète dans les versions récentes de Mongoose.

---

## 11. Requête chaînée

Recherche des personnes qui aiment les burritos :

- Recherche (`find`)
- Tri (`sort`)
- Limitation (`limit`)
- Sélection des champs (`select`)
- Exécution (`exec`)

Exemple :

```javascript
Person.find({ favoriteFoods: "burritos" })
.sort({ name: 1 })
.limit(2)
.select("-age")
.exec();
```

 