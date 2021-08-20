const initial = document.querySelector('#initial-price');
const number = document.querySelector('#quantity');
const current = document.querySelector('#current-price');
const button = document.querySelector('#check');
const outputBox = document.querySelector('#output')

function submit(){
    var ip = Number(initial.value);
    var qty = Number(number.value);
    var curr = Number(current.value);

    if (initial.value === ''){
        alert('Enter Initial Price');
    }else if(number.value === ''){
        alert('Enter Quantity');
    }else if(current.value === ''){
        alert('Enter Current Price');
    }

    stockProfitLoss(ip,qty,curr);
}



function stockProfitLoss(initialPrice,number,currentPrice){
    if(currentPrice > initialPrice){
        var profit = (currentPrice - initialPrice) * number;
        var profitPercentage = (profit / initialPrice) * 100;
        outputBox.innerText = "Hey your profit is "+ profit + " and your profit percentage is " + profitPercentage +"%";
    }
    else if(currentPrice < initialPrice){
        var loss = (initialPrice - currentPrice) * number;
        var lossPercentage = (loss / initialPrice) * 100;
        outputBox.innerText = "Hey your loss is "+ loss + " and your loss percentage is " + lossPercentage +"%";
    }
    else{
        outputBox.innerText = "No pain and no gain and no gain and no pain";
    }
}
button.addEventListener('click', submit)