// review.model.ts

export interface Review {
    _id?: string;
    userId: string;
    productId: string;
    rating: number;
    content: string;
    createdAt?: Date;
  }
  