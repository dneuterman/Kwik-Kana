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

const hiraganaArray = [
  {
    consonant: '-',
    characters: [
      {
        character: 'あ',
        romaji: 'a',
      },
      {
        character: 'い',
        romaji: 'i',
      },
      {
        character: 'う',
        romaji: 'u',
      },
      {
        character: 'え',
        romaji: 'e',
      },
      {
        character: 'お',
        romaji: 'o',
      },
    ]
  },
  {
    consonant: 'k',
    characters: [
      {
        character: 'か',
        romaji: 'ka',
      },
      {
        character: 'き',
        romaji: 'ki',
      },
      {
        character: 'く',
        romaji: 'ku',
      },
      {
        character: 'け',
        romaji: 'ke',
      },
      {
        character: 'こ',
        romaji: 'ko',
      },
    ]
  },
  {
    consonant: 's',
    characters: [
      {
        character: 'さ',
        romaji: 'sa',
      },
      {
        character: 'し',
        romaji: 'shi',
      },
      {
        character: 'す',
        romaji: 'su',
      },
      {
        character: 'せ',
        romaji: 'se',
      },
      {
        character: 'そ',
        romaji: 'so',
      },
    ]
  },
  {
    consonant: 't',
    characters: [
      {
        character: 'さ',
        romaji: 'ta',
      },
      {
        character: 'し',
        romaji: 'chi',
      },
      {
        character: 'す',
        romaji: 'tsu',
      },
      {
        character: 'せ',
        romaji: 'te',
      },
      {
        character: 'そ',
        romaji: 'to',
      },
    ]
  },
  {
    consonant: 'n',
    characters: [
      {
        character: 'な',
        romaji: 'na',
      },
      {
        character: 'に',
        romaji: 'ni',
      },
      {
        character: 'ぬ',
        romaji: 'nu',
      },
      {
        character: 'ね',
        romaji: 'ne',
      },
      {
        character: 'の',
        romaji: 'no',
      },
    ]
  },
  {
    consonant: 'h',
    characters: [
      {
        character: 'は',
        romaji: 'ha',
      },
      {
        character: 'ひ',
        romaji: 'hi',
      },
      {
        character: 'ふ',
        romaji: 'fu',
      },
      {
        character: 'へ',
        romaji: 'he',
      },
      {
        character: 'ほ',
        romaji: 'ho',
      },
    ]
  },
  {
    consonant: 'm',
    characters: [
      {
        character: 'ま',
        romaji: 'ma',
      },
      {
        character: 'み',
        romaji: 'mi',
      },
      {
        character: 'む',
        romaji: 'mu',
      },
      {
        character: 'め',
        romaji: 'me',
      },
      {
        character: 'も',
        romaji: 'mo',
      },
    ]
  },
  {
    consonant: 'y',
    characters: [
      {
        character: 'や',
        romaji: 'ya',
      },
      null,
      {
        character: 'ゆ',
        romaji: 'yu',
      },
      null,
      {
        character: 'よ',
        romaji: 'yo',
      },
    ]
  },
  {
    consonant: 'r',
    characters: [
      {
        character: 'ら',
        romaji: 'ra',
      },
      {
        character: 'り',
        romaji: 'ri',
      },
      {
        character: 'る',
        romaji: 'ru',
      },
      {
        character: 'れ',
        romaji: 're',
      },
      {
        character: 'ろ',
        romaji: 'ro',
      },
    ]
  },
  {
    consonant: 'w',
    characters: [
      {
        character: 'わ',
        romaji: 'wa',
      },
      null,
      null,
      null,
      {
        character: 'を',
        romaji: 'wo',
      },
    ]
  },
  {
    consonant: '(n)',
    characters: [
      {
        character: 'ん',
        romaji: 'n',
      },
      null,
      null,
      null,
      null,
    ]
  },
]


export {StudyPage};