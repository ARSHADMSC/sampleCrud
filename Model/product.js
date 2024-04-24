const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    productName:{
        type:String,
        required:true
    },
    productPrice:{
        type:Number,
        required:true
    },
    productDescription:{
        type:String
    }
    
},{
    timestamps:true,
})

const proModel = mongoose.model("product",productSchema);
module.exports=proModel;