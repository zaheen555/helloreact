
const parent = React.createElement("div",{ id: "parent" },
    React.createElement("div",{ id: "child" }, [
        React.createElement("h1", {}, "h1 tag 1"),
        React.createElement("h1", {}, "h1 tag 2")
    ]),
    React.createElement("div",{ id: "child2" }, [
        React.createElement("h2", {}, "h2 tag 1"),
        React.createElement("h2", {}, "h2 tag 2")
    ])
);

console.log(parent);

const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Hello!! from react");

console.log(heading); //returns an object

const root = ReactDOM.createRoot(document.getElementById("root"));//creates the root. Unlike javascript, react needs to create the root element first before manipulating it. 

root.render(parent);//render method is responsible for converting the object to html tags and render on dom