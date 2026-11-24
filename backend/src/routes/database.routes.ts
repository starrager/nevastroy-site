import {Router} from 'express'
import {addtodatabase,getfromdatabase} from '../controllers/database.controller'

const router=Router()

router.post('/add',addtodatabase)
router.get('/requests',getfromdatabase)

export default router