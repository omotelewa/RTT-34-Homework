// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

const newAnchor = document.createElement("a");
newAnchor.href = "https://link.object";
newAnchor.innerHTML = "Object Link";

const topMenuEl = document.getElementById("top-menu");
topMenuEl.appendChild(newAnchor);
