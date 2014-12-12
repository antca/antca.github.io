var Utils = {
    getAjax(url, callback) {
        var request = new XMLHttpRequest();
        request.onreadystatechange = () => {
          if(request.readyState === 4) {
              if(request.status === 200) {
                  callback(request.response);
              } else {
                  callback(`<h1>Error ${request.status}: ${request.statusText}</h1>`);
              }
          }
        };
        request.open('GET', url);
        request.send(null);
    }
};


export default Utils;