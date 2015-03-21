var envLinkButton = document.getElementById("linkbtn");
var serverBox = document.getElementById("server-box");
var otherServerOne = document.getElementById("other-server-1");
var otherServerTwo = document.getElementById("other-server-2");
var gonnaChange = document.getElementById("gonna-change");
var overlay = document.getElementById("overlay");
// var existingLink = doNothing;

function doNothing() {
}

function selectServer() {
    console.log("select server...");
    // serverBox.classList.toggle("selected");
    overlay.classList.toggle("hidden");
    otherServerOne.classList.toggle("selectable");
    otherServerTwo.classList.toggle("selectable");

}

function injectLink() {
    console.log("inject link...");
    // serverBox.classList.toggle("selected");
    overlay.classList.toggle("hidden");
    gonnaChange.innerHTML ='<p id="value-full"><span>RUNNABLE_ANGULAR</span>=http://run&hellip;</p>';
    existingLink = document.getElementById("value-full");
    otherServerOne.classList.toggle("selectable");
    otherServerTwo.classList.toggle("selectable");
    existingLink.addEventListener("mouseover", highlightServer);
    existingLink.addEventListener("mouseout", unHighlightServer);

}

function highlightServer() {
    console.log("highlight server...");
    otherServerTwo.classList.toggle("highlighted");
}

function unHighlightServer() {
    console.log("unhighlight server...");
    otherServerTwo.classList.toggle("highlighted");
}

// existingLink.onmouseover = highlightServer;

otherServerTwo.onclick = injectLink;

envLinkButton.onclick = selectServer;