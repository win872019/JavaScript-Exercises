var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    started: false,

    start: function() {
        this.started = true;
    },

    stop: function() {
        this.started = false;
    },

    drive: function() {
        if (this.started) {
        alert("Zoom zoom!");
        } else {
            alert("You need to start the engine first.");
        }
    }
};

//Compare function y() & function x()

function y(b) {
    b = 2 + b;
    console.log(b)  
}
y(fiat.passengers);
console.log(fiat);

function x(a) {
    a.passengers = 2 + a.passengers;
    console.log(a)  
}
x(fiat);
console.log(fiat);