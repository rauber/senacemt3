console.log("Salve");
const greetingMessage = () => {
    let h = new Date().getHours();
    if (h <= 5) return 'Boa Madrugada';
    if (h < 12) return 'Bom Dia';
    if (h < 19) return 'Boa Tarde';
    if (h < 24) return 'Boa Noite';
}
document.getElementById(l).innerHTML = greetingMessage();