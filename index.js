// Global variable for customer name
var customerName = 'bob';

// Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to set global bestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob'; // Implicit global variable
}

// Function to overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Global constant for least favorite customer
const leastFavoriteCustomer = 'alice';

// Function to attempt reassigning leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'bob'; // Should throw TypeError in strict mode
}

// Export all deliverables for test suite
module.exports = {
  customerName,
  upperCaseCustomerName,
  setBestCustomer,
  overwriteBestCustomer,
  leastFavoriteCustomer,
  changeLeastFavoriteCustomer
};