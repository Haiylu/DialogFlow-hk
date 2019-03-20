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
    var final=" ";
    var hk={ url:'https://api.devhub.virginia.edu/v1/library/services/', //calling url with rp
                 headers:
              { 'User-Agent': 'Request-Promise'},JSON: true};
           
return rp(hk)
    		.then(function (services) {
			console.log(services);
        		final = services[9].siteLink;//finding the json array in the json file
			console.log(final);
			agent.add(final);
	var title=agent.services;//iterating through JsonArray
	console.log("title" + title);
	for(var i=0; i<jsonA.length;i++){
	if(title==jsonA[i].title){
		//console.log(title);
	return jsonA[9].siteLink;
    		}
	}
})
		.catch(function (err) {//checking for error 
        		final = err;
			agent.add(final);
    		});
	return Promise.resolve(agent);//if resolve return agent 
}
module.exports = {
		servicesTest:servicesTest//module exporting agent
}


