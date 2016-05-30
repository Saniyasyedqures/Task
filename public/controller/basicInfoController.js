/* global employees */

var app = angular.module('basicInfoModule', ['ngRoute','validation','serviceModule']);
//Define Routing for app
app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
         when('/customerregistration', {
            templateUrl: 'customerregistration.html',
            controller: 'basicinfoctlr'
        }).
		         when('/showallcutomers', {
            templateUrl: 'showallcustomers.html',
            controller: 'basicinfoctlr'
        }).
		     when('/customerreport', {
            templateUrl: 'customerreport.html',
            controller: 'basicinfoctlr'
        }).
		when('/reportbyname', {
            templateUrl: 'reportsbyname.html',
            controller: 'basicinfoctlr'
        }).
              otherwise({
            redirectTo: 'customerregistration'
        });
    }
]);
  
        var custRecords = [
{"id":"1","name":"Ram Kapoor","mobileno":"9467888833","phoneno":"24277888","dob":"2/12/1990","address":{
	"flat":"Flat no 14 ","street":"Adg Street","state":"J&k","pincode":"126688"
},
 "email":"ram@gamil.com"},
		{"id":"2","name":"Vijay Kumar","mobileno":"3456777777","phoneno":"2427788","dob":"2/12/1990","address":{
	"flat":"Flat no 14 ","street":"Adg Street","state":"Haryana","pincode":"456777"
},
 "email":"vijay@gamil.com"},
		{"id":"3","name":"Ram Kapoor","mobileno":"934567756","phoneno":"2422288","dob":"2/12/1990","address":{
	"flat":"Flat no 14 ","street":"Adg Street","state":"J&k","pincode":"126688"
},
 "email":"ram@gamil.com"},
		{"id":"4","name":"Sharman Kapoor","mobileno":"9467888833","phoneno":"2651788","dob":"2/12/1990","address":{
	"flat":"Flat no 14 ","street":"Adg Street","state":"Uttar Pradesh","pincode":"193673"
},
 "email":"Sharman@gamil.com"},
		{"id":"5","name":"Rajdeep Kour","mobileno":"946678833","phoneno":"2427232","dob":"6/9/1993","address":{
	"flat":"Flat no 10 ","street":"Adg Street","state":"J&k","pincode":"456777"
},
 "email":"Rajdeep@gamil.com"},
		{"id":"6","name":"Raman Kapoor","mobileno":"9467888833","phoneno":"2427788","dob":"24/6/1994","address":{
	"flat":"Flat no 12 ","street":"Adg Street","state":"Haryana","pincode":"120888"
},
 "email":"raman@gamil.com"},
		{"id":"7","name":"Ram Kapoor","mobileno":"906738363","phoneno":"2464658","dob":"22/2/1997","address":{
	"flat":"Flat no 1 ","street":"Hhg Street","state":"J&k","pincode":"190023"
},
 "email":"ram@gamil.com"},
		{"id":"8","name":"Charu Mahajan","mobileno":"9467888833","phoneno":"2437711","dob":"2/11/1989","address":{
	"flat":"Flat no 17 ","street":"Dggdg Street","state":"J&k","pincode":"121111"
},
 "email":"charu@gamil.com"},
		{"id":"9","name":"Sham Kumar","mobileno":"9467888833","phoneno":"2413788","dob":"23/1/1980","address":{
	"flat":"Flat no 14 ","street":"Adg Street","state":"Haryana","pincode":"126688"
},
 "email":"sham@gamil.com"},
		{"id":"10","name":"Kartik Sharma","mobileno":"9467888843","phoneno":"2420088","dob":"7/12/1991","address":{
	"flat":"Flat no 112 ","street":"Eghb Street","state":"Punjab","pincode":"126688"
},
 "email":"Kartik@gamil.com"}
		
       
    ];
 var custBillRecords = [
{"id":"01","billno":"123","billdate":"1/2/1990","discount":400,"tax":5,
 "item":[{"name":"Fan","quantity":9,"rate":800},{"name":"Medicines","quantity":8,"rate":400},
{"name":"Books","quantity":10,"rate":1000},{"name":"AC","quantity":100,"rate":1700},{"name":"Cooler","quantity":9,"rate":1060}], "customerid":"8"},
	 {"id":"02","billno":"133","billdate":"5/12/1994","discount":500,"tax":4,"item":[{"name":"Fan","quantity":2,"rate":1200},{"name":"Medicines","quantity":8,"rate":300},
	 {"name":"Books","quantity":10,"rate":1000}], "customerid":"8"},
  {"id":"03","billno":"133","billdate":"4/11/1984","discount":90,"tax":4,"item":[{"name":"Fan","quantity":2,"rate":1200},{"name":"Medicines","quantity":8,"rate":300},
	 {"name":"Books","quantity":10,"rate":1000}], "customerid":"4"},
  {"id":"04","billno":"133","billdate":"3/1/1997","discount":100,"tax":3,"item":[{"name":"Fan","quantity":2,"rate":3200},{"name":"Medicines","quantity":8,"rate":300},
	 {"name":"Books","quantity":10,"rate":1000}], "customerid":"4"},
  {"id":"05","billno":"133","billdate":"27/12/1999","discount":300,"tax":4,"item":[{"name":"Fan","quantity":2,"rate":1200},{"name":"Medicines","quantity":8,"rate":300},
	 {"name":"Books","quantity":10,"rate":1000}], "customerid":"2"},
 {"id":"06","billno":"133","billdate":"17/12/1998","discount":200,"tax":4,"item":[{"name":"Fan","quantity":2,"rate":1200},
												{"name":"Medicines","quantity":8,"rate":300}], "customerid":"8"},
  {"id":"07","billno":"133","billdate":"17/12/1998","discount":200,"tax":4,
   "item":[{"name":"Fan","quantity":2,"rate":1200}], "customerid":"9"},
  {"id":"08","billno":"133","billdate":"17/12/1998","discount":200,"tax":4,
   "item":[{"name":"Fan","quantity":2,"rate":1200},{"name":"Medicines","quantity":8,"rate":300},
		   {"name":"Cooler","quantity":2,"rate":1100}], "customerid":"9"},
	  {"id":"09","billno":"133","billdate":"17/12/1998","discount":200,"tax":4,
   "item":[{"name":"Fan","quantity":2,"rate":1200},{"name":"Medicines","quantity":8,"rate":300},
		   {"name":"Cooler","quantity":2,"rate":1100}], "customerid":"3"},
	  {"id":"10","billno":"133","billdate":"17/12/1998","discount":200,"tax":4,
   "item":[{"name":"Fan","quantity":2,"rate":1200},{"name":"Medicines","quantity":8,"rate":300},
		   {"name":"Cooler","quantity":2,"rate":1100}], "customerid":"1"},
	  {"id":"11","billno":"133","billdate":"17/12/1998","discount":200,"tax":4,
   "item":[{"name":"Fan","quantity":2,"rate":1200},{"name":"Medicines","quantity":8,"rate":300},
		   {"name":"Cooler","quantity":2,"rate":1100}], "customerid":"5"},
	  {"id":"12","billno":"133","billdate":"17/12/1998","discount":200,"tax":4,
   "item":[{"name":"Fan","quantity":2,"rate":1200},{"name":"Medicines","quantity":8,"rate":300},
		   {"name":"Cooler","quantity":2,"rate":1100}], "customerid":"6"},
	  {"id":"13","billno":"133","billdate":"17/12/1998","discount":200,"tax":4,
   "item":[{"name":"Fan","quantity":2,"rate":1200},{"name":"Medicines","quantity":8,"rate":300},
		   {"name":"Cooler","quantity":2,"rate":1100}], "customerid":"7"},
	  {"id":"14","billno":"133","billdate":"17/12/1998","discount":200,"tax":4,
   "item":[{"name":"Fan","quantity":2,"rate":1200},{"name":"Medicines","quantity":8,"rate":300},
		   {"name":"Cooler","quantity":2,"rate":1100}], "customerid":"10"},
	  {"id":"15","billno":"133","billdate":"17/12/1998","discount":200,"tax":4,
   "item":[{"name":"Fan","quantity":2,"rate":1200},{"name":"Medicines","quantity":8,"rate":300},
		   {"name":"Cooler","quantity":2,"rate":1100}], "customerid":"10"},
 ];


