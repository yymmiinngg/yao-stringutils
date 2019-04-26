class StringUtils {

    /**
     * 将对象转换成字符串，undefined、null、NaN 将被转成 “”
     * @param {object} obj 对象
     * @param {object} options 配置 {_NaN_ = '', _null_ = '', _undefined_ = ''} ，_NaN_='' 表示：如果 obj == NaN 则返回''，其它依此类推。
     * @returns {string} 返回字符串
     */
    static toString(obj, options = {}) {
        let { _NaN_ = '', _null_ = '', _undefined_ = '' } = options;
        if (obj === undefined) {
            return _undefined_;
        } else if (obj === null) {
            return _null_;
        } else if (Number.isNaN(obj)) {
            return _NaN_;
        }
        return obj.toString();
    }

    /**
     * 判断源字符串中是否包含子字符串
     * @param {string} str 源字符串
     * @param {string} substr 子字符串
     * @returns {boolean} true if src contains str; false else; false if str === undefined or str === null.
     */
    static contains(str, substr) {
        if (str === undefined || str === null) return false;
        return -1 !== str.toString().indexOf(substr);
    }

    /**
     * 判断对象转成字符串后是否为：undefined、null、NaN、""
     * @param {string|object} obj 字符串 将调用 obj.toString() 转成字符串
     * @returns {boolean} true 为空 | false 非空
     */
    static isEmpty(obj) {
        return obj === undefined || obj === null || Number.isNaN(obj) || '' === obj.toString();
    }

    /**
     * 判断对象转成字符串后是否为：undefined、null、NaN、"" 或者 字符串经过.trim()后是否为：""
     * @param {string|object} obj 对象 将调用 obj.toString() 转成字符串
     * @returns {boolean} true 为空 | false 非空
     */
    static isTrimEmpty(obj) {
        return obj === undefined || obj === null || Number.isNaN(obj) || '' === obj.toString().trim();
    }

    /**
     * 判断列表中的对象全都不命中isEmpty()，包括list本身
     * @param {Array|Set} list 列表(需要能被for...of遍历)
     * @returns {boolean} false list或其中的元素isEmpty() | false 全都!isEmpty()
     */
    static allNotEmpty(list) {
        if (StringUtils.isEmpty(list)) return false;
        for (let item of list) {
            if (StringUtils.isEmpty(item)) {
                return false;
            }
        }
        return true;
    }

    /**
     * 判断列表中的对象全都不命中isTrimEmpty()，包括list本身
     * @param {Array|Set} list 列表(需要能被for...of遍历)
     * @returns {boolean} false list或其中的元素isTrimEmpty() | false 全都!isTrimEmpty()
     */
    static allNotTrimEmpty(list) {
        if (StringUtils.isTrimEmpty(list)) return false;
        for (let item of list) {
            if (StringUtils.isTrimEmpty(item)) {
                return false;
            }
        }
        return true;
    }

    /**
     * 将字符串填充或截断成指定宽度
     * @param {string} str 源字符串
     * @param {number} len 指定长度
     * @param {object} options 配置对象 { filler: string, align: number, ellipsis: string }, filler: 用于作填充的字符(默认' '); align: 对方方式(-1居左，0居中，1居右，默认-1); ellipsis: 省略字符(默认'...')
     * @returns {string} 处理后的字符串
     */
    static toLength(str, len, options = {}) {
        if ('string' !== typeof str) str = StringUtils.toString(str);
        let { filler = ' ', align = -1, ellipsis = '...' } = options;
        if (filler.length > 1) {
            filler = filler.substring(0, 1);
        }
        if (str.length <= len) {
            let t = true;
            while (str.length < len) {
                if (0 === align) {
                    str = (t = !t) ? filler + str : str + filler;
                } else if (align > 0) {
                    str = filler + str;
                } else {
                    str = str + filler;
                }
            }
            return str;
        }
        if (len <= ellipsis.length) { return str.substring(0, len); }
        return str.substring(0, len - ellipsis.length) + ellipsis;
    }

    /**
     * 得到指定位置左侧的字符串: getLeft('aaa|bbb|ccc|ddd|eee', '|') > 'aaa'
     * @param {string} str 源字符串
     * @param {string} pos 位置字符串
     * @returns {string} undefined if src === undefined; null if src === null; null if pos not in src.
     */
    static getLeft(str, pos) {
        if (undefined === str) return undefined;
        if (null === str) return null;

        if (pos === '') return str;
        let p = str.indexOf(pos);
        if (-1 === p) { return null; }
        return str.substring(0, p);
    }

    /**
     * 得到指定位置左侧的字符串（最最大匹配）: getLeftOuter('aaa|bbb|ccc|ddd|eee', '|') > 'aaa|bbb|ccc|ddd'
     * @param {string} str 源字符串
     * @param {string} pos 位置字符串
     * @returns {string} undefined if src === undefined; null if src === null; null if pos not in src.
     */
    static getLeftOuter(str, pos) {
        if (undefined === str) return undefined;
        if (null === str) return null;

        if (pos === '') return str;
        let p = str.lastIndexOf(pos);
        if (p == -1) { return null; }
        return str.substring(0, p);
    }

    /**
     * 得到指定位置右侧的字符串: getRight('aaa|bbb|ccc|ddd|eee', '|') > 'eee'
     * @param {string} str 源字符串
     * @param {string} pos 位置字符串
     * @returns {string} undefined if src === undefined; null if src === null; null if pos not in src.
     */
    static getRight(str, pos) {
        if (undefined === str) return undefined;
        if (null === str) return null;

        if (pos === '') return str;
        let p = str.lastIndexOf(pos);
        if (p == -1) { return null; }
        return str.substring(p + 1);
    }

    /**
     * 得到指定位置右侧的字符串（最最大匹配）:getRightOuter('aaa|bbb|ccc|ddd|eee', '|') > 'bbb|ccc|ddd|eee'
     * @param {string} str 源字符串
     * @param {string} pos 位置字符串
     * @returns {string} undefined if src === undefined; null if src === null; null if pos not in src.
     */
    static getRightOuter(str, pos) {
        if (undefined === str) return undefined;
        if (null === str) return null;

        if (pos === '') return str;
        let p = str.indexOf(pos);
        if (p == -1) { return null; }
        return str.substring(p + 1);
    }

    /**
     * 得到指定边界字符串中间的字符串: getSection('aaa|bbb|ccc|ddd|eee', '|', '|') > 'bbb'
     * @param {string} str 源字符串
     * @param {string} left 左边界
     * @param {string} right 右边界
     * @returns {string} undefined if src === undefined; null if src === null; null if left not in src or right not in src.
     */
    static getSection(str, left, right) {
        if (undefined === str) return undefined;
        if (null === str) return null;

        let l = str.indexOf(left);
        let r = str.indexOf(right, l + 1);
        if (l == -1 || r == -1) { return null; }

        if (left === '') l = 0; else l++;
        if (right === '') r = str.length;

        return str.substring(l, r);
    }

    /**
     * 得到指定边界字符串中间的字符串（最最大匹配）: getSectionOuter('aaa|bbb|ccc|ddd|eee', '|', '|') > 'bbb|ccc|ddd'
     * @param {string} str 源字符串
     * @param {string} left 左边界
     * @param {string} right 右边界
     * @returns {string} undefined if src === undefined; null if src === null; null if left not in src or right not in src.
     */
    static getSectionOuter(str, left, right) {
        if (undefined === str) return undefined;
        if (null === str) return null;

        let l = str.indexOf(left);
        let r = str.lastIndexOf(right);
        if (l == -1 || r == -1) { return null; }

        if (left === '') l = 0; else l++;
        if (right === '') r = str.length;

        return str.substring(l, r);
    }

}

module.exports = StringUtils;