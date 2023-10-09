const EleventyFetch = require("@11ty/eleventy-fetch");

const pipe = (...fns) => (x) => fns.reduce((y, f) => f(y), x);

const trim = (str) => str.trim();
const removeDate = (str) => str.replace(/\#.*UTC/g, '');
const transformDomain = (str) => str.replace(/\n/g, ' ').trim().split(' ').map(s => s.toLowerCase());

module.exports = async function() {
    const url = 'https://data.iana.org/TLD/tlds-alpha-by-domain.txt';

    let data = await EleventyFetch(url, {
        duration: '1y',
        type: 'text'
    });
    
    return pipe(
        trim,
        removeDate,
        transformDomain,
    )(data);
}