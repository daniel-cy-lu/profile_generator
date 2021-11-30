const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
    console.log(`${answer}! What an amazing name!`);
    rl.question('What\'s an activity you like doing? ', (answer) => {
      console.log(`${answer}! Wow! Me too!`);
      rl.question('What do you listen to while doing that? ', (answer) => {
        console.log(`${answer} is indeed good music!`);
        rl.question('Which meal is your favourite? ', (answer) => {
          console.log(`I eat ${answer} once a day as well!`);
          rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
            console.log(`${answer} is delicious!`);
            rl.question('Which sport is your absolute favourite? ', (answer) => {
              console.log(`I watch ${answer} on TV every week!!`);
              rl.question('What is your superpower? ', (answer) => {
                console.log(`${answer}!!?? I've never heard of it!.. Just joking!`);
        
                rl.close();
              });
            });
          });
        });
      });
    });
  });
});

