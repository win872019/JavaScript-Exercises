function findCarInLot(car) {
    for (var i = 0; i < lot.length; i++) {
        if (car === lot[i]) {
            return i;
        }
    }
    return -1;
//for迴圈的條件 lot.length 誤打成 location.length 時，console.log loc1到loc4的結果為回傳-1 -1 -1 -1

}
var chevy = {
    make: "Chevy",
    model:"Bel Air"
};

var taxi = {
    make: "Webville Motors",
    model:"Taxi"
};

var fiat1 = {
    make: "Fiat",
    model:"500"
};

var fiat2 = {
    make: "Fiat",
    model:"500"
};

var toyota = {
    make: "Toyota",
    model:"320"
};
//if toyota物件不存在，叫用findCarInLot函式，引數帶入toyota，程式無法執行

var lot = [chevy, taxi, fiat1, fiat2];

var loc1 = findCarInLot(fiat2);
var loc2 = findCarInLot(taxi);
var loc3 = findCarInLot(chevy);
var loc4 = findCarInLot(fiat1);
var loc5 = findCarInLot(toyota);

console.log(loc1, loc2, loc3, loc4, loc5);
