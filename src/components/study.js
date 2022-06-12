class StudyPage {
  constructor({studyTitle, studyDescription}) {
    this.studyTitle = studyTitle;
    this.studyDescription = studyDescription;
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

    studyPageContainer.append(studyTitle, studyDescription);

    return studyPageContainer;
  }
}

export {StudyPage};