const StringUtils = require('./src/StringUtils')
module.exports = {
    StringUtils,
    bindStringPrototype() {
        String.prototype.contains = function (substr) {
            return StringUtils.contains(this, substr);
        };
        String.prototype.toLength = function (len, options) {
            return StringUtils.toLength(this, len, options);
        };
        String.prototype.getLeft = function (pos) {
            return StringUtils.getLeft(this, pos);
        };
        String.prototype.getLeftOuter = function (pos) {
            return StringUtils.getLeftOuter(this, pos);
        };
        String.prototype.getRight = function (pos) {
            return StringUtils.getRight(this, pos);
        };
        String.prototype.getRightOuter = function (pos) {
            return StringUtils.getRightOuter(this, pos);
        };
        String.prototype.getSection = function (left, right) {
            return StringUtils.getSection(this, left, right);
        };
        String.prototype.getSectionOuter = function (left, right) {
            return StringUtils.getSectionOuter(this, left, right);
        };
    }
}