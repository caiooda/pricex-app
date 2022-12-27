import cron from 'cron';
import twilio from 'twilio';
import { clients } from './clients.mjs';
import { getBitcoinPrice, getBNBPrice, getCardanoPrice, getDogecoinPrice, getEthereumPrice, getSolanaPrice, getXRPPrice } from './crypto.mjs';
import { getAllStocks } from './stocks.mjs';

// Your Account SID and Auth Token from twilio.com/console
const accountSid = 'AC538439564bf03a7451be572040efed60';
const authToken = 'cf85d7fb1656846a3390f32ccd7d91e7';

// Initialize the Twilio client
const connection = new twilio(accountSid, authToken);

// Use the Twilio client to send an SMS message
const morning = new cron.CronJob('00 10 * * *', async function () {
    const btc = await getBitcoinPrice();
    const eth = await getEthereumPrice();
    const sol = await getSolanaPrice();
    const bnb = await getBNBPrice();
    const ada = await getCardanoPrice();
    const xrp = await getXRPPrice();
    const doge = await getDogecoinPrice();


    const API_KEY = 'SFJXQKGTIKJV6355';
    const stocks = ['AAPL', 'NFLX', 'META', 'GOOGL', 'AMZN'];
    let priceStocks = await getAllStocks(stocks, API_KEY)

    const body = `
        Cotação Criptomoedas: 
            
        Bitcoin (BTC): ${btc}
        Ethereum (ETH): ${eth}
        Cardano (ADA): ${ada}
        XRP (XRP): ${xrp}
        Solana (SOL): ${sol}
        Dogecoin (DOGE): ${doge}
        BNB (BNB): ${bnb}

Cotação Ações: 
            
        Apple (APPL): ${priceStocks[0].price}
        Netflix (NFLX): ${priceStocks[1].price}
        Meta (META): ${priceStocks[2].price}
        Google (GOOGL): ${priceStocks[3].price}
        Amazon (AMZN): ${priceStocks[4].price}

Desenvolvido por Caio Santos Oda
E-mail: caiooda@hotmail.com
Celular: (11) 94240-9633 
    `;
    for (const client of clients) {
        const to = `whatsapp:${client.number}`
        connection.messages
            .create({
                to,
                body,
                from: 'whatsapp:+14155238886' // Your Twilio phone number
            })
            .then(message => console.log(message.sid))
            .done();
    }

}, {
    timeZone: 'America/Sao_Paulo'
});

const afternoon = new cron.CronJob('00 15 * * *', async function () {
    const btc = await getBitcoinPrice();
    const eth = await getEthereumPrice();
    const sol = await getSolanaPrice();
    const bnb = await getBNBPrice();
    const ada = await getCardanoPrice();
    const xrp = await getXRPPrice();
    const doge = await getDogecoinPrice();


    const API_KEY = 'SFJXQKGTIKJV6355';
    const stocks = ['AAPL', 'NFLX', 'META', 'GOOGL', 'AMZN'];
    let priceStocks = await getAllStocks(stocks, API_KEY)

    const body = `
        Cotação Criptomoedas: 
            
        Bitcoin (BTC): ${btc}
        Ethereum (ETH): ${eth}
        Cardano (ADA): ${ada}
        XRP (XRP): ${xrp}
        Solana (SOL): ${sol}
        Dogecoin (DOGE): ${doge}
        BNB (BNB): ${bnb}

Cotação Ações: 
            
        Apple (APPL): ${priceStocks[0].price}
        Netflix (NFLX): ${priceStocks[1].price}
        Meta (META): ${priceStocks[2].price}
        Google (GOOGL): ${priceStocks[3].price}
        Amazon (AMZN): ${priceStocks[4].price}

Desenvolvido por Caio Santos Oda
E-mail: caiooda@hotmail.com
Celular: (11) 94240-9633 
    `;
    for (const client of clients) {
        const to = `whatsapp:${client.number}`
        connection.messages
            .create({
                to,
                body,
                from: 'whatsapp:+14155238886' // Your Twilio phone number
            })
            .then(message => console.log(message.sid))
            .done();
    }
}, {
    timeZone: 'America/Sao_Paulo'
});

const night = new cron.CronJob('00 20 * * *', async function () {
    const btc = await getBitcoinPrice();
    const eth = await getEthereumPrice();
    const sol = await getSolanaPrice();
    const bnb = await getBNBPrice();
    const ada = await getCardanoPrice();
    const xrp = await getXRPPrice();
    const doge = await getDogecoinPrice();


    const API_KEY = 'SFJXQKGTIKJV6355';
    const stocks = ['AAPL', 'NFLX', 'META', 'GOOGL', 'AMZN'];
    let priceStocks = await getAllStocks(stocks, API_KEY)

    const body = `
        Cotação Criptomoedas: 
            
        Bitcoin (BTC): ${btc}
        Ethereum (ETH): ${eth}
        Cardano (ADA): ${ada}
        XRP (XRP): ${xrp}
        Solana (SOL): ${sol}
        Dogecoin (DOGE): ${doge}
        BNB (BNB): ${bnb}

Cotação Ações: 
            
        Apple (APPL): ${priceStocks[0].price}
        Netflix (NFLX): ${priceStocks[1].price}
        Meta (META): ${priceStocks[2].price}
        Google (GOOGL): ${priceStocks[3].price}
        Amazon (AMZN): ${priceStocks[4].price}

Desenvolvido por Caio Santos Oda
E-mail: caiooda@hotmail.com
Celular: (11) 94240-9633 
    `;
    for (const client of clients) {
        const to = `whatsapp:${client.number}`
        connection.messages
            .create({
                to,
                body,
                from: 'whatsapp:+14155238886' // Your Twilio phone number
            })
            .then(message => console.log(message.sid))
            .done();
    }
}, {
    timeZone: 'America/Sao_Paulo'
});

morning.start();
afternoon.start();
night.start();
