const Property=require('../models/propDetails')
const Owner=require('../models/ownerDetails')

module.exports={
    proplist: async(req,res)=>{
        const datalist=await Owner.find().populate('commonId');
        res.send(datalist)
    },
    searchlist: async(req,res)=>{
        const ppdId=req.query.ppdId;
        console.log(ppdId);
        const srchlist=await Owner.find().populate({
            path: 'commonId',
            match: {ppdId:ppdId}
        });
        res.send(srchlist);
    }
}
