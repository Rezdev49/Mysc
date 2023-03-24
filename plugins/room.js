import fs from 'fs'
import fetch from 'node-fetch'

let handler = async(m) => {
let motivasii = pickRandom(global.motivasi)
    await conn.reply(m.chat, motivasii, 0, {
    contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: `https://instagram.com/rezdev499`,
    mediaType: 2,
    title: 'My room', 
    body: 'my room',  
    sourceUrl: sgc, 
    thumbnail: fs.readFileSync('./thumbnail.jpg')
      }}
     })
}
handler.help = ['room']
handler.tags = ['main']
handler.command = /^(room)$/i

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.motivasi = [
`Masuk ke grup kami untuk mendapatkan info tentang bot lebih lanjut

Contohnya ketika
•update
•error
•perbaikan
•dll`
]