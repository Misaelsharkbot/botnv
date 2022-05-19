import fetch from 'node-fetch'
let handler = async (m, {text}) => {
  let api = await fetch(`https://api-sv2.simsimi.net/v2/?text=${text}&lc=es`)
  let res = await api.json()
  m.reply(res.success)
}
handler.command = ['simi', 'bot']
handler.tags = ['fun']
handler.help = ['simi']

export default handler
