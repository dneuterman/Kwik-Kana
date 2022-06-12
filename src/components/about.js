class AboutPage {
  constructor({aboutTitle, aboutDescription}) {
    this.aboutTitle = aboutTitle;
    this.aboutDescription = aboutDescription;
  }

  buildPage() {
    const aboutPageContainer = document.createElement('div');
    aboutPageContainer.classList.add('about-page-container');

    const aboutTitle = document.createElement('h2');
    aboutTitle.classList.add('about-title');
    aboutTitle.textContent = this.aboutTitle;

    const aboutDescription = document.createElement('p');
    aboutDescription.classList.add('about-description');
    aboutDescription.textContent = this.aboutDescription;

    aboutPageContainer.append(aboutTitle, aboutDescription);

    return aboutPageContainer;
  }
}

export {AboutPage};