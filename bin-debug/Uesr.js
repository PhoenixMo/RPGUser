var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Cache = function (target, propertyName, desc) {
    var getter = desc.get;
    desc.get = function () {
        var cacheKey = "_cache" + propertyName;
        if (this[cacheKey] == 0 || this["flag"]) {
            this[cacheKey] = getter.apply(this);
            this["flag"] = true;
        }
        else
            console.log("老子不算");
        return this[cacheKey];
    };
    return desc;
};
var User = (function () {
    function User() {
        this.Gold = 0;
        this.Lv = 1;
        this.flag = false;
        this.HeroList = [];
        this.myHero = [];
        this._cachemyPower = 0;
    }
    var d = __define,c=User,p=c.prototype;
    d(p, "myPower"
        ,function () {
            var add = 0;
            for (var _i = 0, _a = this.myHero; _i < _a.length; _i++) {
                var h = _a[_i];
                add += h.myPower;
            }
            return add;
        }
    );
    p.addHero = function (H) {
        this.myHero.push(H);
        this.flag = true;
    };
    __decorate([
        Cache
    ], p, "myPower", null);
    return User;
}());
egret.registerClass(User,'User');
var Hero = (function () {
    function Hero() {
        this.Lv = 1;
        this.HP = 1;
        this._cachemyPower = 0;
        this._cachemaxHP = 0;
        this._cacheAtt = 0;
        this._cacheDef = 0;
        this.flag = false;
        this.myEquipments = [];
    }
    var d = __define,c=Hero,p=c.prototype;
    d(p, "maxHP"
        ,function () {
            var a = 0;
            a += this.Lv * 10;
            this.myEquipments.forEach(function (Eq) { return a += Eq.maxHP; });
            return a;
        }
    );
    ;
    d(p, "Att"
        ,function () {
            var a = 0;
            a += this.Lv * 10;
            this.myEquipments.forEach(function (Eq) { return a += Eq.Att; });
            return a;
        }
    );
    d(p, "Def"
        ,function () {
            var a = 0;
            a += this.Lv * 10;
            this.myEquipments.forEach(function (Eq) { return a += Eq.Def; });
            return a;
        }
    );
    ;
    d(p, "myPower"
        ,function () {
            return this.maxHP + this.Att + this.Def;
        }
    );
    p.addEquipment = function (E) {
        this.myEquipments.push(E);
        this.flag = true;
    };
    __decorate([
        Cache
    ], p, "maxHP", null);
    __decorate([
        Cache
    ], p, "Att", null);
    __decorate([
        Cache
    ], p, "Def", null);
    return Hero;
}());
egret.registerClass(Hero,'Hero');
var Equipment = (function () {
    function Equipment() {
        this._cachemaxHP = 0;
        this._cacheAtt = 0;
        this._cacheDef = 0;
        this.flag = false;
        this.myGams = [];
        this.ID = 0;
    }
    var d = __define,c=Equipment,p=c.prototype;
    d(p, "maxHP"
        ,function () {
            var a = 0;
            this.myGams.forEach(function (Eq) { return a += Eq.maxHP; });
            return a;
        }
    );
    ;
    d(p, "Att"
        ,function () {
            var a = 0;
            this.myGams.forEach(function (Eq) { return a += Eq.Att; });
            return a;
        }
    );
    ;
    d(p, "Def"
        ,function () {
            var a = 0;
            this.myGams.forEach(function (Eq) { return a += Eq.Def; });
            return a;
        }
    );
    ;
    p.addGem = function (G) {
        this.myGams.push(G);
        this.flag = true;
    };
    __decorate([
        Cache
    ], p, "maxHP", null);
    __decorate([
        Cache
    ], p, "Att", null);
    __decorate([
        Cache
    ], p, "Def", null);
    return Equipment;
}());
egret.registerClass(Equipment,'Equipment');
var gem = (function () {
    function gem(mH, A, D) {
        this.ID = 0;
        this.maxHP = 1;
        this.Att = 1;
        this.Def = 1;
        this.maxHP = mH;
        this.Att = A;
        this.Def = D;
    }
    var d = __define,c=gem,p=c.prototype;
    return gem;
}());
egret.registerClass(gem,'gem');
//# sourceMappingURL=Uesr.js.map