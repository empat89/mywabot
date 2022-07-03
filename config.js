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
global.projectId = 'mywabot-352516'  //default
global.heroku = 'Your_Heroku_Apps_Link' //if not deployed on heroku, use http://google.com (http ONLY, not https)
global.sheet = 'Your_Spread_Sheet_Link' //please add your google sheet link with script
global.owner = ['62xxxxxxxxxx'] //your number, only valid for 1 number



let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
