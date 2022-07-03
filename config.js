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
global.projectId = 'mywabot-352516'
global.heroku = 'Your_Heroku_Apps_Link'
global.sheet = 'Your_Spread_Sheet_Link'
global.owner = ['62xxxxxxxxxx']
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
