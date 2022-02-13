const express=require('express');
const axios= require('axios')
const setAndGetCache=require("../service/redis.service").setAndGetCache;

const adminRoutes=express.Router()
const EXPIRY_DEFAULT=20
adminRoutes.get('/getData',async (req, res)=>{
    const getData= await setAndGetCache('userData', EXPIRY_DEFAULT ,async ()=>{
    const response=await axios.get("https://randomuser.me/api/");
        return response.data;
    })
    res.json(getData)
})
module.exports={
    adminRoutes
}