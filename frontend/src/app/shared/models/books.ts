export class Book{
    id!:string;
    name!:string;
    author!:string;
    price!:number;
    tags?:string[];
    favorite!:boolean;
    stars!:number;
    imageUrl!:string;
    origins!:string[];
}
//? means optional
// ! means required