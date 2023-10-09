import { createApp } from 'petite-vue';

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
        return this._domains.filter(d => d.toLowerCase().indexOf(this._search) > -1);
    },
    search({ target }) {
        this._search = target.value;
    },
    Domains
}).mount();
