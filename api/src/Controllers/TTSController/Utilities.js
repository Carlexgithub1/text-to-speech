module.exports.missingInput = function (name) {
    throw new Error(`Missing inputs(s): [${name}]`);
}
module.exports.inputTypeError = function (msg) {
    throw new TypeError(`Invalid input type: ${msg}`)
}