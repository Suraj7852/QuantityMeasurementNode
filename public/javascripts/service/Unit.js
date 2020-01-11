class Unit {
    converterArray;

    constructor() {
        this.converterArray = [];
    }

    type(data, callback) {
        if (data.type == Type.Length) {
            let lengthObj = [
                {"type": "FEET", "values": 30.48},
                {"type": "INCH", "values": 2.54},
                {"type": "YARD", "values": 91.44},
                {"type": "CENTIMETER", "values": 1}
            ];
            this.converterArray[0] = lengthObj.find(o => o.type == data.unitType).values;
            this.converterArray[1] = lengthObj.find(o => o.type == data.convertTo).values;
            callback(null, this.converterArray);
        }
        else
            callback({message:"Invalid Type"});
    }
}

const Type = {
    Length: "Length",Volume: "Volume"
};
module.exports = new Unit();