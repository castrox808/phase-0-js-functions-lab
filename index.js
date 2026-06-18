function calculateTax(amount)
{
    let taxValue = amount * 0.10;
    return taxValue;
}

function convertToUpperCase(text)
{
    let result = text.toUpperCase();
    return result;
}

function calculateDiscountedPrice(originalPrice, discountPercentage)
{
    let discountAmount = originalPrice * ( discountPercentage / 100);
    let finalPrice = originalPrice - discountAmount;
    return finalPrice;
}

function findMaximum(num1, num2)
{
    if (num1 > num2)
    {
        return num1;
    }
    else
    {
        return num2;
    }
}

function isPalindrome(word)
{
    let lowerWord = word.toLowerCase();
    let reversedWord = lowerWord.split("").reverse().join("");
    return lowerWord === reversedWord;
}
function calculateDiscountedPrice(originalPrice, discountPercentage)
{
    let discountAmount = originalPrice * ( discountPercentage / 100);
    let finalPrice = originalPrice - discountAmount;
    return finalPrice;}
// This is required for the test to function properly
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome }
