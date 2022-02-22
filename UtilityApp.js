const quest = require('readline-sync');

function validateOption(userChoice, totalAvailableOptions) {
  return ((parseInt(userChoice) >= 1 && parseInt(userChoice) <= totalAvailableOptions));
}
function hashing() {

  const options = ["1. md5", "2. sha-1", "3. sha-256", "4. sha-512"];
  const hashConversionTypes = {
    '1': 'md5',
    '2': 'sha1',
    '3': 'sha256',
    '4': 'sha512'
  }
  const crypto = require('crypto');
  const s = quest.question("Enter String \n");
  let choice = quest.question("Choose the conversion \n" + options.join('\n') + "\n");

  while (!validateOption(choice, 4)) {
    console.log("Please select valid option");
    choice = quest.question("Choose the conversion \n" + options.join('\n') + "\n");
  }

  let algo = hashConversionTypes[choice];

  let convertedValue = crypto.createHash(algo).update(s).digest('hex');

  return "For " + "'" + s + "'" + " " + algo + " Hashing Conversion is " + convertedValue;
}

function epoch() {

  const options = ["1. Epoch To HumanDate", "2. HumanDate to Epoch"];
  choice = quest.question("Choose the conversion \n" + options.join('\n') + "\n");

  while (!validateOption(choice, 2)) {
    console.log("Please select valid option\n");
    choice = quest.question("Choose the conversion \n" + options.join('\n') + "\n");
  }

  if (choice === '1') {

    let epochValue = parseInt(quest.question("Enter Epoch Value\n"));
    let humanDate = new Date(epochValue);
    let result = {

      year: humanDate.getFullYear(),
      month: humanDate.getMonth(),
      date: humanDate.getDate(),
      hours: humanDate.getHours(),
      minutes: humanDate.getMinutes(),
      seconds: humanDate.getSeconds()

    }
    console.log("For Epoch Value " + "'" + epochValue + "'" + " Human Date is ");
    return result;
  }
  else if (choice === '2') {

    let year = parseInt(quest.question("Enter Year\n"));
    let month = parseInt(quest.question("Enter Month\n"));
    let date = parseInt(quest.question("Enter date\n"));
    let hours = parseInt(quest.question("Enter hours\n"));
    let minutes = parseInt(quest.question("Enter minutes\n"));
    let seconds = parseInt(quest.question("Enter seconds\n"));
    let epoch = new Date(year, month, date, hours, minutes, seconds);
    let epochValue = Date.parse(epoch.toString());
    return ("For " + "'" + year + "/" + month + "/" + date + " " + hours + ":" + minutes + ":" + seconds + ":" + "'" + " Epoch Value is " + epochValue);
  }

}

function BinaryDecimalHexOctalConverter() {

  let options = ['1. binary to decimal ', '2. decimal to binary ', '3. binary to hexa', '4. hexa to binary ', '5. binary to octa ', '6. octa to binary ', '7. decimal to hexa ', '8. hexa to decimal ', '9. hexa to octa ', '10. octa to hexa ', '11. decimal to octa', '12. octa to decimal '];

  let conversions = {
    '1': (input) => parseInt(input, 2).toString(10),
    '2': (input) => parseInt(input, 10).toString(2),
    '3': (input) => parseInt(input, 2).toString(16).toUpperCase(),
    '4': (input) => parseInt(input, 16).toString(2),
    '5': (input) => parseInt(input, 2).toString(8),
    '6': (input) => parseInt(input, 8).toString(2),
    '7': (input) => parseInt(input, 10).toString(16).toUpperCase(),
    '8': (input) => parseInt(input, 16).toString(10),
    '9': (input) => parseInt(input, 16).toString(8),
    '10': (input) => parseInt(input, 8).toString(16).toUpperCase(),
    '11': (input) => parseInt(input, 10).toString(8).toUpperCase(),
    '12': (input) => parseInt(input, 8).toString(10),
  }
  let choice = quest.question("Please select conversion \n" + options.join('\n') + '\n');

  while (!validateOption(choice, 12)) {
    console.log("Please select valid option");
    choice = quest.question("Choose the conversion \n" + options.join('\n') + "\n");
  }
  let input = quest.question("Enter Value to convert \n");
  let ans = conversions[choice](input);

  return "The Converted Value is " + ans;
}

