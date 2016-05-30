var app = angular.module('serviceModule', []);
app.service('myService', function () {
	var customerrecords=[];
	
	 
	 this.getallcustomers = function () {
        return customerrecords;
    }
    this.setallcustomers = function (data) {
        customerrecords = data;
    }
	this.clearallcustomers=function(){
		customerrecords=[];
	}
	
});