const fs = require('node:fs')

module.exports = (client) => {

    const eventFolders = ['guild', 'client']
    
    eventFolders.forEach(d => {
        const eventDirs = fs.readdirSync(`./src/events/${d}`)
        const eventFiles = eventDirs.filter(f => f.endsWith('.js'))

        for(const f of eventFiles) {
            const event = require(`../events/${d}/${f}`)
            const name = f.split('.')[0]
            client.on(name, event.bind(client))
        }
    })
}