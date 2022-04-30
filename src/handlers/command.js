const fs = require('node:fs')

module.exports = (client) => {
    const folders = ['general', 'owners', 'moders', 'economy']
    
    folders.forEach(dir => {
        const cmdDirs = fs.readdirSync(`./src/commands/${dir}`)
        const cmdFiles = cmdDirs.filter(f => f.endsWith('.js'))

        for(const file of cmdFiles) {
            const cmd = require(`../../src/commands/${dir}/${file}`)

            if(cmd.name) {
                client.commands.set(cmd.name, cmd)
            } else {
                continue
            }
        }
    })
}