const { expect, assert } = require("chai");
const rgbToHexColor = require("./06_RGBToHex");

describe("rgb to hex valid", () => {
    it("valid integers", () => {
        assert.equal(rgbToHexColor(40, 50, 60), "#28323C");
    });

    it("valid integers 0", () => {
        assert.equal(rgbToHexColor(0, 0, 0), "#000000");
    });

    it("valid integers 255", () => {
        assert.equal(rgbToHexColor(255, 255, 255), "#FFFFFF");
    });


    it("not valid first integer big", () => {
        assert.equal(rgbToHexColor(500, 50, 60), undefined );
    });

    it("not valid first integer neg", () => {
        assert.equal(rgbToHexColor(-500, 50, 60), undefined );
    });

    it("not valid first integer 255", () => {
        assert.equal(rgbToHexColor(256, 50, 60), undefined );
    });

    it("not valid sec integer big", () => {
        assert.equal(rgbToHexColor(40, 300, 60),undefined);
    });

    it("not valid sec integer neg", () => {
        assert.equal(rgbToHexColor(40, -300, 60),undefined);
    });

    it("not valid sec integer 255", () => {
        assert.equal(rgbToHexColor(40,256, 60),undefined);
    });

    it("not valid third integer big", () => {
        assert.equal(rgbToHexColor(40, 50, 360), undefined);
    });

    it("not valid third integer neg", () => {
        assert.equal(rgbToHexColor(40, 50, -60), undefined);
    });

    it("not valid third integer 255", () => {
        assert.equal(rgbToHexColor(40, 50, 256), undefined);
    });

    it("not valid all", () => {
        assert.equal(rgbToHexColor(-40, 550, 256), undefined);
    });

    it("not valid all neg", () => {
        assert.equal(rgbToHexColor(-40, -550, -256), undefined);
    });

    it("not valid all 2", () => {
        assert.equal(rgbToHexColor(255, -255, -255), undefined);
    });


    it("not valid strings", () => {
        assert.equal(rgbToHexColor("40", "50", "60"), undefined);
    });

    it("not valid integ1", () => {
        assert.equal(rgbToHexColor("40", 50, 60), undefined);
    });

    it("not valid integ2", () => {
        assert.equal(rgbToHexColor(40, "50", 60), undefined);
    });

    it("not valid integ3", () => {
        assert.equal(rgbToHexColor(40, 50, "60"), undefined);
    });

    it("not valid integ1", () => {
        assert.equal(rgbToHexColor(0, 260, 60), undefined);
    });

    it("not valid integ1", () => {
        assert.equal(rgbToHexColor(60, 0, 260), undefined);
    });

    it("not valid integ1", () => {
        assert.equal(rgbToHexColor(255,0, 0), '#FF0000');
    });

    it("not valid integ1", () => {
        assert.equal(rgbToHexColor(0, 255, 0), '#00FF00');
    });

    it("not valid integ1", () => {
        assert.equal(rgbToHexColor(0, 0, 255), '#0000FF');
    });
})

//mocha 06_test.js