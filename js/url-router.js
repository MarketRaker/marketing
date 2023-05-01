const urlPageTitle = "About MarketRaker";


document.addEventListener('click', (e) => {
    const { target } = e;
    if (!target.matches("nav a")) {
        return;
    }

   

})

const urlRoutes = {
  

    "/termsofuse": {
        template: "/documents/termsofuse.html",
        title: "termsofuse |" + urlPageTitle,
        description: "",

    },

    "/privacypolicy": {
        template: "/documents/privacypolicy.html",
        title: "privacypolicy |" + urlPageTitle,
        description: "",

    },

}

const urlRoute = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    urlLocationHandler();

}

const urlLocationHandler = async () => {
    const location = window.location.pathname;
    if (location.length = 0) {
        location = "/"
    }

    const route = urlRoutes[location] || urlRoutes[404];
    const html = await fetch(route.template).then((response) => response.text());
    document.getElementById("content").innerHTML = html;




};

window.PopStateEvent = urlLocationHandler;
window.route = urlRoute;



urlLocationHandler(); 