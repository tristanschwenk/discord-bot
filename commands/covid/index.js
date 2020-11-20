const puppeteer = require('puppeteer');
const {MessageEmbed} = require('discord.js');

module.exports = function (opts) {
  async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url)
  
    const total = await page.$x('//*[@id="rhs"]/div[2]/div/div/div/div/div[2]/div[1]/div/div[1]/table/tbody/tr/td[1]/div[1]')
    let texttotal = await page.evaluate(texttotal => texttotal.textContent, total[0]);
    
  
    const guerisons = await page.$x('//*[@id="rhs"]/div[2]/div/div/div/div/div[2]/div[1]/div/div[1]/table/tbody/tr/td[2]/div[1]')
    let textguerison = await page.evaluate(textguerison => textguerison.textContent, guerisons[0]);
    
  
    const deces = await page.$x('//*[@id="rhs"]/div[2]/div/div/div/div/div[2]/div[1]/div/div[1]/table/tbody/tr/td[3]/div[1]')
    let textdeces = await page.evaluate(textdeces => textdeces.textContent, deces[0]);
    
  
    const frtotal = await page.$x('//*[@id="rhs"]/div[2]/div/div/div/div/div[2]/div[1]/div/div[1]/table/tbody/tr/td[1]/div[2]/div[1]/span')
    let textfrtotal = await page.evaluate(textfrtotal => textfrtotal.textContent, frtotal[0]);
    
    const frguerison = await page.$x('//*[@id="rhs"]/div[2]/div/div/div/div/div[2]/div[1]/div/div[1]/table/tbody/tr/td[2]/div[2]/div[1]/span')
    let textfrgueris = await page.evaluate(textfrgueris => textfrgueris.textContent, frguerison[0]);
    
    const frdeces = await page.$x('//*[@id="rhs"]/div[2]/div/div/div/div/div[2]/div[1]/div/div[1]/table/tbody/tr/td[3]/div[2]/div[1]/span')
    let textfrdeces = await page.evaluate(textfrdeces => textfrdeces.textContent, frdeces[0]);
  
    const worldtotal = await page.$x('//*[@id="rhs"]/div[2]/div/div/div/div/div[2]/div[1]/div/div[2]/table/tbody/tr/td[1]/div[2]/div[1]/span')
    let textworldtotal = await page.evaluate(textworldtotal => textworldtotal.textContent, worldtotal[0]);
    
    const worldguerison = await page.$x('//*[@id="rhs"]/div[2]/div/div/div/div/div[2]/div[1]/div/div[2]/table/tbody/tr/td[2]/div[2]/div[1]/span')
    let textworldgueris = await page.evaluate(textworldgueris => textworldgueris.textContent, worldguerison[0]);
    
    const worlddeces = await page.$x('//*[@id="rhs"]/div[2]/div/div/div/div/div[2]/div[1]/div/div[2]/table/tbody/tr/td[3]/div[2]/div[1]/span')
    let textworlddeces = await page.evaluate(textworlddeces => textworlddeces.textContent, worlddeces[0]);
    
    console.log('France :')
    console.log(" -",texttotal, textfrtotal)
    console.log(" -",textguerison, textfrgueris)
    console.log(" -",textdeces, textfrdeces)
  
    console.log('')
  
    console.log('Monde :')
    console.log(" -",texttotal, textworldtotal)
    console.log(" -",textguerison, textworldgueris)
    console.log(" -",textdeces, textworlddeces)
   
    
    const covidcases = new MessageEmbed()
      .setColor('#000000')
      .addField({name:'MONDE :'})
      .addFields(
        { name: texttotal, value: textworldtotal, inline: true },
        { name: textguerison, value: textworldgueris, inline: true },
        { name: textdeces, value: textworlddeces, inline: true },
      )
      .addField({name:'FRANCE :'})
      .addFields(
        { name: texttotal, value: textfrtotal, inline: true },
        { name: textguerison, value: textfrgueris, inline: true },
        { name: textdeces, value: textfrdeces, inline: true },
      )
      .setTimestamp()
    
    browser.close();
    opts.event.channel.send(covidcases);
  
  }
  
  scrapeProduct('https://www.google.com/search?q=covid&rlz=1C5CHFA_enFR917FR917&oq=covid&aqs=chrome.0.69i59j0i20i263i433j0l2j0i20i263i433j69i60l3.788j0j7&sourceid=chrome&ie=UTF-8')
  
}