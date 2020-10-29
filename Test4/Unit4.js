let arr=[]
class Animal {
    constructor(_name,_weight) {
    this.name=_name;
    this.weight=_weight;
    }
    set setName(_name){
        this.name=_name;
    }
    set setWeight(_weight){
        this.weight=_weight;
    }
    get getName(){
        return this.name;
    }
    get getWeight(){
        return this.weight;
    }
    toString(){
        let str=`Name: "${this.name}" and Weight: ${this.weight} kg`
        return  str;
    }
}
let objAnimal= new Animal();
objAnimal.setName="Elephant"
objAnimal.setWeight=45.6
objAnimal.toString()
let objAbimal2=new  Animal("Butterfly",0.5);
objAnimal.setName="Mouse";
console.log(objAbimal2.toString())