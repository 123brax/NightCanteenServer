import express from 'express'
import authMiddleware from '../middleware/auth.js'
import { placeOrder, userOrders, listOrders, updateStatus, newItemAdded } from '../controllers/orderController.js'

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder)
orderRouter.post("/userOrders", authMiddleware, userOrders)
orderRouter.get("/list", listOrders)
orderRouter.post("/status", updateStatus)
orderRouter.get("/newItem", newItemAdded)

export default orderRouter
