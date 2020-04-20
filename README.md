# cucumber-hello-world
A set of simple BDD test cases using Cucumber implemented in JS

### Dependencies
* Node > v8
* NPM > v5
* Java > v8

### Install
```bash
# Install deps
npm install

# Chromedriver (For Debian)
sudo chmod +x /usr/bin/chromedriver
unzip chromedriver_linux64.zip
sudo mv chromedriver /usr/bin/chromedriver
sudo chown root:root /usr/bin/chromedriver
sudo chmod +x /usr/bin/chromedriver

# Check Chromedriver version
chromedriver --version
ChromeDriver 2.41.578700 (2f1ed5f9343c13f73144538f15c00b370eda6706)
```

### Run tests
```bash
# Run all tests
npm run test

# Run specific test
./node_modules/.bin/cucumber-js features/addition.feature
```

## Contribute
Pull Requests always welcome, as well as any feedback or issues.
