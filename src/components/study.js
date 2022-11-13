import {hiraganaArray} from "./kanaList";

class StudyPage {
  constructor({studyTitle, studyDescription, kanaArrays}) {
    this.studyTitle = studyTitle;
    this.studyDescription = studyDescription;
    this.hiragana = kanaArrays[0];
    this.katakana = kanaArrays[1];
  }

  listKanaTable(arr) {
    const kanaList = document.createElement('div');
    kanaList.classList.add('kana-list');
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

    const studyTitle = document.createElement('h2');
    studyTitle.classList.add('study-title');
    studyTitle.textContent = this.studyTitle;

    const studyDescription = document.createElement('p');
    studyDescription.classList.add('study-description');
    studyDescription.textContent = this.studyDescription;

    const kanaListContainer = document.createElement('div');
    kanaListContainer.classList.add('kana-list-container');
    kanaListContainer.append(this.listKanaTable(this.hiragana), this.listKanaTable(this.katakana))

    studyPageContainer.append(studyTitle, studyDescription, kanaListContainer);

    return studyPageContainer;
  }
}

export {StudyPage};