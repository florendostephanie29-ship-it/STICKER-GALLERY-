export default async function handler(req, res) {
    res.setHeader(‘Access - Control - Allow - Origin’, ‘*’);

    const {
        ids
    } = req.query;
    if (!ids) return res.status(400).json({
        error: ‘missing ids’
    });

    const url = `https://thumbnails.roblox.com/v1/assets?assetIds=${ids}&returnPolicy=PlaceHolder&size=420x420&format=Png&isCircular=false`;

    try {
        const r = await fetch(url, {
            headers: {
                ‘
                User - Agent’: ‘Mozilla / 5.0(Windows NT 10.0; Win64; x64) AppleWebKit / 537.36(KHTML, like Gecko) Chrome / 120.0 .0 .0 Safari / 537.36’
            }
        });
        const data = await r.json();
        res.status(200).json(data);
    } catch (e) {
        res.status(500).json({
            error: e.message
        });
    }
}
