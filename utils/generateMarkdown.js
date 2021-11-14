// deefault empty string and sets badges depending on user selection
function renderLicenseBadge(license) {
  switch (license) {
    default:
      licenseBadge = '';
      break;
    case 'Apache License':
      licenseBadge = 'https://img.shields.io/badge/License-Apache_2.0-orange';
      break;
    case 'GNU License':
      licenseBadge = 'https://img.shields.io/badge/License-GNU_3.0-orange';
      break;
    case 'MIT License':
      licenseBadge = 'https://img.shields.io/badge/License-MIT-orange';
      break;
    case 'moelicense':
      licenseBadge ='https://img.shields.io/badge/License-MOE-orange';
      break;
  }
  return licenseBadge;
}


// default empty string and sets links depending on selection
function renderLicenseLink(license) {
  switch (license) {
    default:
      licenseLink = '';
      break;
    case 'Apache License':
      licenseLink = 'http://www.apache.org/licenses/LICENSE-2.0';
      break;
    case 'GNU License':
      licenseLink = 'https://www.gnu.org/licenses/gpl-3.0.html';
      break;
    case 'MIT License':
      licenseLink = 'https://spdx.org/licenses/MIT.html';
      break;
    case 'moelicense':
      licenseLink ='https://www.youtube.com/watch?v=dQw4w9WgXcQ';
      break;
  }
  return licenseLink;
}

// markdown for readme
function generateMarkdown(data) {
  return `
  # **${data.title} ![License](${renderLicenseBadge(data.license)})**
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contribution}
  ## Tests
  ${data.test} 
  ## Questions
  If you have any questions, one of them possibly being what type of ceiling light I hate the most? please feel free to either:<br>
  email me at: ${data.email}<br>
  or if you prefer to communicate via gitHub: https://github.com/${data.github}  (i will judge you if you contact me this way, unless its a job offer, then thank you for contacting me via github, id have it no other way :D)
  ## License
  Find license details here ${renderLicenseLink(data.license)} sorry i couldnt figure out how to display the full text
  `;
}

// exports generatemarkdown
module.exports = generateMarkdown;
