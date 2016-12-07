
var Cache: MethodDecorator = (target: any, propertyName, desc: PropertyDescriptor) => {
    const getter = desc.get;

    desc.get = function () {
     var cacheKey = "_cache" + propertyName;

        if (this[cacheKey]==0 || this["flag"]) {
            this[cacheKey] = getter.apply(this);
          this["flag"] =true;
          
        }else console.log("老子不算");

        return this[cacheKey];
    }

    return desc;
}



class User {

private Gold=0;
private Lv=1;
private flag=false;

HeroList:Hero[] = [];
myHero:Hero[] = [];

private _cachemyPower=0;

@Cache
public get myPower():number {

    var add=0;

    for(let h of this.myHero){
        add+=h.myPower;
        }

    return add;
    }

public addHero(H:Hero){
this.myHero.push(H);
this.flag=true;
}


}

class Hero {

private Lv=1;
private HP=1;
private _cachemyPower=0;
private _cachemaxHP=0;
private _cacheAtt=0;
private _cacheDef=0;
private flag=false;
 myEquipments:Equipment[]=[];

@Cache
private get maxHP():number {
    var a= 0;
    a+=this.Lv*10;
    this.myEquipments.forEach(Eq => a+=Eq.maxHP);
    return a;
};

@Cache
private get Att():number {

    var a= 0;
    a+=this.Lv*10;
    this.myEquipments.forEach(Eq => a+=Eq.Att)
    return a;

}

@Cache
private get Def():number {

    var a= 0;
    a+=this.Lv*10;
    this.myEquipments.forEach(Eq => a+=Eq.Def)
    return a;

};


public get myPower():number {
    return this.maxHP+this.Att+this.Def;
}
public addEquipment(E:Equipment){
this.myEquipments.push(E);
this.flag=true;
}

}

class Equipment {

private _cachemaxHP=0;
private _cacheAtt=0;
private _cacheDef=0;
private flag=false;

@Cache
get maxHP(){
    var a= 0;
    this.myGams.forEach(Eq => a+=Eq.maxHP);
    return a;

};
@Cache
get Att(){
    var a= 0;
    this.myGams.forEach(Eq => a+=Eq.Att);
    return a;

};
@Cache
get Def(){
    var a= 0;
    this.myGams.forEach(Eq => a+=Eq.Def);
    return a;

};
 myGams:gem[]=[];
private ID=0;
private name:string;


constructor(){

    
}

public addGem(G:gem){
this.myGams.push(G);
this.flag=true;
}

}


class gem {



private ID=0;
private name:string;
 maxHP=1;
 Att=1;
 Def=1;

constructor( mH:number,A:number,D:number){
    this.maxHP =mH;
    this.Att =A;
    this.Def =D;
}
}




