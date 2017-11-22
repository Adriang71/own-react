
//create a vElement
function createVElement(tag, config, children = null) {
  const { className, text } = config;

  return {
    tag: tag,
    props: {
      children: children
    },
    className: className,
    text: text,
    dom: null,
  }
}

//mount a vElement
function mountVElement(vElement, parentDOMNode) {
  const { tag, props, className, text } = vElement;

  //create a native DOM node
  const domNode = document.createElement(tag);

  //for later reference save the DOM node
  //on our vElement
  vElement.dom = domNode;

  if (props.children) {
    //Important: we pass the parentDOMnode
    //again and again
     props.children.forEach(child => mountVElement(child, domNode));
  }

  //add className to native node
  if (className !== undefined) {
    domNode.className = className;
  }

  //create text for our element
  if (text !== undefined) {
    const textNode = document.createTextNode(String(text));
    domNode.appendChild(textNode);
  }


  //Append domNode to the DOM
  parentDOMNode.appendChild(domNode)
}

//render vElement
const appRoot = document.getElementById('root');
const myElement = createVElement('div', { className: 'el', text: 'Hello Simple React' }, []);

//create nested tree element
const myApp = createVElement('div', { className: 'my-class' }, [
  createVElement('h1', { className:'my-header' }),
  createVElement('div', { className:'my-container' }, [
    createVElement('div', { className:'my-sub-container' }, [
      createVElement('div', { className:'my-sub-sub-container' }, [
        createVElement('div', { className:'my-sub-sub-sub-container' }, [
          createVElement('div', { className:'my-sub-sub-sub-sub-container' }, [
            createVElement('div', { className:'my-sub-sub-sub-sub-sub-container' }, []),
            createVElement('h1', { className:'my-sub-sub-sub-sub-sub-header' }, [])
          ])
        ])
      ])
    ]),
  ])
]);

mountVElement(myApp, appRoot);
