const redisClient = require('../config/redis'); // Sesuaikan path jika diperlukan

// Fungsi untuk menyimpan hasil query ke cache Redis
const cacheQueryResult = async (query, result) => {
  // query = { yadi: query };
  console.log(typeof query);
  try {
    // Set data ke Redis dengan waktu kadaluarsa (misalnya, 1 jam)
    await redisClient.setex(query, 3600, JSON.stringify(result));
  } catch (err) {
    console.error('Error caching query result:', err);
  }
};

// Fungsi untuk mendapatkan hasil query dari cache Redis
const getCachedQueryResult = async (query) => {
  try {
    // Dapatkan data dari Redis
    const cachedResult = await redisClient.get(query);

    // Parse hasil yang didapatkan jika ada data dalam cache
    if (cachedResult) {
      return JSON.parse(cachedResult);
    }

    return null; // Mengembalikan null jika data tidak ada dalam cache
  } catch (err) {
    console.error('Error getting cached query result:', err);
    return null;
  }
};

module.exports = {
  cacheQueryResult,
  getCachedQueryResult,
};
