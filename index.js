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

/*const rp = require('request-promise-native ');
function servicesTest(agent){
    var final=" ";
    var hk={ url:'https://api.devhub.virginia.edu/v1/library/services/', 
                 headers:
              { 'User-Agent': 'Request-Promise'},JSON: true};
           
return rp(hk)
    		.then(function (services) {
			console.log(services);
        		final = services.length;
			agent.add(final);
    		})
		.catch(function (err) {
        		final = err;
			agent.add(final);
    		});
	return Promise.resolve(agent);
}



module.exports = {
		servicesTest:servicesTest
}

//Library_Services

/*
var title=agent.Library_services;
for(int i=0; i<jsonA<length;i++)[
if(title==jsonA[i].title){
return jsonA[i].siteLink;
}
}
*/



