import objectAssign from 'object-assign';

const defaultStyle = {
    display: 'none',
    float: 'none',
    margin: 0,
    padding: 0,
    border: 0,
    backgroundColor: 'transparent',
    overflow: 'hidden',
    right: 0,
    top: 0,
    width: '100%',
    height: '100%'
};

export function initFrame () {

    var iframe = document.createElement('iframe');
    iframe.src = 'http://localhost:8080/layout_test2.html';
    objectAssign(iframe.style, defaultStyle);
    document.body.appendChild(iframe);
}

export function toggleFrame () {

}

export default loader();

// Put this loader script in page
// Make a trigger fun
