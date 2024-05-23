export interface ICategory {
  id: number;
  name: string;
}
export interface IMenu {
  name: string;
  href: string;
}
export interface IProducts {
  id: number;
  name: string;
  price: number;
  categoryId: number;
  image: string;
  isNew: boolean;
  isSale: boolean;
}
