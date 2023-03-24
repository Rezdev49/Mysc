import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }) 
let _uptime = process.uptime() * 1000
let datcov = await fetch('https://latam-api.vercel.app/api/covid19?apikey=nekosmic&q=world');
	let CovidApi = await datcov.json();
	var cotext = `Rayリム`
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

let pp = './Menu2.jpg'
wm = cotext
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
 
const sections = [
{
title: `GAME LIST`,
rows: [
      {title: "Tebak game", description: 'tebak game ini yok', rowId: `.tebakgame`},
      {title: "Tebak lagu", description: 'tebak lagu ini', rowId: `.tebaklagu`},
      {title: "Teka teki", description: 'Pecahkan tekateki ini', rowId: `.tekateki`},
      {title: "Tebak kata", description: 'tebak maksud katakata ini', rowId: `.tebakkata`},
      {title: "Asah Otak", description: 'Game asah adu kecerdasan', rowId: `.asahotak`},
      {title: "Tebak anime", description: 'tebak anime ini yok', rowId: `.tebakanime`},
      {title: "Tebak gambar", description: 'Tebak arti dari gambar ini', rowId: `.tebakgambar`},
      {title: "Family100", description: 'Jawab soal soal ini bersama sama', rowId: `.family100`},
      {title: "Cak Lontong", description: 'Game jebakan yg di luar nalar', rowId: `.caklontong`},
      {title: "Lengkapi Kalimat", description: 'Melengkapi kalimat ', rowId: `.lengkapikalimat`},
      {title: "Tictactoe", description: 'Main tictactoe bareng teman', rowId: `.ttt`},
      {title: "Tebak lirik", description: 'Tebak lirik lagu ini >\\<', rowId: `.tebaklirik`},
      {title: "Math", description: 'Soal tentang perhitungan', rowId: `.math`},
      {title: "Siapakah aku?️", description: 'Coba tebak siapa aku >\\<', rowId: `.siapakahaku`},
 	]
    },
    {
        title: "Donasi",
	rows: [    
	      {title: "Sewa?", description: 'Donasi atau sewa bot', rowId: `${usedPrefix}donasi`},
                ]
	        },
    {
        title: "Info bot",
	rows: [    
	      {title: "Info bot", description: 'Informasi bot Bot', rowId: `${usedPrefix}botinfo`},
	       	]
                },
	    {
	title: "Developer",
	rows: [
                {title: "Rezdev.", description: 'Pengembang bot', rowId: `${usedPrefix}owner`},
]}, ]
let name = await conn.getName(m.sender)
const listMessage = {
text: `Hai kak silahkan pilih list game nya`, footer: `${wm}`, pp,
title: null,
buttonText: "Pilih game nya kak (≧▽≦*)", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['game']
handler.tags = ['info']
handler.command = /^(listgame|permainan|game)$/i
handler.exp = 50
handler.register = false
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}