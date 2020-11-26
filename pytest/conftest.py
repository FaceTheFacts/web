"""
Pytest Configuration
"""

import inspect
import os
import subprocess

import numpy as np
from PIL import Image
from selenium import webdriver
from selenium.webdriver.chrome.options import Options as ChromeOptions
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium.webdriver.firefox.firefox_profile import FirefoxProfile
from selenium.webdriver.firefox.options import Options as FirefoxOptions

import pytest

#from selenium.webdriver import SafariOptions
INNER_HEIGHT = 812
INNER_WIDTH = 450 

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
    config.addinivalue_line("markers", "scan: mark test requiring test webcam")


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
        elif "scan" in item.keywords and not check_for_test_webcam():
            item.add_marker(pytest.mark.skip(reason="need 'scan-test-webcam' video device to run"))
    



def check_for_test_webcam():
    process = subprocess.Popen(['v4l2-ctl', '--list-devices'],
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT)
    stdout, stderr = process.communicate()
    if 'scan-test-webcam' in str(stdout).lower():
        return True
    else:
        return False

@pytest.fixture(scope='class')
def init_chrome(request):
    """
    initialise chromedriver
    """
    delta_height = 123
    #innerHeight=926
    chrome_options = ChromeOptions()
    #chrome_options.add_argument('--headless')
    chrome_options.add_argument('--no-sandbox')
    chrome_options.add_argument('--single-process')
    chrome_options.add_argument('--disable-dev-shm-usage')
    chrome_options.add_argument('--allow-file-access-from-files')
    chrome_options.add_argument('--use-fake-device-for-media-stream')
    chrome_options.add_argument('--use-fake-ui-for-media-stream')
    chrome_options.add_argument('--use-file-for-fake-video-capture=./test_scan_video.mjpeg')
    chrome_options.add_argument('--ignore-certificate-errors')
    chrome_options.add_argument('--disable-web-extensions')
    chrome_driver = webdriver.Chrome(options=chrome_options)
    chrome_driver.set_window_position(0, 0)
    chrome_driver.set_window_size(INNER_WIDTH, INNER_HEIGHT + delta_height)
    request.cls.driver = chrome_driver
    yield
    chrome_driver.close()


@pytest.fixture(scope='class')
def init_firefox(request):
    """
    initialise geckodriver
    """
    #windowHeight=1049
    #windowWidth=1790
    #innerHeight=975
    

    delta_height = 74 # MacOS
    #delta_height = 74 # Ubuntu
    #delta_width = 76
    firefox_capabilities = DesiredCapabilities.FIREFOX.copy()
    firefox_options = FirefoxOptions()
    profile = FirefoxProfile()
    if not check_for_test_webcam():
        profile.set_preference('media.navigator.streams.fake', True)
    profile.set_preference('media.navigator.permission.disabled', True)
    firefox_options.profile = profile
    firefox_driver = webdriver.Firefox(options=firefox_options, capabilities=firefox_capabilities)
    firefox_driver.set_window_position(0, 0)
    firefox_driver.set_window_size(INNER_WIDTH, INNER_HEIGHT + delta_height)
    request.cls.driver = firefox_driver
    yield
    firefox_driver.close()

@pytest.fixture(scope='class')
def init_safari_desktop(request):
    """
    initialise safaridriver
    """
    #safari_options = SafariOptions()
    #innerHeight=1011
    delta_height = 38

    safari_driver = webdriver.Safari()
    safari_driver.set_window_position(0, 0)
    safari_driver.set_window_size(INNER_WIDTH, INNER_HEIGHT + delta_height)
    request.cls.driver = safari_driver
    yield
    safari_driver.close()

@pytest.fixture(scope='class')
def init_android(request):
    """
    initialise chromedriver for android
    """

    capabilities = {
        'platformName': 'Android',
        'platformVersion': '11.0',
        'deviceName': 'Android Emulator',
        'automationName': 'UIAutomator2',
        'browserName': 'Chrome',
        'avd': 'Pixel_3a_API_30_x86',
        'avdArgs': '-no-snapshot -camera-back emulated'
    }
    android_driver = webdriver.Remote(
        'http://localhost:4723/wd/hub',
        desired_capabilities=capabilities
        )
    request.cls.driver = android_driver
    yield
    android_driver.close()

