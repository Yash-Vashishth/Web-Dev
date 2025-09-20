// function download(cb) {
//     setTimeout(() => {
//         cb("photo.jpg");
//     },3000)
// }

// function compress(file,cb) {
//     const compressedFile = file.split(".")[0] + ".zip";
//     setTimeout(() => {
//         cb(compressedFile);
//     },2000)
// }

// function upload(file,cb) {
//     const url = "https://www.cloud.fb.com/" + file;
//     setTimeout(() => {
//         console.cb(url);
//     },4000)
// }

// //callback hell
// download(function (downloadedfile) {
//     compress(downloadedfile, function (compressedFile) {
//         upload(compressedFile, function (url) {
//             console.log(url);
//         })
//     });
// })

//<------------------------Promise conversion-------------------->
function download() {
    const err = null;
    return new Promise((res) => {
        setTimeout(() => {
            res("photo.jpg");
        }, 3000)
    });
}

function compress(file) {
    return new Promise((res) => {
        const compressedFile = file.split(".")[0] + ".zip";
        setTimeout(() => {
            res(compressedFile);
        },2000)
    })
    
}

function upload(file) {
    return new Promise((res) => {
        const url = "https://www.cloud.fb.com/" + file;
        setTimeout(() => {
            res(url);
        },4000)
    })
    
}
// normal way
download()
    .then((downloadedfile) => {
        console.log('File downloaded:', downloadedfile);

        compress(downloadedfile)
            .then((compressedFile) => {
                console.log('File downloaded:', compressedFile);

                upload(compressedFile)
                    .then((finalUrl) => {
                        console.log(finalUrl);
                    })
            })
        
    })

//Better way
download()
    .then((downloadedfile) => {
        console.log('File downloaded:', downloadedfile);

        return compress(downloadedfile);    
    })                           //function till here returns another promise for which another .then() is passed 
    .then((compressedFile) => {
        console.log('File downloaded:', compressedFile);

        return upload(compressedFile);
    })
    .then((finalUrl) => {
        console.log(finalUrl);
    })
    
//best way
download()
    .then(compress)
    .then(upload)
    .then((finalUrl) => {
        console.log(finalUrl);
    })
    .catch((err)=>console.log(err));