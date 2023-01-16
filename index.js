const reporter = require('cucumber-html-reporter');

const options = {
        theme: 'bootstrap',
        jsonDir: '.tmp/json',
        output: 'report/cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"1",
            "Test Environment": "prod",
            "Browser": "Chrome",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Local"
        }
    };

    reporter.generate(options);