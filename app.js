<<<<<<< HEAD
const fs = require('fs');

const profileDataArgs = process.argv.slice(2);

=======

const profileDataArgs = process.argv.slice(2, process.argv.length);
>>>>>>> edb5592ce0786332a2ec3510a5f483291d1fac20
const [name, github] = profileDataArgs;

const generatePage = (name, github) => {
  return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
    <h1>${name}</h1>
    <h2><a href="https://github.com/${github}">Github</a></h2>
  </body>
  </html>
  `;
};

fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

<<<<<<< HEAD
  console.log('Portfolio complete! Check out index.html to see the output!');
});
=======
    console.log('Portfolio complete! Check out index.html to see the output!')
})

>>>>>>> edb5592ce0786332a2ec3510a5f483291d1fac20
