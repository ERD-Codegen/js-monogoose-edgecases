const mongoose = require('../config/db');

const edgeCaseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
});

const collection = 'd6rzb78fc053du8t6pntu93tmng46mxzqy6xyxecqvz3bjynkahwrbr30f2u3nqfxny5dytthtzvfic2yxifnn395dc3r7extp4rw1e086afxnn0hhnp7mktyjv9p6b3w11t4jd3yr9jpu63ewey0uk28x7bp671yayzrgtd1ru03v3tgn2fx5k0q9gfpii336iq6pxjabne4008wiy9z3pgr6zwe9c83451wbpvx58gxdrdwzpai43nk9kw7chxa';
module.exports = mongoose.model('EdgeCase257', edgeCaseSchema, collection);
