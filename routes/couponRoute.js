import express from 'express'
import { addCoupon, getCoupon, removeCoupon } from '../controllers/couponController.js'

const couponRouter = express.Router()

couponRouter.post("/add", addCoupon)
couponRouter.post("/remove", removeCoupon)
couponRouter.post("/get", getCoupon)

export default couponRouter;