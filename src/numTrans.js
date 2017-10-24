function numberTransition(comp, initialPrice, finalPrice) {
    var diff, del, slots=20, chPr, sign;

    diff = finalPrice - initialPrice;
    sign = diff < 0 ? -1 : 1;
    del = Math.abs(Math.abs(diff) < 20 ? 1 : diff/slots);
    del = sign * Math.ceil(del);
    chPr = +initialPrice;
    
    comp.className += " highlight";
    setTimeout(function updatePrice() {
        chPr += del;
        slots = finalPrice -chPr == 0 ? 1 : slots;
        valueChange(comp, chPr);
        slots--;
        slots > 0 ? setTimeout(updatePrice, 30) : endTransition();
    }, 30);

    function endTransition() {
        comp.classList.remove('highlight');
    }

    function valueChange() {
        var inr = comp.querySelector('.inr'), priceVal;
        priceVal = slots === 1 ? finalPrice : chPr;
        inr.setAttribute('data-price', priceVal);
        inr.nextSibling.textContent = priceVal;
    }
}
