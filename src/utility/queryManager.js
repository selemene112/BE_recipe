const redisClient = require('../config/redis');

const cacheQueryResult = async (query, result) => {
  console.log(typeof query);
  try {
    // Set data ke Redis dengan waktu kadaluarsa (misalnya, 1 jam)
    await redisClient.setex(query, 3600, JSON.stringify(result));
  } catch (err) {
    console.error('Error caching query result:', err);
  }
};

const getCachedQueryResult = async (query) => {
  try {
    const cachedResult = await redisClient.get(query);

    if (cachedResult) {
      return JSON.parse(cachedResult);
    }

    return null;
  } catch (err) {
    console.error('Error getting cached query result:', err);
    return null;
  }
};

module.exports = {
  cacheQueryResult,
  getCachedQueryResult,
};
