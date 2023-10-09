//import '/assets/css/main.scss'

// Focus Visible Polyfill
// import 'focus-visible'

// Internal Modules
// import './modules/nav'

import { createApp } from 'https://esm.sh/petite-vue';

function Domains() {
    return {
        $template: `<li v-for="domain of domains">.{{domain}}</li>`,
    }
}
createApp({
    _domains: JSON.parse($data.innerHTML.trim()),
    /**
     * @param {string} val
     */
    _search: '',
    get domains() {
        // console.log(this._domains)
        // if (this._search === '') return this._domains;
        return this._domains.filter(d => d.toLowerCase().indexOf(this._search) > -1);
    },
    search({ target }) {
        this._search = target.value;
    },
    Domains
}).mount();
