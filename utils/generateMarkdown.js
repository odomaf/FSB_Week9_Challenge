// utils/generateMarkdown.js (Unsolved Starter)

function renderLicenseBadge(licenses) {
  //console.log("licenses is: ", licenses);
  let badge = "";
  if (licenses == "None") {
    badge = "\nNo licenses";
    return badge;
  }

  //traverse array of licenses and build a string of badges to mach
  //user inputs
  for (const license of licenses) {
    //console.log("this specific license is ", license);
    switch (license) {
      case "None":
        badge += "";
        break;
      case "Apache 2.0":
        badge +=
          "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) ";
        break;
      case "Boost 1.0":
        badge +=
          "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt) ";
        break;
      case "BSD 3-Clause License":
        badge +=
          "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause) ";
        break;
      case "CCO":
        badge +=
          "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/) ";
        break;
      case "GNU GPL v3":
        badge +=
          "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) ";
        break;
      case "MIT License":
        badge +=
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ";
        break;
      case "Mozilla Public License 2.0":
        badge +=
          "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0) ";
        break;
      case "Open Database License (ODbl)":
        badge +=
          "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/) ";
        break;
      case "Unlicense":
        badge +=
          "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      default:
        break;
    }
  }
  return badge;
}


export function generateMarkdown(data) {
  console.log("generating markdown");
  let md = `# ${data.title}  \n`;
  md += `\n ## Description \n ${data.description} \n`;
  md += "\n ## Table of Contents \n";
  md += "\n - [Installation](#installation)";
  md += "\n - [Usage](#usage)";
  md += "\n - [License](#license)";
  md += "\n - [Questions](#questions)";
  md += "\n\n ## Installation";
  md += `\n\n ${data.installCommand}`;
  md += "\n\n ## Usage";
  md += `\n\n ${data.usageInfo}`;
  md += `\n\n ## License\n`;
  md += renderLicenseBadge(data.license);
  md += `\n\n ## Questions`;
  md += `\n${data.username}`;
  md +=  `\n${data.email}`

  return md;

}

