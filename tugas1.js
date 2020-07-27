// ----------------------------- SOAL -----------------------------
// Buat dan jelaskanlah 10 method bawaan JavaScript (Built-in Functions) 
// beserta contoh penggunaannya

// ----------------------------- JAWABAN -----------------------------

// 1. charAt() -> Me-return karakter pada index spesifik dalam sebuah string
// Syntax : string.charAt(index)
// Contoh :

// let str = 'Hello, World!';

// console.log(str.length-1);

// console.log(`Index ke-0 / karakter pertama pada str adalah ${str.charAt(0)}`);
// console.log(`Index ke-1 / karakter ke-2 pada str adalah ${str.charAt(1)}`);
// console.log(`Index ke-6 / karakter ke-7 pada str adalah ${str.charAt(6)}`);
// console.log(`Index ke-12 / karakter ke-13 pada str adalah ${str.charAt(12)}`);

// 2. concat() -> menggabungkan 2 atau lebih string / array
// Syntax : string.concat(string2, string3, ..., stringX)
// Contoh : 

// let str = 'Hello';
// let str2 = ',';
// let str3 = 'World';
// let str4 = '!';

// console.log(str);
// console.log(str2);
// console.log(str3);
// console.log(str4);

// let str5 = str.concat(str2, str3, str4);

// console.log(str5);

// 3. replace() -> mencari value spesifik dalam sebuah string, lalu me-return string baru
// yang dimana value spesifik tadi sudah diganti
// Syntax : string.replace(searchvalue, newvalue)
// Contoh :

// let str = 'Nama saya Budi, umur saya 20 tahun. Saya adalah seorang Web Developer';

// let newStr = str.replace('saya', 'kamu');
// console.log(newStr);

// let newStr = str.replace(/saya/g, 'kamu');
// console.log(newStr);

// let newStr = str.replace(/saya/gi, 'kamu');
// console.log(newStr);

// 4. search() -> mencari value spesifik dalam sebuah string, lalu me-return posisi indexnya
// Syntax : string.search(searchvalue)
// Contoh : 

// let str = 'Ini adalah mobil berwarna merah';
// let match = str.search(/mobil/i);

// console.log(match);

// if(match == -1) {
//     console.log('variabel str tidak mengandung kata mobil');
// } else {
//     console.log('variabel str mengandung kata mobil');
// }

// 5. slice() -> meng-ekstrak bagian dari string, lalu me-return bagian yang diekstrak ke dalam string baru
// Syntax : string.slice(start, end)
// Contoh :

// let str = 'Hello, World!';
// let newStr = str.slice(7, -1);

// console.log(newStr);

// 6. split() -> digunakan untuk memisahkan string menjadi array substring dan me-return array baru
// Syntax : string.split(separator, limit)
// Contoh : 

// let str = 'Ini adalah mobil berwarna merah';
// let newStr = str.split(' ', 3);

// console.log(newStr);

// 7. toLowerCase() -> mengubah string menjadi huruf kecil
// Syntax : string.toLowerCase()
// Contoh :

// let str = 'Hello, World!';
// let lowStr = str.toLowerCase();

// console.log(lowStr);

// 8. toUpperCase() -> mengubah string menjadi huruf besar
// Syntax : string.toUpperCase()
// Contoh :

// let str = 'Hello, World!';
// let lowStr = str.toUpperCase();

// console.log(lowStr);

// 