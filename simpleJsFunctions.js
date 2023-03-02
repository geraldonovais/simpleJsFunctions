
/**
 * Copyright (c) Geraldo Novais
 *
 */

/**
 * Converts the first character of a string to uppercase
 * 
 * @return {string} The new string with the first character in uppercase
 *             
 */
String.prototype.ucfirst = function () {
    return this.charAt(0).toUpperCase() + this.substr(1);
};

/**
 * Converts a string into camel case, removing hyphens, underscores and spaces.
 * 
 * @param {text} string Text to camelize
 * @return string converted into camel case 
 */
var camelize = function (text) {
    return text.replace(/^([A-Z])|[\s-_]+(\w)/g, function (match, p1, p2, offset) {
        if (p2)
            return p2.toUpperCase();
        return p1.toLowerCase();
    }).ucfirst();
}

// Exporting variables and functions
export { camelize };