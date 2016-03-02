'use strict';

module.exports = function translit() {
    
  var _associations = {
    "а": "a",
    "б": "b",
    "в": "v",
    "г": "g",
    "д": "d",
    "е": "e",
    "ё": "e",
    "ж": "zh",
    "з": "z",
    "и": "i",
    "й": "i",
    "к": "k",
    "л": "l",
    "м": "m",
    "н": "n",
    "о": "o",
    "п": "p",
    "р": "r",
    "с": "s",
    "т": "t",
    "у": "u",
    "ф": "f",
    "х": "kh",
    "x": "kh",
    "ц": "c",
    "ч": "ch",
    "ш": "sh",
    "щ": "sh",
    "ъ": "i",
    "ы": "i",
    "ь": "i",
    "э": "e",
    "ю": "yu",
    "я": "ya" 
  };
    
    return {
        transform: transform
    }
    
    function transform(transformedString) {
        if (!transformedString) {
            return "";
        }
        
        var new_str = "";
        for (var i = 0; i < transformedString.length; i++) {
            var strLowerCase = transformedString[i].toLowerCase();
            if (_associations[strLowerCase]) {
                new_str += _associations[strLowerCase];
            } else {
                new_str += strLowerCase;
            }
        }
        return new_str.replace(/'/g, '').replace(/"/g, '');
    }
};