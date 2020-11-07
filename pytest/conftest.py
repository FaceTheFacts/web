import pytest
from selenium import webdriver
from selenium.webdriver.chrome.options import Options as ChromeOptions
from selenium.webdriver.firefox.options import Options as FirefoxOptions
from selenium.webdriver.firefox.firefox_profile import FirefoxProfile
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

#from selenium.webdriver import SafariOptions

def pytest_addoption(parser):
    parser.addoption("--url", action="store", default="http://localhost:8100", help="url")
"""     parser.addoption(
        "--browser", action="store", default="chrome", help="browser: chrome or firefox"
    ) """

@pytest.fixture(scope='class')
def init_chrome(request):
    chrome_options = ChromeOptions()
    #chrome_options.add_argument('--headless')
    chrome_options.add_argument('--no-sandbox')
    chrome_options.add_argument('--single-process')
    chrome_options.add_argument('--disable-dev-shm-usage')
    chrome_options.add_argument('--use-fake-device-for-media-stream')
    chrome_options.add_argument('--use-fake-ui-for-media-stream')
    chrome_driver = webdriver.Chrome(options=chrome_options)
    request.cls.driver = chrome_driver
    yield
    chrome_driver.close()


@pytest.fixture(scope='class')
def init_firefox(request):
    firefox_options = FirefoxOptions()
    profile = FirefoxProfile()
    profile.set_preference('media.navigator.streams.fake', True)
    profile.set_preference('media.navigator.permission.disabled', True)
    firefox_options.profile = profile
    firefox_driver = webdriver.Firefox(options=firefox_options) 
    request.cls.driver = firefox_driver
    yield
    firefox_driver.close()

@pytest.fixture(scope='class')
def init_safari_desktop(request):
    #safari_options = SafariOptions()
    """ profile = FirefoxProfile()
    profile.set_preference('media.navigator.streams.fake', True)
    profile.set_preference('media.navigator.permission.disabled', True)
    safari_options.profile = profile """
    safari_driver = webdriver.Safari() 
    request.cls.driver = safari_driver
    yield
    safari_driver.close()

""" @pytest.fixture(scope='class')
def init_safari_mobile(request):
    #safari_options = SafariOptions()
    safari_driver = webdriver.Remote(desired_capabilities=DesiredCapabilities.IPHONE) 
    request.cls.driver = safari_driver
    yield
    safari_driver.close() """
""" @pytest.fixture(scope="module", autouse=True)
def chrome():
    options = Options()
    options.add_argument('--headless')
    options.add_argument('--no-sandbox')
    options.add_argument('--single-process')
    options.add_argument('--disable-dev-shm-usage')

    browser = webdriver.Chrome(options=options)
    return browser

@pytest.fixture(scope="module", autouse=True)
def firefox():
    options = FirefoxOptions()
    profile = FirefoxProfile()
    profile.set_preference('media.navigator.streams.fake', True)
    profile.set_preference('media.navigator.permission.disabled', True)
    options.profile = profile
    browser = webdriver.Firefox(options=options)
    return browser


@pytest.fixture(scope="module", autouse=True)
def browser(browseropt, chrome, firefox):

    if browseropt == 'chrome':
        return chrome
    elif browseropt == 'firefox':
        return firefox """


@pytest.fixture(scope="module")
def url(request):
    return request.config.getoption("--url")

""" @pytest.fixture(scope="module")
def browseropt(request):
    return request.config.getoption("--browser") """
