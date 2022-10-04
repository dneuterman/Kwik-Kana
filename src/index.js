import "./style.css";
import {AboutPage} from "./components/about";
import {StudyPage} from "./components/study";
import { TestPage } from "./components/test";

const ABOUT_PAGE_OBJECT = {
  aboutTitle: "Hiragana and Katakana Study Tool",
  aboutDescription: "A useful tool to help you study and test your knowledge. Click study for quick Hiragana and Katakana references. Click test to practice your Kana. Have fun!",
}

const STUDY_PAGE_OBJECT = {
  studyTitle: "Study Page",
  studyDescription: "Study Description",
}

const TEST_PAGE_OBJECT = {
  testTitle: "Test Page",
  testDescription: "Test Description",
}

const content = document.getElementById("content");
const aboutNav = document.querySelector(".about-nav");
const studyNav = document.querySelector(".study-nav");
const testNav = document.querySelector(".test-nav");
const aboutPageDisplay = new AboutPage(ABOUT_PAGE_OBJECT);
const studyPageDisplay = new StudyPage(STUDY_PAGE_OBJECT);
const testPageDisplay = new TestPage(TEST_PAGE_OBJECT);

const switchPage = page => {
  while(content.firstChild) {
    content.removeChild(content.firstChild);
  }
  content.append(page.buildPage());
}

aboutNav.addEventListener("click", () => {
  switchPage(aboutPageDisplay);
})

studyNav.addEventListener("click", () => {
  switchPage(studyPageDisplay);
})

testNav.addEventListener("click", () => {
  switchPage(testPageDisplay);
})

//Initial page load
switchPage(aboutPageDisplay);