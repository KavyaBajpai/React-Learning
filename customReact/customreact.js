//using this code we are rendering our 'a' tag in the DOM with the javascript directly without involving any HTML.
//this is somewhat similar to how react functions behind the scene.

function customRender(reactElement, container)
{
   const domElement= document.createElement(reactElement.type)
   domElement.innerHTML= reactElement.children

   //first code
   //we are commenting this out because it is not a generalized code as the keys inside the 'props' object will vary with each element.
//    domElement.setAttribute('href', reactElement.props.href)
//    domElement.setAttribute('target', reactElement.props.target)
//    container.appendChild(domElement)

   //second code

   for (const prop in reactElement.props){
     if(prop=='children') continue;

     domElement.setAttribute(prop, reactElement.props[prop])
   }
   container.appendChild(domElement)
}

const reactElement= {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}

const mainContainer=  document.querySelector('#root')

customRender(reactElement, mainContainer)