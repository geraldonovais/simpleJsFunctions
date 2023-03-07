
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

/**
 * Removes from the object elements that contain null values
 * 
 * It interacts in all properties of a json object by eliminating
 * those that have null value. It does this recursively when a given 
 * property contains another associated object. 
 * 
 * @param {object} obj 
 * 
 */
function deleteNull(obj) {

    for (var key in obj) {

        if (obj[key] === null) {
            delete obj[key];
        } else if (typeof (obj[key]) === "object") {
            deleteNull(obj[key]);
        }
    }
}

// Exporting variables and functions
export { camelize };