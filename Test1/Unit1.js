function firstDegreeEquation(a,b) {
    // ax+b=0
    let mess="";
    let x=0;
    if(a==0){
        if (b==0){
            mess="Phuong trinh vo so nghiem"
        }else {
            mess="Phuong trinh vo nghiem"
        }
    }else {
        x=-b/a;
        mess="Phuong trinh co 1 nghiem: "+x;
    }
	return mess;
}
let a1=firstDegreeEquation(0,1)
