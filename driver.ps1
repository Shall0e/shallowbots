cls
Import-Module -Name Selenium

$userscript = Invoke-WebRequest -Uri 'https://raw.githubusercontent.com/Shall0e/shallowbots/main/userscript.js'
$driver = Start-SeFirefox
$driver
Enter-SeUrl -Driver $driver -Url "https://scratch.mit.edu/projects/12785898/"
$driver.Manage().Cookies.GetCookieNamed('9z1EqHq8eYQgwmwqVJpTKNlO4UNlBr58')
$driver.ExecuteScript($userscript)
