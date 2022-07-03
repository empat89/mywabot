/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
   * Recode By Muhammad Fuad Hasan
   * Contact Me on wa.me/6285161510489
   * Follow https://Facebook.com/aba.alyaa
*/

// don't change anything if you don't understand
// jangan di ganti jika tidak mengerti

const fs = require('fs')
const chalk = require('chalk')

//timezone !! 
//visit link >> https://gist.github.com/diogocapela/12c6617fc87607d11fd62d2a4f42b02a
global.timeEn = 'Europe/London'
global.timeIn = 'Asia/Jakarta'

// New Message
global.greeting = false
global.greetingmessEn = 'Welcome @username \nBot Ready To Use'
global.greetingmessIn = 'Selamat Datang @username \nBot Siap Digunakan'

// Group
global.gcoptions = false
global.welmessEn = '=====================\nUser : @user \nDate : @date \nTime : @time \n\nWelcome To Group @group \n====================='
global.leavmessEn = '=====================\nUser : @user \nDate : @date \nTime : @time \n\nLeaving To Group @group \n====================='
global.welmessIn = '=====================\nUser      : @user \nTanggal : @date \nWaktu    : @time \n\nSelamat Datang Di Group @group \n====================='
global.leavmessIn = '=====================\nUser      : @user \nTanggal : @date \nWaktu   : @time \n\nTelah Meninggalkan Group @group \n====================='

// Presence
global.typing = false
global.read = false

// Away Message
global.away = false 
global.awaymessEn = 'Sorry @username !! \nWe Are Currently Offline, Please Comeback Tomorrow'
global.awaymessIn = 'Maaf @username !! \nSaat Ini Kami Sedang Offline, Silahkan Datang Lagi Besok'

// Sticker Pack
global.packname = 'My Sticker'
global.author = 'WhatsApp Bot'


// Other
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    wait: 'Loading ...',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
