const express=require('express')
const {createNewReviews,updatestateById,getREviewsByuser}=require('../controllers/reviws')
const authentication=require('../middleware/authentication')

const reviewRouter=express.Router()

reviewRouter.post('/', authentication,createNewReviews)
reviewRouter.put('/:id', authentication,updatestateById)
reviewRouter.get('/:order_id',getREviewsByuser)


module.exports=reviewRouter