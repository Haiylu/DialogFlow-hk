const rp = require('request-promise-native');//adding reqest promise
function servicesTest(agent,requestBody,url){//the function servicesTest calles gent, requestBody and url of the services
    var final="";
  //  var final2="";
    var hk={ url:'https://api.devhub.virginia.edu/v1/library/services/', //calling url with rp
                 headers:
              { 'User-Agent': 'Request-Promise'},JSON: true};
return rp(hk)
    		.then(function (services) {//services function
			services = JSON.parse(services);//it parse the json body
			console.log(services);
        		//final = services.siteLink;//finding the json array in the json file
			//console.log(final);
			var servicesName=requestBody.queryResult.parameters.Services_name;
			var servicesInfo=requestBody.queryResult.parameters.Services_info;
			console.log(servicesName);//it print out what servicesName doeos in the log
			for(var i=0; i<services.length;i++){//the for loop goes through the loop 
				//console.log(services[i].siteLink);
			if(servicesName==services[i].title){
			//console.log(services[i].siteLink);
				if(servicesInfo=="site Link"){
					//console.log(services[i].siteLink);
					agent.add(services[i].siteLink);
				}
				else if(servicesInfo=="phone number"){//
					agent.add(services[i].phoneNumber);//the agent adds phoneNumber to train it
				}
				else if(servicesInfo=="email address"){
					agent.add(services[i].emailAddress);//the agent adds emailAddress to train it 
				}
				else{ 
					agent.add("request doesn't match");
				}
			}
			}		
        return Promise.resolve(agent);//if resolve return agent
	})
	.catch(function (err) {//checking for error
			console.log(err);
    	});
}
module.exports = {
		servicesTest:servicesTest//module exporting agent
}
