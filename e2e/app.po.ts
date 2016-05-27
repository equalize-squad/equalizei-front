export class EqualizeiFrontPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('equalizei-front-app h1')).getText();
  }
}
