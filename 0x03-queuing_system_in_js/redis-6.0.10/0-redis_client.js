const redis = require('redis');

// Specify the Redis server host and port
const redisHost = '127.0.0.1'; // Assuming Redis is running on localhost
const redisPort = 6379; // Assuming Redis default port

// Create a Redis client with specified host and port
const client = redis.createClient(redisPort, redisHost);

// Log when attempting to connect to the server
console.log('Attempting to connect to Redis server...');

// Event listener for successful connection
client.on('connect', () => {
  console.log('Redis client connected to the server');
});

// Event listener for connection error
client.on('error', (err) => {
  console.error(`Redis client not connected to the server: ${err}`);
});

