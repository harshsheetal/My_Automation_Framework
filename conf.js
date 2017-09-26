exports.config ={

  directConnection:true,
  capabilities:
    {
      'browserName': 'chrome'
    },

onPrepare:function(){
  browser.ignoreSynchronization = true;
  browser.driver.manage().window().maximize();
},



// comment
//ccccccc

  specs:['spec_testcase_one.js']
};
