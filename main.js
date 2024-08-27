/*let kota = ["Bandung", "Jakarta", "Banyuwangi"];
let y = 0;
while (y < kota.length){
    console.log("Saya akan pergi ke " + kota[y])
    y++
}


function tentukanGrade(IPK) {
    let grade;

    if (IPK > 3.5) {
        grade = "Cumlaude";
    } else if (IPK >= 3 && IPK <= 3.5) {
        grade = "Baik";
    } else {
        grade = "Cukup";
    }

    return grade;
}
*/

// Tentukan target nilai yang ingin ditebak
let targetNilai = Math.floor(Math.random() * 100) + 1; // Bilangan acak antara 1 dan 100
let tebakan = 0;
let jumlahPercobaan = 0;

while (tebakan !== targetNilai) {
    // Membuat bilangan acak antara 1 dan 100 untuk setiap percobaan
    tebakan = Math.floor(Math.random() * 100) + 1;
    jumlahPercobaan++;

    // Menampilkan percobaan saat ini
    console.log("Percobaan ke-" + jumlahPercobaan + ": Tebakan = " + tebakan);
}

// Jika ditemukan, cetak hasilnya
console.log("Selamat! Nilai yang dicari adalah " + targetNilai);
console.log("Ditemukan setelah " + jumlahPercobaan + " kali percobaan.");

// Membuat array dengan 10 bilangan acak antara 1 dan 100
let bilanganArray = [];
for (let i = 0; i < 10; i++) {
    bilanganArray[i] = Math.floor(Math.random() * 100) + 1;
}

// Menghitung total, rata-rata, min, dan max
let total = 0;
let min = bilanganArray[0];
let max = bilanganArray[0];

for (let i = 0; i < bilanganArray.length; i++) {
    // Menghitung total
    total += bilanganArray[i];
    
    // Menentukan nilai minimum
    if (bilanganArray[i] < min) {
        min = bilanganArray[i];
    }

    // Menentukan nilai maksimum
    if (bilanganArray[i] > max) {
        max = bilanganArray[i];
    }
}

// Menghitung rata-rata
let rataRata = total / bilanganArray.length;

// Menampilkan hasil
console.log("Array: " + bilanganArray);
console.log("Total: " + total);
console.log("Rata-rata: " + rataRata);
console.log("Min: " + min);
console.log("Max: " + max);
