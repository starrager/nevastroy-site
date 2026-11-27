import { PrismaClient } from '@prisma/client'
import {Request,Response} from 'express'

const prisma=new PrismaClient()
const token=process.env.TELEGRAM_TOKEN
const chatId=process.env.TELEGRAM_CHAT_ID

export const addtodatabase=async(req:Request,res:Response)=>{
    try{
        const {name,phone,email,message}=req.body

        if(!name||!phone||!email||!message)return res.status(201).json({error:'Не хватает данных'})

        const bd=await prisma.request.create({data:{name,phone,email,message}})
        
        if(token&&chatId){
            const text=`🔔 Новая заявка!
        Имя: ${name}
        Телефон: ${phone}
        Email: ${email}
        Сообщение: ${message}`
        
            try{
                const tgResponse=await fetch(
                    `https://api.telegram.org/bot${token}/sendMessage`,
                    {
                        method:'POST',
                        headers:{
                            'Content-Type':'application/json'
                        },
                        body:JSON.stringify({
                            chat_id:chatId,
                            text:text
                        })
                    }
                )
        
                const tgData=await tgResponse.json()
        
                if (!tgResponse.ok||!tgData.ok){
                    console.error('Telegram не отправил сообщение:',tgData)
                }
        
            }catch(error){
                console.error('Ошибка отправки в Telegram:',error)
            }
        }

        res.status(201).json(bd)
    }catch(error){
        console.error(error)
        res.status(500).json({error:error})
    }
}

export const getfromdatabase=async(req:Request,res:Response)=>{
    try{
        const choice=req.query.choice as string

        if(choice==='2'){
            const database=await prisma.request.findMany({where:{status:'archived'}})
            res.status(200).json(database)
        }
        else if(choice==='1'){
            const database=await prisma.request.findMany({where:{status:{not:'archived'}}})
            res.status(200).json(database)
        }
        
    }catch(error){
        console.error(error)
        res.status(500).json({error:error})
    }
}

export const deletefromdatabase=async(req:Request,res:Response)=>{
    try{
        const id=Number(req.params.id)
        const del=await prisma.request.delete({where:{id}})
    }catch(error){
        console.error(error)
        res.status(501).json({error:'Ошибка удаления из базы данных'})
    }
}

export const changestatus=async(req:Request,res:Response)=>{
    try{
        const id=Number(req.params.id)
        const response=await prisma.request.update({where:{id},data:{status:req.body.status}})
        
        return res.json(response)
    }catch(error){
        console.error(error)
        res.status(501).json({errpr:'ошибка изменения статуса'})
    }
}