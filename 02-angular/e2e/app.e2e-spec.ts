import { TwjExamenGallardoSoledadPage } from './app.po';

describe('twj-examen-gallardo-soledad App', () => {
  let page: TwjExamenGallardoSoledadPage;

  beforeEach(() => {
    page = new TwjExamenGallardoSoledadPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
