import { EqualizeiFrontPage } from './app.po';

describe('equalizei-front App', function() {
  let page: EqualizeiFrontPage;

  beforeEach(() => {
    page = new EqualizeiFrontPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('equalizei-front works!');
  });
});
