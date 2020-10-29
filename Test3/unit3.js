let str=prompt("Chuoi kiem tra")
let strArr=["a","o","u","i","e"]
let mess="";
function check(str) {
    let count=0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < strArr.length; j++) {
            if (strArr[j]==str[i]){
                count++
            }
        }
    }
    if(count==0) return false;
    else {
        mess=`Trong chuoi co so ky tu nguyen am la: ${count}`
        return mess;
    }
}
console.log(check(str))
