
function setTotalPrice() {
    let d = parseInt(1299);
    let a = parseInt(document.getElementById('ram-cost').innerText);
    let b = parseInt(document.getElementById('ssd-cost').innerText);
    let c = parseInt(document.getElementById('delivery-cost').innerText);
    let sum = d + a + b + c;
    document.getElementById('total-price').innerText = sum;
    document.getElementById('grand-total').innerText = sum;
}
function getDiscountPrice() {
    let total = document.getElementById('total-price').innerText;
    const pomoCheck = document.getElementById('pomo-code').value;
    if (pomoCheck === 'stevekaku') {
        const discount = total * 20 / 100;
        total -= discount;
        document.getElementById('grand-total').innerText = total;
    }
}
document.getElementById('ram-price-8gb').addEventListener('click', function () {
    document.getElementById('ram-cost').innerText = 0;
    setTotalPrice();
})
document.getElementById('ram-price-16gb').addEventListener('click', function () {
    document.getElementById('ram-cost').innerText = 180;
    setTotalPrice();
})
document.getElementById('ssd-price-256gb').addEventListener('click', function () {
    document.getElementById('ssd-cost').innerText = 0;
    setTotalPrice();
})
document.getElementById('ssd-price-512gb').addEventListener('click', function () {
    document.getElementById('ssd-cost').innerText = 100;
    setTotalPrice();
})
document.getElementById('ssd-price-1024gb').addEventListener('click', function () {
    document.getElementById('ssd-cost').innerText = 180;
    setTotalPrice();
})
document.getElementById('delivery-15days').addEventListener('click', function () {
    document.getElementById('delivery-cost').innerText = 0;
    setTotalPrice();
})
document.getElementById('delivery-3days').addEventListener('click', function () {
    document.getElementById('delivery-cost').innerText = 20;
    setTotalPrice();
})
document.getElementById('pomo-apply').addEventListener('click', function () {
    getDiscountPrice()
})


