import { PrismaClient } from '@prisma/client'
import {Request,Response} from 'express'
const prisma=new PrismaClient()

export const addtodatabase=async(req:Request,res:Response)=>{
    try{
        const {name,phone,email,message}=req.body

        if(!name||!phone||!email||!message)return res.status(201).json({error:'Не хватает данных'})

        const bd=await prisma.request.create({data:{name,phone,email,message}})

        res.status(201).json(bd)
    }catch(error){
        console.error(error)
        res.status(500).json({error:error})
    }
}

export const getfromdatabase=async(req:Request,res:Response)=>{
    try{
        const database=await prisma.request.findMany({})

        res.status(200).json(database)
    }catch(error){
        console.error(error)
        res.status(500).json({error:error})
    }
}