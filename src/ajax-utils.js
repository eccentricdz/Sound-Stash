let ajaxUtils = {}
const SS_BASE_URL = "https://sound-stash.herokuapp.com/"
const SS_BASE_SEARCH_URL = SS_BASE_URL + "search/"

ajaxUtils.getSearchResults = (query, callback) => {
	if (!query)
      return false

    const httpRequest = new XMLHttpRequest()
    if (!httpRequest) {
      console.log('Giving up: Cannot create an XMLHTTP instance')
      return false
    }

    const queryUrl = SS_BASE_SEARCH_URL + query
    httpRequest.open('GET', queryUrl)
    httpRequest.onreadystatechange = function() {
      try {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
          if (httpRequest.status === 200) {
          	const response = JSON.parse(httpRequest.responseText)
            callback(response)
          } else {
            console.log('There was a problem with the request : '+httpRequest.status)
            return false
          }
        }
      }
      catch( e ) {
        console.log('Caught Exception: ' + e.description)
      }
    }

    httpRequest.send()
}

module.exports = ajaxUtils