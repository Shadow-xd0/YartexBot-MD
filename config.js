/* ⚙️ Credits to:
* AzamiJs
* Elrebelde21
* GataNina-Li */

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [
['595983602447', 'Tobias', true],
['595982634142'], 
['593968263524'],
['595976126756'],
['573012482597']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '+595982634142' //Ejemplo: +59309090909
global.confirmCode = ''

global.suittag = ['5214531287294']
global.mods = []
global.prems = []

//Solo desarrolladores aprobados
global.isdev = [['542215034412'], ['593968263524'], ['573012482597'], ['5492215034412'], ['5214434703586']]

//Aqui encuentras los nombres del bot 
global.packname = '𝗬𝗮𝗿𝘁𝗲𝘅 𝗕𝗼𝘁 - 𝗠𝗗 💫'
global.author = '𝗬𝗮𝗿𝘁𝗲𝘅𝗕𝗼𝘁-𝗠𝗗'
global.wm = '𝖸𝖺𝗋𝗍𝖾𝗑 𝖡𝗈𝗍 - 𝖬𝖣'
global.wm2 = '𝗬𝖺𝗋𝗍𝖾𝗑 : 𝗕𝗈𝗍'
global.gatanina = '𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨 🐈'
global.cb = '𝘠𝘢𝘳𝘵𝘦𝘹𝘉𝘰𝘵'


//Las Versiones Y Entre Otros
global.vs = 'V2'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = 'GataNina-Li'
global.devnum = '+593 96 826 3524'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
