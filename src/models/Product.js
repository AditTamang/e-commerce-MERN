import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    prodcutName:{
        type: String,
        required: true
    },
    productDescription:{
        type: String
    },
    price: {
        type: Number,
        required : true
    },
    stock:{
        type: Number,
        default: 0
    },
    imageUrl:{
        type: String
    },
    featured : {
        type: boolean,
        default: true
    },
    rating:{
        type: Number,
        default: 0
    },
    isActive: {
        type: Boolean,
        default: true,
    }
},
{
    timestamps: true
}
)

const Product = mongoose.model("Product", productSchema)

export default Product;