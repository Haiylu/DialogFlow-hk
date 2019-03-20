/*
const functions=require('firebase-functions')
const {dialogflow}=require('actions-on-google')

const WELLCOME_INTENT='Default Welcome Intent'
const FALLBACK_INTENT='Default Fallback Intent'
const LIBRARY_SERVICES_INTENT='Library_Services'

const app=dialogflow()
app.intent(WELLCOME_INTENT, (conv)={
	conv.ask("Wellcome to UVA Library Services! Ask for archives info")
})
app.intent(FALLBACK_INTENT, (conv)=> {
	conv.ask("I didn't understand your request")
})
app.intent(LIBRARY_SERVICES_INTENT, (conv) =>{
     conv.ask("http://small.library.virginia.edu/collections/university-of-virginia-archives/")
})
exports.dialogflowFirebaseFulfillment=functions.https.onRequest(app)

*/
const rp = require('request-promise-native');//adding reqest promise
function servicesTest(agent){//function name
    var final="";
    var hk={ url:'https://api.devhub.virginia.edu/v1/library/services/', //calling url with rp
                 headers:
              { 'User-Agent': 'Request-Promise'},JSON: true};

return rp(hk)
    		.then(function (services) {
			services = JSON.parse(services);
			console.log(services);
        		//final = services.siteLink;//finding the json array in the json file
			//console.log(final);
			console.log(services[0].id);
			//agent.add(final);
	console.log(agent);
	//var title=agent.Services_name;//iterating through JsonArray
	/*if(agent.Services_name=="Archives"){
	agent.add(services[i].phoneNumber;
	agent.add(services[i].siteLink;
	agent.add(services[i].emailAddress;
	*/
	var title = "Archives";
	console.log("title " + title);
	for(var i=0; i<services.length;i++){
		console.log(services[i].siteLink);
		console.log(services[i].phoneNumber);
		if(title==services[i].title){
			console.log(services[i].siteLink);
			console.log(services[i].phoneNumber);
			console.log(services[i].emailAddress);
			//if(agent.Services_info=="phone number"){
				//agent.add(services[i].phoneNumber)
	                //console.log(services[i].phoneNumber);
		 	var final = services[i].siteLink;
			var final1=services[i].phoneNumber;
			var final2=services[i].emailAddress;
				
   		}
	}
	console.log(final);
        agent.add(final);
	console.log(final1);
	agent.add(final1);
	console.log(final2);
	agent.add(final2);
        return Promise.resolve(agent);//if resolve return agent
	})
	.catch(function (err) {//checking for error
			console.log(err);
    	});
}
module.exports = {
		servicesTest:servicesTest//module exporting agent
}
