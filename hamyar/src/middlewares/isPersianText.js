const isPersianText = (String) => {

    var numberRange = '[\u06F0-\u06F9\u0660-\u0669\u0030-\u0039]',
      charRange = ['[\u06A9\u06AF\u06C0\u06CC\u060C',
				'\u062A\u062B\u062C\u062D\u062E\u062F',
				'\u063A\u064A\u064B\u064C\u064D\u064E',
        '\u064F\u067E\u0670\u0686\u0698\u200C',
        '\u0629\u0643\u0649-\u064B\u064D\u06D5',
				'\u0621-\u0629\u0630-\u0639\u0641-\u0654]'].join(''),
      rtlPunctuations = '(،|؟|«|»|؛|٬)',
      ltrPunctuations = '(\\.|:|\\!|\\-|\\[|\\]|\\(|\\)|/)';

      const regexRul = new RegExp('^' + 
        combineRegExps(numberRange, charRange, rtlPunctuations, ltrPunctuations, '\\s') + '+$'
    );

    function combineRegExps () {
		var combined = '(';
		for (var i = 0; i < arguments.length; i++) {
			combined += '(';
			if (i != arguments.length - 1)
				combined += arguments[i] + ')|';
			else
				combined += arguments[i] + ')';
		}
		return combined + ')';
	}

    return String.match(regexRul) !== null;

}
module.exports = isPersianText;