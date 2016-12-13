import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import { hasChanged } from '../../src/hasChanged.js';

chai.use(sinonChai);

describe('Has changed', () => {
    it('should return true for different node typeof', () => {
        const node1 = document.createElement('div');
        const node2 = 'text';
        const expected = true;
        const actual = hasChanged(node1, node2);
        expect(expected).to.equal(actual);
    });

    it('should return true for string node1 and differ from node2', () => {
        const node1 = 'text-1';
        const node2 = 'text-2';
        const expected = true;
        const actual = hasChanged(node1, node2);
        expect(expected).to.equal(actual);
    });

    it('should return true for different node type props', () => {
        const node1 = {type: 'type-1'};
        const node2 = {type: 'type-2'};
        const expected = true;
        const actual = hasChanged(node1, node2);
        expect(expected).to.equal(actual);
    });

    it('should return true for forceUpdate prop specified', () => {
        const node1 = {props: {
            forceUpdate: true
        }};
        const node2 = 'text';
        const expected = true;
        const actual = hasChanged(node1, node2);
        expect(expected).to.equal(actual);
    });
});