function rgbToHex() {

  let red = quest.question("Enter Value Of Red \n");
  let green = quest.question("Enter Value Of Green \n");
  let blue = quest.question("Enter Value Of Blue \n");


  let hexaValue = '#' + parseInt(red).toString(16) + parseInt(green).toString(16) + parseInt(blue).toString(16);

  return hexaValue;
}

function hexToRgb() {

  let hexaValue = quest.question("Enter Hexa Value\n");
  let list = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexaValue);

  let rgbValues;

  if (list) {

    rgbValues = {
      'Red': parseInt(list[1], 16),
      'Green': parseInt(list[2], 16),
      'Blue': parseInt(list[3], 16)
    };
  }
  else {
    return "Entered Value is Wrong";
  }
  return rgbValues;
}

function RgbAndHexConverter() {
  let ans;
  let options = ['1. Rgb to Hex ', '2. Hex to Rgb'];
  let choice = quest.question("Select the conversion \n" + options.join('\n') + '\n');

  while (!validateOption(choice, 2)) {

    console.log("Please select valid option");
    choice = quest.question("Choose the conversion \n" + options.join('\n') + "\n");
  }
  switch (choice) {

    case '1':
      ans = rgbToHex();
      break;
    case '2':
      ans = hexToRgb();
      break;
  }
  return ans;
}

function unitConverter() {

  let ans;
  const conversions = {
    '1': (meter) => meter / 1000,
    '2': (kiloMeter) => kiloMeter * 1000
  }
  const options = ['1. Meter to Kilometer', '2. Kilometer to Meter '];
  let choice = quest.question("Select the Conversion \n" + options.join('\n') + '\n');

  while (!validateOption(choice, 2)) {
    console.log("Please select valid option");
    choice = quest.question("Choose the conversion \n" + options.join('\n') + "\n");
  }

  let input = quest.question("Enter Value to convert \n");

  ans = conversions[choice](input);
  return "Converted Value is " + ans;
}

function Utility() {

  const options = ["1. Url Encoding", "2. Url Decoding", "3. Base64 Encoding", "4. Base64 Decoding", "5. Hashing", "6. Epoch And Human Date Conversion", "7. Binary/Decimal/Hex/Octal Conversion", "8. Rgb And Hexa Conversion", "9. Unit Conversion"];
  let choice = quest.question(options.join("\n") + "\n");

  let ans;
  let str;

  while (!validateOption(choice, 9)) {
    console.log("OOPS! Invalid Option.Select valid option \n");
    choice = quest.question();
  }
  switch (choice) {

    case '1':

      str = quest.question("Enter URL to Encode\n");
      ans = "The Encoded URL is " + encodeURIComponent(str) + "\n";
      break;

    case '2':
      str = quest.question("Enter URL to Decode  \n");
      ans = "The Decoded URL is " + decodeURIComponent(str) + "\n";
      break;

    case '3':
      str = quest.question("Enter URL to Encode \n");
      ans = "The Encoded URL is " + Buffer.from(str).toString('base64') + "\n";
      break;

    case '4':
      str = quest.qustion("Enter URL to Decode \n");
      ans = "The Decoded URL is " + Buffer.from(str, 'base64').toString('ascii') + "\n";
      break;

    case '5':
      ans = hashing();
      break;

    case '6':
      ans = epoch();
      break;

    case '7':
      ans = BinaryDecimalHexOctalConverter();
      break;

    case '8':
      ans = RgbAndHexConverter();
      break;

    case '9':
      ans = unitConverter();
      break;
  }

  console.log(ans);

}

function welcome() {
  console.log("Hi Utility App WeLcOmE's YoU...\n\nPlease Select the Computation you are looking for ");
}
function thankYou() {
  console.log("Thanks for utilising the App. Hope you liked it.");
}


welcome();
let required = 'yes';
while (required.toUpperCase() === 'YES') {
  Utility();
  required = quest.question("Do you want to Compute more? (yes/no)\n");
}
thankYou();
