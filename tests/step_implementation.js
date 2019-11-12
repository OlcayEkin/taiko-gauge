/* globals gauge*/
const { openBrowser, goto, click, $, write, into, press  } = require('taiko');

beforeScenario(async() => await openBrowser({headless: false}));

afterSuite(async () => {
    await closeBrowser();
});

step("Go to <site>", async (siteGiven) => {
    await goto(siteGiven);
});

step("Choose <cityCode>", async (cityCodeGiven) => {
    await click(cityCodeGiven);
});

step("Search some <food> for the <city>", async (food, city) => {
        await write(food,$(".search-box"));
        await click($("#select2-ys-areaSelector-container"));
        await write(city, $(".select2-search__field"));
        await press("Enter");
});
