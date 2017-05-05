import { EducationSystemWebPage } from './app.po';

describe('education-system-web App', () => {
  let page: EducationSystemWebPage;

  beforeEach(() => {
    page = new EducationSystemWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
