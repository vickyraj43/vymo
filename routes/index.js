import express from 'express';
import  panVerify from '../controller/panVerify';
import authController from '../middleware/isAuthenticate';
const router = express.Router();
 
console.log('enter in route');
router.post('/auth' , [authController.isAuthenticate,panVerify.getPanCardDetails]);

export default router; 