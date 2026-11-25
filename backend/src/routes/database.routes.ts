import {Router} from 'express'
import {addtodatabase,getfromdatabase,deletefromdatabase,changestatus} from '../controllers/database.controller'

const router=Router()

router.post('/add',addtodatabase)
router.put('/change/:id',changestatus)
router.get('/requests',getfromdatabase)
router.delete('/deletefrombd/:id',deletefromdatabase)

export default router