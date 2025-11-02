const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "Auto reply to command",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    
await conn.sendMessage(from,{image: {url: `https://files.catbox.moe/l06cb8.jpg`},caption: `*COMMAND LIST ❤️‍🔥*`},{quoted: mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
