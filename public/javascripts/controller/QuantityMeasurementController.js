const service = require('../service/QuantityMeasurementService');

class QuantityMeasurementController {
    converterController(req, res) {
        let responseResult = {};
        req.checkBody('Type', 'measure type is required').notEmpty();
        req.checkBody('Value', 'value is required').notEmpty();
        req.checkBody('UnitType', 'unit type is required').notEmpty();
        req.checkBody('ConvertTo', 'convert to unit type is required').notEmpty();
        let errors = req.validationErrors();
        if (errors) {
            responseResult.sucess = false;
            responseResult.message = "आपके द्वारा प्राप्त डाटा गलत है";
            responseResult.errors = errors;
            return res.status(422).send(responseResult);
        } else {
            let requestObj = {
                type: req.body.Type,
                value: req.body.Value,
                unitType: req.body.UnitType,
                convertTo: req.body.ConvertTo
            };
            service.converterService(requestObj, (err, result) => {
                if (err) {
                    responseResult.sucess = false;
                    responseResult.message = "Response Validation Error";
                    responseResult.errors = err;
                    return res.status(400).send(responseResult);
                } else {
                    responseResult.sucess = true;
                    responseResult.message = "यह रहा आपका वैल्यू";
                    responseResult.result = result;
                    return res.status(200).send(responseResult);
                }
            })
        }
    }
}
module.exports = new QuantityMeasurementController();