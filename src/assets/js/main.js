import { createApp } from 'petite-vue';
import { juhla } from 'juhla'

const _ = juhla();
function Pagination() {
    const _alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return {
        $template: `<li v-for="alpha of _alpha">
            <button type="button" @click="navigate">{{ alpha }}</button>
        </li>`,
        _alpha,
        navigate({ target }) {
            const alpha = target.textContent;

            this._activeDomains = alpha;
        }
    }
}

function Domains() {
    return {
        $template: `<li v-for="domain of domains">.{{domain}}</li>`,
    }
}
createApp({
    _activeDomains: 'a',
    _domains: JSON.parse($data.innerHTML.trim()),
    /**
     * @param {string} val
     */
    _search: '',
    get domains() {
        if (this._search === '') {
            return this._domains.filter(d => d[0] === this._activeDomains);
        }
        return this._domains.filter(d => d.toLowerCase().indexOf(this._search) > -1);
    },
    search({ target }) {
        this._search = target.value;
    },
    Domains,
    Pagination,
}).mount();
