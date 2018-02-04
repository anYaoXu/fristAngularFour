import { FristAngularProjectPage } from './app.po';

describe('frist-angular-project App', function() {
  let page: FristAngularProjectPage;

  beforeEach(() => {
    page = new FristAngularProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
