



module.exports={
    proplist: async(req,res)=>{
        const datalist=await Property.find().poppulate('commonId');
        res.send(datalist)
    },
    searchlist: async(req,res)=>{
        const srchlist=await Property.find({ppdId:req.body.ppdId}).poppulate('commonId');
        res.send(srchlist);
    }
}