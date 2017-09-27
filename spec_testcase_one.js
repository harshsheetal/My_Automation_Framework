var EC= protractor.ExpectedConditions;

describe('Hotel Home Page', function(){

  "use strict"
it('First_test_case', function(done){
  browser.get('https://www.yahoo.com/');

  browser.wait(EC.urlContains('yahoo'),5000);
//element(by.id("uh-signin")).click();
element(by.xpath("//a[@id='uh-signin']")).click();
browser.sleep(5000);
browser.wait(EC.urlContains('login'),5000);

element(by.xpath("//input[@name='username']")).sendKeys("pinkusheetal");
element(by.xpath("//input[@name='signin']")).click();
browser.sleep(2000);
browser.wait(EC.urlContains('password'),5000);
element(by.xpath("//input[@name='password']")).sendKeys("harsh18dd");
browser.sleep(2000);
element(by.xpath("//button[@id='login-signin']")).click();
browser.sleep(2000);

var ch= element(by.xpath("//div[@class='blur_C($disabledHeading) Trs($trendTrs)']"));
ch.getText().then(function(text){
  console.log(text);
  expect(text).toEqual('Trending Now');
})


element(by.xpath("//button[@title='Profile']")).click();
browser.sleep(4000);
element(by.xpath("//a[@id='uh-signout']")).click();
browser.sleep(4000);
done();
})

  browser.sleep(5000);
});

afterAll(function(done){
    process.nextTick(done);
});
