exports.config ={

  directConnection:true,
  capabilities:
    {
      'browserName': 'chrome'
    },

    framework:'jasmine',

onPrepare:function(){
  browser.ignoreSynchronization = true;
  browser.driver.manage().window().maximize();

   var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
   jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
         savePath: './e2e-reports/',
         takeScreenshots: true,
       }));
},



// comment
//ccccccc

  specs:['spec_testcase_one.js']
};
