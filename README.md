<!--- [![Build status](https://talha0113.visualstudio.com/open%20source/_apis/build/status/ApplicationInsights?branch=master)] -->

[![npm version](https://badge.fury.io/js/%40mtno%2Finsights.svg)](https://badge.fury.io/js/%40mtno%2Finsights)
[![NPM downloads](https://img.shields.io/npm/dm/@mtno/insights.svg?style=flat)](https://npmjs.org/package/@mtno/insights)
[![HitCount](http://hits.dwyl.io/talha0113/ApplicationInsights.svg)](http://hits.dwyl.io/talha0113/ApplicationInsights)
[![GitHub issues](https://img.shields.io/github/issues/talha0113/ApplicationInsights.svg)](https://github.com/talha0113/ApplicationInsights/issues)



## @mtno/insights 

- **@mtno/insights** contains reusable Microsoft Application Insights library to be used in different projects.
- It is built using **WebPack** and **TypeScript**. Some basic unit tests using **jest**

## Usage

To use this in your project, run:
```sh
npm install --save-dev @mtno/insights
npm install --save-dev webpack
npm install --save-dev webpack-cli
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
Include the refrence of the Insights bundle either from **UNPKG CDN** or deploy the bundle file as part of ayour application



