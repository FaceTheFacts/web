import pytest
from selenium import webdriver
from selenium.webdriver.chrome.options import Options as ChromeOptions
from selenium.webdriver.firefox.options import Options as FirefoxOptions
from selenium.webdriver.firefox.firefox_profile import FirefoxProfile
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

#from selenium.webdriver import SafariOptions

def pytest_addoption(parser):
    """
    add cli parser options
    """
    parser.addoption("--url", action="store", default="http://localhost:8100", help="url")
    parser.addoption(
        "--platform",
        action="store",
        default="",
        help="""platform on which to run the tests [ios,android,chrome,firefox,safari]. 
        Specify multiple seperated by comma (e.g: chrome,firefox)"""
        )


def pytest_configure(config):
    """
    register markers for platforms
    """
    config.addinivalue_line("markers", "chrome: mark test to run on chrome")
    config.addinivalue_line("markers", "firefox: mark test to run on firefox")
    config.addinivalue_line("markers", "safari: mark test to run on safari")
    config.addinivalue_line("markers", "ios: mark test to run on ios")
    config.addinivalue_line("markers", "android: mark test to run on android")


def pytest_collection_modifyitems(config, items):
    """
    skip platforms if specified
    """
    if config.getoption("--platform") == "":
        print('platform not specified')
        # --platform not specified in cli, run all tests
        return

    platform = config.getoption("--platform")

    skip_ff = pytest.mark.skip(reason="need --platform=firefox option to run")
    skip_chrome = pytest.mark.skip(reason="need --platform=chrome option to run")
    skip_safari = pytest.mark.skip(reason="need --platform=safari option to run")
    skip_ios = pytest.mark.skip(reason="need --platform=ios option to run")
    skip_android = pytest.mark.skip(reason="need --platform=android option to run")

    for item in items:
        if 'firefox' in item.keywords and not 'firefox' in platform:
            item.add_marker(skip_ff)
        elif "chrome" in item.keywords and not 'chrome' in platform:
            item.add_marker(skip_chrome)
        elif "safari" in item.keywords and not 'safari' in platform:
            item.add_marker(skip_safari)
        elif "ios" in item.keywords and not 'ios' in platform:
            item.add_marker(skip_ios)
        elif "android" in item.keywords and not 'android' in platform:
            item.add_marker(skip_android)

@pytest.fixture(scope='class')
def init_chrome(request):
    """
    initialise chromedriver
    """
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
    """
    initialise geckodriver
    """
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
    """
    initialise safaridriver
    """
    #safari_options = SafariOptions()
    """ profile = FirefoxProfile()
    profile.set_preference('media.navigator.streams.fake', True)
    profile.set_preference('media.navigator.permission.disabled', True)
    safari_options.profile = profile """
    safari_driver = webdriver.Safari() 
    request.cls.driver = safari_driver
    yield
    safari_driver.close()

@pytest.fixture(scope='class')
def init_android(request):
    #safari_options = SafariOptions()
    """ profile = FirefoxProfile()
    profile.set_preference('media.navigator.streams.fake', True)
    profile.set_preference('media.navigator.permission.disabled', True)
    safari_options.profile = profile """
    android_driver = webdriver.Remote(desired_capabilities=DesiredCapabilities.ANDROID) 
    request.cls.driver = android_driver
    yield
    android_driver.close()
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
