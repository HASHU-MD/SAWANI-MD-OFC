// plugins/numbers.js
const axios = require('axios');
const { cmd } = require("../command");
const config = require('../config');

const ALLOWED_GROUP = config.ALLOWED_GROUP || '120363404507393196@g.us'; // OTP forward group
const POLL_INTERVAL = 3000; // 3 sec
const watchers = new Map(); // groupId -> watcher

const FOOTER = `\n────────────────────\n> ✨ Powered by *MUZAAMIL-X-ARSLAN-MD* ✨\n* 🌐 *~_https://github.com/Arslan-MD/Arslan_MD_~*`;

cmd({
  pattern: 'numbers',
  desc: 'Get live numbers by country code',
  category: 'main',
  react: '📱',
  public: true,
  filename: __filename
}, async (Void, m, text, { args }) => {
  try {
    const countryCode = args[0]?.replace(/\D/g,''); // remove non-digit characters

    if(!countryCode) return await m.reply('❌ Please provide a country code. Example: .numbers 93');

    const res = await axios.get('https://arslan-md-otp-api.vercel.app/api/numbers');

    // Filter numbers by country code
    const filteredNumbers = res.data?.data?.aaData?.filter(n => {
      const num = n[2]?.replace(/\D/g,''); // only digits
      return num?.startsWith(countryCode);
    }) || [];

    if(filteredNumbers.length === 0) return await m.reply(`❌ No numbers found for country code ${countryCode}`);

    // Prepare message
    let msg = `📱 Live Numbers for country code ${countryCode}:\n`;
    filteredNumbers.forEach(n => {
      const number = n[2]?.trim();
      const country = n[0]?.trim();
      const plan = n[3]?.trim();
      const price = n[4]?.trim();
      msg += `• ${number} (${country} - ${plan} - ${price})\n`;
    });

    await Void.sendMessage(m.chat, { text: msg + FOOTER });

    // Start OTP watcher only in allowed group
    if (m.chat === ALLOWED_GROUP && !watchers.has(m.chat)) startWatcher(m.chat, Void);

  } catch(e) {
    console.error('Numbers error:', e);
    await m.reply('❌ Error fetching numbers.');
  }
});

function startWatcher(groupId, Void) {
  if (watchers.has(groupId)) return;

  const seen = new Set();
  const interval = setInterval(async () => {
    try {
      const res = await axios.get('https://arslan-md-otp-api.vercel.app/api/sms?iDisplayLength=10000');
      const smsList = res.data?.data?.aaData?.map(r => ({
        id: `${r[2]}_${r[0]}`,
        phone: r[2],
        message: r[4],
        timestamp: r[0]
      })) || [];

      for (const sms of smsList) {
        if (seen.has(sms.id)) continue;
        seen.add(sms.id);

        await Void.sendMessage(groupId, {
          text: `📨 *New OTP Received*\n• Number: ${sms.phone}\n• Message: ${sms.message}\n• Time: ${sms.timestamp}${FOOTER}`
        });
      }
    } catch(e){ console.error('Watcher error', e); }
  }, POLL_INTERVAL);

  watchers.set(groupId, { interval, seen });
}
