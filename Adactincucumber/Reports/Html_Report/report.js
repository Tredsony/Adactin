$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking In Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "User Login In The Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user Launch the Url in Adactin Web Appliction",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enter the Username in Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter the Password in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user click the Login Button And It Navigate To Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.user_Launch_the_Url_in_Adactin_Web_Appliction()"
});
formatter.result({
  "duration": 6106160900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Enter_the_Username_in_Username_Field()"
});
formatter.result({
  "duration": 199250100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Enter_the_Password_in_Password_Field()"
});
formatter.result({
  "duration": 102234500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_click_the_Login_Button_And_It_Navigate_To_Search_Hotel_Page()"
});
formatter.result({
  "duration": 1018261000,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "User Search the Hotel in Search Hotel Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-search-the-hotel-in-search-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user Select the Hotel Location in Location dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user Select the Hotel  in hotel dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user Select the Roomtype in Room-Type dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user Select Number Of Rooms  in Number Of Rooms dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user Enter the Check-In Date  in Check-In Date Field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user Enter the Check-Out Date  in Check-Out Date Field",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user Select the how many Adults per room in Adults per Room dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user Select the how many Child per room in Child per Room dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user Click the Search Button And It Navigate To Select Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.user_Select_the_Hotel_Location_in_Location_dropdown()"
});
formatter.result({
  "duration": 213358100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Select_the_Hotel_in_hotel_dropdown()"
});
formatter.result({
  "duration": 163814200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Select_the_Roomtype_in_Room_Type_dropdown()"
});
formatter.result({
  "duration": 158561800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Select_Number_Of_Rooms_in_Number_Of_Rooms_dropdown()"
});
formatter.result({
  "duration": 151285800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Enter_the_Check_In_Date_in_Check_In_Date_Field()"
});
formatter.result({
  "duration": 173125400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Enter_the_Check_Out_Date_in_Check_Out_Date_Field()"
});
formatter.result({
  "duration": 144199800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Select_the_how_many_Adults_per_room_in_Adults_per_Room_dropdown()"
});
formatter.result({
  "duration": 739088700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Select_the_how_many_Child_per_room_in_Child_per_Room_dropdown()"
});
formatter.result({
  "duration": 57504700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#child_room\"}\n  (Session info: chrome\u003d119.0.6045.105)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.14.1\u0027, revision: \u002703f8ede370\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.20\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [27f19d318cda71d4be71f99ed7a6deed, findElement {using\u003did, value\u003dchild_room}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 119.0.6045.105, chrome: {chromedriverVersion: 119.0.6045.105 (38c72552c5e..., userDataDir: C:\\Users\\sony_\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:58680}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:58680/devtoo..., se:cdpVersion: 119.0.6045.105, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 27f19d318cda71d4be71f99ed7a6deed\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:200)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:175)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:359)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:353)\r\n\tat com.adactin.stepdefinition.stepdefinition.user_Select_the_how_many_Child_per_room_in_Child_per_Room_dropdown(stepdefinition.java:88)\r\n\tat ✽.And user Select the how many Child per room in Child per Room dropdown(Adactin.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepdefinition.user_Click_the_Search_Button_And_It_Navigate_To_Select_Hotel_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 20,
  "name": "User Select the Hotel in Select Hotel page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-select-the-hotel-in-select-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "user Click the Hotel in Hotel name Radio Button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user Click the Contine Button And It Navigate to Book A Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.user_Click_the_Hotel_in_Hotel_name_Radio_Button()"
});
formatter.result({
  "duration": 851595200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Click_the_Contine_Button_And_It_Navigate_to_Book_A_Hotel_Page()"
});
formatter.result({
  "duration": 133521900,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User Book A Hotel in Book Hotel Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-book-a-hotel-in-book-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "user Enter the Firstname in the Firstname Field",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user Enter the Lastname in the Lastname Field",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user Enter the Address in the Address Field",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user Enter the Credit card Number in Credit card Number Field",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user Select the Credit Card Type in Credit Card Type Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user Select the Expiry Month and Year in the Expiry Month and Year Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user Enter the CVV Number in CVV number Field",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user Click Book Now Button And It Navigate to Booking Confirmation Page",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "user Click the Logout Button And It Navigate to logout page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.user_Enter_the_Firstname_in_the_Firstname_Field()"
});
formatter.result({
  "duration": 127458700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Enter_the_Lastname_in_the_Lastname_Field()"
});
formatter.result({
  "duration": 202783100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Enter_the_Address_in_the_Address_Field()"
});
formatter.result({
  "duration": 136808200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Enter_the_Credit_card_Number_in_Credit_card_Number_Field()"
});
formatter.result({
  "duration": 185888900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Select_the_Credit_Card_Type_in_Credit_Card_Type_Dropdown()"
});
formatter.result({
  "duration": 163472600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Select_the_Expiry_Month_and_Year_in_the_Expiry_Month_and_Year_Dropdown()"
});
formatter.result({
  "duration": 155048400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Enter_the_CVV_Number_in_CVV_number_Field()"
});
formatter.result({
  "duration": 128809200,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});