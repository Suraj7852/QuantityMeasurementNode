let unit = require('./Unit');

class QuantityMeasurementService {
    converterService(data, callback) {
        unit.type(data, (err, result) => {
            if (err)
                callback(err);
            else {
                if (data.type == "Temperature")
                    callback(null,{message: `converted ${data.unitType} to ${data.convertTo}`, result: result});
                else{
                    let value = data.value * result[0] / result[1];
                    callback(null, {message: `converted ${data.unitType} to ${data.convertTo}`, result: value});
                }
            }
        });
    }
}

module.exports = new QuantityMeasurementService();