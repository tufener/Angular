import { Agent } from "http";

let list1: number[] = [1,2,3] ;
let list2:string[] = ["jean", "paul", "marie", "lisa"];
let list3:Array<number> = [1,2,3,4,5,6];
let list4:Array<string> = ["maria", "lisa", "paulina"];

let nom:string = "marie"; 
let prenom: string = "pierre"; 
let result: string = "Nom: " + nom.toUpperCase() + "\n" + "Prenom: " + prenom ;
console.log(result);




function sous(x:number, ...reste:number[]): number{
    for(let nbr of reste){
    x-=nbr;
    }
    return x;
}
let res = sous(1000,2000,1000,3000,5000,10);
console.log(res);
