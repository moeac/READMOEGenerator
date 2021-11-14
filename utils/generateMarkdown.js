// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  #${data.title} ![License](${renderLicenseBadge(data.license)})
  ##Description
  ${data.description}
  ##Table of Contents
  -[Installation](#installation)
  -[Usage](#usage)
  -[Contributing](#contributing)
  -[Tests](#tests)
  -[Questions](#questions)
  -[License])(#license)
  ##Installation
  ${data.installation}
  ##Usage
  ${data.usage}
  ##Contributing
  ${data.contributing}
  ##Tests
  ${data.tests} 
  ##Questions
  If you have any questions, one of them possibly being what type of ceiling light I hate the most? please feel free to either:
  email me at: ${data.email}
  or if you prefer to communicate via gitHub: https://github.com/${data.gitHub}  *i will judge you if you contact me this way, unless its a job offer, then thank you for contacting me via github, id have it no other way :D*
  ##License
  ${data.license}
  `;
}

module.exports = generateMarkdown;
