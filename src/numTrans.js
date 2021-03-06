function numberTransition(comp, final, initial) {
    let diff, del, slots=20, ch, sign;
    initial = initial || Math.abs(comp.innerHTML);

    diff = final - initial;
    sign = diff < 0 ? -1 : 1;
    del = Math.abs(Math.abs(diff) < 20 ? 1 : diff/slots);
    del = sign * Math.ceil(del);
    ch = +initial;
    
    comp.className += " highlight";
    setTimeout(function updatePrice() {
        ch += del;
        slots = final - ch === 0 ? 1 : slots;
        valueChange();
        slots--;
        slots > 0 ? setTimeout(updatePrice, 30) : endTransition();
    }, 30);

    function endTransition() {
        comp.classList.remove('highlight');
    }

    function valueChange() {
        comp.innerHTML = slots === 1 ? final : ch;
    }
}
