let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Gopay [082119800783]
│ • Dana [081223918622]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? 6281223918622
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
