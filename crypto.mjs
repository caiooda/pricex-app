import axios from 'axios';

async function getBitcoinPrice() {
    try {
        const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest', {
            params: {
                symbol: 'BTC',
                convert: 'BRL'
            },
            headers: {
                'X-CMC_PRO_API_KEY': 'bf712496-4f2c-4925-96c0-56762090f5d6'
            }
        });
        let formatar = response.data.data.BTC.quote.BRL.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        return formatar
    } catch (error) {
        console.error(error);
    }
}

async function getEthereumPrice() {
    try {
        const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest', {
            params: {
                symbol: 'ETH',
                convert: 'BRL'
            },
            headers: {
                'X-CMC_PRO_API_KEY': 'bf712496-4f2c-4925-96c0-56762090f5d6'
            }
        });
        let formatar = response.data.data.ETH.quote.BRL.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        return formatar
    } catch (error) {
        console.error(error);
    }
}

async function getBNBPrice() {
    try {
        const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest', {
            params: {
                symbol: 'BNB',
                convert: 'BRL'
            },
            headers: {
                'X-CMC_PRO_API_KEY': 'bf712496-4f2c-4925-96c0-56762090f5d6'
            }
        });
        let formatar = response.data.data.BNB.quote.BRL.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        return formatar
    } catch (error) {
        console.error(error);
    }
}

async function getCardanoPrice() {
    try {
        const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest', {
            params: {
                symbol: 'ADA',
                convert: 'BRL'
            },
            headers: {
                'X-CMC_PRO_API_KEY': 'bf712496-4f2c-4925-96c0-56762090f5d6'
            }
        });
        let formatar = response.data.data.ADA.quote.BRL.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        return formatar
    } catch (error) {
        console.error(error);
    }
}

async function getXRPPrice() {
    try {
        const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest', {
            params: {
                symbol: 'XRP',
                convert: 'BRL'
            },
            headers: {
                'X-CMC_PRO_API_KEY': 'bf712496-4f2c-4925-96c0-56762090f5d6'
            }
        });
        let formatar = response.data.data.XRP.quote.BRL.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        return formatar
    } catch (error) {
        console.error(error);
    }
}

async function getSolanaPrice() {
    try {
        const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest', {
            params: {
                symbol: 'SOL',
                convert: 'BRL'
            },
            headers: {
                'X-CMC_PRO_API_KEY': 'bf712496-4f2c-4925-96c0-56762090f5d6'
            }
        });
        let formatar = response.data.data.SOL.quote.BRL.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        return formatar
    } catch (error) {
        console.error(error);
    }
}

async function getDogecoinPrice() {
    try {
        const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest', {
            params: {
                symbol: 'DOGE',
                convert: 'BRL'
            },
            headers: {
                'X-CMC_PRO_API_KEY': 'bf712496-4f2c-4925-96c0-56762090f5d6'
            }
        });
        let formatar = response.data.data.DOGE.quote.BRL.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        return formatar
    } catch (error) {
        console.error(error);
    }
}


export { getBNBPrice, getBitcoinPrice, getCardanoPrice, getDogecoinPrice, getEthereumPrice, getSolanaPrice, getXRPPrice };
