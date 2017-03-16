import { TesttPage } from './app.po';

describe('testt App', () => {
  let page: TesttPage;

  beforeEach(() => {
    page = new TesttPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
