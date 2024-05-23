import type { IProducts } from "./interfaces";

export interface ICartItems extends IProducts {
  quantity: number
  // totalPrice: number
  // discountType: "$" | "%";
  // discountAmount: number | undefined;
}

export interface ICarts {
  items: ICartItems[];
  discountPercent: number;
  
}

