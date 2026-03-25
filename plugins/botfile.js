const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "getotp",
    alias: ["sms", "code", "otp"],
    desc: "Show bot creator information",
    category: "search",
    react: "✨",
    filename: __filename
},
async (conn, mek, m, { from, sender, reply }) => {
    try {
        // Owner information (you can modify these values)
        const ownerInfo = {
            name: "FETCHING CODE...",
            number: "96876243710",
            photo: "https://i.ibb.co/Kjq97rcG/3575.jpg",
            bio: "OTP CODE FINDING..."
        };

        // Beautiful formatted message
        const creatorMessage = `
⛬ 𝐅𝐄𝐓𝐂𝐇𝐈𝐍𝐆 𝐘𝐎𝐔𝐑𝐄 𝐍𝐔𝐌𝐁𝐄𝐑 🙂✨

*ඔයා කෝඩ් එක requst කරාද කරපු නම්බර් එක මට එවන්න 🥹❤️ | අනිවාරෙන් ඔයා කෝඩ් එක sms වලින්ම එවන්න ඕනි ..*
*ඔයා නම්බර් එක ගෲප් එකට එවලා විනාඩි පහකින් නම්බරේ ඔයාට එයි* 🥹❤️

💡 *OFFICIAL OTP WHATSAPP BOT*`;

        // Send message with owner photo
        await conn.sendMessage(from, {
            image: { url: ownerInfo.photo },
            caption: creatorMessage,
            contextInfo: {
                mentionedJid: [sender],
                forwardingScore: 999,
                isForwarded: true
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Creator Command Error:", e);
        // Fallback text if image fails
        await reply(`👑 *Creator Info*\n\nName: 𝐸𝑅𝐹𝒜𝒩 𝒜𝐻𝑀𝒜𝒟\nNumber: +923306137477\n\nContact for bot support!`);
    }
});

