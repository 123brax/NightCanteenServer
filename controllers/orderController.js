import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Placing user order from front end
const placeOrder = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId)
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
            number: userData.number,
        })
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId, {cartData:{}})
        res.json({success:true, message: "Order places"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message: "Error"})
    }
}

// User order for frontend
const userOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({userId: req.body.userId})
        res.json({success:true, data:orders})
    } catch (error) {
        res.json({success:false, message:"Error"})
    }
}

// list orders for admin panel
const listOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({})
        res.json({success:true, data:orders})
    } catch (error) {
        res.json({success:false, message:"Error"})
    }
}

// Updating order status
const updateStatus = async (req,res) => {
    try {
        console.log(req.body);
        if (req.body.status==="Payment Done") {
            await orderModel.findByIdAndUpdate(req.body.orderId, {status:req.body.status, payment:true})
        } else {
            await orderModel.findByIdAndUpdate(req.body.orderId, {status:req.body.status})
        }
        res.json({success:true, message:"Updated status"})
    } catch (error) {
        res.json({success:false, message:"Error"})
    }
}

// Updating order status
const newItemAdded = async (req,res) => {
    try {
        const orders = await orderModel.findOne({status: "Approval Required"})
        if (orders) {
            res.json({success:true, newItem:true})
        } else {
            res.json({success:true, newItem:false})
        }
    } catch (error) {
        res.json({success:false, message:"Error"})
    }
}

export {placeOrder, userOrders, listOrders, updateStatus, newItemAdded}