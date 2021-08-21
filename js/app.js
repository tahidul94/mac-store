
function setTotalPrice() {
    let basePrice = parseInt(1299);
    let ramPrice = parseInt(document.getElementById('ram-cost').innerText);
    let ssdPrice = parseInt(document.getElementById('ssd-cost').innerText);
    let deliveryCost = parseInt(document.getElementById('delivery-cost').innerText);
    let sum = basePrice + ramPrice + ssdPrice + deliveryCost;  //total sum before pomo code
    document.getElementById('total-price').innerText = sum;
    document.getElementById('grand-total').innerText = sum;
}
function getEvent(productId, price) {
    document.getElementById(productId).innerText = price;
}
//sum after pomo code
function getDiscountPrice() {
    let total = document.getElementById('total-price').innerText;
    const pomoCheck = document.getElementById('pomo-code').value;
    if (pomoCheck.toLowerCase() === 'stevekaku') {
        const discount = total * 20 / 100;
        total -= discount;
        document.getElementById('grand-total').innerText = total; // total after pomo
    }
}
//Event handeler 
document.getElementById('ram-price-8gb').addEventListener('click', function () {
    getEvent('ram-cost', 0);
    setTotalPrice();
})
document.getElementById('ram-price-16gb').addEventListener('click', function () {
    getEvent('ram-cost', 180);
    setTotalPrice();
})
document.getElementById('ssd-price-256gb').addEventListener('click', function () {
    getEvent('ssd-cost', 0);
    setTotalPrice();
})
document.getElementById('ssd-price-512gb').addEventListener('click', function () {
    getEvent('ssd-cost', 100);
    setTotalPrice();
})
document.getElementById('ssd-price-1024gb').addEventListener('click', function () {
    getEvent('ssd-cost', 180);
    setTotalPrice();
})
document.getElementById('delivery-15days').addEventListener('click', function () {
    getEvent('delivery-cost', 0);
    setTotalPrice();
})
document.getElementById('delivery-3days').addEventListener('click', function () {
    getEvent('delivery-cost', 20);
    setTotalPrice();
})
document.getElementById('pomo-apply').addEventListener('click', function () {
    getDiscountPrice();
})


