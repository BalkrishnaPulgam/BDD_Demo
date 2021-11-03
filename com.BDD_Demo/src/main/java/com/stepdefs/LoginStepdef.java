package com.stepdefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import com.pages.LoginPage;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class LoginStepdef {
	WebDriver driver;
	
	LoginPage lp=null;

	@Before("@login")
	public void setUp() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "E:/chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("file:///E:/Selenium/Offline%20Website/Offline%20Website/index.html");
		lp= new LoginPage(driver);

	}
	
	@After("@login")
	public void tearDown() {
		driver.close();
		
	}

	@When("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String uname, String pass) throws Throwable {
		
		lp.loginTest(uname, pass);

	}

	@When("^user click on login button$")
	public void user_click_on_login_button() throws Throwable {
		driver.findElement(By.xpath("//button")).click();

	}

	@Then("^user will be on home page$")
	public void user_will_be_on_home_page() throws Throwable {
		Assert.assertEquals("JavaByKiran | Dashboard", driver.getTitle());

	}

	@Then("^user should see a logo$")
	public void user_should_see_a_logo() throws Throwable {
		WebElement logo = driver.findElement(By.tagName("img"));
		Assert.assertTrue(logo.isDisplayed());

	}

}
