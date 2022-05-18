let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
const sections = [
{
title: `𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐎𝐏𝐂𝐈𝐎𝐍𝐄𝐒`,
rows: [
{title: "💟 | 𝙂𝙍𝙐𝙋𝙊𝙎", description: "", rowId: `${usedPrefix}grupos`},
{title: "💟 | 𝙀𝙎𝙏𝘼𝘿𝙊", description: "", rowId: `${usedPrefix}estado`},
{title: "💟 | 𝙄𝙉𝙁𝙊𝘽𝙊𝙏", description: "", rowId: `${usedPrefix + command}infobot`},
{title: "💟 | 𝘿𝙊𝙉𝘼𝙍", description: "", rowId: `${usedPrefix}donar`},   
{title: "💟 | 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙂𝙍𝙐𝙋𝙊𝙎", description: "", rowId: `${usedPrefix}grouplist`},    
{title: "💟 | 𝙊𝙒𝙉𝙀𝙍", description: "", rowId: `${usedPrefix}owner`},      
{title: "💟 | 𝙎𝘾𝙍𝙄𝙋", description: "", rowId: `${usedPrefix}script`},    
{title: "🎖️ | 𝙈𝘼𝙏𝙀𝙎", description: "", rowId: `${usedPrefix}mates`},
{title: "🎖️ | 𝙋𝙋𝙏", description: "", rowId: `${usedPrefix}ppt`},
{title: "🎖️ | 𝙋𝙍𝙊𝙎𝙏𝙄𝙏𝙐𝙏𝙊", description: "", rowId: `${usedPrefix}prostituto`},
{title: "🎖️ | 𝙋𝙍𝙊𝙎𝙏𝙄𝙏𝙐𝙏𝘼", description: "", rowId: `${usedPrefix}prostituta`},
{title: "🎖️ | 𝙂𝘼𝙔2", description: "", rowId: `${usedPrefix}gay2`},
{title: "🎖️ | 𝙇𝙀𝙎𝘽𝙄𝘼𝙉𝘼", description: "", rowId: `${usedPrefix}lesbiana`},
{title: "🎖️ | 𝙋𝘼𝙅𝙀𝙍𝙊", description: "", rowId: `${usedPrefix}pajero`},
{title: "🎖️ | 𝙋𝘼𝙅𝙀𝙍𝘼", description: "", rowId: `${usedPrefix}pajera`},
{title: "🎖️ | 𝙋𝙐𝙏𝙊", description: "", rowId: `${usedPrefix}puto`},
{title: "🎖️ | 𝙋𝙐𝙏𝘼", description: "", rowId: `${usedPrefix}puta`},
{title: "🎖️ | 𝙈𝘼𝙉𝘾𝙊", description: "", rowId: `${usedPrefix}manco`},
{title: "🎖️ | 𝙈𝘼𝙉𝘾𝘼", description: "", rowId: `${usedPrefix}manca`},
{title: "🎖️ | 𝙍𝘼𝙏𝘼", description: "", rowId: `${usedPrefix}rata`},
{title: "🎖️ | 𝙇𝙊𝙑𝙀", description: "", rowId: `${usedPrefix}love`},
{title: "🎖️ | 𝘿𝙊𝙓𝙀𝘼𝙍", description: "", rowId: `${usedPrefix}doxear`},
{title: "🎖️ | 𝙋𝙍𝙀𝙂𝙐𝙉𝙏𝘼", description: "", rowId: `${usedPrefix}pregunta`},
{title: "🎖️ | 𝙎𝙇𝙊𝙏", description: "", rowId: `${usedPrefix}slot`},
{title: "🎖️ | 𝑺𝑰𝑴𝑰", description: "", rowId: `${usedPrefix}simi`},
{title: "🎖️ | 𝙏𝙊𝙋𝙂𝘼𝙔𝙎", description: "", rowId: `${usedPrefix}topgays`},
{title: "🎖️ | 𝙏𝙊𝙋𝙊𝙏𝘼𝙆𝙐𝙎", description: "", rowId: `${usedPrefix}topotakus`},  
{title: "🎖️ | 𝙁𝙊𝙍𝙈𝘼𝙍 𝙋𝘼𝙍𝙀𝙅𝘼", description: "", rowId: `${usedPrefix}formarpareja`},
{title: "🎖️ | 𝙍𝙀𝙏𝙊", description: "", rowId: `${usedPrefix}reto`},
{title: "☑️ | 𝙀𝙉𝘼𝘽𝙇𝙀", description: "", rowId: `${usedPrefix}enable`},
{title: "☑️ | 𝘿𝙄𝙎𝘼𝘽𝙇𝙀", description: "", rowId: `${usedPrefix}disable`},
{title: "📥 | 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆", description: "", rowId: `${usedPrefix}facebook`},
{title: "📥 | 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈", description: "", rowId: `${usedPrefix}instagram`},
{title: "📥 | 𝙈𝙀𝘿𝘼𝙁𝙄𝙍𝙀", description: "", rowId: `${usedPrefix}mediafire`},
{title: "📥 | 𝙂𝙄𝙏𝘾𝙇𝙊𝙉𝙀", description: "", rowId: `${usedPrefix}gitclone`},
{title: "📥 | 𝙏𝙄𝙆𝙏𝙊𝙆", description: "", rowId: `${usedPrefix}tiktok`},
{title: "📥 | 𝙔𝙏𝙈3", description: "", rowId: `${usedPrefix}ytmp3`},
{title: "📥 | 𝙔𝙏𝙈4", description: "", rowId: `${usedPrefix}ytmp4`},
{title: "📥 | 𝙋𝙇𝘼𝙔.1", description: "", rowId: `${usedPrefix}play.1`},
{title: "📥 | 𝙋𝙇𝘼𝙔.2", description: "", rowId: `${usedPrefix}play.2`},
{title: "📥 | 𝙋𝙇𝘼𝙔", description: "", rowId: `${usedPrefix}play`},
{title: "📥 | 𝙎𝙋𝙊𝙏𝙄𝙁𝙔", description: "", rowId: `${usedPrefix}spotify`},
{title: "📥 | 𝙄𝙈𝘼𝙂𝙀𝙉", description: "", rowId: `${usedPrefix}imagen`},
{title: "📥 | 𝙋𝙄𝙉𝙏𝙀𝙍𝙀𝙏", description: "", rowId: `${usedPrefix}pinteret`},
{title: "📥 | 𝙒𝘼𝙇𝙇𝙋𝘼𝙋𝙀𝙍", description: "", rowId: `${usedPrefix}wallpaper`},
{title: "📥 | 𝙒𝘼𝙇𝙇𝙋𝘼𝙋𝙀𝙍2", description: "", rowId: `${usedPrefix}wallpaper2`},
{title: "📥 | 𝙋𝙋𝙏𝙄𝙆𝙏𝙊𝙆", description: "", rowId: `${usedPrefix}pptiktok`},
{title: "📥 | 𝙄𝙂𝙎𝙏𝘼𝙇𝙆", description: "", rowId: `${usedPrefix}igstalk`},
{title: "📥 | 𝙏𝙄𝙆𝙏𝙊𝙆𝙎𝙏𝘼𝙇𝙆", description: "", rowId: `${usedPrefix}tiktokstalk`},
{title: "💎 | 𝘼𝘿𝘿", description: "", rowId: `${usedPrefix}add`},
{title: "💎 | 𝙆𝙄𝘾𝙆", description: "", rowId: `${usedPrefix}kick`},
{title: "💎 | 𝙂𝙍𝙐𝙋𝙊", description: "", rowId: `${usedPrefix}grupo`},
{title: "💎 | 𝙋𝙍𝙊𝙈𝙊𝙏𝙀", description: "", rowId: `${usedPrefix}promote`},
{title: "💎 | 𝘿𝙀𝙈𝙊𝙏𝙀", description: "", rowId: `${usedPrefix}demote`},
{title: "💎 | 𝘽𝘼𝙉𝘾𝙃𝘼𝙏", description: "", rowId: `${usedPrefix}banchat`},
{title: "💎 | 𝙐𝙉𝘽𝘼𝙉𝘾𝙃𝘼𝙏", description: "", rowId: `${usedPrefix}unbanchat`},
{title: "💎 | 𝙄𝙉𝙁𝙊𝙂𝙍𝙐𝙋𝙊", description: "", rowId: `${usedPrefix}infogroup`},
{title: "💎 | 𝙇𝙄𝙉𝙆", description: "", rowId: `${usedPrefix}link`},
{title: "💎 | 𝙎𝙀𝙏𝙉𝘼𝙈𝙀", description: "", rowId: `${usedPrefix}setname`},
{title: "💎 | 𝙎𝙀𝙏𝘿𝙀𝙎𝘾", description: "", rowId: `${usedPrefix}setdesc`},
{title: "💎 | 𝙄𝙉𝙑𝙊𝘾𝘼𝙍", description: "", rowId: `${usedPrefix}invocar`},
{title: "💎 | 𝙎𝙀𝙏𝙒𝙀𝙇𝘾𝙊𝙈𝙀", description: "", rowId: `${usedPrefix}setwelcome`},
{title: "💎 | 𝙎𝙀𝙏𝘽𝙔𝙀", description: "", rowId: `${usedPrefix}setbye`},
{title: "💎 | 𝙃𝙄𝘿𝙀𝙏𝘼𝙂", description: "", rowId: `${usedPrefix}hidetag`},
{title: "💎 | 𝙎𝙄𝙈𝙐𝙇𝘼𝙍", description: "", rowId: `${usedPrefix}simular`},
{title: "🧧 | 𝙏𝙊𝙄𝙈𝙂", description: "", rowId: `${usedPrefix}toimg`},
{title: "🧧 | 𝙏𝙊𝙈𝙋3", description: "", rowId: `${usedPrefix}tomp3`},
{title: "🧧 | ", description: "", rowId: `${usedPrefix}toptt`},
{title: "🧧 | 𝙏𝙊𝙑𝙄𝘿𝙀𝙊", description: "", rowId: `${usedPrefix}tovideo`},
{title: "🧧 | ", description: "", rowId: `${usedPrefix}tourl`},
{title: "🧧 | ", description: "", rowId: `${usedPrefix}tts`},
{title: "🖍️ | ", description: "", rowId: `${usedPrefix}logos`},
{title: "🖍️ | ", description: "", rowId: `${usedPrefix}simpcard`},
{title: "🖍️ | ", description: "", rowId: `${usedPrefix}hornycard`},
{title: "🖍️ | ", description: "", rowId: `${usedPrefix}lolice`},
{title: "🖍️ | ", description: "", rowId: `${usedPrefix}ytcomment`},
{title: "🖍️ | ", description: "", rowId: `${usedPrefix}itssostupid`},
{title: "🖍️ | ", description: "", rowId: `${usedPrefix}pixel`},
{title: "🖍️ | ", description: "", rowId: `${usedPrefix}blur`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}cristianoronaldo`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}messi`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}meme`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}itzy`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}blackpink`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}kpop bts`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}kpop exo`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}kpop blackpink`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}lolivid`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}loli`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}navidad`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}ppcouple`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}neko`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}waifu`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}akira`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}akiyama`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}anna`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}asuna`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}ayuzawa`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}boruto`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}chiho`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}chitoge`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}deidara`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}erza`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}elaina`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}eba`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}emilia`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}hestia`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}hinata`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}inori`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}isuzu`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}itachi`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}itori`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}kaga`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}kagura`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}kaori`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}keneki`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}kotori`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}kurumi`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}madara`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}mikasa`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}miku`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}minato`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}naruto`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}nezuko`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}sagiri`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}sasuke`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}sakura`},
{title: "👾 | ", description: "", rowId: `${usedPrefix}cosplay`},
{title: "🔊 | ", description: "", rowId: `${usedPrefix}menu2`},
]}, ]
let name = await conn.getName(m.sender)
const listMessage = {
text: ' ',
footer: `╭══〘 ✯✯✯✯✯✯✯✯ 〙═╮
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ *✨𝐇𝐎𝐋𝐀, ${name}!!*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
╰══╡✯✯✯✯✯✯✯✯╞══╯
┏━━━━━━━━━━━━━┓
┣❧ *𝚂𝙴𝙻𝙴𝙲𝙲𝙸𝙾𝙽𝙰 𝚄𝙽𝙰 𝙳𝙴 𝙻𝙰𝚂 𝙾𝙲𝙿𝙸𝙾𝙽𝙴𝚂 𝚀𝚄𝙴 𝚂𝙰𝙻𝙴𝙽 𝙴𝙽 𝙻𝙰 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 𝙻𝙸𝚂𝚃𝙰 𝙾 𝙳𝙰 𝙲𝙻𝙸𝙲𝙺 𝙴𝙽 𝙰𝙻𝙶𝚄𝙽 𝙱𝙾𝚃𝙾𝙽 𝙳𝙴 𝙴𝚂𝚃𝙴 𝙼𝙴𝙽𝚂𝙰𝙹𝙴*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟ℹ️ ᴇʟ ᴍᴇɴᴜ ᴀᴜɴ ɴᴏ ᴇꜱᴛᴀ ᴀᴄᴀʙᴀᴅᴏ ʟᴇ ꜰᴀʟᴛᴀ ᴄᴏᴍᴀɴᴅᴏꜱ
┗━━━━━━━━━━━━━┛
${author}`,
title: null,
buttonText: "𝐒𝐄𝐋𝐄𝐂𝐂𝐈𝐎𝐍𝐄 𝐀𝐐𝐔𝐢",
sections }

