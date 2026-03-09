const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.on('response', response => {
        if (!response.ok()) {
            console.log('RESPONSE NOT OK:', response.url(), response.status());
        }
    });

    await page.goto('http://localhost:8080/posts/post.html?id=power-of-teamwork', { waitUntil: 'networkidle0' });

    const imageInfo = await page.evaluate(() => {
        const img = document.querySelector('.post-content img');
        if (!img) return 'No image found';
        return {
            src: img.src,
            complete: img.complete,
            naturalWidth: img.naturalWidth
        };
    });
    console.log('Image status:', imageInfo);

    await browser.close();
})();
