import { DestineyPage } from './app.po';

describe('destiney App', () => {
  let page: DestineyPage;

  beforeEach(() => {
    page = new DestineyPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
