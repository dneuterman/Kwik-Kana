import {hiraganaArray} from "./kanaList";

class StudyPage {
  constructor({kanaArrays}) {
    this.hiragana = kanaArrays[0];
    this.katakana = kanaArrays[1];
  }

  listKanaTable(arr, kanaTitleName) {
    const kanaList = document.createElement('div');
    kanaList.classList.add('kana-list');
    const kanaTitle = document.createElement('h2');
    kanaTitle.classList.add('kana-title');
    kanaTitle.textContent = kanaTitleName;
    kanaList.append(kanaTitle);
    for (let i=0; i<arr.length; i++) {
      const kanaListRow = document.createElement('div');
      kanaListRow.classList.add('kana-list-row');
      for (let j=0; j<arr[i].characters.length; j++) {
        const kanaCharacterDiv = document.createElement('div');

        const kanaCharacter = document.createElement('p');
        kanaCharacter.classList.add('kana-character');
        kanaCharacter.textContent = `${arr[i].characters[j].character}`;

        const kanaRomaji = document.createElement('p');
        kanaRomaji.classList.add('kana-romaji');
        kanaRomaji.textContent = `${arr[i].characters[j].romaji}`;

        kanaCharacterDiv.append(kanaCharacter, kanaRomaji);
        kanaListRow.append(kanaCharacterDiv);
      }

      if (arr[i].characters.length < 5) {
        for (let k = 0; k<(5-arr[i].characters.length); k++) {
          const kanaCharacterDiv = document.createElement('div');
          kanaCharacterDiv.classList.add('empty-kana-space');
          kanaListRow.append(kanaCharacterDiv);
        }
      }
      kanaList.append(kanaListRow);
    }
    return kanaList;
  }

  buildPage() {
    const studyPageContainer = document.createElement('div');
    studyPageContainer.classList.add('study-page-container');

    const kanaListContainer = document.createElement('div');
    kanaListContainer.classList.add('kana-list-container');
    kanaListContainer.append(this.listKanaTable(this.hiragana, "Hiragana"), this.listKanaTable(this.katakana, "Katakana"))

    studyPageContainer.append(kanaListContainer);

    return studyPageContainer;
  }
}

export {StudyPage};