$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "JBK offline website",
  "description": "",
  "id": "jbk-offline-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "login Test",
  "description": "",
  "id": "jbk-offline-website;login-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user enters \"\u003cuname\u003e\" and \"\u003cpass\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user will be on home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "jbk-offline-website;login-test;",
  "rows": [
    {
      "cells": [
        "uname",
        "pass"
      ],
      "line": 11,
      "id": "jbk-offline-website;login-test;;1"
    },
    {
      "cells": [
        "kiran@gmail.com",
        "123456"
      ],
      "line": 12,
      "id": "jbk-offline-website;login-test;;2"
    },
    {
      "cells": [
        "Krishna",
        "123456"
      ],
      "line": 13,
      "id": "jbk-offline-website;login-test;;3"
    },
    {
      "cells": [
        "kiran@gmail.com",
        "456789"
      ],
      "line": 14,
      "id": "jbk-offline-website;login-test;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6470080861,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "login Test",
  "description": "",
  "id": "jbk-offline-website;login-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user enters \"kiran@gmail.com\" and \"123456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user will be on home page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "kiran@gmail.com",
      "offset": 13
    },
    {
      "val": "123456",
      "offset": 35
    }
  ],
  "location": "LoginStepdef.user_enters_and(String,String)"
});
formatter.result({
  "duration": 1485227306,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdef.user_click_on_login_button()"
});
formatter.result({
  "duration": 58222116,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button\"}\n  (Session info: chrome\u003d94.0.4606.81)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027SHRI-PC\u0027, ip: \u0027192.168.43.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 94.0.4606.81, chrome: {chromedriverVersion: 93.0.4577.63 (ff5c0da2ec0ad..., userDataDir: C:\\Users\\Shri\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:59178}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 251632a9e12d24090bfccf0c6d908803\n*** Element info: {Using\u003dxpath, value\u003d//button}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat com.stepdefs.LoginStepdef.user_click_on_login_button(LoginStepdef.java:46)\r\n\tat ✽.And user click on login button(login.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepdef.user_will_be_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 208970996,
  "status": "passed"
});
formatter.before({
  "duration": 4709580065,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "login Test",
  "description": "",
  "id": "jbk-offline-website;login-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user enters \"Krishna\" and \"123456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user will be on home page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Krishna",
      "offset": 13
    },
    {
      "val": "123456",
      "offset": 27
    }
  ],
  "location": "LoginStepdef.user_enters_and(String,String)"
});
formatter.result({
  "duration": 375979047,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdef.user_click_on_login_button()"
});
formatter.result({
  "duration": 46873982,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdef.user_will_be_on_home_page()"
});
formatter.result({
  "duration": 8094376,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cJavaByKiran | [Dashboard]\u003e but was:\u003cJavaByKiran | [Log in]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.stepdefs.LoginStepdef.user_will_be_on_home_page(LoginStepdef.java:52)\r\n\tat ✽.Then user will be on home page(login.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2079948686,
  "status": "passed"
});
formatter.before({
  "duration": 3478360690,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "login Test",
  "description": "",
  "id": "jbk-offline-website;login-test;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user enters \"kiran@gmail.com\" and \"456789\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user will be on home page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "kiran@gmail.com",
      "offset": 13
    },
    {
      "val": "456789",
      "offset": 35
    }
  ],
  "location": "LoginStepdef.user_enters_and(String,String)"
});
formatter.result({
  "duration": 378879830,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdef.user_click_on_login_button()"
});
formatter.result({
  "duration": 46334240,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdef.user_will_be_on_home_page()"
});
formatter.result({
  "duration": 5487956,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cJavaByKiran | [Dashboard]\u003e but was:\u003cJavaByKiran | [Log in]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.stepdefs.LoginStepdef.user_will_be_on_home_page(LoginStepdef.java:52)\r\n\tat ✽.Then user will be on home page(login.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 179568635,
  "status": "passed"
});
});