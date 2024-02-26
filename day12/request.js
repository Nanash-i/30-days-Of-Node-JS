const axios = require('axios');

async function sendRequests() {
    const url = 'http://localhost:8080'; // Replace with your server URL
    const numRequests = 100; // Number of requests to send

    try {
        for (let i = 0; i < numRequests; i++) {
            await axios.get(url);
            console.log(`Request ${i + 1} sent`);
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

sendRequests();
