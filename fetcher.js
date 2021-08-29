const request = require("request");
const fs = require("fs");
const pageURL = process.argv[2];
const localPath = process.argv[3];

request(pageURL, (error, response, body) => {
  console.log(response.statusCode);
  if (error) {
    console.log("Error:", error);
  } else {
    fs.writeFile(localPath, body, (error) => {
      if (error) {
        console.log("Error:", error);
      } else {
        console.log(
          `Downloaded and saved ${body.length} bytes to ${localPath}`
        );
      }
    });
  }
});
