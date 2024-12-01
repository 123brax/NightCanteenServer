import mongoose from "mongoose";

const couponSchema = new mongoose.Schema({
    name: { type: String, required:true },
    discount: { type: Number, default:0 },
})

const couponModel = mongoose.models.coupon || mongoose.model("coupon", couponSchema)

export default couponModel;