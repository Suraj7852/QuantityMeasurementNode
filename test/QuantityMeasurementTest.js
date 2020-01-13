const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

chai.should();
chai.use(chaiHttp);

describe('convert API', () => {
    it('should return 422 status if empty body sent', function () {
        chai.request(server)
            .get('/convert')
            .send({
                        "Type": "",
                        "Value": "97",
                        "UnitType": "FAHRENHEIT",
                        "ConvertTo": "CELSIUS"})
            .end((req,res) => {
                res.should.have.status(422);
                // done()
            });
    });
});