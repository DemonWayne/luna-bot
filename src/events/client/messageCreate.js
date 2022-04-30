module.exports = async(message) => {
  if(message.channel.type === 'dm') return
  
  if(!message.content.startsWith('/')) return

  const args = message.content.slice(1).split(/ +/g)

  const cmd = args.shift().toLowerCase()
  const command = message.client.commands.get(cmd) || message.client.commands.find(a => a.aliases && a.aliases.includes(cmd))
  if(!command) return

  try {
    if(command) command.execute(message.client, message, args)
  } catch(err) {
    console.error(err)
  }
}