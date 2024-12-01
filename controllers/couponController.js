import couponModel from '../models/coupon.js';

// add coupon
const addCoupon = async (req, res) => {
    const coupon = new couponModel({
        name: req.body.name,
        discount: req.body.discount,
    })
    try {
        let couponData = await couponModel.findOne({name:req.body.name})
        if (couponData) {
            await userModel.findByIdAndUpdate(couponData._id, {discount: req.body.discount})
            res.json({success: true, message: "Updated Coupon"})
        } else {
            await coupon.save();
            res.json({success: true, message: "Coupon Added"})
        }
    } catch (error) {
        console.log(error)
        res.json({success: false, message: "Error"})
    }
}


// remove coupon
const removeCoupon = async(req, res) => {
    try {
        let couponData = await couponModel.findOne({name:req.body.name})
        await couponModel.findByIdAndDelete(couponData._id);
        res.json({success:true, message: "Coupon removed"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
    }
}

// fetch coupon
const getCoupon = async (req, res) => {
    try {
        let couponData = await couponModel.findOne({name:req.body.name})
        res.json({success: true, couponData})
    } catch (error) {
        res.json({success:false, message: "Error"})
    }
}

export {addCoupon, removeCoupon, getCoupon}