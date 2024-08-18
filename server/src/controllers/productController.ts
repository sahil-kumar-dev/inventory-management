import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProducts = async(req:Request,res:Response) => {
    try {

        const search = req.query.search?.toString();
        const products = await prisma.products.findMany({
            where:{
                name:{
                    contains:search
                }
            }
        })

        return res.status(200).json(products)

    } catch (error) {
        return res.status(500).json({message:'Internal Server Error',error})
        
    }
}

export const createProduct = async (req:Request,res:Response) => {
    try {
        const {productId,name,price,rating,stockQuantity} = req.body

        const product = prisma.products.create({
            data:{
                productId,
                name,
                price,
                rating,
                stockQuantity
            }
        })

        res.status(201).json(product)

    } catch (error) {
        res.status(500).json({message:"Error creating product"})
    }
}