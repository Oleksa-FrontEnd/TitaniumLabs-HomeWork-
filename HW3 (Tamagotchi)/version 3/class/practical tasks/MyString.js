class MyString {
    constructor(value) {
        this.value = value;
    }
    reverse(value) {
          return value.split("").reverse().join('');
    }
    ucFirst(value) {
        return (value.charAt(0).toUpperCase() + value.slice(1));
    }
    ucWords(value) {

            //var finalName = value;
            // Your code goes here!
            var finalName = value.toLowerCase();

            finalName = finalName.replace(finalName.charAt(0), finalName.charAt(0).toUpperCase());

            for(var i = 0; i < finalName.length; i++) {
                if (finalName.charAt(i) === " ") {
                    var startLetter = finalName.slice(i+1, i+2);
                    finalName = finalName.slice(0, i+1) + startLetter.toUpperCase() + finalName.slice(i+2);
                }
            }
        return finalName;
    }
}