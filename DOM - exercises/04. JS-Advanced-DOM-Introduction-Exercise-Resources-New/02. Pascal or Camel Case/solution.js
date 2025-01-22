function solve() {
  let textInput = document.getElementById('text').value;
  let currentConvention = document.getElementById('naming-convention').value;
  let resultElement = document.getElementById('result');
  textInput = textInput.toLowerCase();

  let wordsArr = textInput.split(' ');
  let cases = {

    pascal: function pascalCase() {
      const pascalCaseArr = wordsArr.map((word) => {

        word = word[0].toUpperCase() + word.slice(1)
        return word;

      });
      return pascalCaseArr.join('');

    },
    camel: function camelCase() {
      const camelCaseArr = wordsArr.map((word, index) => {

        if (index == 0) {

        } else {
          word = word[0].toUpperCase() + word.slice(1)
        }
        return word;
      });
      return camelCaseArr.join('')
    }

  };
  if (currentConvention == 'Pascal Case') {
    resultElement.textContent = cases.pascal();
  } else if (currentConvention == 'Camel Case') {
    resultElement.textContent = cases.camel();
  } else {
    resultElement.textContent = 'Error!'
  }
};