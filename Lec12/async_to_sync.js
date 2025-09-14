//----------------callback ------------------------//
function download(cb) {                     //passing a callback function so that compress() is directly executed in 3s
    setTimeout(() => {
        cb("photo.jpg");
    },3000)
}

function compress(file,cb) {
    const compressedFile = file.split(".")[0] + ".zip";
    setTimeout(() => {
        cb(compressedFile);
    },2000)
}

function upload(file,cb) {
    const url = "https://www.cloud.fb.com/" + file;
    setTimeout(() => {
        console.cb(url);
    },4000)
}

//wrapper function passed into the other function to execute the required function in the download part without limiting the case
download(function (downloadedfile) {
    compress(downloadedfile, function (compressedFile) {
        upload(compressedFile, function (url) {
            console.log(url);
        })
    });
})
//---------------------------------------------------//