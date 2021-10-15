function rand(n) { return parseInt(n * Math.random()); }

/* function ExistFile(url) {
    const xhr = new XMLHttpRequest(),
        method = "GET";
    xhr.open(method, url, true);
    if(xhr.readyState == XMLHttpRequest.DONE) {
        var status = xhr.status;
        if (status == 0 || (status >= 200 && status < 400)) 
            return true;
        else 
            return false;
    }
    xhr.send();
} */


// add leading zeros till len 3
function FillZero3(x) {
    if(x < 10) return "00" + x;
    if(x < 100) return "0" + x;
    return x;
}


/* function request() {
    const xhr = new XMLHttpRequest(),
        method = "GET",
        url = "";

    xhr.open(method, url, true);
    if (xhr.readyState === XMLHttpRequest.DONE) {
        var status = xhr.status;
        if (status === 0 || (status >= 200 && status < 400)) {
            // The request has been completed successfully
            console.log(xhr.responseText);
        } else {
            // Oh no! There has been an error with the request!
        }
    }
    xhr.send();
} */