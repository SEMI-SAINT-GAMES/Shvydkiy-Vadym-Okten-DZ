const usdRate = {
    sale: 37.4,
    buy: 36.5
}
const eurRate = {
    sale: 41.4,
    buy: 39.8
}
const gbpRate = {
    sale: 47.6,
    buy: 45.7
}
const plnRate = {
    sale: 9,
    buy: 8.7
}
function Exchange()
{
    let saleResult 
    let buyResult 
   
    let amount = document.getElementById("amount").value;
    
    switch(document.getElementById("to").value)
    {
     case `usd`:
        saleResult = (amount / usdRate.sale).toFixed(3)
        buyResult = (amount / usdRate.buy).toFixed(3);
        break;
    case `eur`:
        saleResult = (amount / eurRate.sale).toFixed(3)
        buyResult = (amount / eurRate.buy).toFixed(3);
        break;
    case `gbp`:
        saleResult = (amount / gbpRate.sale).toFixed(3)
        buyResult = (amount / gbpRate.buy).toFixed(3);
        break;
    case `pln`:
        saleResult = (amount / plnRate.sale).toFixed(3)
        buyResult = (amount / plnRate.buy).toFixed(3);
        break;
     default:
        console.log(`NO`);
        break;    
    }
    document.getElementById("result").value = `For buy: ${buyResult}              For sale: ${saleResult}`
    // document.write(`<p> For buy: ${buyResult}, For sale: ${saleResult} </p>`)  КОЛИ РОБЛЮ ОСЬ ТАК ОТРИМУЮ ПОМИЛКУl: form submission canceled because the form is not connected
    // Текст відображається, але на новій сторінці і без стилізаціі, не можу зрозуміти в чому причина


}


