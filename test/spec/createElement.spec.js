import proxyquire from 'proxyquire';
import { jsdom } from 'jsdom';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

describe('Create element', () => {
    let createElement;
    let setProps;
    let addEventListeners;
    let node;
    let createNodeElement;
    let appendChildForEach;

    beforeEach(() => {
        proxyquire.noCallThru();
        setProps = sinon.stub();
        addEventListeners = sinon.stub();
        createElement = proxyquire('../../src/createElement.js', {
            './propHandler.js': {setProps},
            './eventHandler.js': {addEventListeners}
        }).createElement;
    });

    beforeEach(() => {
        appendChildForEach = sinon.stub();

        node = {
            children: {
                map: sinon.stub().returns({
                    forEach: appendChildForEach
                })
            },
            type: 'nodeType',
            props: 'nodeProps'
        };
        createNodeElement = {
            appendChild: sinon.stub().returns({
                bind: sinon.stub()
            })
        };
    });

    afterEach(() => {
        document = jsdom('')
    });

    it('should create text node for string provided', () => {
        const node = 'text';
        document.createTextNode = sinon.stub();
        createElement(node);
        expect(document.createTextNode).calledWith(node);
    });

    it('should element for element type provided', () => {
        document.createElement = sinon.stub().returns(createNodeElement);
        createElement(node);
        expect(document.createElement).calledWith(node.type);
    });

    it('should set props for newly created element', () => {
        document.createElement = sinon.stub().returns(createNodeElement);
        createElement(node);
        expect(setProps).calledWith(createNodeElement, node.props);
    });

    it('should add event listeners for newly created element', () => {
        document.createElement = sinon.stub().returns(createNodeElement);
        createElement(node);
        expect(addEventListeners).calledWith(createNodeElement, node.props);
    });

    it('should create element for every child node recursively', () => {
        document.createElement = sinon.stub().returns(createNodeElement);
        createElement(node);
        expect(node.children.map).calledWith();
    });

    it('should attach newly created child element to DOM recursively', () => {
        document.createElement = sinon.stub().returns(createNodeElement);
        createElement(node);
        expect(appendChildForEach).calledWith();
    });

    it('should return create DOM element', () => {
        document.createElement = sinon.stub().returns(createNodeElement);
        const expected = createNodeElement;
        const actual = createElement(node);
        expect(actual).to.deep.equal(expected);
    });
});
