import "./style.css";
import {AboutPage} from "./components/about";
import {StudyPage} from "./components/study";
import { TestPage } from "./components/test";
import {hiraganaArray, katakanaArray} from "./components/kanaList";

const ABOUT_PAGE_OBJECT = {
  aboutTitle: "Hiragana and Katakana Study Tool",
  aboutDescription: "A useful tool to help you study and test your knowledge. Click study for quick Hiragana and Katakana references. Click test to practice your Kana. Have fun!",
}

const STUDY_PAGE_OBJECT = {
  kanaArrays: [hiraganaArray, katakanaArray],
}

const TEST_PAGE_OBJECT = {
  testTitle: "Test Your Knowledge",
  testDescription: "Enter the correct romaji characters that are associated with the shown kana character below",
  kanaArray: [...hiraganaArray, ...katakanaArray],
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
  document.getElementById('kana-character-input').focus();
})

//Initial page load
switchPage(aboutPageDisplay);