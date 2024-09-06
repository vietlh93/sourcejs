var iframe = document.querySelector("iframe");
if (iframe) {
    var inputString = decodeURIComponent(iframe.src);

    var fragment = inputString.split('#')[1] || '';

    var dataPart = fragment.split('tgWebAppData=')[1] || '';

    var parts = dataPart.split('&');
    
    var params = {};    

   parts.forEach(part => {
            var [key, value] = part.split('=');
            if (key && value) {
                params[key] = value;
            }
        });
        var outputString =  Object.keys(params)
            .filter(key => !key.includes('tgWebApp'))
            .map(key => `${key}=${params[key]}`)
            .join('&'); 
    console.log(outputString);
} else {
    console.log("Không tìm thấy Iframe");
}
