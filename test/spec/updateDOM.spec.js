import proxyquire from 'proxyquire';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

describe('Update DOM', () => {
    let updateDOM;
    let createElement;
    let hasChanged;
    let updateProps;

    beforeEach(() => {
        proxyquire.noCallThru();
        createElement = sinon.stub();
        hasChanged = sinon.stub();
        updateProps = sinon.stub();
        updateDOM = proxyquire('../../src/updateDOM.js', {
            './createElement.js': {createElement},
            './hasChanged.js': {hasChanged},
            './propHandler.js': {updateProps}
        }).updateDOM;
    });

    it('should create element in DOM if new', () => {
        const $parent = {
            appendChild: sinon.stub()
        };
        const newNode = {};
        const oldNode = null;
        updateDOM($parent, newNode, oldNode);
        expect($parent.appendChild).calledWith(createElement(newNode));
    });

    it('should remove element in DOM if deleted', () => {
        const $parent = {
            removeChild: sinon.stub(),
            childNodes: []
        };
        const newNode = null;
        const oldNode = {};
        updateDOM($parent, newNode, oldNode);
        expect($parent.removeChild).calledWith($parent.childNodes[0]);
    });

    it('should replace element in DOM if changed', () => {
        const $parent = {
            replaceChild: sinon.stub(),
            childNodes: []
        };
        const newNode = {};
        const oldNode = {};
        hasChanged.returns(true);
        updateDOM($parent, newNode, oldNode);
        expect($parent.replaceChild).calledWith(createElement(newNode), $parent.childNodes[0]);
    });

    it('should not replace element in DOM if not changed', () => {
        const $parent = {
            replaceChild: sinon.stub(),
            childNodes: []
        };
        const newNode = {};
        const oldNode = {};
        hasChanged.returns(false);
        updateDOM($parent, newNode, oldNode);
        expect($parent.replaceChild).not.calledWith(createElement(newNode), $parent.childNodes[0]);
    });

    it('should update props for each element node', () => {
        const $parent = {
            childNodes: []
        };
        const newNode = {
            type: 'element',
            props: 'newNodeProps',
            children: {
                length: 0
            }
        };
        const oldNode = {
            props: 'oldNodeProps',
            children: {
                length: 0
            }
        };
        hasChanged.returns(false);
        updateDOM($parent, newNode, oldNode);
        expect(updateProps).calledWith($parent.childNodes[0], newNode.props, oldNode.props);
    });
});
