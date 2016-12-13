import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import { compileJSX } from '../../src/compileJSX.js';

chai.use(sinonChai);

describe('Compile JSX', () => {
    it('should represent DOM elements with JS objects', () => {
        const expected = {
            type: 'ul',
            props: {class: 'list'},
            children: [
                {type: 'li', props: {}, children: ['item 1']},
                {type: 'li', props: {}, children: ['item 2']}
            ]
        };
        const actual = compileJSX(
            'ul',
            {class: 'list'},
            compileJSX('li', {}, 'item 1'),
            compileJSX('li', {}, 'item 2')
        );
        expect(expected).to.deep.equal(actual);
    });

    it('should handle empty props data provided', () => {
        const expected = {
            type: 'ul',
            props: {},
            children: [
                {type: 'li', props: {}, children: ['item 1']},
                {type: 'li', props: {}, children: ['item 2']}
            ]
        };
        const actual = compileJSX(
            'ul',
            null,
            compileJSX('li', {}, 'item 1'),
            compileJSX('li', {}, 'item 2')
        );
        expect(expected).to.deep.equal(actual);
    });
});
