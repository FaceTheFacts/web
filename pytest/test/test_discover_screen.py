import pytest
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions


class DiscoverTest:
    # pylint: disable=no-member
    """
    This Class holds all the test cases for the Discover Page
    """
    def test_open_url(self, url):
        """
        Test if the url opens and the title is correct
        """
        self.driver.get(url)
        self.driver.find_element(By.TAG_NAME, "body")
        assert self.driver.title == "Ionic App"

    def test_discover_redirect(self, url):
        """
        Test if / redirects to /discover
        """
        self.driver.get(url)
        self.driver.find_element(By.TAG_NAME, "body")
        assert self.driver.current_url == f"{url}/discover"

    def test_camera_btn(self, url):
        """
        Test if the camera button opens the camera overlay
        """
        self.driver.get(url)
        WebDriverWait(self.driver, timeout=10).until(
            expected_conditions.element_to_be_clickable((By.CLASS_NAME, 'camera-icon-background'))
            )
        element = self.driver.find_element_by_class_name('camera-icon-background')
        element.click()
        WebDriverWait(self.driver, timeout=10).until(
            expected_conditions.presence_of_element_located((By.CLASS_NAME, 'camera-container'))
            )
        assert self.driver.find_element(By.CLASS_NAME, 'camera-container') != 'undefined'


@pytest.mark.usefixtures('init_firefox')
@pytest.mark.firefox
class TestFirefox(DiscoverTest):
    """
    Run tests on Firefox
    """



@pytest.mark.usefixtures('init_chrome')
@pytest.mark.chrome
class TestChrome(DiscoverTest):
    """
    Run tests on Chrome
    """

@pytest.mark.usefixtures('init_safari_desktop')
@pytest.mark.safari
class TestSafari(DiscoverTest):
    """
    Run tests on Safari
    """


@pytest.mark.usefixtures('init_android')
@pytest.mark.android
class TestAndroid(DiscoverTest):
    """
    Run tests on Android
    """

""" @pytest.mark.usefixtures('init_safari_mobile')
class SafariMobileTest:
    pass

class Test_Safari_Mobile(SafariMobileTest, AbstractTest):
    pass """

""" @pytest.fixture(scope="module")
def open_url(browser,url):
    browser.get(url)
    browser.find_element(By.TAG_NAME, "body")
    assert browser.title == "Ionic App"

def test_camera_btn(browser, open_url):
    #wait.until(ExpectedConditions.presenceOfElement(By.CLASS_NAME('camera-icon-background')));
    el = WebDriverWait(browser, timeout=3).until(lambda d: d.find_element_by_class_name('camera-icon-background'))

    el.click()
    assert browser.find_element(By.CLASS_NAME, 'camera-container') != 'undefined' """
