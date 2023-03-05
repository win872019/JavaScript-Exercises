var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    started: false,
    fuel: 0,

    start: function() {
        this.started = true;
    },

    stop: function() {
        this.started = false;
    },

    drive: function() {
        if (this.started) {
            if (this.fuel > 0) {
                alert(this.make + " " + this.model + " goes zoom zoom!");
                this.fuel = this.fuel - 1;
            } else {
            alert("Uh oh, out of fuel.");
            this.stop();
            }
        } else {
            alert("You need to start the engine first.")
        }
    },

    addFuel: function(amount) {
        this.fuel = this.fuel + amount;
        return("added" + " " + amount + "L fuel.")
    }
};

fiat.start();

