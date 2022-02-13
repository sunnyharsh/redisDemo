const client= require("../redis.init").client;
function setAndGetCache(key,expTime, cb){
    return new Promise((resolve, reject)=>{
        client.get(key, async (error, data)=>{
            if(error) reject(error)
            if(data != null)return resolve(JSON.parse(data))
            const freashDate= await cb();
            // client.set(key, JSON.stringify(freashDate))
            client.setex(key, expTime, JSON.stringify(freashDate))
            resolve(freashDate)
        })
    })
}


module.exports = {
  setAndGetCache,
}