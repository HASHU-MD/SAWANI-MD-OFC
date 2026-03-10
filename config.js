const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "fpB2AKyB#tCDIX3xYV8gbRJYg6LKwG_HQUIXNOR6Mk7G7cmxeBgg",
AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "true",
AUTO_REPLY: process.env.AUTO_REPLY || "true",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/l06cb8.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "HELLO IM WHITE MD CREATED BY HASHAN <NOW ALIVE> "
};
