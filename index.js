function calculateTax(amount) {
    return amount * 0.1;
}


function convertToUpperCase(text) {
    let result = text.toUpperCase();
    return result;
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    let discountAmount = originalPrice * (discountPercentage / 100);
    let finalPrice = originalPrice - discountAmount;
    return finalPrice;
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

// ⚠️ Make sure calculateDiscountedPrice is added here:
module.exports = { 
    calculateTax, 
    convertToUpperCase, 
    calculateDiscountedPrice, 
    findMaximum, 
    isPalindrome 
};
