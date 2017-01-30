class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.minValue = min;
    	this.maxValue = max;
    }

    guess() {
        this.middle = Math.ceil((this.maxValue + this.minValue)/2);
    	return this.middle;   	
    }

    lower() {
        this.minValue = this.middle;        
    }

    greater() {
        this.maxValue = this.middle; 
    }
}

module.exports = GuessingGame;
