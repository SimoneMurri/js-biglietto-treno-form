function calcolaPrezzo() {

    const userDistance = parseFloat(document.getElementById("distance").value);
    const userAge = parseInt(document.getElementById("age").value);

    let price = userDistance * 0.1976;

    const isUserTeen = userAge < 18;
    const isUserElder = userAge >= 65;

    if (isUserTeen < userAge) {
        price = price - (price * 17.65 / 100);
    } else if (isUserElder >= userAge) {
        price = price - (price * 53.27 / 100);
    }

    console.log("il prezzo totale del biglietto è: " + price.toFixed(2) + " €");
}

