const { default: mongoose } = require("mongoose");

const categorySchema = new mongoose.Schema({
    categoryName:{
        type:String,
        required:true
    },
    categoryTitle:{
        type:String,
        required:true
    },
    categoryAddress:{
        type:String,
        required:true
    }
},{
    timestamps:true,
})



const categorModel = mongoose.model("category",categorySchema);
module.exports=categorModel;
