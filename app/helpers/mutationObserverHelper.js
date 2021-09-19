function OnElementRemoved(querySelector, elementSelector, callback) {
    var target = document.querySelector(querySelector);
    var observer = new MutationObserver(function (mutations) {
        //console.log("Mutations observed:");
        //console.log(mutations);

        var removedElements = getRemovedElements(mutations);
        for (let removedElement of removedElements) {
            //console.log("removedElement");
            //console.log(removedElement);
            if (removedElement.matches(elementSelector)) {
                callback(removedElement)
            }
        }
    });

    // configuration of the observer:
    var config = { attributes: true, childList: true, characterData: true };
    // pass in the target node, as well as the observer options
    observer.observe(target, config);
    //console.log("MutationObserver initialized (OnElementRemoved): " + querySelector + ' | ' + elementSelector);
}

function OnElementAdded(querySelector, elementSelector, callback) {
    var target = document.querySelector(querySelector);
    var observer = new MutationObserver(function (mutations) {
        //console.log("Mutations observed:");
        //console.log(mutations);

        var addedElements = getAddedElements(mutations);
        for (let addedElement of addedElements) {
            //console.log("addedElement");
            //console.log(addedElement);
            if (addedElement.matches(elementSelector)) {
                callback(addedElement)
            }
        }
    });

    // configuration of the observer:
    var config = { attributes: true, childList: true, characterData: true };
    // pass in the target node, as well as the observer options
    observer.observe(target, config);
    //console.log("MutationObserver initialized (OnElementAdded): " + querySelector + ' | ' + elementSelector);
}

function getAddedElements(mutations) {
    var result = [];
    for (let mutation of mutations) {
        if (mutation.type === 'childList') {
            for (const addedNode of mutation.addedNodes) {
                if (isElement(addedNode)) {
                    result.push(addedNode);
                }
            }
        }
    }
    return result;
}

function getRemovedElements(mutations) {
    var result = [];
    for (let mutation of mutations) {
        if (mutation.type === 'childList') {
            for (const removedNode of mutation.removedNodes) {
                if (isElement(removedNode)) {
                    result.push(removedNode);
                }
            }
        }
    }
    return result;
}

function isElement(element) {
    return element instanceof Element || element instanceof HTMLDocument;
}