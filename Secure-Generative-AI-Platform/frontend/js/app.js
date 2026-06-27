const CLIENT_ID = "1k59h01vtl6m1pgf99r8lkutke";
const REDIRECT_URI = "https://d1r02mt711r5oc.cloudfront.net";
const COGNITO_DOMAIN = "us-east-1pv38vb5kz.auth.us-east-1.amazoncognito.com";
const API_URL = "https://bjogcmzl1b.execute-api.us-east-1.amazonaws.com/chat";

const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const chatContainer = document.getElementById("chatContainer");

const sendBtn = document.getElementById("sendBtn");
const prompt = document.getElementById("prompt");
const responseDiv = document.getElementById("response");

const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get("code");

/* ------------------------------
   Login
--------------------------------*/

loginBtn.addEventListener("click", () => {

    const loginUrl =
        `https://${COGNITO_DOMAIN}/oauth2/authorize` +
        `?client_id=${CLIENT_ID}` +
        `&response_type=code` +
        `&scope=openid+email+phone` +
        `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;

    window.location.href = loginUrl;

});

/* ------------------------------
   Exchange OAuth Code
--------------------------------*/

async function exchangeCodeForToken(authCode) {

    try {

        const response = await fetch(
            `https://${COGNITO_DOMAIN}/oauth2/token`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams({
                    grant_type: "authorization_code",
                    client_id: CLIENT_ID,
                    code: authCode,
                    redirect_uri: REDIRECT_URI
                })
            }
        );

        const data = await response.json();

        console.log(data);

        sessionStorage.setItem("access_token", data.access_token);

        window.history.replaceState(
            {},
            document.title,
            window.location.pathname
        );

        initializeChat();

        alert("Login Successful!");

    } catch (err) {

        console.error(err);
        alert("Login failed.");

    }

}

/* ------------------------------
   Initialize UI
--------------------------------*/

function initializeChat() {

    loginBtn.style.display = "none";
    logoutBtn.style.display = "inline-block";
    chatContainer.style.display = "block";

}

if (sessionStorage.getItem("access_token")) {

    initializeChat();

}

if (code) {

    exchangeCodeForToken(code);

}

/* ------------------------------
   Logout
--------------------------------*/

logoutBtn.addEventListener("click", () => {

    sessionStorage.clear();

    const logoutUrl =
        `https://${COGNITO_DOMAIN}/logout` +
        `?client_id=${CLIENT_ID}` +
        `&logout_uri=${encodeURIComponent(REDIRECT_URI)}`;

    window.location.href = logoutUrl;

});

/* ------------------------------
   Send Prompt
--------------------------------*/

sendBtn.addEventListener("click", async () => {

    const message = prompt.value.trim();

    if (!message) {

        alert("Please enter a prompt.");

        return;

    }

    responseDiv.innerHTML = "Thinking...";

    const accessToken = sessionStorage.getItem("access_token");

    try {

        const response = await fetch(API_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },

            body: JSON.stringify({
                message: message
            })

        });

        const data = await response.json();

        console.log(data);

        responseDiv.innerHTML =
            data.response ||
            data.message ||
            JSON.stringify(data, null, 2);

    }
    catch (err) {

        console.error(err);

        responseDiv.innerHTML =
            "Error calling API.";

    }

});