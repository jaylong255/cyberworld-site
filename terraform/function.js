function handler(event) {
    var request = event.request;
    var domainname = 'thermaltransferpro.com';
    if (request.headers.host.value === domainname) {
     	var response = {
     		statusCode: 301,
     		statusDescription: 'Found',
     		headers: {
     		    'location': { value: 'https://www.' + domainname + request.uri }
     		}
     	};
     	return response;
    }
          // ******* PASTE BELOW THIS ******* //
          
          
          // If the URI is the root, serve index.html
  if (request.uri === '/') {
    console.log('Serving index.html');
    request.uri = '/index.html';
  }
  // If the URI doesn't have a file extension, append .html
  else if (!request.uri.includes('.')) {
    console.log('Appending .html to URI');
    request.uri = request.uri + '.html';
  }
    
    
      // 301 REDIRECT LIST //
      if (request.uri === '/SanitaryHeatExchangers.html') { console.log('Redirecting from page 2 to page 1'); return { statusCode: 301, statusDescription: 'Moved Permanently', headers: {
            'location': { value: '/' } } }; }
    
      if (request.uri === '/Sanitary-Applications.html') { console.log('Redirecting from page 2 to page 1'); return { statusCode: 301, statusDescription: 'Moved Permanently', headers: {
            'location': { value: '/' } } }; }
            
      if (request.uri === '/CIP-Clean-in-Place/3A-Sanitary-CIP-Heat-Exchanger.html') { console.log('Redirecting from page 2 to page 1'); return { statusCode: 301, statusDescription: 'Moved Permanently', headers: {
           'location': { value: '/3A-Standards.html' } } }; }
           
       if (request.uri === '/Alcohol-Production.html') { console.log('Redirecting from page 2 to page 1'); return { statusCode: 301, statusDescription: 'Moved Permanently', headers: {
           'location': { value: '/Brewery-Distillery.html' } } }; }

      
       // ******* PASTE ABOVE THIS ******* //
    return request;
}