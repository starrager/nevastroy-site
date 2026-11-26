import { PrismaClient } from '@prisma/client'
import {Request,Response} from 'express'
import jwt from 'jsonwebtoken'

const prisma=new PrismaClient()
const SECRET_KEY=process.env.SECRET_KEY||'ur-secret-key'

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

        const token=jwt.sign(
            {id:admin.id,login:admin.login},
            SECRET_KEY,
            {expiresIn:'24h'}
        )
        
        return res.json(token)
    }catch(error){
        console.log(error)
        res.status(501).json({error:error})
    }
}