let isEnable = /true|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'welcome':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
case 'detect':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
case 'antidelete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
case 'public':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
case 'antilink':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
case 'antilink2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
case 'modohorny':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
break
case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
case 'restrict':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
case 'autoread':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['autoread'] = isEnable
break
case 'pconly':
case 'privateonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
case 'gconly':
case 'grouponly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
default:
if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
throw false
}
conn.sendButton(m.chat, `🗂️ 𝐎𝐏𝐂𝐈𝐎𝐍: ${type} 
🎚️ 𝐄𝐒𝐓𝐀𝐃𝐎: ${isEnable ? '𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾' : '𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾'}
📣 𝐏𝐀𝐑𝐀: ${isAll ? '𝙴𝚂𝚃𝙴 𝙱𝙾𝚃' : isUser ? '' : '𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃'}`, author, null, [[`${isEnable ? '✖️ 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 ✖️' : '✔️ 𝙰𝙲𝚃𝙸𝚅𝙰𝚁 ✔️'}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`], ['👾 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻 👾', '.menu']],m)}

handler.help = ['menu3', 'help3', '?3']
handler.tags = ['main']
handler.command = /^(menucompleto3|menu3|menú3|memu3|memú3|\?3)$/i
handler.exp = 50
handler.fail = null
export default handler
