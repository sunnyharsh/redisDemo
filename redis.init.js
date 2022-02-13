const redis = require("ioredis");

const client = new redis.createClient();

client.on('error', (e) => {
  console.log('Redis error >', e)
});
client.on('connect', () => {
  console.log('Redis server connected...')
});
module.exports = {
  client,
}