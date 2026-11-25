import { PrismaClient } from '@prisma/client'
import {Request,Response} from 'express'
const prisma=new PrismaClient()

export const login=async(req:Request,res:Response)=>{
    try{
        const {login,password}=req.body

        if(!login||!password)return res.status(501).json({error:'Неверный логин или пароль'})

        const admin=await prisma.admin.findFirst({
            where:{
                login:login,
                password:password
            }
        })

        if(!admin)return res.status(401).json({error:'Неверный логин или пароль'})
        
        return res.json({id:admin.id,login:admin.login})
    }catch(error){
        console.log(error)
        res.status(501).json({error:error})
    }
}