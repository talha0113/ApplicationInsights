## @mtno/insights 

- **@mtno/insights** contains reesuable Microsoft Application Insights library to be used in different projects.
- It is build using **WebPack** and **TypeScript**. Some basic unit tests using **jest**

## Usage

To use this in your project, run:
```sh
npm install --save-dev @mtno/insights
```
Modify your project's **WebPack Configuration**  file and include following section:
```
plugins: [
        new webpack.DllReferencePlugin({
            context: ".",
            manifest: require('@mtno/insights/mtno-insights-manifest.json')
        })
]
```
Include the refrence of the Insights bundle either from **UNPKG CDN** or deploy the bundle as part of ayour application



