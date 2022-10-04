import {hiraganaArray} from "./kanaList";

class TestPage {
  constructor({testTitle, testDescription}) {
    this.testTitle = testTitle;
    this.testDescription = testDescription;
    this.kana = hiraganaArray;
    this.currentKana = '';
    this.currentConsonant = null;
    this.currentCharacter = null;
  }

  generateRandomKana() {
    return
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
    this.currentConsonant = Math.floor((Math.random()*this.kana.length));
    this.currentCharacter = Math.floor((Math.random()*this.kana[this.currentConsonant].characters.length));
    kanaCharacter.textContent = this.kana[this.currentConsonant].characters[this.currentCharacter].character;

    const kanaInput = document.createElement('input');
    kanaInput.classList.add('kana-input-field');

    testPageContainer.append(testTitle, testDescription, kanaCharacter);

    return testPageContainer;
  }
}

export {TestPage};