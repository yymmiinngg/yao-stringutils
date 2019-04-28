const StringUtils = require('./src/StringUtils')
module.exports = {
    StringUtils,
    bindStringPrototype() {
        let ms = ['contains', 'toLength', 'getLeft', 'getLeftOuter', 'getRight', 'getRightOuter', 'getSection', 'getSectionOuter'];
        for (let m of ms) {
            String.prototype[m] = function (...p) {
                return StringUtils[m](this, ...p)
            }
        }
        return ms;
    }
}