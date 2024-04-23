export interface GetAllProduct {
    pid:          number;
    productName:  string;
    imageUrl:     string;
    productPrice: number;
    hasStock:     boolean;
    stock:        number
    description:  string;
}