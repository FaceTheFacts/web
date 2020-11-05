import pytest
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.firefox.options import Options as GeckoOptions
from selenium.webdriver.firefox.firefox_profile import FirefoxProfile

def pytest_addoption(parser):
    parser.addoption("--url", action="store", default="http://localhost:8100", help="url")


""" @pytest.fixture(scope="module", autouse=True)
def chrome():
    options = Options()
    options.add_argument('--headless')
    options.add_argument('--no-sandbox')
    options.add_argument('--single-process')
    options.add_argument('--disable-dev-shm-usage')

    browser = webdriver.Chrome(options=options)
    return browser """
@pytest.fixture(scope="module", autouse=True)
def firefox():
    options = GeckoOptions()
    profile = FirefoxProfile()
    profile.set_preference('media.navigator.streams.fake', True)
    profile.set_preference('media.navigator.permission.disabled', True)
    options.profile = profile
    browser = webdriver.Firefox(options=options)
    return browser

@pytest.fixture(scope="module")
def url(request):
    return request.config.getoption("--url")