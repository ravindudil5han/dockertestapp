/**
 * Temporary Node.js Test Script
 *
 * This script performs a basic sequence of file system operations
 * (write, read, delete) to confirm that the Node.js environment
 * is operational. It runs completely in the command line and requires
 * no network ports.
 */

import * as fs from 'fs';
import * as path from 'path';

// --- Configuration ---
const TEST_FILENAME = 'temp_test_data.txt';
const TEST_CONTENT = 'This is a temporary test message written by the Node.js script.';
const tempFilePath = path.join(process.cwd(), TEST_FILENAME);

/**
 * Main function to execute the test sequence.
 */
async function runTestApp() {
    console.log('--- Starting Temporary Node.js Test Application ---');
    console.log(`Working directory: ${process.cwd()}`);
    console.log(`Temporary file path: ${tempFilePath}`);

    try {
        // 1. Write content to the temporary file
        console.log('\n[STEP 1/3] Writing data to temporary file...');
        await fs.promises.writeFile(tempFilePath, TEST_CONTENT, 'utf8');
        console.log(`✅ Successfully wrote ${Buffer.byteLength(TEST_CONTENT, 'utf8')} bytes to ${TEST_FILENAME}.`);

        // 2. Read content back from the file
        console.log('\n[STEP 2/3] Reading data back from file...');
        const readContent = await fs.promises.readFile(tempFilePath, 'utf8');

        console.log('✅ Read content:');
        console.log('----------------------------------------------------');
        console.log(`"${readContent}"`);
        console.log('----------------------------------------------------');

        if (readContent.trim() === TEST_CONTENT.trim()) {
            console.log('Content verification successful.');
        } else {
            console.error('Content verification FAILED!');
        }

    } catch (error) {
        console.error('\n❌ An error occurred during the main test sequence:', error.message);
        // Clean up even if main steps fail, if the file exists
    } finally {
        // 3. Clean up (delete the temporary file)
        console.log('\n[STEP 3/3] Performing cleanup...');
        try {
            if (fs.existsSync(tempFilePath)) {
                await fs.promises.unlink(tempFilePath);
                console.log(`✅ Successfully deleted temporary file: ${TEST_FILENAME}.`);
            } else {
                console.log(`ℹ️ File ${TEST_FILENAME} not found. Cleanup skipped.`);
            }
        } catch (cleanupError) {
            console.error('❌ Failed to delete the temporary file:', cleanupError.message);
        }

        console.log('\n--- Test Application Finished ---');
    }
}

// Ensure the script uses the new 'import' syntax by telling Node it's a module
// Note: If running this in an environment that requires a package.json with "type": "module",
// you must include that file, or use 'require()' instead of 'import * as fs from "fs";'
// Since this is a self-contained script, we'll use 'import' which is standard in modern Node.

// Execute the main function
runTestApp();
