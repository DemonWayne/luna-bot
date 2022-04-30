module.exports = {
    name: 'check',
    description: 'Посмотреть статистику',
    usage: "",
    async execute(client, message) {
        message.channel.send(`Ваш ник: ${message.member.displayName || message.user.username}`)
    }
}