const router = require("express").Router();
const ExtensionModel = require("../models/extensionModel"); // <-- require, not import

// get all extensions
router.get("/api/ext-list", async (req, res) => {
  try {
    const extensions = await ExtensionModel.find({});
    return res.status(200).json({ extensions });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to fetch extensions" });
  }
});

// update data
router.post("/api/ext-list", async (req, res) => {
  try {
    const { active, id } = req.body;

    console.log(active , id);
    

     await ExtensionModel.findByIdAndUpdate(
      { _id:id },
      {
        isActive: active,
      },{new:true}
    );
    const extensions = await ExtensionModel.find({});

    return res.status(201).json({extensions});
  } catch (error) {
    return res.status(401).json({error :`cant update ${error}`});
  }
});

//remove data
router.delete("/api/ext-list" , async(req , res)=>{


  try {
    
    const {id} = req.body;
    console.log(id);
    

    await ExtensionModel.findOneAndDelete(id,{new:true});
    const extensions = await ExtensionModel.find({});
    res.status(201).json({extensions});

  } catch (error) {

    res.status(401).json({message:`cant remove data ${error}`});
    
  }

})

module.exports = router;
