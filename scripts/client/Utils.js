var Utils = {
    getAjax(url, callback) {
        var request = new XMLHttpRequest();
        request.onreadystatechange = () => {
          if(request.readyState === 4) {
              if(request.status === 200) {
                  callback(request.response);
              } else {
                  callback(`Error ${request.status}: ${request.statusText}`);
              }
          }
        };
        request.open('GET', url);
        request.send(null);
    }
};


export default Utils;
