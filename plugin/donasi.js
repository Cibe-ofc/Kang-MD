let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [081283186765]
│ •  [081283186765]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
