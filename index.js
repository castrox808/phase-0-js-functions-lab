function convertToUpperCase(text) {
    let result = text.toUpperCase();
    return result;
}

function calculateTax(subtotal, taxRate) {
    // Calculates tax amount based on a percentage rate (e.g., 16 for 16%)
    return subtotal * (taxRate / 100);
}

function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

function isPalindrome(word) {
    let lowerWord = word.toLowerCase();
    let reversedWord = lowerWord.split("").reverse().join("");
    return lowerWord === reversedWord;
}
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    let discountAmount = originalPrice * (discountPercentage / 100);
    let finalPrice = originalPrice - discountAmount;
    return finalPrice;
}
// This is required for the test to function properly
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome };
