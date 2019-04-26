class StringUtils {

    /**
     * 将对象转换成字符串，undefined、null、NaN 将被 转成“”
     * @param {Object} obj 对象 
     * @returns {string} 返回字符串
     */
    static toString(obj) {
        if (obj === undefined || obj === null || obj === NaN) {
            return '';
        }
        return '' + obj;
    }

    /**
     * 判断字符串是否为：undefined、null、NaN、""
     * @param {string} str 字符串（如果是其它类型将被toString(str)）
     * @returns {boolean} true 为空 | false 非空
     */
    static isEmpty(str) {
        return obj === undefined || obj === null || obj === NaN || '' === str;
    }
    
    /**
     * 判断字符串是否为：undefined、null、NaN、"" 或者 字符串经过.trim()后是否为：""
     * @param {string} str 字符串（如果是其它类型将被toString）
     * @returns {boolean} true 为空 | false 非空
     */
    static isTrimEmpty(str) { 
        return obj === undefined || obj === null || obj === NaN || '' === str.trim();
    }


}