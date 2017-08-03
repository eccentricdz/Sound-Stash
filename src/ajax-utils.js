let ajaxUtils = {}
const SS_BASE_URL = "https://sound-stash.herokuapp.com/"
const SS_BASE_SEARCH_URL = SS_BASE_URL + "search/"

ajaxUtils.getSearchResults = (query, successCallback, errorCallback) => {
	if (!query)
      errorCallback('Search query is invalid')

    const httpRequest = new XMLHttpRequest()
    if (!httpRequest) {
      errorCallback('Giving up: Cannot create an XMLHTTP instance')
    }

    const queryUrl = SS_BASE_SEARCH_URL + query
    httpRequest.open('GET', queryUrl)
    httpRequest.onreadystatechange = function() {
      try {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
          if (httpRequest.status === 200) {
          	const response = JSON.parse(httpRequest.responseText)
            successCallback(response)
          } else {
            errorCallback('There was a problem with the request : '+httpRequest.status)
            return false
          }
        }
      }
      catch( e ) {
        errorCallback(e)
      }
    }

    httpRequest.send()
}

module.exports = ajaxUtils