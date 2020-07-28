// ----------------------------- SOAL -----------------------------
// Buatlah program searching nama yang dapat dibatasi jumlah outputnya yang menerapkan 
// callback function dengan data sebagai berikut:
// const name = [
//     ‘Abigail’, ‘Alexandra’, ‘Alison’,
//     ‘Amanda’, ‘Angela’, ’Bella’,
//     ‘Carol’, ‘Caroline’, ‘Carolyn’,
//     ‘Deirdre’, ‘Diana’, ‘Elizabeth’,
//     ‘Ella’, ‘Faith’, ‘Olivia’, ‘Penelope’]

// Contoh: searchName(“an”, 3, callback)
// Output: [“Alexandra”,”Amanda”,”Angela”]

// ----------------------------- JAWABAN -----------------------------

const names = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 
'Carolyn', 'Deirdre', 'Diana', 'Elizabeth','Ella', 'Faith', 'Olivia', 'Penelope'];

const searchName = (key, lim, callback) => {
    const filteredNames = names.filter((value) => value.toLowerCase().includes(key.toLowerCase()));
    const result = filteredNames.slice(0, lim);
    callback(result);
};

const showResult = (result) => {
    console.log(result);
};

searchName('an', 3, showResult);