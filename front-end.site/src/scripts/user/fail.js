export default function fail(str){//prints error message when login attempt failed
    console.log(str);
    var tag = document.createElement("p");
    var text = document.createTextNode(str.replaceAll('"',''));
    tag.appendChild(text);
    var element = document.getElementById("f");
    element.appendChild(tag);
    setTimeout(() => {
        tag.remove();
    }, 7500);

}