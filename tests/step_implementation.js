/* globals gauge*/
const { openBrowser, goto, click, $, write, into, press  } = require('taiko');

beforeScenario(async() => await openBrowser({args: [ 
    '--disable-gpu',
    '--disable-dev-shm-usage',
    '--disable-setuid-sandbox',
    '--no-first-run',
    '--no-sandbox',
    '--no-zygote']}
));

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
        await click($(".select2-search__field"));
        await write(city, $(".select2-search__field"));
        await press("Enter");
});
