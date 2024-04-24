const express = require('express');
const cateRouter = require('../Controller/category');
const router = express.Router();

router.post("/create",cateRouter.createCategor);
router.get("/getcategory/:id",cateRouter.fetchCategory);
router.put("/update/:id",cateRouter.changeCategory);
router.delete("/delete/:id",cateRouter.deletCategory);
router.get("/get/all",cateRouter.getallCategory)
router.get("/sort",cateRouter.sortCategory);
router.get("/countall",cateRouter.counted)


module.exports=router;