/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
   * Recode By Muhammad Fuad Hasan
   * Contact Me on wa.me/6285161510489
   * Follow https://Facebook.com/aba.alyaa
*/

const fs = require('fs')
const chalk = require('chalk')

// Other
global.sheet = 'https://script.googleusercontent.com/macros/echo?user_content_key=30UDs0ayY8qiPJXDkxU-CyD6eUUmJx4tq-I3CM5Y-jddNLSRVrc9npKl4mziuWwsBopdWbfpHyF_AFg1kvwIY0VW7-cmi_cAm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDbmSQwasD3oq_kbsOlbFNSkxIZe2_usRDc5qAA3FCw8w91kULjUT3qEdatgtRhOf_CoN9leczY6wzSjBlAbmuO4H04iMohXvg&lib=MReHvp1AbNSuXhHwI-h9h9UUap4zf7K2U'  //silahkan isi google script app spread sheet nya
global.blockcall = false //autoblock telepon
global.welcome = false //pesan selamat datang di group
global.online = true     //online && mengetik
global.autoread = true   //ceklis biru
global.owner = ['6285161510489','6283167714830','6281382420312','6288292024190']   //ganti agar fitur bisa di gunakan
global.sessionName = 'session'  //sesuaikan nama file sesi nya
global.packname = 'My Sticker'
global.author = 'WhatsApp Bot'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    wait: 'Loading...',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
