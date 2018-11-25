const Discord = require('discord.js');
const capsler = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"
]


exports.run = function(client, message) {
    var seçilencaps = capsler[Math.floor(Math.random() * cevaplar.length)];
    if(seçilencaps === 1) {
      message.channel.send('Caps: ', {files: "./capsler/1.png"})
    }
    if(seçilencaps === 2) {
      message.channel.send('Caps: ', {files: "./capsler/2.png"})
    }
    if(seçilencaps === 3) {
      message.channel.send('Caps: ', {files: "./capsler/3.png"})
    }
    if(seçilencaps === 4) {
      message.channel.send('Caps: ', {files: "./capsler/4.png"})
    }
    if(seçilencaps === 5) {
      message.channel.send('Caps: ', {files: "./capsler/5.png"})
    }
    if(seçilencaps === 6) {
      message.channel.send('Caps: ', {files: "./capsler/6.png"})
    }
    

};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: [], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'Caps GÖnderici', //adını belirledik (kullanmak için gereken komut)
  description: 'Rasgele Caps Gönderir', //açıklaması
  usage: 'caps' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz
