import inquirer from 'inquirer';     //inquirer is the object that we are importing.
import qr from 'qr-image';          // qr-image is used for importing the correct url for entered by the user.
import fs from 'fs';               // file-system allows the user to write the url for which they want to generate the qr code for.


inquirer.prompt([
    {message:"Type your URL here: ",
      name:"URL"
    }
  ])

  .then((answers) => {
   const url = answers.URL;                                                  
   var qr_svg = qr.image(url);
   qr_svg.pipe(fs.createWriteStream('qr_img.png'));     /* By scanning the qr code the user will be directed to the url that they entered */

   fs.writeFile('URL.txt', url, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
  
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });