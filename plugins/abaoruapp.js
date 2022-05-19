let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
const sections = [
{
title: `★𝚃𝚑𝚎 𝙼𝚢𝚜𝚝𝚒𝚌 - 𝙱𝚘𝚝★`,
rows: [
{title: "💟 | 𝙂𝙍𝙐𝙋𝙊𝙎", description: "ɢʀᴜᴘᴏꜱ ᴏꜰᴄ ᴅᴇʟ ʙᴏᴛ", rowId: `${usedPrefix}grupos`},
{title: "💟 | 𝙀𝙎𝙏𝘼𝘿𝙊", description: "ᴇꜱᴛᴀᴅᴏ ᴅᴇʟ ʙᴏᴛ", rowId: `${usedPrefix}estado`},
{title: "💟 | 𝙄𝙉𝙁𝙊𝘽𝙊𝙏", description: "ɪᴍꜰᴏʀᴍᴀᴄɪᴏ ꜱᴏʙʀᴇ ᴇʟ ʙᴏᴛ", rowId: `${usedPrefix + command}infobot`},
{title: "💟 | 𝘿𝙊𝙉𝘼𝙍", description: "ɪᴍꜰᴏʀᴍᴀᴄɪᴏɴ ꜱᴏʙʀᴇ ᴅᴏɴᴀᴄɪᴏɴᴇꜱ", rowId: `${usedPrefix}donar`},   
{title: "💟 | 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙂𝙍𝙐𝙋𝙊𝙎", description: "ɢʀᴜᴘᴏꜱ ᴅᴏɴᴅᴇ ᴇꜱᴛᴀ ᴇʟ ʙᴏᴛ", rowId: `${usedPrefix}grouplist`},    
{title: "💟 | 𝙊𝙒𝙉𝙀𝙍", description: "ᴇʟ ᴄʀᴇᴀᴅᴏʀ ᴅᴇʟ ʙᴏᴛ", rowId: `${usedPrefix}owner`},      
{title: "💟 | 𝙎𝘾𝙍𝙄𝙋", description: "ꜱᴄʀɪᴘ ᴅᴇʟ ʙᴏᴛ", rowId: `${usedPrefix}script`},    
{title: "🎖️ | 𝙈𝘼𝙏𝙀𝙎", description: "ᴊᴜᴇɢᴏ ᴍᴀᴛᴇᴍᴀᴛɪᴄᴏ", rowId: `${usedPrefix}mates`},
{title: "🎖️ | 𝙋𝙋𝙏", description: "ᴊᴜᴇɢᴏ ᴄʟᴀꜱɪᴄᴏ ᴘɪᴇᴅʀᴀ ᴘᴀʟᴘᴇʟ ᴛɪᴊᴇʀᴀ ᴄᴏɴ ᴇʟ ʙᴏᴛ", rowId: `${usedPrefix}ppt`},
{title: "🎖️ | 𝙋𝙍𝙊𝙎𝙏𝙄𝙏𝙐𝙏𝙊", description: "ᴄᴀʟᴄᴜʟᴀɴᴅᴏ ᴇʟ ᴘᴏʀᴄᴇɴᴛᴀᴊᴇ ᴅᴇ ᴘʀᴏꜱᴛɪᴛᴜᴛᴏ Qᴜᴇ ᴛɪᴇɴᴇ", rowId: `${usedPrefix}prostituto`},
{title: "🎖️ | 𝙋𝙍𝙊𝙎𝙏𝙄𝙏𝙐𝙏𝘼", description: "ᴄᴀʟᴄᴜʟᴀɴᴅᴏ ᴇʟ ᴘᴏʀᴄᴇɴᴛᴀᴊᴇ ᴅᴇ ᴘʀᴏꜱᴛɪᴛᴜᴛᴀ Qᴜᴇ ᴛɪᴇɴᴇ", rowId: `${usedPrefix}prostituta`},
{title: "🎖️ | 𝙂𝘼𝙔2", description: "ᴄᴀʟᴄᴜʟᴀɴᴅᴏ ᴇʟ ᴘᴏʀᴄᴇɴᴛᴀᴊᴇ ᴅᴇ ɢᴀʏ Qᴜᴇ ᴛɪᴇɴᴇ", rowId: `${usedPrefix}gay2`},
{title: "🎖️ | 𝙇𝙀𝙎𝘽𝙄𝘼𝙉𝘼", description: "ᴄᴀʟᴄᴜʟᴀɴᴅᴏ ᴇʟ ᴘᴏʀᴄᴇɴᴛᴀᴊᴇ ᴅᴇ ʟᴇꜱʙɪᴀɴᴀ Qᴜᴇ ᴛɪᴇɴᴇ", rowId: `${usedPrefix}lesbiana`},
{title: "🎖️ | 𝙋𝘼𝙅𝙀𝙍𝙊", description: "ᴄᴀʟᴄᴜʟᴀɴᴅᴏ ᴇʟ ᴘᴏʀᴄᴇɴᴛᴀᴊᴇ ᴅᴇ ᴘᴀᴊᴇʀᴏ Qᴜᴇ ᴛɪᴇɴᴇ", rowId: `${usedPrefix}pajero`},
{title: "🎖️ | 𝙋𝘼𝙅𝙀𝙍𝘼", description: "ᴄᴀʟᴄᴜʟᴀɴᴅᴏ ᴇʟ ᴘᴏʀᴄᴇɴᴛᴀᴊᴇ ᴅᴇ ᴘᴀᴊᴇʀᴀ Qᴜᴇ ᴛɪᴇɴᴇ", rowId: `${usedPrefix}pajera`},
{title: "🎖️ | 𝙋𝙐𝙏𝙊", description: "ᴄᴀʟᴄᴜʟᴀɴᴅᴏ ᴇʟ ᴘᴏʀᴄᴇɴᴛᴀᴊᴇ ᴅᴇ ᴘᴜᴛᴏ Qᴜᴇ ᴛɪᴇɴᴇ", rowId: `${usedPrefix}puto`},
{title: "🎖️ | 𝙋𝙐𝙏𝘼", description: "ᴄᴀʟᴄᴜʟᴀɴᴅᴏ ᴇʟ ᴘᴏʀᴄᴇɴᴛᴀᴊᴇ ᴅᴇ ᴘᴜᴛᴀ Qᴜᴇ ᴛɪᴇɴᴇ", rowId: `${usedPrefix}puta`},
{title: "🎖️ | 𝙈𝘼𝙉𝘾𝙊", description: "ᴄᴀʟᴄᴜʟᴀɴᴅᴏ ᴇʟ ᴘᴏʀᴄᴇɴᴛᴀᴊᴇ ᴅᴇ ᴍᴀɴᴄᴏ Qᴜᴇ ᴛɪᴇɴᴇ", rowId: `${usedPrefix}manco`},
{title: "🎖️ | 𝙈𝘼𝙉𝘾𝘼", description: "ᴄᴀʟᴄᴜʟᴀɴᴅᴏ ᴇʟ ᴘᴏʀᴄᴇɴᴛᴀᴊᴇ ᴅᴇ ᴍᴀɴᴄᴀ Qᴜᴇ ᴛɪᴇɴᴇ", rowId: `${usedPrefix}manca`},
{title: "🎖️ | 𝙍𝘼𝙏𝘼", description: "ᴄᴀʟᴄᴜʟᴀɴᴅᴏ ᴇʟ ᴘᴏʀᴄᴇɴᴛᴀᴊᴇ ᴅᴇ ʀᴀᴛᴀ Qᴜᴇ ᴛɪᴇɴᴇ", rowId: `${usedPrefix}rata`},
{title: "🎖️ | 𝙇𝙊𝙑𝙀", description: "ᴍᴇᴅɪᴅᴏʀ ᴅᴇ ᴀᴍᴏʀ", rowId: `${usedPrefix}love`},
{title: "🎖️ | 𝘿𝙊𝙓𝙀𝘼𝙍", description: "ᴅᴏxᴇᴀʀ ᴀ ᴀʟɢᴜɪᴇɴ", rowId: `${usedPrefix}doxear`},
{title: "🎖️ | 𝙋𝙑𝙋", description: "ᴊᴜᴇɢᴏ ᴄʟᴀꜱɪᴄᴏ ᴘɪᴇᴅʀᴀ ᴘᴀʟᴘᴇʟ ᴛɪᴊᴇʀᴀ", rowId: `${usedPrefix}PVP`},
{title: "🎖️ | 𝙋𝙍𝙀𝙂𝙐𝙉𝙏𝘼", description: "ᴘʀᴇɢᴜɴᴛᴀʟᴇ ᴀʟɢᴏ ᴀʟ ʙᴏᴛ", rowId: `${usedPrefix}pregunta`},
{title: "🎖️ | 𝙎𝙇𝙊𝙏", description: "ᴊᴜᴇɢᴏ ᴅᴇ ᴛʀᴀɢᴀᴍᴏɴᴇᴅᴀꜱ", rowId: `${usedPrefix}slot`},
{title: "🎖️ | 𝑺𝑰𝑴𝑰", description: "ᴘᴀʀᴀ ᴄᴏᴍᴠᴇʀꜱᴀʀ ᴄᴏɴ ᴇʟ ʙᴏᴛ", rowId: `${usedPrefix}simi`},
{title: "🎖️ | 𝙏𝙊𝙋𝙂𝘼𝙔𝙎", description: "Qᴜɪᴇɴᴇꜱ ꜱᴏɴ ʟᴏꜱ ᴍᴀꜱ ɢᴀʏꜱ ᴅᴇʟ ɢʀᴜᴘᴏ", rowId: `${usedPrefix}topgays`},
{title: "🎖️ | 𝙏𝙊𝙋𝙊𝙏𝘼𝙆𝙐𝙎", description: "Qᴜɪᴇɴᴇꜱ ꜱᴏɴ ʟᴏꜱ ᴍᴀꜱ ᴏᴛᴀᴋᴜꜱ ᴅᴇʟ ɢʀᴜᴘᴏ", rowId: `${usedPrefix}topotakus`},  
{title: "🎖️ | 𝙁𝙊𝙍𝙈𝘼𝙍 𝙋𝘼𝙍𝙀𝙅𝘼", description: "ꜰᴏᴍᴀʀ ᴘᴀʀᴇᴊᴀ ᴄᴏɴ ɪɴᴛᴇɢʀᴀɴᴛᴇꜱ ᴅᴇʟ ɢʀᴜᴘᴏ", rowId: `${usedPrefix}formarpareja`},
{title: "🎖️ | 𝙑𝙀𝙍𝘿𝘼𝘿", description: "ᴇʟ ʙᴏᴛ ᴛᴇ ʜᴀᴄᴇ ᴜɴᴀ ᴘʀᴇɢᴜɴᴛᴀ", rowId: `${usedPrefix}verdad`},
{title: "🎖️ | 𝙍𝙀𝙏𝙊", description: "ᴇʟ ʙᴏᴛ ᴛᴇ ʜᴀᴄᴇ ᴜɴ ʀᴇᴛᴏ", rowId: `${usedPrefix}reto`},
{title: "☑️ | 𝙀𝙉𝘼𝘽𝙇𝙀", description: "ᴀᴄᴛɪᴠᴀʀ ꜰᴜɴᴄɪᴏɴᴇꜱ ᴘᴀʀᴀ ᴇʟ ɢʀᴜᴘᴏ", rowId: `${usedPrefix}enable`},
{title: "☑️ | 𝘿𝙄𝙎𝘼𝘽𝙇𝙀", description: "ᴅᴇꜱᴀᴄᴛɪᴠᴀʀ ꜰᴜɴᴄɪᴏɴᴇꜱ ᴘᴀʀᴀ ᴇʟ ɢʀᴜᴘᴏ", rowId: `${usedPrefix}disable`},
{title: "📥 | 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆", description: "ᴅᴇꜱᴄᴀʀɢᴀʀ ᴠɪᴅᴇᴏꜱ ᴅᴇ ꜰᴀᴄᴇʙᴏᴏᴋ", rowId: `${usedPrefix}facebook`},
{title: "📥 | 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈", description: "ᴅᴇꜱᴄᴀʀɢᴀʀ ᴠɪᴅᴇᴏꜱ ᴅᴇ ɪɴꜱᴛᴀɢʀᴀᴍ", rowId: `${usedPrefix}instagram`},
{title: "📥 | 𝙈𝙀𝘿𝘼𝙁𝙄𝙍𝙀", description: "ᴅᴇꜱᴄᴀʀɢᴀʀ ᴀʀᴄʜɪᴠᴏꜱ ᴅᴇ ᴍᴇᴅᴀꜰɪʀᴇ", rowId: `${usedPrefix}mediafire`},
{title: "📥 | 𝙂𝙄𝙏𝘾𝙇𝙊𝙉𝙀", description: "ᴅᴇꜱᴄᴀʀɢᴀʀ ʀᴇᴘᴏꜱɪᴛᴏʀɪᴏ ᴅᴇ ɢɪᴛʜᴜʙ", rowId: `${usedPrefix}gitclone`},
{title: "📥 | 𝙏𝙄𝙆𝙏𝙊𝙆", description: "ᴅᴇꜱᴄᴀʀɢᴀʀ ᴠɪᴅᴇᴏꜱ ᴅᴇ ᴛɪᴋᴛᴏᴋ", rowId: `${usedPrefix}tiktok`},
{title: "📥 | 𝙔𝙏𝙈3", description: "ᴅᴇꜱᴄᴀʀɢᴀʀ ᴀᴜᴅɪᴏꜱ ᴘᴏʀ ᴍᴇᴅɪᴏ ᴅᴇ ᴜɴ ᴜʀʟ", rowId: `${usedPrefix}ytmp3`},
{title: "📥 | 𝙔𝙏𝙈4", description: "ᴅᴇꜱᴄᴀʀɢᴀʀ ᴠɪᴅᴇᴏꜱ ᴘᴏʀ ᴍᴇᴅɪᴏ ᴅᴇ ᴜɴ ᴜʀʟ", rowId: `${usedPrefix}ytmp4`},
{title: "📥 | 𝙋𝙇𝘼𝙔.1", description: "ᴅᴇꜱᴄᴀʀɢᴀʀ ᴀᴜᴅɪᴏꜱ", rowId: `${usedPrefix}play.1`},
{title: "📥 | 𝙋𝙇𝘼𝙔.2", description: "ᴅᴇꜱᴄᴀʀɢᴀʀ ᴠɪᴅᴇᴏꜱ", rowId: `${usedPrefix}play.2`},
{title: "📥 | 𝙋𝙇𝘼𝙔", description: "ᴅᴇꜱᴄᴀʀɢᴀʀ ᴠɪᴅᴇᴏꜱ/ᴀᴜᴅɪᴏꜱ ᴅᴇ ʏᴏᴜᴛᴜʙᴇ", rowId: `${usedPrefix}play`},
{title: "📥 | 𝙎𝙋𝙊𝙏𝙄𝙁𝙔", description: "ᴅᴇꜱᴄᴀʀɢᴀʀ ᴄᴀɴᴄɪᴏɴᴇꜱ ᴅᴇ ꜱᴘᴏᴛɪꜰʏ", rowId: `${usedPrefix}spotify`},
{title: "📥 | 𝙄𝙈𝘼𝙂𝙀𝙉", description: "ᴅᴇꜱᴄᴀʀɢᴀʀ ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ɢᴏᴏɢʟᴇ", rowId: `${usedPrefix}imagen`},
{title: "📥 | 𝙋𝙄𝙉𝙏𝙀𝙍𝙀𝙏", description: "ᴅᴇꜱᴄᴀʀɢᴀʀ ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ᴘɪɴᴛᴇʀᴇᴛ", rowId: `${usedPrefix}pinteret`},
{title: "📥 | 𝙒𝘼𝙇𝙇𝙋𝘼𝙋𝙀𝙍", description: "ᴅᴇꜱᴄᴀʀɢᴀʀ ꜰᴏɴᴅᴏꜱ ᴅᴇ ᴘᴀɴᴛᴀʟʟᴀ", rowId: `${usedPrefix}wallpaper`},
{title: "📥 | 𝙒𝘼𝙇𝙇𝙋𝘼𝙋𝙀𝙍2", description: "ᴅᴇꜱᴄᴀʀɢᴀʀ ꜰᴏɴᴅᴏꜱ ᴅᴇ ᴘᴀɴᴛᴀʟʟᴀ", rowId: `${usedPrefix}wallpaper2`},
{title: "📥 | 𝙋𝙋𝙏𝙄𝙆𝙏𝙊𝙆", description: "ʙᴜꜱᴄᴀʀ ᴀ ʟᴀ ꜰᴏᴛᴏ ᴅᴇ ᴘʀᴇʀꜰɪʟ ᴅᴇ ᴀʟɢᴜɪᴇɴ ᴅᴇ ᴛɪᴋᴛᴏᴋ", rowId: `${usedPrefix}pptiktok`},
{title: "📥 | 𝙄𝙂𝙎𝙏𝘼𝙇𝙆", description: "ʙᴜꜱᴄᴀʀ ᴀ ᴀʟɢᴜɪᴇɴ ᴇɴ ɪɴꜱᴛᴀɢʀᴀᴍ", rowId: `${usedPrefix}igstalk`},
{title: "📥 | 𝙏𝙄𝙆𝙏𝙊𝙆𝙎𝙏𝘼𝙇𝙆", description: "ʙᴜꜱᴄᴀʀ ᴀ ᴀʟɢᴜɪᴇɴ ᴇɴ ᴛɪᴋᴛᴏᴋ", rowId: `${usedPrefix}tiktokstalk`},
{title: "💎 | 𝘼𝘿𝘿", description: "ᴘᴀʀᴀ ᴀɢʀᴇɢᴀʀ ᴀ ᴀʟɢᴜɪᴇɴ ᴀʟ ɢʀᴜᴘᴏ", rowId: `${usedPrefix}add`},
{title: "💎 | 𝙆𝙄𝘾𝙆", description: "ᴘᴀʀᴀ ᴇʟɪᴍɪɴᴀʀ ᴀ ᴜɴ ɪɴᴛᴇɢʀᴀɴᴛᴇ ᴅᴇʟ ɢʀᴜᴘᴏ", rowId: `${usedPrefix}kick`},
{title: "💎 | 𝙂𝙍𝙐𝙋𝙊", description: "ᴘᴀʀᴀ ᴀᴄᴛɪᴠᴀʀ ᴏ ᴅᴇꜱᴀᴄᴛɪᴠᴀʀ Qᴜᴇ ꜱᴏʟᴏ ʟᴏꜱ ᴀᴅᴍɪɴꜱ ʜᴀʙʟᴇɴ", rowId: `${usedPrefix}grupo`},
{title: "💎 | 𝙋𝙍𝙊𝙈𝙊𝙏𝙀", description: "ᴘᴀʀᴀ ᴘʀᴏᴍᴏᴠᴇʀ ᴀ ᴜɴ ᴍɪᴇɴʙʀᴏ ᴀ ᴀᴅᴍɪɴ", rowId: `${usedPrefix}promote`},
{title: "💎 | 𝘿𝙀𝙈𝙊𝙏𝙀", description: "ᴘᴀʀᴀ ᴅᴇɢʀᴀᴅᴀʀ ᴀ ᴜɴ ᴀᴅᴍɪɴ ᴀ ᴍɪᴇɴʙʀᴏ", rowId: `${usedPrefix}demote`},
{title: "💎 | 𝘽𝘼𝙉𝘾𝙃𝘼𝙏", description: "ᴘᴀʀᴀ ʙᴀɴᴇᴀʀ ᴇʟ ᴄʜᴀᴛ ʏ ɴᴏ ᴘᴜᴇᴅᴀɴ ᴜꜱᴀʀ ᴇʟ ʙᴏᴛ", rowId: `${usedPrefix}banchat`},
{title: "💎 | 𝙐𝙉𝘽𝘼𝙉𝘾𝙃𝘼𝙏", description: "ᴘᴀʀᴀ ᴅᴇꜱʙᴀɴᴇᴀʀ ᴇʟ ᴄʜᴀᴛ ʏ Qᴜᴇ ᴘᴜᴇᴅᴀɴ ᴜᴛɪʟɪᴢᴀʀ ᴇʟ ʙᴏᴛ", rowId: `${usedPrefix}unbanchat`},
{title: "💎 | 𝙄𝙉𝙁𝙊𝙂𝙍𝙐𝙋𝙊", description: "ɪᴍꜰᴏʀᴍᴀᴄɪᴏɴ ꜱᴏʙʀᴇ ᴇʟ ɢʀᴜᴘᴏ", rowId: `${usedPrefix}infogroup`},
{title: "💎 | 𝙇𝙄𝙉𝙆", description: "ʟɪɴᴋ ᴅᴇʟ ɢʀᴜᴘᴏ", rowId: `${usedPrefix}link`},
{title: "💎 | 𝙎𝙀𝙏𝙉𝘼𝙈𝙀", description: "ᴄᴀᴍʙɪᴀʀ ᴇʟ ɴᴏᴍʙʀᴇ ᴅᴇʟ ɢʀᴜᴘᴏ", rowId: `${usedPrefix}setname`},
{title: "💎 | 𝙎𝙀𝙏𝘿𝙀𝙎𝘾", description: "ᴄᴀᴍʙɪᴀʀ ʟᴀ ᴅᴇꜱᴄʀɪᴘᴄɪᴏɴ ᴅᴇʟ ɢʀᴜᴘᴏ", rowId: `${usedPrefix}setdesc`},
{title: "💎 | 𝙄𝙉𝙑𝙊𝘾𝘼𝙍", description: "ᴘᴀʀᴀ ʟʟᴀᴍᴀʀ ᴀ ᴛᴏᴅᴏꜱ ʟᴏꜱ ɪɴᴛᴇɢʀᴀɴᴛᴇꜱ ᴅᴇʟ ɢʀᴜᴘᴏ", rowId: `${usedPrefix}invocar`},
{title: "💎 | 𝙎𝙀𝙏𝙒𝙀𝙇𝘾𝙊𝙈𝙀", description: "ᴘᴀʀᴀ ᴇᴅɪᴛᴀʀ ʟᴀ ʙɪᴇɴᴠᴇɴɪᴅᴀ ᴅᴇʟ ɢʀᴜᴘᴏ", rowId: `${usedPrefix}setwelcome`},
{title: "💎 | 𝙎𝙀𝙏𝘽𝙔𝙀", description: "ᴘᴀʀᴀ ᴇᴅɪᴛᴀʀ ʟᴀ ᴅᴇꜱᴘᴇᴅɪᴅᴀᴅ ᴅᴇʟ ɢʀᴜᴘᴏ", rowId: `${usedPrefix}setbye`},
{title: "💎 | 𝙃𝙄𝘿𝙀𝙏𝘼𝙂", description: "ᴘᴀʀᴀ ᴅᴇᴄɪʀ ᴜɴ ᴍᴇɴꜱᴀᴊᴇ ᴀ ᴛᴏᴅᴏꜱ ʟᴏꜱ ɪɴᴛᴇɢʀᴀɴᴛᴇꜱ ᴅᴇʟ ɢʀᴜᴘᴏ", rowId: `${usedPrefix}hidetag`},
{title: "💎 | 𝙎𝙄𝙈𝙐𝙇𝘼𝙍", description: "ᴘᴀʀᴀ ʀᴇᴄʀᴇᴀʀ ʟᴀ ʙɪᴇɴᴠᴇɴɪᴅᴀ/ᴅᴇꜱᴘᴇᴅɪᴅᴀ/ᴘʀᴏᴍᴏᴠᴇʀ/ᴅᴇɢʀᴀᴅᴀᴄɪᴏɴ", rowId: `${usedPrefix}simular`},
{title: "🧧 | 𝙏𝙊𝙄𝙈𝙂", description: "ᴘᴀʀᴀ ʜᴀᴄᴇʀ ᴜɴ ꜱᴛɪᴄᴋᴇʀ ɪᴍᴀɢᴇɴ", rowId: `${usedPrefix}toimg`},
{title: "🧧 | 𝙏𝙊𝙈𝙋3", description: "ᴘᴀʀᴀ ʜᴀᴄᴇʀ ᴜɴ ᴠɪᴅᴇᴏ ᴀᴜᴅɪᴏ", rowId: `${usedPrefix}tomp3`},
{title: "🧧 | 𝙏𝙊𝙋𝙏𝙏", description: "", rowId: `${usedPrefix}toptt`},
{title: "🧧 | 𝙏𝙊𝙑𝙄𝘿𝙀𝙊", description: "ᴘᴀʀᴀ ʜᴀᴄᴇʀ ᴜɴ ᴀᴜᴅɪᴏ ᴠɪᴅᴇᴏ", rowId: `${usedPrefix}tovideo`},
{title: "🧧 | 𝙏𝙊𝙐𝙍𝙇", description: "ᴘᴀʀᴀ ꜱᴜʙɪʀ ᴜɴᴀ ɪᴍᴀɢᴇɴ/ᴠɪᴅᴇᴏ ᴀ ɪɴᴛᴇʀɴᴇᴛ", rowId: `${usedPrefix}tourl`},
{title: "🧧 | 𝙏𝙏𝙎", description: "ᴘᴀʀᴀ ʜᴀᴄᴇʀ Qᴜᴇ ʙᴏᴛ ᴅɪɢᴀ ᴀʟɢᴏ", rowId: `${usedPrefix}tts`},
{title: "🖍️ | 𝙇𝙊𝙂𝙊𝙎", description: "ᴘᴀʀᴀ ᴄʀᴇᴀʀ ᴜɴ ʟᴏɢᴏ ᴘᴇʀꜱᴏɴᴀʟɪᴢᴀᴅᴏ", rowId: `${usedPrefix}logos`},
{title: "🖍️ | 𝙎𝙄𝙈𝙋𝘾𝘼𝙍𝘿", description: "ᴘᴀʀᴀ ᴄʀᴇᴀʀ ᴜɴᴀ ᴄʀᴇᴅɴᴄɪᴀʟ", rowId: `${usedPrefix}simpcard`},
{title: "🖍️ | 𝙃𝙊𝙍𝙉𝙔𝘾𝘼𝙍𝘿", description: "ᴘᴀʀᴀ ᴄʀᴇᴀʀ ᴜɴᴀ ᴄʀᴇᴅɴᴄɪᴀʟ", rowId: `${usedPrefix}hornycard`},
{title: "🖍️ | 𝙇𝙊𝙇𝙄𝘾𝙀", description: "ᴘᴀʀᴀ ᴄᴏᴍᴠᴇʀᴛɪᴄᴇ ᴇɴ ʟᴏʟɪ", rowId: `${usedPrefix}lolice`},
{title: "🖍️ | 𝙔𝙏𝘾𝙊𝙈𝙈𝙀𝙉𝙏", description: "ᴄᴏᴍᴇɴᴛᴀʀɪᴏ ᴇɴ ʏᴏᴜᴛᴜʙᴇ", rowId: `${usedPrefix}ytcomment`},
{title: "🖍️ | 𝙄𝙏𝙎𝙎𝙊𝙎𝙏𝙐𝙋𝙄𝘿", description: "ᴘᴀʀᴀ ʜᴀᴄᴇʀꜱᴇ ᴇꜱᴛᴜᴘɪᴅᴏ", rowId: `${usedPrefix}itssostupid`},
{title: "🖍️ | 𝙋𝙄𝙓𝙀𝙇𝙀𝘼𝙍", description: "ᴘᴀʀᴀ ʜᴀᴄᴇʀ ᴘɪxᴇʟ ʟᴀ ꜰᴏᴛᴏ ᴅᴇ ᴘᴇʀꜰɪʟ", rowId: `${usedPrefix}pixel`},
{title: "🖍️ | 𝘽𝙇𝙐𝙍", description: "", rowId: `${usedPrefix}blur`},
{title: "👾 | 𝘾𝙍𝙄𝙎𝙏𝙄𝘼𝙉𝙊 𝙍𝙊𝙉𝘼𝙇𝘿𝙊", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ᴄʀɪꜱᴛɪᴀɴᴏ ʀᴏɴᴀʟᴅᴏ", rowId: `${usedPrefix}cristianoronaldo`},
{title: "👾 | 𝙈𝙀𝙎𝙎𝙄", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ᴍᴇꜱꜱɪ", rowId: `${usedPrefix}messi`},
{title: "👾 | 𝙈𝙀𝙈𝙀", description: "ᴍᴇᴍᴇ ᴀʟᴇᴀᴛᴏʀɪᴏ", rowId: `${usedPrefix}meme`},
{title: "👾 | 𝙄𝙏𝙕𝙔", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ɪᴛᴢɪ", rowId: `${usedPrefix}itzy`},
{title: "👾 | 𝘽𝙇𝘼𝘾𝙆𝙋𝙄𝙉𝙆", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ʙʟᴀᴄᴋᴘɪɴᴋ", rowId: `${usedPrefix}blackpink`},
{title: "👾 | 𝙆𝙋𝙊𝙋 𝘽𝙏𝙎", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ʙᴛꜱ", rowId: `${usedPrefix}kpop bts`},
{title: "👾 | 𝙆𝙋𝙊𝙋 𝙀𝙓𝙊", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ᴇxᴏ", rowId: `${usedPrefix}kpop exo`},
{title: "👾 | 𝙆𝙋𝙊𝙋 𝘽𝙇𝘼𝘾𝙆𝙋𝙄𝙉𝙆", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ʙʟᴀᴄᴋᴘɪɴᴋ", rowId: `${usedPrefix}kpop blackpink`},
{title: "👾 | 𝙇𝙊𝙇𝙄𝙑𝙄𝘿", description: "ᴠɪᴅᴇᴏ ᴅᴇ ʟᴏʟɪꜱ", rowId: `${usedPrefix}lolivid`},
{title: "👾 | 𝙇𝙊𝙇𝙄", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ʟᴏʟɪ", rowId: `${usedPrefix}loli`},
{title: "👾 | 𝙉𝘼𝙑𝙄𝘿𝘼𝘿", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ʟᴀ ɴᴀᴠɪᴅᴀᴅ", rowId: `${usedPrefix}navidad`},
{title: "👾 | 𝙋𝘼𝙍𝙀𝙅𝘼", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ᴘᴀʀᴇᴊᴀꜱ", rowId: `${usedPrefix}ppcouple`},
{title: "👾 | 𝙉𝙀𝙆𝙊", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ɴᴇᴋᴏ", rowId: `${usedPrefix}neko`},
{title: "👾 | 𝙒𝘼𝙄𝙁𝙐", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ᴡᴀɪꜰᴜ", rowId: `${usedPrefix}waifu`},
{title: "👾 | 𝘼𝙆𝙄𝙍𝘼", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ᴀᴋɪʀᴀ", rowId: `${usedPrefix}akira`},
{title: "👾 | 𝘼𝙆𝙄𝙔𝘼𝙈𝘼", description: "", rowId: `${usedPrefix}akiyama`},
{title: "👾 | 𝘼𝙉𝙉𝘼", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ᴀᴋɪʏᴀᴍᴀ", rowId: `${usedPrefix}anna`},
{title: "👾 | 𝘼𝙎𝙐𝙉𝘼", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ᴀꜱᴜɴᴀ", rowId: `${usedPrefix}asuna`},
{title: "👾 | 𝘼𝙔𝙐𝙕𝘼𝙒𝘼", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ᴀʏᴜꜱᴀᴡᴀ", rowId: `${usedPrefix}ayuzawa`},
{title: "👾 | 𝘽𝙊𝙍𝙐𝙏𝙊", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ʙᴏʀᴜᴛᴏ", rowId: `${usedPrefix}boruto`},
{title: "👾 | 𝘾𝙃𝙄𝙃𝙊", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ᴄʜɪʜᴏ", rowId: `${usedPrefix}chiho`},
{title: "👾 | 𝘾𝙃𝙄𝙏𝙊𝙂𝙀", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ᴄʜɪᴛᴏɢᴇ", rowId: `${usedPrefix}chitoge`},
{title: "👾 | 𝘿𝙀𝙄𝘿𝘼𝙍𝘼", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ᴅᴇɪᴅᴀʀᴀ", rowId: `${usedPrefix}deidara`},
{title: "👾 | 𝙀𝙍𝙕𝘼", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ᴇʀᴢᴀ", rowId: `${usedPrefix}erza`},
{title: "👾 | 𝙀𝙇𝘼𝙄𝙉𝙀", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ᴇʟᴀɪɴᴇ", rowId: `${usedPrefix}elaina`},
{title: "👾 | 𝙀𝘽𝘼", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ᴇʙᴀ", rowId: `${usedPrefix}eba`},
{title: "👾 | 𝙀𝙈𝙄𝙇𝙄𝘼", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ᴇᴍɪʟɪᴀ", rowId: `${usedPrefix}emilia`},
{title: "👾 | 𝙃𝙀𝙎𝙏𝙄𝘼", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ʜᴇꜱᴛɪᴀ", rowId: `${usedPrefix}hestia`},
{title: "👾 | 𝙃𝙄𝙉𝘼𝙏𝘼", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ʜɪɴᴀᴛᴀ", rowId: `${usedPrefix}hinata`},
{title: "👾 | 𝙄𝙉𝙊𝙍𝙄", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ɪɴᴏʀɪ", rowId: `${usedPrefix}inori`},
{title: "👾 | 𝙄𝙎𝙐𝙕𝙐", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ɪꜱᴜᴢᴜ", rowId: `${usedPrefix}isuzu`},
{title: "👾 | 𝙄𝙏𝘼𝘾𝙃𝙄", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ɪᴛᴀᴄʜɪ", rowId: `${usedPrefix}itachi`},
{title: "👾 | 𝙄𝙏𝙊𝙍𝙄", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ɪᴛᴏʀɪ", rowId: `${usedPrefix}itori`},
{title: "👾 | 𝙆𝘼𝙂𝘼", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ᴋᴀɢᴀ", rowId: `${usedPrefix}kaga`},
{title: "👾 | 𝙆𝘼𝙂𝙐𝙍𝘼", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ᴋᴀɢᴜʀᴀ", rowId: `${usedPrefix}kagura`},
{title: "👾 | 𝙆𝙄𝙊𝙍𝙄", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ᴋɪᴏʀɪ", rowId: `${usedPrefix}kaori`},
{title: "👾 | 𝙆𝙀𝙉𝙄𝙆𝙀", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ᴋᴇɴɪᴋᴇ", rowId: `${usedPrefix}keneki`},
{title: "👾 | 𝙆𝘼𝙏𝙊𝙍𝙄", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ᴋᴀᴛᴏʀɪ", rowId: `${usedPrefix}kotori`},
{title: "👾 | 𝙆𝙐𝙍𝙐𝙈𝙄", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ᴋᴜʀᴜᴍɪ", rowId: `${usedPrefix}kurumi`},
{title: "👾 | 𝙈𝘼𝘿𝘼𝙍𝘼", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ᴍᴀᴅᴀʀᴀ", rowId: `${usedPrefix}madara`},
{title: "👾 | 𝙈𝙄𝙆𝘼𝙎𝘼", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ᴍɪᴋᴀꜱᴀ", rowId: `${usedPrefix}mikasa`},
{title: "👾 | 𝙈𝙄𝙆𝙐", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ᴍɪᴋᴜ", rowId: `${usedPrefix}miku`},
{title: "👾 | 𝙈𝙄𝙉𝘼𝙏𝙊", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ᴍɪɴᴀᴛᴏ", rowId: `${usedPrefix}minato`},
{title: "👾 | 𝙉𝘼𝙍𝙐𝙏𝙊", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ɴᴀʀᴜᴛᴏ", rowId: `${usedPrefix}naruto`},
{title: "👾 | 𝙉𝙀𝙕𝙐𝙆𝙊", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ɴᴇᴢᴜᴋᴏ", rowId: `${usedPrefix}nezuko`},
{title: "👾 | 𝙎𝘼𝙂𝙄𝙍𝙄", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ꜱᴀɢɪʀɪ", rowId: `${usedPrefix}sagiri`},
{title: "👾 | 𝙎𝘼𝙎𝙐𝙆𝙀", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ꜱᴀꜱᴜᴋᴇ", rowId: `${usedPrefix}sasuke`},
{title: "👾 | 𝙎𝘼𝙆𝙐𝙍𝘼", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ꜱᴀᴋᴜʀᴀ", rowId: `${usedPrefix}sakura`},
{title: "👾 | 𝘾𝙊𝙎𝙋𝙇𝘼𝙔", description: "ɪᴍᴀɢᴇɴᴇꜱ ᴄᴏꜱᴘʟᴀʏ", rowId: `${usedPrefix}cosplay`},
{title: "🔞 | 𝙋𝘼𝘾𝙆", description: "ᴛᴇ ᴍᴀɴᴅᴀ ᴜɴᴀ ᴘᴀᴄᴋ", rowId: `${usedPrefix}pack`},
{title: "🔞 | 𝙋𝘼𝘾𝙆2", description: "ᴛᴇ ᴍᴀɴᴅᴀ ᴜɴᴀ ᴘᴀᴄᴋ", rowId: `${usedPrefix}pack2`},
{title: "🔞 | 𝙋𝘼𝘾𝙆3", description: "ᴛᴇ ᴍᴀɴᴅᴀ ᴜɴᴀ ᴘᴀᴄᴋ", rowId: `${usedPrefix}pack3`},
{title: "🔞 | 𝙑𝙄𝘿𝙀𝙊𝙓𝙓𝙓", description: "ᴛᴇ ᴇɴᴠɪᴀ ᴜɴ ᴠɪᴅᴇᴏꜱ xxx", rowId: `${usedPrefix}videoxxx`},
{title: "🔞 | 𝙏𝙀𝙏𝘼𝙎", description: "ᴇɴᴠɪᴀ ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ᴛᴇᴛᴀꜱ", rowId: `${usedPrefix}tetas`},
{title: "🔞 | 𝘽𝙊𝙊𝙏𝙔", description: "ᴇɴᴠɪᴀ ɪᴍᴀɢᴇɴᴇꜱ ʙᴏᴏᴛʏ", rowId: `${usedPrefix}booty`},
{title: "🔞 | 𝙀𝘾𝘾𝙃𝙄", description: "ᴇɴᴠɪᴀ ɪᴍᴀɢᴇɴᴇꜱ ᴇᴄᴄʜɪ", rowId: `${usedPrefix}ecchi`},
{title: "🔞 | 𝙁𝙐𝙍𝙍𝙊", description: "ᴇɴᴠɪᴀ ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ꜰᴜʀʀᴏꜱ", rowId: `${usedPrefix}furro`},
{title: "🔞 | 𝙇𝙀𝙎𝘽𝙄𝘼𝙉𝙎", description: "ᴇɴᴠɪᴀ ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ʟᴇꜱʙɪᴀɴᴀꜱ", rowId: `${usedPrefix}imagenlesbians`},
{title: "🔞 | 𝙋𝘼𝙉𝙏𝙄𝙀𝙎", description: "ᴇɴᴠɪᴀ ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ᴘᴀɴᴛɪᴇꜱ", rowId: `${usedPrefix}panties`},
{title: "🔞 | 𝙋𝙀𝙉𝙀", description: "ᴇɴᴠɪᴀ ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ᴘᴇɴᴇꜱ", rowId: `${usedPrefix}pene`},
{title: "🔞 | 𝙋𝙍𝙊𝙉𝙊", description: "ᴇɴᴠɪᴀ ɪᴍᴀɢᴇɴᴇꜱ ᴀᴄᴇʀᴄᴀ ᴅᴇʟ ᴘᴏʀɴᴏ", rowId: `${usedPrefix}porno`},
{title: "🔞 | 𝙋𝙍𝙊𝙉𝙊2", description: "ᴇɴᴠɪᴀ ɪᴍᴀɢᴇɴᴇꜱ ᴀᴄᴇʀᴄᴀ ᴅᴇʟ ᴘᴏʀɴᴏ", rowId: `${usedPrefix}porno2`},
{title: "🔞 | 𝙍𝘼𝙉𝘿𝙊𝙈𝙓𝙓𝙓", description: "ᴇɴᴠɪᴀ ᴜɴᴀ ɪᴍᴀɢᴇɴ xxx", rowId: `${usedPrefix}randomxxx`},
{title: "🔞 | 𝙋𝙀𝘾𝙃𝙊𝙎", description: "ᴇɴᴠɪᴀ ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ᴘᴇᴄʜᴏꜱ", rowId: `${usedPrefix}pechos`},
{title: "🔞 | 𝙔𝘼𝙊𝙄", description: "ᴇɴᴠɪᴀ ɪᴍᴀɢᴇɴᴇꜱ ʏᴀᴏɪ", rowId: `${usedPrefix}yaoi`},
{title: "🔞 | 𝙔𝘼𝙊𝙄2", description: "ᴇɴᴠɪᴀ ɪᴍᴀɢᴇɴᴇꜱ ʏᴀᴏɪ", rowId: `${usedPrefix}yaoi2`},
{title: "🔞 | 𝙔𝙐𝙍𝙄", description: "ᴇɴᴠɪᴀ ɪᴍᴀɢᴇɴᴇꜱ ʏᴜʀɪ", rowId: `${usedPrefix}yuri`},
{title: "🔞 | 𝙔𝙐𝙍𝙄2", description: "ᴇɴᴠɪᴀ ɪᴍᴀɢᴇɴᴇꜱ ʏᴜʀɪ", rowId: `${usedPrefix}yuri2`},
{title: "🔞 | 𝙏𝙍𝘼𝙋𝙄𝙏𝙊", description: "ᴇɴᴠɪᴀ ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ᴛʀᴀᴘɪᴛᴏꜱ", rowId: `${usedPrefix}trapito`},
{title: "🔞 | 𝙃𝙀𝙉𝙏𝘼𝙄", description: "ᴇɴᴠɪᴀ ɪᴍᴀɢᴇɴᴇꜱ ʜᴇɴᴛᴀɪ", rowId: `${usedPrefix}hentai`},
{title: "🔞 | 𝙋𝙄𝙀𝙎", description: "ᴇɴᴠɪᴀ ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ᴘɪᴇꜱ", rowId: `${usedPrefix}pies`},
{title: "🔞 | 𝙉𝙎𝙁𝙒𝙇𝙊𝙇𝙄", description: "ᴇɴᴠɪᴀ ɪᴍᴀɢᴇɴᴇꜱ ɴꜱꜰᴡʟᴏʟɪ", rowId: `${usedPrefix}nsfwloli`},
{title: "🔞 | 𝙉𝙎𝙁𝙒𝙊𝙍𝙂𝙔", description: "ᴇɴᴠɪᴀ ɪᴍᴀɢᴇɴᴇꜱ ɴꜱꜰᴡᴏʀɢʏ", rowId: `${usedPrefix}nsfworgy`},
{title: "🔞 | 𝙉𝙎𝙁𝙒𝙁𝙊𝙊𝙏", description: "ᴇɴᴠɪᴀ ɪᴍᴀɢᴇɴᴇꜱ ɴꜱꜰᴡꜰᴏᴏᴛ", rowId: `${usedPrefix}nsfwfoot`},
{title: "🔞 | 𝙉𝙎𝙁𝙒𝘼𝙎𝙎", description: "ᴇɴᴠɪᴀ ɪᴍᴀɢᴇɴᴇꜱ ɴꜱꜰᴡᴀꜱꜱ", rowId: `${usedPrefix}nsfwass`},
{title: "🔞 | 𝙉𝙎𝙁𝙒𝘽𝘿𝙎𝙈", description: "ᴇɴᴠɪᴀ ɪᴍᴀɢᴇɴᴇꜱ ɴꜱꜰᴡʙᴅꜱᴍ", rowId: `${usedPrefix}nsfwbdsm`},
{title: "🔞 | 𝙉𝙎𝙁𝙒𝘾𝙐𝙈", description: "ᴇɴᴠɪᴀ ɪᴍᴀɢᴇɴᴇꜱ ɴꜱꜰᴡᴄᴜᴍ", rowId: `${usedPrefix}nsfwcum`},
{title: "🔞 | 𝙉𝙎𝙁𝙒𝙀𝙍𝙊", description: "ᴇɴᴠɪᴀ ɪᴍᴀɢᴇɴᴇꜱ ɴꜱꜰᴡᴇʀᴏ", rowId: `${usedPrefix}nsfwero`},
{title: "🔞 | 𝙉𝙎𝙁𝙒𝙁𝙀𝙈𝘿𝙊𝙈", description: "ᴇɴᴠɪᴀ ɪᴍᴀɢᴇɴᴇꜱ ɴꜱꜰᴡꜰᴇᴍᴅᴏᴍ", rowId: `${usedPrefix}nsfwfemdom`},
{title: "🔞 | 𝙉𝙎𝙁𝙒𝙂𝙇𝘼𝙎𝙎", description: "ᴇɴᴠɪᴀ ɪᴍᴀɢᴇɴᴇꜱ ɴꜱꜰᴡɢʟᴀꜱꜱ", rowId: `${usedPrefix}nsfwglass`},
{title: "🛠️ | 𝘼𝙁𝙆", description: "ɴᴏᴛɪꜰɪᴄᴀ ᴘᴏʀ Qᴜᴇ ᴛᴇ ᴀᴜꜱᴇɴᴛᴀʀᴀꜱ", rowId: `${usedPrefix}afk`},
{title: "🛠️ | 𝘼𝘾𝙊𝙍𝙏𝘼𝙍", description: "ʜᴄᴇʀ Qᴜᴇ ᴜɴ ʟɪɴᴋ ʟᴀʀɢᴏ ꜱᴇ ʜᴀɢᴀ ᴄᴏʀᴛᴏ", rowId: `${usedPrefix}acortar`},
{title: "🛠️ | 𝘾𝘼𝙇𝘾", description: "ʜᴀᴄᴇʀ ᴏᴘᴇʀᴀᴄɪᴏɴᴇꜱ ᴍᴀᴛᴇᴍᴀᴛɪᴄᴀꜱ ᴇɴ ʟᴀ ᴄᴀʟᴄᴜʟᴀᴅᴏʀᴀ", rowId: `${usedPrefix}calc`},
{title: "🛠️ | 𝘿𝙀𝙇", description: "ᴇʟɪᴍɪɴᴀʀ ᴜɴ ᴍᴇɴꜱᴀᴊᴇ ᴅᴇʟ ʙᴏᴛ", rowId: `${usedPrefix}del`},
{title: "🛠️ | 𝙌𝙍𝘾𝙊𝘿𝙀", description: "ʟᴇᴇʀ ᴜɴ Qʀ", rowId: `${usedPrefix}qrcode`},
{title: "🛠️ | 𝙍𝙀𝘼𝘿𝙈𝙊𝙍𝙀", description: "ʜᴀᴄᴇʀ ᴜɴ Qʀ", rowId: `${usedPrefix}readmore`},
{title: "🛠️ | 𝙎𝙋𝘼𝙈𝙒𝘼", description: "ʜᴀᴄᴇʀ ꜱᴘᴀᴍ ᴀ ᴀʟɢᴜɪᴇɴ", rowId: `${usedPrefix}spamwa`},
{title: "🛠️ | 𝙎𝙏𝙔𝙇𝙀𝙏𝙀𝙓𝙏", description: "ꜰᴜᴇɴᴛᴇꜱ ᴅᴇ ᴛᴇxᴛᴏ", rowId: `${usedPrefix}styletext`},
{title: "🛠️ | 𝙏𝙍𝘼𝘿𝙐𝘾𝙄𝙍", description: "ᴛʀᴀᴅᴜᴄɪʀ ᴜɴ ᴍᴇɴꜱᴀᴊᴇ", rowId: `${usedPrefix}traducir`},
{title: "💵 | 𝘽𝘼𝙇𝘼𝙉𝘾𝙀", description: "ᴠᴇʀ ᴛᴜꜱ ᴅɪᴀᴍᴀɴᴛᴇꜱ", rowId: `${usedPrefix}balance`},
{title: "💵 | 𝘾𝙇𝘼𝙄𝙈", description: "ʀᴇᴄʟᴀᴍᴀʀ ᴇᴄᴏᴍᴘᴇꜱᴀ ᴅɪᴀʀɪᴀ", rowId: `${usedPrefix}claim`},
{title: "💵 | 𝙏𝙊𝙋", description: "ᴠᴇʀ ʟᴀ ᴛᴀʙʟᴀ ᴅᴇ ᴄʟᴀꜱɪꜰɪᴄᴀᴄɪᴏɴ", rowId: `${usedPrefix}top`},
{title: "💵 | 𝙇𝙀𝙑𝙀𝙇𝙐𝙋", description: "ꜱᴜʙɪʀ ᴅᴇ ɴɪᴠᴇʟ", rowId: `${usedPrefix}levelup`},
{title: "💵 | 𝙈𝙔𝙉𝙎", description: "ᴍᴜᴇꜱᴛʀᴀ ᴛᴜ ꜱɴ", rowId: `${usedPrefix}myns`},
{title: "💵 | 𝙋𝙀𝙍𝙁𝙄𝙇", description: "ᴍᴜᴇꜱᴛʀᴀ ᴛᴜ ᴘᴇʀꜰɪʟ", rowId: `${usedPrefix}perfil`},
{title: "💵 | 𝙒𝙊𝙍𝙆", description: "ᴛʀᴀʙᴀᴊᴀʀ ᴘᴏʀ ᴇxᴘ", rowId: `${usedPrefix}work`},
{title: "💵 | 𝙈𝙄𝙉𝘼𝙍", description: "ᴍɪɴᴀʀ ʏ ᴇɴᴄᴏɴᴛʀᴀʀ ᴇxᴘ", rowId: `${usedPrefix}minar`},
{title: "💵 | 𝘽𝙐𝙔", description: "ᴄᴏᴍᴘʀᴀʀ ᴅɪᴀᴍᴀɴᴛᴇꜱ", rowId: `${usedPrefix}buy`},
{title: "💵 | 𝘽𝙐𝙔𝘼𝙇𝙇", description: "ᴄᴏᴍᴘʀᴀʀ ᴛᴏᴅᴏꜱ ʟᴏꜱ ᴅɪᴀᴍᴀɴᴛᴇꜱ Qᴜᴇ ꜱᴇ ᴘᴜᴇᴅᴀ", rowId: `${usedPrefix}buyall`},
{title: "💵 | 𝙏𝙍𝘼𝙉𝙎𝙁𝙀𝙍", description: "ʜᴀᴄᴇʀ ᴜɴᴀ ᴛʀᴀꜱꜰᴇʀᴇɴᴄɪᴀ ᴀ ᴀʟɢᴜɪᴇɴ", rowId: `${usedPrefix}transfer`},
{title: "💵 | 𝙑𝙀𝙍𝙄𝙁𝙄𝘾𝘼𝙍", description: "ʀᴇɢɪꜱᴛʀᴀʀᴛᴇ ᴇɴ ʟᴀ ʙᴀꜱᴇ ᴅᴇ ᴅᴀᴛᴏꜱ ᴅᴇʟ ʙᴏᴛ", rowId: `${usedPrefix}verificar`},
{title: "💵 | 𝙐𝙉𝙍𝙀𝙂", description: "ᴇʟɪᴍɪɴᴀʀ ʀᴇɢɪꜱᴛʀᴏ", rowId: `${usedPrefix}unreg`},
{title: "👽 | 𝙀𝙈𝙊𝙅𝙄𝙈𝙄𝙓", description: "ᴊᴜɴᴛᴀʀ ᴅᴏꜱ ᴇᴍᴏᴊɪꜱ ᴇɴ ᴜɴᴏ", rowId: `${usedPrefix}emojimix`},
{title: "👽 | 𝙀𝙈𝙊𝙅𝙄𝙈𝙄𝙓2", description: "ꜱᴀʟᴇ ᴜɴᴀ ꜱᴇʀɪᴇ ᴅᴇ ᴇᴍᴏᴊɪꜱ ᴍᴏᴅɪꜰɪᴄᴀᴅᴏꜱ ᴅᴇ ᴜɴᴏ Qᴜᴇ ᴇꜱᴄᴏᴊᴀꜱ", rowId: `${usedPrefix}emojimix2`},
{title: "👽 | 𝘼𝙏𝙏𝙋", description: "ʜᴀᴇʀ ᴜɴ ꜱᴛɪᴄᴋᴇʀ ᴅᴇ ʟᴏ Qᴜᴇ ᴇꜱᴄʀɪᴠᴀꜱ", rowId: `${usedPrefix}attp`},
{title: "👽 | 𝙏𝙏𝙋", description: "ʜᴀᴇʀ ᴜɴ ꜱᴛɪᴄᴋᴇʀ ᴅᴇ ʟᴏ Qᴜᴇ ᴇꜱᴄʀɪᴠᴀꜱ", rowId: `${usedPrefix}ttp`},
{title: "👽 | 𝙋𝘼𝙏", description: "ᴜɴ ꜱᴛɪᴄᴋᴇʀ ᴀᴄᴀʀɪᴄɪᴀɴᴅᴏ ᴀ ᴀʟɢᴜɪᴇɴ Qᴜᴇ ᴇᴛɪQᴜᴇᴛᴇꜱ", rowId: `${usedPrefix}pat`},
{title: "👽 | 𝙎𝘼𝙇𝙋", description: "", rowId: `${usedPrefix}slap`},
{title: "👽 | 𝙆𝙄𝙎𝙎", description: "ᴜɴ ꜱᴛɪᴄᴋᴇʀ ᴅᴀɴᴅᴏ ᴜɴ ʙᴇꜱᴏ ᴀ ᴀʟɢᴜɪᴇɴ Qᴜᴇ ᴇᴛɪQᴜᴇᴛᴇꜱ", rowId: `${usedPrefix}kiss`},
{title: "👽 | 𝘿𝘼𝘿𝙊", description: "ᴜɴ ᴅᴀᴅᴏ ᴀʟ ᴀᴢᴀʀ", rowId: `${usedPrefix}dado`},
{title: "👽 | 𝙒𝙈", description: "ᴄᴀᴍʙɪᴀʀ ᴇɴ ɴᴏᴍʙʀᴇ ᴅᴇ ᴜɴ ꜱᴛɪᴄᴋᴇʀ", rowId: `${usedPrefix}wm`},
{title: "👽 | 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙈𝘼𝙍𝙆𝙀𝙍", description: "ʜᴀᴄᴇʀ ᴜɴ ꜱᴛɪᴄᴋᴇʀ ᴘᴇʀꜱᴏɴᴀʟɪᴢᴀᴅᴏ", rowId: `${usedPrefix}stickermarker`},
{title: "👽 | 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙁𝙄𝙇𝙏𝙀𝙍", description: "ʜᴀᴄᴇʀ ᴜɴ ꜱᴛɪᴄᴋᴇʀ ᴘᴇʀꜱᴏɴᴀʟɪᴢᴀᴅᴏ", rowId: `${usedPrefix}stickerfilter`},
{title: "🔊 | 𝙈𝙀𝙉𝙐2", description: "ᴍᴇɴᴜ ᴅᴇ ᴀᴜᴅɪᴏꜱ ᴅᴇʟ ʙᴏᴛ", rowId: `${usedPrefix}menu2`},
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
┣ ඬ⃟ℹ️ ꜱɪ ᴜɴ ᴄᴏᴍᴀɴᴅᴏ ɴᴏ ꜰᴜɴᴄɪᴏɴᴀ ɴᴏᴛɪꜰɪᴄᴀᴍᴇ ᴀʟ ᴘʀɪᴠ ɢʀᴀᴄɪᴀꜱ
┗━━━━━━━━━━━━━┛
${author}`,
title: null,
buttonText: "ℂ𝕆𝕄𝔸ℕ𝔻𝕆𝕊",
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
