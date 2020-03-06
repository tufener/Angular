"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let list1 = [1, 2, 3];
let list2 = ["jean", "paul", "marie", "lisa"];
let list3 = [1, 2, 3, 4, 5, 6];
let list4 = ["maria", "lisa", "paulina"];
let nom = "marie";
let prenom = "pierre";
let result = "Nom: " + nom.toUpperCase() + "\n" + "Prenom: " + prenom;
console.log(result);
function sous(x, ...reste) {
    for (let nbr of reste) {
        x -= nbr;
    }
    return x;
}
let res = sous(1000, 2000, 1000, 3000, 5000, 10);
console.log(res);
