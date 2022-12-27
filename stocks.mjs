import axios from 'axios';


async function getStockPrice(stock, key) {
    try {
        const response = await axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stock}&apikey=${key}`)
        const data = response.data;
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });
        const number = Number(data['Global Quote']['05. price'])
        return { stock: data['Global Quote']['01. symbol'], price: formatter.format(number) };
    } catch (error) {
        console.error(error);
    }
}


async function getAllStocks(stocks, key) {
    let list = []
    for (const stock of stocks) {
        list.push(await getStockPrice(stock, key))
    }
    return list
}

export { getAllStocks };

