const fs = require('fs');

/**
 * This script will check every folder within a provided directory to ensure there are directories __tests__ and __stories__,
 * as well as at least a single file in each, `*.test.js`/`*.spec.js` and `*.stories.js` respectively
 *
 * Example of the folder structure we're testing for:
 *
 * src
 * +-- lib
 *     +-- components
 *         +-- Counter
 *             +-- __tests__
 *                 +-- counter.test.js
 *             +-- __stories__
 *                 +-- counter.stories.js
 *             +-- counter.js // This isn't tested for, just here for context
 *             +-- index.js // This isn't tested for, just here for context
 *
 * Example of a folder structure we dont' want
 *
 * src
 * +-- lib
 *     +-- components
 *         +-- Counter
 *             +-- counter.js // This isn't tested for, just here for context
 *             +-- index.js // This isn't tested for, just here for context
 */

/**
 * Simple output function that has been abstracted to make it easy to change the colour of the output
 *
 * @param {string} message
 *
 * @returns {null}
 */
function outputError(message) {
    const colourRed = '\x1b[31m';
    const resetColor = '\x1b[0m'; // So the rest of the terminal doesn't keep printing as red
    console.log(`${colourRed}%s${resetColor}`, message);
}

/**
 * Check a given path for the existence of a required folder and file
 *
 * @param {string} componentPath   The path to the folder being checked
 * @param {string} expectedDirName The name of the directory we expect to find
 * @param {string} fileNameRegex   Regex for the name of a file we should find in `expectedDirName`
 * @param {string} componentName   The name of the component being checked (used for feedback)
 * @param {string} type            Type of folder/file this is checking for. Likely `tests` or `stories`. Used for feedback
 *
 * @return {boolean}
 */
function checkFiles(
    componentPath,
    expectedDirName,
    fileNameRegex,
    componentName,
    type
) {
    const componentDirectoryFiles = fs.readdirSync(componentPath);

    // Find at least one JS file (in case this is only a CSS component)
    const jsExists = componentDirectoryFiles.filter(file => file.match('.js$|.jsx$'));
    if (jsExists.length === 0) {
        // no JS means we don't need tests!
        return true;
    }

    // Find the __tests__ directory
    const findTestDirectory = dir => dir === expectedDirName;
    const testDirectory = componentDirectoryFiles.find(findTestDirectory);
    if (!testDirectory) {
        outputError(`No ${type} in ${componentName} component folder`);
        return false;
    }

    //  Find at least a single *.(test)|(spec).js file
    const regexForTestFile = new RegExp(fileNameRegex);
    const testFiles = fs.readdirSync(`${componentPath}/${expectedDirName}`);
    const testExists = testFiles.filter(file => file.match(regexForTestFile));
    if (testExists.length === 0) {
        outputError(`No ${type} in ${componentName} component folder`);
        return false;
    }

    return true;
}

/**
 * Main function that will loop through all folders within a given path
 *
 * @param {string} basePath Path to the folder with all components, that each should have the required folders/files
 *
 * @returns {null}
 */
function readDirectory(basePath) {
    const removeFiles = entry =>
        fs.lstatSync(`${basePath}/${entry}`).isDirectory();

    if (!fs.existsSync(basePath)) {
        console.log('No components exist. Exiting');
        process.exit(0);
    }

    const componentFolders = fs.readdirSync(basePath).filter(removeFiles);
    let isError = false;

    componentFolders.forEach(componentFolder => {
        const componentPath = `${basePath}/${componentFolder}`;

        // Find the __tests__ directory
        const doTestFilesExist = checkFiles(
            componentPath,
            '__tests__',
            '.(test)|(spec).js$',
            componentFolder,
            'tests'
        );

        const doStoryFilesExist = checkFiles(
            componentPath,
            '__stories__',
            '.stories.js$',
            componentFolder,
            'stories'
        );

        if (!doTestFilesExist || !doStoryFilesExist) {
            isError = true;
        }
    });

    // Putting this here means all components that have missing tests or stories will be output before the script fails
    if (isError) {
        console.log(``); // Add some whitespace before the generic error
        process.exit(1);
    } else {
        process.exit(0);
    }
}

const [, , directoryToParse] = process.argv;

if (typeof directoryToParse === 'undefined') {
    outputError('Please provide a directory to parse for test files');
    process.exit(1);
}

readDirectory(directoryToParse);
