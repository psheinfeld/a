
var express = require('express');
var log = require('../system/fmLog');
// var fmService = require('../system/fmService');
// var HashMap = require('hashmap');
var fmGlobal = require('../system/fmGlobal');
// 32.119257, 34.836756
// 31.886633, 34.781138

var globalService = new fmGlobal();
//adding test services

globalService.addService( 34.988844,32.085227, 115,"",'Center');
setTimeout(function () {
    globalService.addService( 34.939775,29.905043, 85,"",'South');
}, 1500);
setTimeout(function () {
    globalService.addService( 35.323262,33.05, 80,"",'North');
}, 300);
setTimeout(function () {
    globalService.addService( 34.863531,30.919769, 120,"",'Beer Sheva');
}, 300);


var router = express.Router();


//var servicesHash = new Object();
//servicesHash["1"] = new fmService(31.845123, 34.796507,100);
// var servicesHash = new HashMap();
// servicesHash.set(1,new fmService(31.845123, 34.796507,100));


// var fms_requests = new Object();
// fms_requests.counter = 0;
// fms_requests.next = function (func) {
//     log("GET FMS/");
//     this.counter ++;
//     func();
// };



router.get('/:lat/:long', function(req, res, next) {

    // fms_requests.next( function(){
    //     res.send(JSON.stringify(fms_requests, null, 3))
    // });
    res.send(globalService.getServers(req.params.lat, req.params.long));
});


router.post('/services/:serviceID',function post_services_serviceID(req, res, next){
    post_services_serviceID.class = "FMS";
    var sid = parseInt(req.params.serviceID);
    //log("fmSID:" + sid + "  requested");
    // log("Sender: " + JSON.stringify(req.body));
    //log("Sender: " + req.body.id);
    //res.send(servicesHash.get(1));
    //  if (globalService.servicesHash.get(sid)){
    //      log("fmSID:" + sid + " found");
    //      globalService.servicesHash.get(sid).processCar(req.body);
    //      res.send(globalService.servicesHash.get(sid).getCars(req.body.id));
    //  }
    //  else{
    //      log("fmSID:" + sid + " not found");
    //      res.send(null);
    //  }
    // res.send(globalService.servicesHash.get(sid).getCars(req.body.id));
    res.send(globalService.servicesHash.get(sid).poll(req.body));
});


router.get('/services/',function(req, res, next){
    res.send(globalService.getAllServers());
});

router.post('/log/:carID',function(req, res, next){
    var sid = parseInt(req.params.carID);
    //log("Requester: " + JSON.stringify(req.body));
    //res.send(servicesHash.get(1));
    // if (globalService.servicesHash.get(sid)){
    //     log("fmSID:" + sid + " found");
    //     globalService.servicesHash.get(sid).processCar(req.body);
    //     res.send(globalService.servicesHash.get(sid).getCars(req.body.id));
    // }
    // else{
    //     log("fmSID:" + sid + " not found");
    //     res.send(null);
    // }
});

module.exports = router;