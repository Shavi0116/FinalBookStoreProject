import {Schema, model} from 'mongoose';

export interface Book{
    id:string;
    name:string;
    price:number;
    tags: string[];
    favorite:boolean;
    stars: number;
    imageUrl: string;
    author:string;
}

export const BookSchema = new Schema<Book>(
    {
        name: {type: String, required:true},
        price: {type: Number, required:true},
        tags: {type: [String]},
        favorite: {type: Boolean, default:false},
        stars: {type: Number, required:true},
        imageUrl: {type: String, required:true},
        author: {type: String, required:true}
    },{
        toJSON:{
            virtuals: true
        },
        toObject:{
            virtuals: true
        },
        timestamps:true
    }
);

export const BookModel = model<Book>('Book', BookSchema);