import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import { hasChanged } from '../../src/hasChanged.js';

chai.use(sinonChai);

describe('Has changed', () => {
    it('should return true for different node types', () => {
        const node1 = document.createElement('div');
        const node2 = 'text';
        const expected = true;
        const actual = hasChanged(node1, node2);
        expect(expected).to.equal(actual);
    });

    it('should return false for same node types', () => {
        const node1 = 'text';
        const node2 = 'text';
        const expected = true;
        const actual = hasChanged(node1, node2);
        expect(expected).not.to.equal(actual);
    });

    it('should return true one string node different to another', () => {
        const node1 = 'text-1';
        const node2 = 'text-2';
        const expected = true;
        const actual = hasChanged(node1, node2);
        expect(expected).to.equal(actual);
    });

    it('should return false one string node same to another', () => {
        const node1 = 'text-1';
        const node2 = 'text-1';
        const expected = true;
        const actual = hasChanged(node1, node2);
        expect(expected).not.to.equal(actual);
    });

    it('should return true for different node props type', () => {
        const node1 = {type: 'type-1'};
        const node2 = {type: 'type-2'};
        const expected = true;
        const actual = hasChanged(node1, node2);
        expect(expected).to.equal(actual);
    });

    it('should return false for same node props type', () => {
        const node1 = {type: 'type-1'};
        const node2 = {type: 'type-1'};
        const expected = true;
        const actual = hasChanged(node1, node2);
        expect(expected).not.to.equal(actual);
    });

    it('should return true if forceUpdate prop specified', () => {
        const node1 = {props: {
            forceUpdate: true
        }};
        const node2 = {};
        const expected = true;
        const actual = hasChanged(node1, node2);
        expect(expected).to.equal(actual);
    });

    it('should return false if forceUpdate prop is not specified', () => {
        const node1 = {props: {
            forceUpdate: false
        }};
        const node2 = {};
        const expected = false;
        const actual = hasChanged(node1, node2);
        expect(expected).to.equal(actual);
    });
});
