// saol 1
for (let i = 0; i < 10; i++) {
    console.log(i)
}

// soal 2
for (var i = 1; i <= 10; i++) {
    if (i % 2 === 1) {
        console.log(i)
    }
}

// saol 3
for (var i = 1; i <= 8; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

// soal 4
let array1 = [1, 2, 3, 4, 5, 6]
const [a, b, c, d, e, f] = array1
console.log(f)

// soal 5
let array2 = [5, 2, 4, 1, 3, 5]
array2.sort()
console.log(array2)

// soal 6
let array3 = ["selamat", "anda", "melakukan", "perulangan", "array", "dengan", "for"]
for (var i = 0; i < array3.length; i++) {
    console.log(array3[i]);
}

// soal 7
let array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (var i = 1; i < array4.length; i++) {
    if (i % 2 === 1) {
        console.log(array4[i])
    }
}

// soal 8
let kalimat = ["saya", "sangat", "senang", "belajar", "javascript"]
const kalimat2 = kalimat.join(' ')
console.log(kalimat2)

// soal 9
let sayuran = []
sayuran.push("Kangkung", "Bayam", "Buncis", "Kubis", "Timun", "Seledri", "Tauge")
console.log(sayuran)