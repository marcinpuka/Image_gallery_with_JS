function showPic(whichpic) {
    if (!document.getElementById("placeholder")) return false;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    
    if (document.getElementById("description")) {
    // sprawdz czy whichpic ma atrybut title 
    var text = whichpic.getAttribute('title') ? whichpic.getAttribute('title') : '';
    // target paragraph  //
    var description = document.getElementById('description');
    description.firstChild.nodeValue = text;
    }
    return true;
}


function prepareGallery() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");

    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            showPic(this);
            return !showPic(this);
        }
        links[i].onkeypress = function () {
            showPic(this);
            return !showPic(this);
        }
    }
}


function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder);



function preparePlaceholder() {
    // 1. Create an image element node. //
    var image = document.createElement('img');
    // 2. Give this node an id attribute.
    image.setAttribute('id', 'placeholder');
    // 3. Give this node a src attribute.
    image.setAttribute('src', 'images/placeholder.gif');
    // 4. Give this node an alt attribute.
    image.setAttribute('alt', 'my image gallery');
    // 5. Create a paragraph element node.
    var para = document.createElement('p');
    // 6. Give this node an id attribute.
    para.setAttribute('id', 'description');
    // 7. Create a text node.
    var text = document.createTextNode('Choose an image');
    // 8. Append the text node to the paragraph element.
    para.appendChild(text);
    // 9. Insert the image and paragraph into the document.
    // document.getElementsByTagName("body")[0].appendChild(image);
    // document.getElementsByTagName("body")[0].appendChild(para);
    
    var gallery = document.getElementById("imagegallery");
    gallery.parentNode.insertBefore(image, gallery);
}

function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    var childsOfBody_element = body_element.childNodes;

    Array.prototype.forEach.call(childsOfBody_element, function (item) {
        console.log(item.nodeType + " " + item.nodeName);
    });

    alert(body_element.childNodes.length);
    /*
    alert(description.firstChild.nodeValue);
    */
    /*    
    alert(description.childNodes[0].nodeValue);    
    */
}



function popUp(winURL) {
    window.open(winURL, "popup", "width=320,height=480");
}