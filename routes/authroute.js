import  Express  from "express";
import {registercontroller} from '../controllers/authcontroller.js';
const router=Express.Router();
router.post('/register',registercontroller)


export default router;