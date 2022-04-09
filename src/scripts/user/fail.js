export default function fail(){//prints error message when login attempt failed

    var tag = document.createElement("p");
    var text = document.createTextNode("Invalid username or password!");
    tag.appendChild(text);
    var element = document.getElementById("f");
    element.appendChild(tag);
    setTimeout(() => {
        tag.remove();
    }, 5000);

}