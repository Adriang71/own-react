
//create a vElement
function createVElement(tag, config) {
  const { className } = config;

  return {
    tag: tag,
    className: className,
    dom: null,
  }
}

//mount a vElement
function mountVElement(vElement, parentDOMNode) {
  const { tag, className } = vElement;

  //create a native DOM node
  const domNode = document.createElement(tag);

  //for later reference save the DOM node
  //on our vElement
  vElement.dom = domNode;

  //add className to native node
  if (className !== undefined) {
    domNode.className = className;
  }


  //Append domNode to the DOM
  parentDOMNode.appendChild(domNode)
}
