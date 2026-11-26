import jwt from 'jsonwebtoken'
import {Request,Response,NextFunction} from 'express'

const SECRET_KEY=process.env.JWT_SECRET||'ur-secret-key'

export const middleware=(req:Request,res:Response,next:NextFunction)=>{
    const auth=req.headers.authorization

    if(!auth||!auth.startsWith('Bearer'))return res.status(401).json({error:'нет доступа'})

    const token=auth.split(' ')[1]

    try{
        const decoded=jwt.verify(token,SECRET_KEY);(req as any).admin=decoded
        next()
    }catch(error){
        console.error(error)
        return res.status(501).json({error:'неверный токен'})
    }
}