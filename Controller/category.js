
const categorModel = require("../Model/category");
// const validateCategory = require("../Model/category")

//crud operation
exports.createCategor = async(req,res)=>{
    const data = new categorModel({
        categoryName:req.body.categoryName,
        categoryTitle:req.body.categoryTitle,
        categoryAddress:req.body.categoryAddress
    })
    const val = await data.save();
res.json(val);
}


//fetch category
exports.fetchCategory = async(req,res)=>{
    const id = req.params.id;
try{
    const newval=await categorModel.findById(id);
    if(!newval){
        res.send("no category found")
    }else{
        res.json(newval)
    }
}catch(error){
    console.error("Error in fetching category",error);
    res.status(500).send("Internal server error")

}
}

//update category
exports.changeCategory = async(req,res)=>{
    const catId=req.params.id;
    const updated= req.body;
    try{
        const updatedData= await categorModel.findByIdAndUpdate(catId,updated);
        if(!updatedData){
            res.send("not updated category")
        }else{
            res.json(updatedData)
        }
    }catch(error){
        console.error("Error for updating category");
        res.status(500).send("Internal server error")
    }
}

//delete category
exports.deletCategory = async(req,res)=>{
    const catId = req.params.id;
   try{
    const deleted = await categorModel.findByIdAndDelete(catId);
    if(!deleted){
        res.send("couldn't delete the item")
    }else{
        res.json(deleted)
    }
   }catch(error){
    console.error("Error in delete category");
    res.status(500).send("Internal error")
   } 
}

//list all category

exports.getallCategory = async(req,res)=>{
    const categoryName1 =req.params.categoryName;
    try{
        const category = await categorModel.find(categoryName1);
        if(!category){
            res.send("Error for listing category")
        }else{
            res.json(category)
        }
    }catch(error){
        console.error("Error for list");
        res.status(500).send("Internal error")
    }
}


//sort category
exports.sortCategory = async(req,res)=>{
    const sorted = req.params.categoryName
    try{
        const newsort =await categorModel.find().sort({categoryName:1})
        if(!newsort){
            res.send("couldn't sort")
        }else{
            res.json(newsort)
        }
    }catch(error){
        console.error("Error for sorting");
        res.status(500).send("Internal error")
    }
}

//count 

exports.counted = async(req,res)=>{
    const count1 = req.params.categoryName;
    try{
        const countall = await categorModel.find().count();
        if(!countall){
            res.send("couldn't count")
        }else{
            res.json({count: countall})
        }
    }catch(error){
        console.error("Error to count");
        res.status(500).send("Internal Error")
    }
}