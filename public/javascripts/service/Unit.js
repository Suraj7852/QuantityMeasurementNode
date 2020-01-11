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

        if (data.type == Type.Volume) {
            let volumeObj = [
                {"type": "GALLON", "values": 3780},
                {"type": "LITRE", "values": 1000},
                {"type": "MILILITRE", "values": 1}
            ];
            this.converterArray[0] = volumeObj.find(o => o.type == data.unitType).values;
            this.converterArray[1] = volumeObj.find(o => o.type == data.convertTo).values;
            callback(null, this.converterArray);
        }

        if (data.type == Type.Weight) {
            let weightObj = [
                {"type": "TONNE", "values": 1000000 },
                {"type": "KILOGRAM", "values": 1000},
                {"type": "GRAM", "values": 1}
            ];
            this.converterArray[0] = weightObj.find(o => o.type == data.unitType).values;
            this.converterArray[1] = weightObj.find(o => o.type == data.convertTo).values;
            callback(null, this.converterArray);
        }

        if (data.type == Type.Temperature) {
            let temperatureObj = [
                {"type": "CELSIUS"},
                {"type": "FAHRENHEIT"}
            ];
            let value = temperatureObj.find(o => o.type == data.convertTo).type;
            if (data.unitType == value)
                callback(null, data.value * (9 / 5) + 32);
            else
                callback(null, (data.value - 32) * (5 / 9));
        } else
            callback({message: "Invalid Type"});
    }
}

const Type = {
    Length: "Length", Volume: "Volume", Weight:"Weight", Temperature:"Temperature"
};
module.exports = new Unit();