const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["status", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "👋",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `          
〔 *𝐃𝐀𝐑𝐊-𝐂𝐘𝐁𝐄𝐑-𝐌𝐃* 〕

> *👋 ʜɪ*: ${pushname}
> *⏳ ᴜᴘᴛɪᴍᴇ*:  ${runtime(process.uptime())} 
> *📟 ʀᴀᴍ*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
> *👨‍💻 ᴏᴡɴᴇʀ*: ʜᴀꜱʜᴜᴜ ᴛᴇᴄʜ </>


*ᴅᴀʀᴋ ᴄʏʙᴇʀ ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ʜᴀꜱʜᴜᴜ ᴛᴇᴄʜ 🥹💗*

💗🥹 𝗙𝗢𝗟𝗟𝗢𝗪 𝗢𝗨𝗥 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗖𝗛𝗔𝗡𝗡𝗘𝗟
    
https://whatsapp.com/channel/0029VazhnLzK0IBdwXG4152o

  
> *𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐃𝐀𝐑𝐊 𝐂𝐘𝐁𝐄𝐑 𝐌𝐃 𝐖𝐀 𝐁𝐎𝐓 📌️`;


        await conn.sendMessage(from, { 
            image: { url: `https://i.ibb.co/dYsHR6j/619.jpg` },  // Image URL
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363395674230271@newsletter',
                    newsletterName: 'DARK-CYBER-MD',
                    serverMessageId: 190
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
