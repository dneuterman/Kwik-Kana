import {hiraganaArray} from "./kanaList";

class StudyPage {
  constructor({studyTitle, studyDescription}) {
    this.studyTitle = studyTitle;
    this.studyDescription = studyDescription;
    this.hiragana = this.listKanaTable(hiraganaArray);
  }

  listKanaTable(arr) {
    const kanaListContainer = document.createElement('div');
    kanaListContainer.classList.add('kana-list-container');
    for (let i=0; i<arr.length; i++) {
      const kanaListGroup = document.createElement('div');
      kanaListGroup.classList.add('kana-list-group');
      for (let j=0; j<arr[i].characters.length; j++) {
        const kanaCharacterDiv = document.createElement('div');
        if (arr[i].characters[j] === null) {
          kanaCharacterDiv.classList.add('kana-character-null');
          kanaListGroup.append(kanaCharacterDiv);
          continue;
        }

        const kanaCharacter = document.createElement('p');
        kanaCharacter.classList.add('kana-character');
        kanaCharacter.textContent = `${arr[i].characters[j].character}`;

        const kanaRomaji = document.createElement('p');
        kanaRomaji.classList.add('kana-romaji');
        kanaRomaji.textContent = `${arr[i].characters[j].romaji}`;

        kanaCharacterDiv.append(kanaCharacter, kanaRomaji);
        kanaListGroup.append(kanaCharacterDiv);
      }

      kanaListContainer.append(kanaListGroup);
    }

    return kanaListContainer;
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

    studyPageContainer.append(studyTitle, studyDescription, this.hiragana);

    return studyPageContainer;
  }
}

export {StudyPage};