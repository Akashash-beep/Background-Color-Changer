let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F',];
const btn = document.getElementById('btn');
let hex_text = document.getElementById('hex_text');
let hero = document.getElementById('hero');
btn.addEventListener('click', () => {
    console.log(hex_text.innerText);
    let hex_color = "#"
    for (let i = 0; i < 6; i++) {
        hex_color += hex[randombg()];
    }
    hero.style.backgroundColor = hex_color;
    hex_text.innerHTML = hex_color;
    // hex_text.style.color = hex_color;

})



function randombg() {
    return Math.floor(Math.random() * hex.length);
}
