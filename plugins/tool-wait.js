import uploadImage from '../lib/uploadImage.js'

import fetch from 'node-fetch'

var handler = async (m, { conn }) => {
   let q = m.quoted ? m.quoted : m
   let mime = (q.msg || q).mimetype || ''
   if (!/image\/(jpe?g|png)/.test(mime)) return m.reply('Responde a una Imagen.')
   let img = await q.download?.()
   let url = await uploadImage(img)
   let res = await fetch(`https://api.trace.moe/search?anilistInfo&url=${url}`)
   let json = await res.json()
   let result = json.result[0]
   let txt = `*乂  W H A T  -  A N I M E*\n\n`
      txt += `	◦  *Titulo* : ${result.anilist.title.romaji}\n`
      txt += `	◦  *Id* : ${result.anilist.id}\n`
      txt += `	◦  *Similitud* : ${(result.similarity * 100).toFixed(1)}%\n`
      txt += `	◦  *Episodio* : ${result.episode.toString() || '×'}\n`
      txt += `	◦  *Ecchi* : ${result.anilist.isAdult ? 'Si' : 'No'}\n`
   await conn.sendFile(m.chat, result.video, result.filename, txt, m)
}

handler.help = ['whatanime']
handler.tags = ['tool']
handler.command = /^(whatanime|wait)$/i

export default handler