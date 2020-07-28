// ----------------------------- SOAL -----------------------------
// Buat dan jelaskanlah 10 method bawaan JavaScript (Built-in Functions) 
// beserta contoh penggunaannya

// ----------------------------- JAWABAN -----------------------------

// 1. charAt() -> me-return karakter pada index spesifik dalam sebuah string
// Syntax : string.charAt(index)
// Contoh :

// const str = 'Hello, World!';

// console.log(str.length-1);

// console.log(`Index ke-0 / karakter pertama pada str adalah ${str.charAt(0)}`);
// console.log(`Index ke-1 / karakter ke-2 pada str adalah ${str.charAt(1)}`);
// console.log(`Index ke-6 / karakter ke-7 pada str adalah ${str.charAt(6)}`);
// console.log(`Index ke-12 / karakter ke-13 pada str adalah ${str.charAt(12)}`);

// 2. concat() -> menggabungkan 2 atau lebih string / array
// Syntax : string1.concat(string2, string3, ..., stringX) atau
//          array1.concat(array2, array3, ..., arrayX)
// Contoh : 

// const str = 'Hello';
// const str2 = 'World';

// console.log(str);
// console.log(str2);

// console.log(str.concat(str2));

// const words = ['Hello', 'World'];
// const nums = [1, 2, 3];

// console.log(words.concat(nums));

// 3. replace() -> mencari value spesifik dalam sebuah string, lalu me-return string baru
// yang dimana value spesifik tadi sudah diganti
// Syntax : string.replace(searchvalue, newvalue)
// Contoh :

// const str = 'Nama saya Budi, umur saya 20 tahun. Saya adalah seorang Web Developer';

// const newStr = str.replace('saya', 'kamu');
// console.log(newStr);

// const newStr = str.replace(/saya/g, 'kamu');
// console.log(newStr);

// const newStr = str.replace(/saya/gi, 'kamu');
// console.log(newStr);

// 4. search() -> mencari value spesifik dalam sebuah string, lalu me-return posisi indexnya
// Syntax : string.search(searchvalue)
// Contoh : 

// const str = 'Ini adalah mobil berwarna merah';
// const match = str.search(/mobil/i);

// console.log(match);

// if(match == -1) {
//     console.log('variabel str tidak mengandung kata mobil');
// } else {
//     console.log('variabel str mengandung kata mobil');
// }

// 5. slice() -> meng-ekstrak bagian dari string atau array, lalu me-return bagian 
// yang diekstrak ke dalam string atau array baru
// Syntax : string.slice(start, end) atau
//          array.slice(start, end)
// Contoh :

// const str = 'Hello, World!';
// const newStr = str.slice(7, -1);

// console.log(newStr);

// const fruits = ['Apple', 'Orange', 'Mango', 'Banana', 'Durian'];
// const newFruits = fruits.slice(1, 4);

// console.log(newFruits);

// 6. split() -> digunakan untuk memisahkan string menjadi array substring dan me-return array baru
// Syntax : string.split(separator, limit)
// Contoh : 

// const str = 'Ini adalah mobil berwarna merah';
// const newStr = str.split(' ', 3);

// console.log(newStr);

// 7. toLowerCase() -> mengubah string menjadi huruf kecil
// Syntax : string.toLowerCase()
// Contoh :

// const str = 'Hello, World!';

// console.log(str.toLowerCase());

// 8. toUpperCase() -> mengubah string menjadi huruf besar
// Syntax : string.toUpperCase()
// Contoh :

// const str = 'Hello, World!';

// console.log(str.toUpperCase());

// 9. every() -> mengecek apakah seluruh element pada array memenuhi kondisi
// Syntax : array.every(function(currentValue, index, arr))
// Contoh :

// const ages = [30, 21, 7, 5, 13];
// const result = ages.every((value) => value >= 17);

// if (!result) {
//     console.log('Ada data usia yang dibawah 17 tahun');
// } else {
//     console.log('Seluruh data usia 17 tahun keatas');
// }

// 10. reverse() -> membalikkan urutan element pada sebuah array
// Syntax : array.reverse()
// Contoh : 

// let arr = ['A', 1, 'B', 2, 'C', 3];
// console.log(arr.reverse());