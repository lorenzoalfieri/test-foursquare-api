import { Selector, ClientFunction } from "testcafe";

fixture`Getting Started`.page`http://localhost:3000`;

const mockLocationAPI = ClientFunction(() => {
  navigator.geolocation.getCurrentPosition = (success) =>
    success({
      coords: { latitude: 43.546435, longitude: 6.9650008 },
      timestamp: Date.now(),
    });
});

test("Accept location and search for venue, then click on details", async (t) => {
  await mockLocationAPI();

  await t.expect(Selector("#btn-submit").hasAttribute("disabled")).eql(true);

  // wait a bit for mockLocationAPI to handle response after click
  await t.typeText("#keyword", "Bar").click("#btn-get-location").wait(200);

  await t.expect(Selector("#btn-submit").hasAttribute("disabled")).notEql(true);

  await t.click("#btn-submit");

  await t
    .expect(Selector("#link-back").exists)
    .eql(true)
    .expect(Selector("#card-1").exists)
    .eql(true);

  await t
    .click("#button-venue-details-1")
    .expect(Selector("#popover-details").exists)
    .eql(true)
    .wait(1000);
});
