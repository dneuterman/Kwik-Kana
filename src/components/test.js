import {hiraganaArray} from "./kanaList";

class TestPage {
  constructor({testTitle, testDescription}) {
    this.testTitle = testTitle;
    this.testDescription = testDescription;
    this.kana = hiraganaArray;
    this.currentKana = '';
    this.currentConsonant = null;
    this.currentCharacter = null;
    this.correctValue = 0;
    this.incorrectValue = 0;
  }

  generateRandomKana() {
    this.currentConsonant = Math.floor((Math.random()*this.kana.length));
    this.currentCharacter = Math.floor((Math.random()*this.kana[this.currentConsonant].characters.length));
    this.currentKana = this.kana[this.currentConsonant].characters[this.currentCharacter].character;;
  }

  checkKanaInput(kanaInput) {
    if (kanaInput == this.kana[this.currentConsonant].characters[this.currentCharacter].romaji) {
      this.correctValue++;
    } else {
      this.incorrectValue++;
    }
  }

  buildPage() {
    const testPageContainer = document.createElement('div');
    testPageContainer.classList.add('test-page-container');

    const testTitle = document.createElement('h2');
    testTitle.classList.add('test-title');
    testTitle.textContent = this.testTitle;

    const testDescription = document.createElement('p');
    testDescription.classList.add('test-description');
    testDescription.textContent = this.testDescription;

    const kanaCharacter = document.createElement('p');
    kanaCharacter.classList.add('current-test-kana');

    this.generateRandomKana();
    kanaCharacter.textContent = this.currentKana;

    const correctCount = document.createElement('p');
    correctCount.textContent = 'Correct: 0';

    const incorrectCount = document.createElement('p');
    incorrectCount.textContent = 'Incorrect: 0';

    const kanaInput = document.createElement('input');
    kanaInput.id = 'kana-character-input';
    kanaInput.setAttribute('autocomplete', 'off');
    kanaInput.addEventListener('keydown', (e) => {
      if (e.key === "Enter") {
        this.checkKanaInput(e.target.value.toLowerCase());
        correctCount.textContent = `Correct: ${this.correctValue}`;
        incorrectCount.textContent = `Incorrect: ${this.incorrectValue}`;
        e.target.value = '';
        this.generateRandomKana();
        kanaCharacter.textContent = this.currentKana;
      }
    });

    testPageContainer.append(testTitle, testDescription, kanaCharacter, kanaInput, correctCount, incorrectCount);

    return testPageContainer;
  }
}

export {TestPage};