# mywabot (Empat-89)
Script Base ini memakai Base [Hisoka-Morou](https://github.com/DikaArdnt/Hisoka-Morou).<br/>
Tidak ada Jaminan selamanya baik-baik saja.<br/>
Ada kalanya bot mengalami error, dikarenakan module yang belum sepenuhnya work for anytime.<br/>
Module update menyesuaikan kebijakan WhatsApp.<br/>

# Update Bot V3
✦✧✦✧ NEW ✦✧✦✧<br/>
* Auto Update SpreadSheet<br/>
* Settings Online <br/>
* Tambahan Fitur Mode Libur / Away Messages<br/>
* Tambahan Fitur Salam / Greeting Messages<br/>
* Add Mongo DB <br/>
* Support Heroku <br/>
* Futur Lapor / Report <br/>
* FIX some error !!

## Perintah | Command
* pengaturan | settings
* toimage
* tourl
* save
* load
* listmsg
* delmsg
* s/sticker/sgif
* setppbot
* lapor | report (Untuk Pelanggan Anda | For Your Customers)

# Requirements
* [Node.js](https://nodejs.org/en/)
* [Git](https://git-scm.com/downloads)
* [FFmpeg](https://github.com/BtbN/FFmpeg-Builds/releases/download/autobuild-2020-12-08-13-03/ffmpeg-n4.3.1-26-gca55240b8c-win64-gpl-4.3.zip) (for sticker command)

# Instalation
## Heroku Buildpack
```bash
heroku/nodejs
https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest
https://github.com/clhuang/heroku-buildpack-webp-binaries.git
```
## For Termux
```ts
apt update && apt upgrade
pkg install nodejs ffmpeg git
git clone https://github.com/empat89/mywabot
cd mywabot
npm install
node index.js
```

# Edit file
## Edit Config
`./config.js`
```ts
global.projectId = 'mywabot-352516'
global.heroku = 'Your_Heroku_Apps_Link'
global.sheet = 'Your_Spread_Sheet_Link'
global.owner = ['62xxxxxxxxxx']
```
## Edit Procfile
`./Procfile`
```ts
web: node index.js --db "Your_Mongo_DB_Link" //With Mongo Db
worker: npm i -g pm2 && pm2 start index.js && pm2 save && pm2 logs //Without Mongo Db
```

## Mongo Db Connection
<p align="center">
<a href="https://ibb.co/mNkJf61"><img src="https://i.ibb.co/xFWhxJP/Screenshot-20220703-203447.png" alt="Screenshot-20220703-203447" border="0"></a>
<a href="https://ibb.co/2nKVB3M"><img src="https://i.ibb.co/Lkpjfdg/Screenshot-20220703-203509.png" alt="Screenshot-20220703-203509" border="0"></a>
<a href="https://ibb.co/2tNJyMC"><img src="https://i.ibb.co/WytC6zM/Screenshot-20220703-203954-1.jpg" alt="Screenshot-20220703-203954-1" border="0"></a>
</p>

## SpreadSheet Apps Script
```gs
  function doGet(e){
  var ss = SpreadsheetApp.getActive();
  var sheet = ss.getSheetByName('Your_Sheet_Name');
  var data = [];
  var rlen = sheet.getLastRow();
  var clen = sheet.getLastColumn();
  var rows = sheet.getRange(1, 1, rlen, clen).getValues();
  for(var i=1; i < rows.length ; i++){
    var datarow = rows[i];
    var record = {};
    for(var j=0; j < clen ; j++){
      record[rows[0][j]] = datarow[j];
      }
    data.push(record);
   }
  console.log(data);
  var result = JSON.stringify(data);
  return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);
}
```

## Google Spread Sheet
<p align="center">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"><link type="text/css" rel="stylesheet" href="resources/sheet.css" >
<div class="ritz grid-container" dir="ltr"><table class="waffle" cellspacing="0" cellpadding="0"><thead><tr><th class="row-header freezebar-origin-ltr"></th><th id="697064570C0" style="width:100px;" class="column-headers-background">A</th><th id="697064570C1" style="width:100px;" class="column-headers-background">B</th><th id="697064570C2" style="width:100px;" class="column-headers-background">C</th><th id="697064570C3" style="width:100px;" class="column-headers-background">D</th><th id="697064570C4" style="width:100px;" class="column-headers-background">E</th><th id="697064570C5" style="width:100px;" class="column-headers-background">F</th><th id="697064570C6" style="width:100px;" class="column-headers-background">G</th><th id="697064570C7" style="width:100px;" class="column-headers-background">H</th><th id="697064570C8" style="width:100px;" class="column-headers-background">I</th><th id="697064570C9" style="width:100px;" class="column-headers-background">J</th><th id="697064570C10" style="width:100px;" class="column-headers-background">K</th><th id="697064570C11" style="width:100px;" class="column-headers-background">L</th><th id="697064570C12" style="width:100px;" class="column-headers-background">M</th><th id="697064570C13" style="width:65px;" class="column-headers-background">N</th></tr></thead><tbody><tr style="height: 20px"><th id="697064570R0" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">1</div></th><td class="s0" dir="ltr">msg</td><td class="s0" dir="ltr">res</td><td class="s0" dir="ltr">dx</td><td class="s0" dir="ltr">x</td><td class="s0" dir="ltr">dy</td><td class="s0" dir="ltr">y</td><td class="s0" dir="ltr">dz</td><td class="s0" dir="ltr">z</td><td class="s0" dir="ltr">dxu</td><td class="s0" dir="ltr">xu</td><td class="s0" dir="ltr">dyu</td><td class="s0" dir="ltr">yu</td><td class="s0" dir="ltr">img</td><td class="s0" dir="ltr">set</td></tr><tr style="height: 20px"><th id="697064570R1" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">2</div></th><td class="s1" dir="ltr">btn</td><td class="s2" dir="ltr">Example</td><td class="s2" dir="ltr">Example</td><td class="s2" dir="ltr">Example</td><td class="s2" dir="ltr">Example</td><td class="s2" dir="ltr">Example</td><td class="s2" dir="ltr">Example</td><td class="s2" dir="ltr">Example</td><td class="s2" dir="ltr">Example</td><td class="s3 softmerge" dir="ltr"><div class="softmerge-inner" style="width:97px;left:-1px"><a target="_blank" href="https://telegra.ph/file/64485bc8cd5b89a1ad3a9.jpg">https://telegra.ph/file/64485bc8cd5b89a1ad3a9.jpg</a></div></td><td class="s2" dir="ltr">Example</td><td class="s3 softmerge" dir="ltr"><div class="softmerge-inner" style="width:97px;left:-1px"><a target="_blank" href="https://telegra.ph/file/64485bc8cd5b89a1ad3a9.jpg">https://telegra.ph/file/64485bc8cd5b89a1ad3a9.jpg</a></div></td><td class="s3 softmerge" dir="ltr"><div class="softmerge-inner" style="width:97px;left:-1px"><a target="_blank" href="https://telegra.ph/file/64485bc8cd5b89a1ad3a9.jpg">https://telegra.ph/file/64485bc8cd5b89a1ad3a9.jpg</a></div></td><td class="s2" dir="ltr">15</td></tr><tr style="height: 20px"><th id="697064570R2" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">3</div></th><td class="s4" dir="ltr">msg</td><td class="s5" dir="ltr">This Example</td><td class="s5" dir="ltr">Display Button</td><td class="s5" dir="ltr">btn</td><td class="s5" dir="ltr">Display Button</td><td class="s5" dir="ltr">btn</td><td class="s5" dir="ltr">Display Button</td><td class="s5" dir="ltr">btn</td><td class="s5" dir="ltr">Display Url</td><td class="s6 softmerge" dir="ltr"><div class="softmerge-inner" style="width:97px;left:-1px"><a target="_blank" href="https://t.me/hasanbinharun">https://t.me/hasanbinharun</a></div></td><td class="s5" dir="ltr">Display Url</td><td class="s6 softmerge" dir="ltr"><div class="softmerge-inner" style="width:97px;left:-1px"><a target="_blank" href="https://facebook.com/aba.alyaa">https://facebook.com/aba.alyaa</a></div></td><td class="s6 softmerge" dir="ltr"><div class="softmerge-inner" style="width:97px;left:-1px"><a target="_blank" href="https://telegra.ph/file/64485bc8cd5b89a1ad3a9.jpg">https://telegra.ph/file/64485bc8cd5b89a1ad3a9.jpg</a></div></td><td class="s5" dir="ltr">15</td></tr></tbody></table></div>
</p>

## GUIDES | PANDUAN
<p align="center">
<a href="https://youtube.com/channel/UCVmrkgbpEeILFUcwx7ZC0uA7"><img src="https://i.ibb.co/mzmV1H9/20220703-001713-0000.png" alt="20220703-001713-0000" border="0"></a>
<a href="https://ibb.co/yRHHYmV"><img src="https://i.ibb.co/CtRRMpW/20220701-203804-0000.png" alt="20220701-203804-0000" border="0" /></a>
<a href="https://ibb.co/ZMzfvcZ"><img src="https://i.ibb.co/Jsjc8rh/20220701-205854-0000.png" alt="20220701-205854-0000" border="0"></a>
<a href="https://ibb.co/7CfSYmH"><img src="https://i.ibb.co/pw710Fg/20220701-210854-0000.png" alt="20220701-210854-0000" border="0"></a>
<a href="https://ibb.co/Jt3S8Y8"><img src="https://i.ibb.co/sRWXcTc/20220701-212312-0000.png" alt="20220701-212312-0000" border="0"></a>
<a href="https://ibb.co/JkcR0qX"><img src="https://i.ibb.co/nkwsZBh/20220701-212425-0000.png" alt="20220701-212425-0000" border="0"></a>
<a href="https://ibb.co/s6sC528"><img src="https://i.ibb.co/9VyhwNQ/20220701-212828-0000.png" alt="20220701-212828-0000" border="0"></a>
<a href="https://ibb.co/VSJKr7d"><img src="https://i.ibb.co/FwmPNS9/20220701-213141-0000.png" alt="20220701-213141-0000" border="0"></a>
<a href="https://ibb.co/5KL7L27"><img src="https://i.ibb.co/qJpZpxZ/20220701-213437-0000.png" alt="20220701-213437-0000" border="0"></a>
<a href="https://ibb.co/kQ4SmRg"><img src="https://i.ibb.co/f4kxDhY/20220701-213911-0000.png" alt="20220701-213911-0000" border="0"></a>
<a href="https://ibb.co/T4C7jSB"><img src="https://i.ibb.co/VgKznZW/20220701-214213-0000.png" alt="20220701-214213-0000" border="0"></a>
<a href="https://ibb.co/9TsLWJs"><img src="https://i.ibb.co/J754HN5/20220701-214745-0000.png" alt="20220701-214745-0000" border="0"></a>
<a href="https://ibb.co/QP7r7VK"><img src="https://i.ibb.co/bsjzjVK/20220701-215035-0000.png" alt="20220701-215035-0000" border="0"></a>
</p>


## Notice
Dengan Ini Saya tidak bertanggung jawab, Jika terjadi sesuatu yang tidak di inginkan.<br/>
Memakai bot ini, Sepenuhnya menyetujui segala resiko yang ditimbulkan.

## WhatsApp Group
- [Click Here](https://chat.whatsapp.com/InZWuya76b76LjjFuWnQIg)


## Donate
- [Dana](https://link.dana.id/qr/2t8fnli)
- [Paypal](https://paypal.me/mfh489)


## Thanks To 
<a href="https://github.com/DikaArdnt"><img src="https://github.com/DikaArdnt.png?size=100" width="100" height="100"></a> | [![NURUTOMO](https://github.com/Nurutomo.png?size=100)](https://github.com/Nurutomo) 
---|---
[Dika](https://github.com/DikaArdnt)  | [Nurutomo](https://github.com/Nurutomo)
Owner Hisoka-Morou | Constributor |
<a href="https://github.com/MhankBarBar"><img src="https://github.com/MhankBarBar.png?size=100" width="100" height="100"></a> | [![FATIH](https://github.com/fatiharridho.png?size=100)](https://github.com/fatiharridho) 
[Mhankbarbar](https://github.com/MhankBarBar)  | [Fatih A.](https://github.com/fatiharridho)
Constributor | For Help |
<a href="https://github.com/FERDIZ-afk"><img src="https://github.com/FERDIZ-afk.png?size=100" width="100" height="100"></a> | [![RASHID](http://github.com/rashidsiregar28.png?size=100)](http://github.com/rashidsiregar28) 
[Ferdiz](https://github.com/FERDIZ-afk)  | [Rashid](https://github.com/rashidsiregar28)
For Help | Owner Chikabot |
<a href="https://github.com/adiwajshing"><img src="https://github.com/adiwajshing.png?size=100" width="100" height="100"></a> | [![ZEEONE](http://github.com/zeeone-ofc.png?size=100)](http://github.com/zeeone-ofc) 
[Adiwajshing](https://github.com/adiwajshing) | [zeeone-ofc](https://zeeone-ofc.github.io)
Owner of Baileys | Owner of Api Alphabot |
