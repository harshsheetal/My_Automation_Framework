describe('Hotel Home Page', function(){

//  "use strict"
it('First_test_case', function(){
  browser.get('https://www.yahoo.com/');
//element(by.id("uh-signin")).click();
element(by.xpath("//a[@id='uh-signin']")).click();
browser.sleep(5000);

element(by.xpath("//input[@name='username']")).sendKeys("pinkusheetal");
element(by.xpath("//input[@name='signin']")).click();
browser.sleep(5000);
element(by.xpath("//input[@name='password']")).sendKeys("harsh18dd");
browser.sleep(5000);
element(by.xpath("//button[@id='login-signin']")).click();
browser.sleep(5000);
})

  browser.sleep(5000);

});
