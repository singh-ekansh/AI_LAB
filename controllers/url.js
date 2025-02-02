const { shortid } = require("shortid");
const URL = require("../models/url");

async function handleGenerateNewShortUrl(req, res) {
    const body = req.body;
    if(!body.redirectURL) {
        return res.status(400).json({ error: "redirectURL is required" });
    }                                                                                               
  const shortId = nanoid(7); 
  await URL.create({ shortId, 
    redirectURL: req.body.redirectURL,
    visitHistory: []});

    return res.json({ shortId });
}

module.exports = {
    handleGenerateNewShortUrl
};