
const proModel = require('../Model/product');
// const categorModel=require('../Model/category');
//crud operation

exports.createProduct = async(req,res)=>{
    const data = new proModel({
        categoryId:req.body.categoryId,
        productName:req.body.productName,
        productPrice:req.body.productPrice,
        productDescription:req.body.productDescription
    })
    const val = await data.save()
    res.json(val)
}

//find the product

exports.findProd = async(req,res)=>{
    const prodId = req.params.id;
   try{
    const findpr=await proModel.findById(prodId)
    if(!findpr){
        res.send("No product found")
    }else{
        res.json(findpr)
    }
   }catch(error){
    console.error("Error to find product");
    res.status(500).send("Internal error")
   }
}


//update product
exports.updatedpr=async(req,res)=>{
    const prId = req.params.id;
    const updatedpr=req.body;
   
   try{
    const updatproduct = await proModel.findByIdAndUpdate(prId,updatedpr)
    if(!updatproduct){
        res.send("couldn't update")
    }else{
        res.json(updatproduct)
    }
   }catch(error){
    console.error("Error for updating");
    res.status(500).send("Internal error")
   } 
}

//delete product

exports.deleteproduct = async(req,res)=>{
    const prid=req.params.id;

   try{
    const deleted = await proModel.findByIdAndDelete(prid);
    if(!deleted){
        res.send("couldn't delete")
    }else{
        res.json(deleted)
    }
   }catch(error){
    console.error("Error to delete");
    res.status(500).send("Internal error")
   }
}

//list all the product

exports.getall=async(req,res)=>{
    const all = req.params.productName

   try{
    const allP=await proModel.find(all)
    if(!allP){
        res.send("could n't list all product")
    }else{
        res.json(allP)
    }
   } catch(error){
      console.error("Error for list");
      res.status(500).send("Internal Error")
   }
}


//sort all the product

exports.sortall = async(req,res)=>{
    const prsort = req.params.productName;

   try{
    const sorted = await proModel.find().sort({productName:1})
    if(!sorted){
        res.send("could n't sort")
    }else{
        res.json(sorted)
    }
   } catch(error){
    console.error("Error in sorting");
    res.status(500).send("Internal Error")
   }
}

//count 

exports.countall = async(req,res)=>{
    const count = req.params.productName;
    try{
        const counted = await proModel.find().count();
        if(!counted){
            res.send("couldn't count")
        }else{
            res.json({count: counted});
        }
    }catch(error){
        console.error("Error to count");
        res.status(500).send("Internal Error")
    }
}

