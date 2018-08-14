let fs = require("fs");
let vendorGraphExists: boolean = false;
let vendorLibraryExists: boolean = false;
let fileSizeInBytes: number = 0;

describe('Application Insights', () => {
    beforeAll(async () => {
        vendorGraphExists = fs.existsSync('./mtno-insights-manifest.json');
        vendorLibraryExists = fs.existsSync('./mtno.insights.js');
        fileSizeInBytes = fs.statSync('./mtno.insights.js').size;
    });

    test("DLL Plugin Graph Exists", async () => {
        expect(vendorGraphExists).toBeTruthy();
    });

    test("DLL Plugin Library Exists", async () => {
        expect(vendorLibraryExists).toBeTruthy();
    });

    test("Library Has Content", async () => {
        expect(fileSizeInBytes).toBeGreaterThan(5000);
    });
});
