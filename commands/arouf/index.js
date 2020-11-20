const {MessageAttachment } = require('discord.js');

module.exports = function (opts) {
  const attachement = new MessageAttachment('https://upload.wikimedia.org/wikipedia/commons/d/d2/Arouf_Gangsta.jpg')
  opts.event.channel.send('COCA BIEN FAIS CHACAL');
    // Send the attachment in the message channel
    opts.event.channel.send(attachement);
}
