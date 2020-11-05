import pytest
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait

@pytest.fixture(scope="module")
def open_url(firefox,url):
    firefox.get(url)
    firefox.find_element(By.TAG_NAME, "body")
    assert firefox.title == "Ionic App"

def test_camera_btn(firefox, open_url):
    #wait.until(ExpectedConditions.presenceOfElement(By.CLASS_NAME('camera-icon-background')));
    el = WebDriverWait(firefox, timeout=3).until(lambda d: d.find_element_by_class_name('camera-icon-background'))

    el.click()
    assert firefox.find_element(By.CLASS_NAME, 'camera-container') != 'undefined'
