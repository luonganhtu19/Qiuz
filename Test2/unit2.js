let arrNumber = [1, 2, 3, 4, 5, 9, 15, 95]

function checkIndex(x, arrNumber) {
    let mess = "";
    for (let i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] == x) {
            mess = `Phan tu ${x} duoc tim thay trong mang tai vi tri thu ${i} trong mang`
        }
    }
    if (mess == "") {
        mess = `Khong tim thay phan tu thu ${x} trong mang`
    }
    return mess;
}

a = checkIndex(5, arrNumber)
console.log(a);