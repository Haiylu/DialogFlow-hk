/*
const rp = require('request-promise-native ');
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
*/
