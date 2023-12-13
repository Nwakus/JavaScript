https://extendsclass.com/python-to-javascript.html

Python code version
def respond_dropdown():
        while True:

            button = check_exists_by_xpath(btn_xpath)
            time.sleep(20) 
            if button is False:
                print("respond_dropdown is not available")
                next_page.click()
                time.sleep(20)
                if button is True:
                    print("respond_dropdown is available")
                    wait.until(EC.element_to_be_clickable((By.XPATH, btn_xpath)))
                    driver.find_element(By.XPATH, btn_xpath).click()
                    break

nodejs code version
function respond_dropdown() {
    var button;
    while (true) {
        button = check_exists_by_xpath(btn_xpath);
        time.sleep(20);
        if ((button === false)) {
            console.log("respond_dropdown is not available");
            next_page.click();
            time.sleep(20);
            if ((button === true)) {
                console.log("respond_dropdown is available");
                wait.until(EC.element_to_be_clickable([By.XPATH, btn_xpath]));
                driver.find_element(By.XPATH, btn_xpath).click();
                break;
            }
        }
    }
}


javascript code version
function respond_dropdown() {
  var button;

  while (true) {
    button = check_exists_by_xpath(btn_xpath);
    time.sleep(20);

    if (button === false) {
      console.log("respond_dropdown is not available");
      next_page.click();
      time.sleep(20);

      if (button === true) {
        console.log("respond_dropdown is available");
        wait.until(EC.element_to_be_clickable([By.XPATH, btn_xpath]));
        driver.find_element(By.XPATH, btn_xpath).click();
        break;
      }
    }
  }
}

https://www.codeconvert.ai/python-to-javascript-converter
Python code version
def respond_dropdown():
        while True:

            button = check_exists_by_xpath(btn_xpath)
            time.sleep(20) 
            if button is False:
                print("respond_dropdown is not available")
                next_page.click()
                time.sleep(20)
                if button is True:
                    print("respond_dropdown is available")
                    wait.until(EC.element_to_be_clickable((By.XPATH, btn_xpath)))
                    driver.find_element(By.XPATH, btn_xpath).click()
                    break

nodejs code version
function respond_dropdown() {
    while (true) {
        var button = check_exists_by_xpath(btn_xpath);
        time.sleep(20);
        if (button === false) {
            console.log("respond_dropdown is not available");
            next_page.click();
            time.sleep(20);
            if (button === true) {
                console.log("respond_dropdown is available");
                wait.until(EC.element_to_be_clickable((By.XPATH, btn_xpath)));
                driver.find_element(By.XPATH, btn_xpath).click();
                break;
            }
        }
    }
}

https://docs.npmjs.com/
