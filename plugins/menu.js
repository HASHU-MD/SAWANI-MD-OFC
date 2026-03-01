const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const imageUrl = 'https://files.catbox.moe/ok0017.jpg';

cmd({
    pattern: "menu",
    react: "📜",
    alias: ["panel", "commands"],
    desc: "බොට් විධාන ලැයිස්තුව ලබා ගන්න",
    category: "main",
    use: '.menu',
    filename: __filename
},
async (conn, mek, m, { from, quoted, pushname, reply }) => {
    try {
        const selectionMessage = `

┏━━━━━━━━━━━━━━━━━━━━━━
      *ғᴜʟʟ ᴄᴏᴍᴍᴀɴᴅ ʟɪsᴛ*
┗━━━━━━━━━━━━━━━━━━━━━━

〈 𝐃𝐀𝐑𝐊 𝐂𝐘𝐁𝐄𝐑 𝐌𝐃 〉

> *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
> *ᴍᴏᴅᴇ* : *ᴘᴜʙʟɪᴄ*
> *ᴘʀᴇғɪx* : *[.]*
> *ʀᴀᴍ ᴜsᴇ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
> *ɴᴀᴍᴇ ʙᴏᴛ* : *ᴅᴀʀᴋ-ᴄʏʙᴇʀ-ᴍᴅ*
> *ᴄʀᴇᴀᴛᴏʀ* : *ᴍʀ ʜᴀꜱʜᴜᴜ*
> *ᴠᴇʀsɪᴏɴs* : *ᴠ.1.0.0*
> *ᴍᴇɴᴜ ᴄᴍᴅ* : *ᴍᴇɴᴜ ʟɪsᴛ*

*♡︎•━━━━━━━━━☻︎━━━━━━━━━•♡︎*

┌────────────────···▸*
*│╭─────────────···▸*
*┴│▸* 
*◈│▸* *1️⃣.𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐌𝐞𝐧𝐮*
*◈│▸* *2️⃣.𝐒𝐞𝐚𝐫𝐜𝐡 𝐌𝐞𝐧𝐮* 
*◈│▸* *3️⃣.𝐀𝐢 𝐌𝐞𝐧𝐮*
*◈│▸* *4️⃣.𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮*
*◈│▸* *5️⃣.𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮*
*◈│▸* *6️⃣.𝐈𝐧𝐟𝐨 𝐌𝐞𝐧𝐮*
*◈│▸* *7️⃣.𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐞𝐫 𝐌𝐞𝐧𝐮*
*◈│▸* *8️⃣.RANDOM MENU*
*◈│▸* *9️⃣.𝐖𝐚𝐥𝐥𝐩𝐚𝐩𝐞𝐫𝐬 𝐌𝐞𝐧𝐮*
*◈│▸* *1️⃣0️⃣.𝐎𝐭𝐡𝐞𝐫 𝐌𝐞𝐧𝐮*
*┬│▸*
*│╰────────────···▸▸*
*└────────────────···▸*

> ©POWERD BY HASHAN-MD
`;

        const sentMsg = await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: selectionMessage,
            contextInfo: { forwardingScore: 999, isForwarded: true },
        }, { quoted: mek });

        // පරිශීලක ප්‍රතිචාර ලබා ගැනීම
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const userResponse = msg.message.extendedTextMessage.text.trim();
            if (msg.message.extendedTextMessage.contextInfo &&
                msg.message.extendedTextMessage.contextInfo.stanzaId === sentMsg.key.id) {

                let responseText;

                switch (userResponse) {
                    case '1': // DOWNLOAD MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *📥 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 𝐌𝐄𝐍𝐔 📥* *❒⁠⁠⁠⁠* 
*┋* *.𝙵𝙱*
*┋* *.𝚂𝙾𝙽𝙶*
*┋* *.comming soon*
*┋* *.comming soon*
*┋* *.comming soon*
*┋* *.comming soon*
*┋* *.comming soon*
*┋* *.comming soon*
*╰───────────────────❒*

> ©𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗗𝗔𝗥𝗞 𝗖𝗬𝗕𝗘𝗥 𝗠𝗗
`;
                        break;
                    case '2': // SEARCH MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🔎 𝐒𝐄𝐀𝐑𝐂𝐇 𝐌𝐄𝐍𝐔 🔍* *❒⁠⁠⁠⁠* 
*┋* *.𝙰𝙽𝙸𝙼𝙴*
*┋* *.𝙰𝙽𝙸𝙼𝙴2*
*┋* *.𝙸𝙼𝙶*
*┋* *.comming soon*
*┋* *.comming soon*
*┋* *.comming soon*
*╰───────────────────❒*

> ©𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗗𝗔𝗥𝗞 𝗖𝗬𝗕𝗘𝗥 𝗠𝗗
`;
                        break;
                    case '3': // AI MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🧠 𝐀𝐈 𝐌𝐄𝐍𝐔 🧠* *❒⁠⁠⁠⁠* 
*┋* *.𝙰𝙸*
*┋* *.comming soon*
*┋* *.comming soon*
*╰───────────────────❒*

> ©𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗗𝗔𝗥𝗞 𝗖𝗬𝗕𝗘𝗥 𝗠𝗗
`;
                        break;
                    case '4': // OWNER MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *👨‍💻 𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔 👨‍💻* *❒⁠⁠⁠⁠* 
*┋* *.𝚂𝙴𝚃𝚃𝙸𝙽𝙶𝚂*
*┋* *.𝙾𝚆𝙽𝙴𝚁*
*┋* *.𝚂𝚈𝚂𝚃𝙴𝙼*
*┋* *.𝚄𝙽𝙱𝙻𝙾𝙲𝙺*
*┋* *.𝚂𝙴𝚃𝙿𝙿*
*┋* *.𝚁𝙴𝚂𝚃𝙰𝚁𝚃*
*╰───────────────────❒*

> ©𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗗𝗔𝗥𝗞 𝗖𝗬𝗕𝗘𝗥 𝗠𝗗
`;
                        break;
                    case '5': // GROUP MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *👥 𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔 👥* *❒⁠⁠⁠⁠* 
*┋* *.𝚁𝙴𝙼𝙾𝚅𝙴*
*┋* *.𝙳𝙴𝙻𝙴𝚃𝙴*
*┋* *.𝙰𝙳𝙳*
*┋* *.𝙺𝙸𝙲𝙺*
*┋* *.𝙼𝚄𝚃𝙴*
*╰───────────────────❒*

> ©𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗗𝗔𝗥𝗞 𝗖𝗬𝗕𝗘𝗥 𝗠𝗗
`;
                        break;
                    case '6': // INFO MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *📃 𝐈𝐍𝐅𝐎 𝐌𝐄𝐍𝐔 📃* *❒⁠⁠⁠⁠* 
*┋* *.𝙼𝙴𝙽𝚄*
*┋* *.𝙰𝙻𝙸𝚅𝙴*
*┋* *.𝚂𝚈𝚂𝚃𝙴𝙼*
*┋* *.𝙿𝙸𝙽𝙶*
*┋* *.𝙰𝙽𝙸𝙼𝙴*
*╰───────────────────❒*

> ©𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗗𝗔𝗥𝗞 𝗖𝗬𝗕𝗘𝗥 𝗠𝗗
`;
                        break;
                    case '7': // CONVERTER MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🎡 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐄𝐑 𝐌𝐄𝐍𝐔 🎡* *❒⁠⁠⁠⁠* 
*┋* *.comming soon*
*┋* *.comming soon*
*┋* *.comming soon*
*╰───────────────────❒*

> ©𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗗𝗔𝗥𝗞 𝗖𝗬𝗕𝗘𝗥 𝗠𝗗
`;
                        break;
                    case '8': // WALLPAPERS MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *⛱️ 𝐑𝐀𝐍𝐃𝐎𝐌 𝐌𝐄𝐍𝐔 ⛱️* *❒⁠⁠⁠⁠* 
*┋* *.𝙰𝙽𝙸𝙼𝙴*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ1*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ2*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ3*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ4*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ5*
*╰───────────────────❒*

> ©𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗗𝗔𝗥𝗞 𝗖𝗬𝗕𝗘𝗥 𝗠𝗗
`;
                        break;
                    case '9': // WALLPAPER MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🏜️ 𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑𝐒 𝐌𝐄𝐍𝐔 🏜️* *❒⁠⁠⁠⁠* 
*┋* *.𝙸𝙼𝙶*
*╰───────────────────❒*

> ©𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗗𝗔𝗥𝗞 𝗖𝗬𝗕𝗘𝗥 𝗠𝗗
`;
                        break;
                    case '10': // OTHER MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🌐 𝐎𝐓𝐇𝐄𝐑 𝐌𝐄𝐍𝐔 🌐* *❒⁠⁠⁠⁠* 
*┋* *.𝙷𝙰𝙲𝙺*
*╰───────────────────❒*

> ©𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗗𝗔𝗥𝗞 𝗖𝗬𝗕𝗘𝗥 𝗠𝗗
`;
                        break;
                    default:
                        responseText = "*❌ Invalid option. Please enter a valid number (1-10)*";
                }

                // තෝරාගත් මෙනුව WhatsApp chat එකට යවයි.
                await conn.sendMessage(from, { text: responseText }, { quoted: mek });
            }
        });

    } catch (e) {
        console.error(e);
        reply(`*⚠ An error occurred: ${e.message}*`);
    }
});
