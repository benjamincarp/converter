//var request = require('supertest');
//
//request = request("http://localhost:3000");
//
//describe("Color Code Converter API", function() {
//
//    describe("RGB to Hex conversion", function() {
//        var path = '/rgbToHex?red=255&green=255&blue=255';
//
//        it("returns status 200", function(done) {
//            request.get(path)
//                .expect(200,done);
//        });
//
//        it("returns the color in hex", function(done) {
//            request.get(path)
//                .expect("ffffff",done);
//        });
//
//    });
//
//    describe("Hex to RGB conversion", function() {
//        var path = "/hexToRgb?hex=00ff00";
//
//        it("returns status 200", function(done) {
//            request.get(path)
//                .expect(200,done);
//        });
//
//        it("returns the color in RGB", function(done) {
//            request.get(path)
//                .expect("[0,255,0]",done);
//        });
//    });
//
//});