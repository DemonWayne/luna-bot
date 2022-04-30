module.exports = async(client) => {
    console.log(`💙 | Бот успешно запущен как ${client.user.tag}!`, `На часах: ${new Date().toLocaleString(`ru-RU`, { timeZone: `Europe/Moscow`, hour12: false})}`)
}