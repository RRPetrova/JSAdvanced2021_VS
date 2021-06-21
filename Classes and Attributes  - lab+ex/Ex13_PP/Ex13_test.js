const PaymentPackage = require("./Ex13_paymentPackage");
const { expect, assert } = require('chai');


describe("PaymentPack tests", () => {
  let pp = undefined;
  beforeEach(() => {
    pp = new PaymentPackage("pesho", 12);
  })

  


  it("test constructor valid", () => {
    assert.equal(pp.name, "pesho");
    assert.equal(pp.value, 12);
    assert.equal(pp._VAT, 20);
    assert.equal(pp.active, true);
  })

  it("test constructor valid_", () => {
    assert.equal(pp._name, "pesho");
    assert.equal(pp._value, 12);
    assert.equal(pp._VAT, 20);
    assert.equal(pp._active, true);
  })

  it("test name", () => {
    assert.equal(pp._name, "pesho");
    pp.name = "gosho";
    assert.equal(pp.name, "gosho");

    assert.throw(() => {
      pp.name = ""
    }, "Name must be a non-empty string");

    assert.throw(() => {
      pp.name = 2
    }, "Name must be a non-empty string");

    assert.throw(() => {
      pp.name = undefined;
    }, "Name must be a non-empty string");
  })


  it("test VAT", () => {
    assert.equal(pp.VAT, 20);
    pp.VAT = 40;
    assert.equal(pp.VAT, 40);

    assert.throw(() => {
      pp.VAT = ""
    }, "VAT must be a non-negative number");

    assert.throw(() => {
      pp.VAT = undefined
    }, "VAT must be a non-negative number");

    assert.throw(() => {
      pp.VAT = -2
    }, "VAT must be a non-negative number");
  })


  it("test value", () => {
    assert.equal(pp.value, 12);
    pp.value = 40;
    assert.equal(pp.value, 40);

    assert.throw(() => {
      pp.value = ""}, "Value must be a non-negative number");

    assert.throw(() => {
      pp.value = -2 }, "Value must be a non-negative number");

    assert.doesNotThrow(() => {
      pp.value = 0 }, "Value must be a non-negative number");
  })


  it("test active", () => {
    assert.equal(pp.active, true);
    pp.active = false;
    assert.equal(pp.active, false);

    assert.throw(() => {
      pp.active = ""
    }, "Active status must be a boolean");

    assert.throw(() => {
      pp.active = undefined
    }, "Active status must be a boolean");


    assert.throw(() => {
      pp.active = -2
    }, "Active status must be a boolean");
  })

  it("test tostring", () => {

    function getString(name, value, VAT = 20, active = true) {
      return [
        `Package: ${name}` + (active === false ? ' (inactive)' : ''),
        `- Value (excl. VAT): ${value}`,
        `- Value (VAT ${VAT}%): ${value * (1 + VAT / 100)}`
      ].join('\n');
    }
    pp = new PaymentPackage("pesho", 12);
    assert.equal(pp.toString(), getString("pesho", 12));
    pp.active = false;
    assert.equal(pp.toString(), getString("pesho", 12, 20, false));
    pp.VAT = 200;
    assert.equal(pp.toString(), getString("pesho", 12, 200, false));
    pp.active = true;
    assert.equal(pp.toString(), getString("pesho", 12, 200, true));
    pp.value = 5;
    assert.equal(pp.toString(), getString("pesho", 5, 200, true));
  });
});
