let sonlar = [2, 4, 9, 10, 45, 67, 8, 90];
let natija = [];

for (let i = 0; i < 8; i++) {
    if (sonlar[i] % 2 === 0) {
        natija.push(sonlar[i]);
    }
}

console.log(natija)