const express = require('express');
const proRouter = require('../Controller/product');
const proModel = require('../Model/product');
const router = express.Router();

router.post("/createpro",proRouter.createProduct)
router.get("/find/:id",proRouter.findProd)
router.put("/update/:id",proRouter.updatedpr)
router.delete("/delete/:id",proRouter.deleteproduct)
router.get("/get/all",proRouter.getall)
router.get("/sort",proRouter.sortall);
router.get("/countall",proRouter.countall)

module.exports=router;