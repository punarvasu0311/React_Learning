function customRender(element,container){
    const newe=document.createElement(element.type)
    newe.innerHTML=element.Attribute;
    newe.setAttribute("href",element.props.href);
    container.appendChild(newe);
};

const element={
    type:'a',
    props:{
        href:"https://www.google.com",
        target:"_blank"
    },
    Attribute:"Click to visit google website"
}

const container=document.getElementById("root");

customRender(element,container);