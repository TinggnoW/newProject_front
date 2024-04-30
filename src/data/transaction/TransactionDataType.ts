import {GetAllProduct} from "../product/getAllProductData.Type.ts";

export interface TransactionDto {
    tid:      number;
    uid:      number;
    datetime: string;
    status:   string;
    total:    number;
    items:    TransactionProductDto[];
}

export interface TransactionProductDto {
    tpid:     number;
    product:  GetAllProduct;
    quantity: number;
    subtotal: number;
}