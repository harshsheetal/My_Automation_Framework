describe('Hotel Home Page', function(){
it('First_test_case', function(){
  browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
  element(by.model("first")).sendKeys("5");
  element(by.model("second")).sendKeys("6");
  element(by.id("gobutton")).click();

element(by.binding("latest")).getText().then(function(text){
    console.log(text);
})



  browser.sleep(5000);

});

});
