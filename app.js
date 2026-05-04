const express=require("express")
const noteModel=require("./models/note.model")
const app=express()
app.use(express.json())
app.post("/notes",async (req,res)=>{
    const data=req.body;   
    await noteModel.create({
        tittle:data.tittle,
        description:data.description,
    }) 
    res.status(201).json({
        message:"note created"
    })
})

app.get("/notes",async (req,res)=>{
    const notes=await noteModel.find() // return a array
    res.status(200).json({
        message:"notes fetch sucessfully",
        notes:notes,
    })
})
app.delete("/notes/:id", async (req,res)=>{
    const id=req.params.id
    await noteModel.findOneAndDelete({
        _id:id,
        
    })
    res.status(200).json({
        message:"Note deleted sucessfully"    
    })
})


module.exports=app