@pytest.fixture(scope='class')
def init_ios(request):
    """
    initialise safaridriver for iOS
    """
    #safari_options = SafariOptions()
    desired_caps = {
        'platformName': 'iOS',
        'platformVersion': '14.1',
        'browserName': 'Safari',
        'automationName': 'xcuitest',
        'deviceName': 'iPhone Simulator',
        'autoAcceptAlerts': True,
        'safariIgnoreFraudWarning': True
    }
    safari_driver = webdriver.Remote(
        'http://localhost:4723/wd/hub',
        desired_capabilities=desired_caps
        )
    request.cls.driver = safari_driver
    yield
    safari_driver.close()



@pytest.fixture(scope="module")
def url(request):
    """
    url command line option
    """
    return request.config.getoption("--url")



def assert_images_equal(image_1: str, image_2: str):
    """
    Assert wether 2 images are the same
    """
    img1 = Image.open(image_1)
    img2 = Image.open(image_2)

    # Convert to same mode and size for comparison
    img2 = img2.convert(img1.mode)
    img2 = img2.resize(img1.size)

    sum_sq_diff = np.sum((np.asarray(img1).astype('float') - np.asarray(img2).astype('float'))**2)

    if sum_sq_diff == 0:
        # Images are exactly the same
        pass
        #return 0
    else:
        normalized_sum_sq_diff = sum_sq_diff / np.sqrt(sum_sq_diff)
        assert normalized_sum_sq_diff < 0.001



def get_test_slug(request):
    """
    generate slug from request class
    """
    platform = request.cls.__name__.lower().replace('test', '')
    class_path = inspect.getfile(request.cls).split('/')
    class_file = class_path[-1]
    screen = class_file.replace('test_', '').replace('.py', '')

    testname = f"{screen}_{platform}_{request.node.name}_{INNER_WIDTH}x{INNER_HEIGHT}"

    return testname

@pytest.fixture
def image_similarity(request, tmpdir, extra):
    """
    test screeenshots for similarity
    """

    testname = get_test_slug(request)
    #filename = "{}.png".format(testname)
    generated_file = os.path.join(str(tmpdir), "{}.png".format(testname))
    yield { 'filename': generated_file, 'baseline': "test/baseline_images/{}.png".format(testname)}
    try:
        # Check if baseline image exists
        open("test/baseline_images/{}.png".format(testname))
        
        #result = compare_images("test/baseline_images/{}.png".format(testname), generated_file)
      
    except FileNotFoundError:
        # If the baseline image does not exist, make the current screenshot baseline
        generated_image = Image.open(generated_file)
        generated_image.save("test/baseline_images/{}.png".format(testname))
        #assert_images_equal("test/baseline_images/{}.png".format(testname), generated_file)

        #result = compare_images("test/baseline_images/{}.png".format(testname), generated_file)
    finally:
        assert_images_equal("test/baseline_images/{}.png".format(testname), generated_file)
        # if diff > 0.001:
        #     pytest.fail("Screenshot does not match baseline")

    #return result
    


@pytest.fixture
def store_screenshot(request, tmpdir):
    testname = get_test_slug(request)
    generated_file = os.path.join(str(tmpdir), "{}.png".format(testname))
    yield { 'filename': generated_file, 'baseline': "test/baseline_images/{}.png".format(testname)}




def compare_images(image_1: str, image_2: str):
    """
    Assert wether 2 images are the same
    """
    img1 = Image.open(image_1)
    img2 = Image.open(image_2)

    # Convert to same mode and size for comparison
    img2 = img2.convert(img1.mode)
    img2 = img2.resize(img1.size)

    sum_sq_diff = np.sum((np.asarray(img1).astype('float') - np.asarray(img2).astype('float'))**2)

    if sum_sq_diff == 0:
        # Images are exactly the same
        return sum_sq_diff
    else:
        normalized_sum_sq_diff = sum_sq_diff / np.sqrt(sum_sq_diff)
        return normalized_sum_sq_diff
    
