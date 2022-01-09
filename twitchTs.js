let fs = require('fs');
let request = require('request');
const delayIncrement = 2000;
const axios = require('axios');

let download = (uri, filename) => {

    return new Promise(resolve => setTimeout(resolve, delay)).then(() => {

        // axios.get(uri, { responseType: "stream" })
        //     .then(response => {
        //         // Saving file to working directory  
        //         response.data.pipe(fs.createWriteStream(filename));
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });

        request.head(uri, function (err, res) {

            if (res.statusCode === 200) {
                request(uri).pipe(fs.createWriteStream(filename))

            } else {
                console.log(res.statusCode);
                console.log(uri);
            }
        })

    }
    );


    // return await new Promise((resolve, reject) => {


    //     request.head(uri, function (err, res) {

    //         if (res.statusCode === 200) {
    //             request(uri).pipe(fs.createWriteStream(filename)).on('close', resolve);

    //         } else {
    //             reject(res.statusCode);
    //         }
    //     });
    // });
};

let promises = [];
let delay = 0;

for (let i = 2301; i <= 2584; i++) {
    promises.push(download('https://ploxiustemporar.herokuapp.com/https://d2vjef5jvl6bfs.cloudfront.net/d53f85faa54a6afac9a9_xqcow_39326699433_1641591090/chunked/' + i + '.ts', __dirname + '/dl/' + i + '.ts', delay));
    delay += delayIncrement;

}

// Promise.all(promises).then(() => {
//     process.exit(0);
// }); 