app.controller('basicinfoctlr', function ($scope, $http,$filter,validation,myService) {
  
genrateCode();
$scope.save=false;
$scope.update=true;   
    

myService.setallcustomers(custRecords);
$scope.Cancel=function(){
  Cancel();
}

 $scope.saveCustomer=function(){
     $scope.Isvalid_val="";

var isvalid=validation.validateAllRequiredFields([$scope.name,$scope.street,$scope.mobileno,$scope.phoneno,$scope.dob,$scope.flat,$scope.state,$scope.pincode]);
 if(isvalid==false){
    $scope.Isvalid_val="Provide all Mandatory fields shown as * mark";
return false;
}
    var isvalid=validation.validateMobileNo([$scope.mobileno]);
 if(isvalid==false){
    $scope.Isvalid_val="Enter Valid Mobile No";
return false;
}     
   
    var isvalid=validation.landlineNO([$scope.phoneno]);
 if(isvalid==false){
    $scope.Isvalid_val="Enter Valid Phone No";
return false;
} 
	 

      $scope.Isvalid_val="";
      myService.clearallcustomers();
           custRecords.push( { id:$scope.refNo,name:$scope.name,email:$scope.email,phoneno:$scope.phoneno,dob:$scope.dob,mobileno:$scope.mobileno,
							  address:{flat:$scope.flat,state:$scope.state,street:$scope.street,pincode:$scope.pincode}});
  
    myService.setallcustomers(custRecords);
           alert("Data successfully saved");
              Cancel();
	 $scope.manufacturer=custRecords;
	 	 genrateCode();

 }
 

 // filter to get customer list
 $scope.getcustomerlist=function(){
     var info=[];
		if($scope.custmrName!=="" && $scope.custmrName!=undefined)
		{
				for(var i=0;i<custRecords.length;i++){
			if($scope.custmrName===custRecords[i].name){
              info.push(custRecords[i]);
				$scope.custRecords=info;
				
                
			}
			
						
				}
				
		}
	
	else if($scope.mobile_no!=undefined && $scope.mobile_no!==""){
		$scope.searchErr="";
	for(var i=0;i<custRecords.length;i++){
			if($scope.mobile_no===custRecords[i].mobileno){
				 info.push(custRecords[i]);
				$scope.custRecords=info;
				
			}
			
			
		}
		
	}
		else if($scope.phone_no!=undefined && $scope.phone_no!==""){
		$scope.searchErr="";
	for(var i=0;i<custRecords.length;i++){
			if($scope.phone_no===custRecords[i].phoneno){
				 info.push(custRecords[i]);
				$scope.custRecords=info;
				
			}
			
			
		}
		
	}
	 else if($scope.d_ob!=undefined && $scope.d_ob!==""){
		$scope.searchErr="";
	for(var i=0;i<custRecords.length;i++){
			if($scope.d_ob===custRecords[i].dob){
				 info.push(custRecords[i]);
				$scope.custRecords=info;
				
			}
			
			
		}
		
	}
	 else if($scope.stat_e!=undefined && $scope.stat_e!==""){
		$scope.searchErr="";
	for(var i=0;i<custRecords.length;i++){
			if($scope.stat_e===custRecords[i].address.state){
				 info.push(custRecords[i]);
				$scope.custRecords=info;
				
			}
			
			
		}
		
	}
 }
	
   
      
 //update customer records
  $scope.UpdateCustomer=function(id){
          var item={ id:$scope.refNo,name:$scope.name,email:$scope.email,phoneno:$scope.phoneno,dob:$scope.dob,mobileno:$scope.mobileno,
							  address:{flat:$scope.flat,state:$scope.state,street:$scope.street,pincode:$scope.pincode}};
	
	  myService.clearallcustomers();
	  var no=id-1;
      custRecords.splice(no,1);
	  
	  custRecords.push(item);
	     myService.setallcustomers(custRecords);
	  Cancel();
	  alert("Customer Updated.");
	  
   }
  
  //delete customer record
 $scope.DeleteCustomer=function(id){
	 var no=id-1;
        myService.clearallcustomers(); 
    custRecords.splice(no,1);
	 myService.setallcustomers(custRecords);
	  Cancel();
	  alert("Customer Deleted.");
	  
   }
   $scope.getCustomer=function(customerName){
	   for(var i=0;i<custRecords.length;i++)
	   {
		   if(customerName===custRecords[i].name){

                                   $scope.save=true;
                                   $scope.update=false;
           $scope.id=custRecords[i].id;
                                   $scope.name=custRecords[i].name;
                                   $scope.email=custRecords[i].email;
                                   $scope.flat=custRecords[i].address.flat;
                                   $scope.phoneno=custRecords[i].phoneno;
                                   $scope.mobileno=custRecords[i].mobileno;
                                   $scope.street=custRecords[i].address.street;
                                   $scope.state=custRecords[i].address.state;
            $scope.dob=custRecords[i].dob;
			    $scope.pincode=custRecords[i].address.pincode;
                                   }
	   }
   }
  
// generate automatic id for customer
function genrateCode(){
	
	 var text = custRecords.length+1;

          
			
            $scope.refNo=text;

}


function Cancel(){
$scope.custRecords=[];
	$scope.id="";
	    $scope.custmrName="";
		$scope.mobile_no="";
		$scope.phone_no="";
		$scope.d_ob="";
         $scope.stat_e="";
	     $scope.name="";
              $scope.email="";
            $scope.flat="";
			   $scope.state="";
			   $scope.street="";
			   $scope.pincode="";
              $scope.phoneno="";
              $scope.mobileno="";
                $scope.dob="";
            
      }
	
	
		
	// get all customers
 $scope.getAllCustomers=function(){
	
	 $scope.allCustomers=myService.getallcustomers();
	 
 }
 
 //  generate bill records
 $scope.getcusomerBillRecords=function(){
	  var noOfBills=0;
	 var totalamount=0;
	 var mergedrecords=[];
	 for(var i=0;i<custRecords.length;i++){
	 for(var j=0;j<custBillRecords.length;j++){
		 if(custRecords[i].id===custBillRecords[j].customerid){
			
			 for(var k=0;k<custBillRecords[j].item.length;k++){
				 
				  totalamount=totalamount+custBillRecords[j].item[k].rate;
			 }
			 noOfBills=noOfBills+1;
			
			 mergedrecords.push({
				 name:custRecords[i].name,
				 mobileno:custRecords[i].mobileno,
				 phoneno:custRecords[i].phoneno,
				 email:custRecords[i].email,
				 noofbills: noOfBills,
				 amount: totalamount,
				 avgamount: totalamount/noOfBills
			 
			 })
			
	 }
	
	 
	 }
	 }
	 $scope.billrecords=mergedrecords;
	 }
	 
 
 // generate bill record by name
 $scope.getcustomerByName=function(){
	 var id="";
	 	 
	 for(var i=0;i<custRecords.length;i++){
		 if(custRecords[i].name===$scope.customername){
			 id=custRecords[i].id;
		var merged_records= getbillbyid(id,custRecords[i]);
		 }
	 }
	
	    $scope.billrecords=merged_records;
	
	 
	 
 }
			   function getbillbyid(id,custRecords){
	 var noOfBills=0;
	 var totalamount=0;
	 var mergedrecords=[];
				    $scope.discountamt=0;
				   $scope.taxamt=0;
		 for(var j=0;j<custBillRecords.length;j++){
		 if(id===custBillRecords[j].customerid){
			
			 for(var k=0;k<custBillRecords[j].item.length;k++){
				 
				  totalamount=totalamount+custBillRecords[j].item[k].rate;
				
				 $scope.discountamt=totalamount*custBillRecords[j].item[k].quantity*custBillRecords[j].discount/100;
				  $scope.taxamt= $scope.discountamt*custBillRecords[j].tax/100;
				 $scope.amtofeachbill= totalamount*custBillRecords[j].item[k].quantity-$scope.discountamt+$scope.taxamt;
			 }
			 
			 noOfBills=noOfBills+1;

			
			 
	 }
	
	 
	 }
			    mergedrecords.push({
				 name:custRecords.name,
				 mobileno:custRecords.mobileno,
				 phoneno:custRecords.phoneno,
				 email:custRecords.email,
				 noofbills: noOfBills,
				 amount: totalamount,
				 avgamount: totalamount/noOfBills
				 
			 })
				
	return mergedrecords;
	
}
	// get customer name
	$scope.getcustomernames=function(){
	
		$scope.manufacturer=custRecords;
	}
 
    });

