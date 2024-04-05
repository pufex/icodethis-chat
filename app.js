let currentUser;
const messagesContainer = document.querySelector(".messages")
const chatboxContainer = document.querySelector(".chatbox-container");

function formatDate(date, format) {
    const map = {
        mm: date.getMonth() + 1,
        dd: date.getDate(),
        yy: date.getFullYear().toString().slice(-2),
        yyyy: date.getFullYear()
    }

    return format.replace(/mm|dd|yy|yyy/gi, matched => map[matched])
}

const user = {
    name: "Albert Einstein",
    id: "emce",
    picture: "https://bi.im-g.pl/im/a4/e9/17/z25075620ICR,Jeffrey-Epstein.jpg",
}

let chatlogs = [
    {
        username: "Julian",
        id: "1",
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTde2M3fTF21zmuj6KqSDMCuXBfgsfnLAPyuTz7pFq0Cw&s",
        unread: 1,
        chatlog: [
            {
                username: "Julian",
                id: "1",
                picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTde2M3fTF21zmuj6KqSDMCuXBfgsfnLAPyuTz7pFq0Cw&s",
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque officiis odio possimus sed quo officia nostrum veritatis distinctio ex, ipsum accusantium adipisci itaque a accusamus inventore numquam! Culpa, recusandae quidem.",
                date: "20/12/23"
            },
            {
                username: "Albert Einstein",
                id: "emce",
                picture: "https://bi.im-g.pl/im/a4/e9/17/z25075620ICR,Jeffrey-Epstein.jpg",
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque officiis odio possimus sed quo officia nostrum veritatis distinctio ex, ipsum accusantium adipisci itaque a accusamus inventore numquam! Culpa, recusandae quidem.",
                date: "20/12/23"
            },
            {
                username: "Julian",
                id: "1",
                picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTde2M3fTF21zmuj6KqSDMCuXBfgsfnLAPyuTz7pFq0Cw&s",
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque officiis odio possimus sed quo officia nostrum veritatis distinctio ex, ipsum accusantium adipisci itaque a accusamus inventore numquam! Culpa, recusandae quidem.",
                date: "20/12/23"
            },
            {
                username: "Albert Einstein",
                id: "emce",
                picture: "https://bi.im-g.pl/im/a4/e9/17/z25075620ICR,Jeffrey-Epstein.jpg",
                message: "Doloremque officiis odio possimus sed quo officia nostrum veritatis distinctio ex, ipsum accusantium adipisci itaque a accusamus inventore numquam! Culpa, recusandae quidem.",
                date: "20/12/23"
            },
        ],
    },
    {
        username: "James Bond",
        id: "2",
        picture: "https://randomuser.me/api/portraits/men/59.jpg",
        unread: 0,
        chatlog: [
            {
                username: "James Bond",
                id: "2",
                picture: "https://randomuser.me/api/portraits/men/59.jpg",
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque officiis odio possimus sed quo officia nostrum veritatis distinctio ex, ipsum accusantium adipisci itaque a accusamus inventore numquam! Culpa, recusandae quidem.",
                date: "20/12/23"
            },
            {
                username: "Albert Einstein",
                id: "emce",
                picture: "https://bi.im-g.pl/im/a4/e9/17/z25075620ICR,Jeffrey-Epstein.jpg",
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque officiis odio possimus sed quo officia nostrum veritatis distinctio ex, ipsum accusantium adipisci itaque a accusamus inventore numquam! Culpa, recusandae quidem.",
                date: "20/12/23"
            },
            {
                username: "James Bond",
                id: "2",
                picture: "https://randomuser.me/api/portraits/men/59.jpg",
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque officiis odio possimus sed quo officia nostrum veritatis distinctio ex, ipsum accusantium adipisci itaque a accusamus inventore numquam! Culpa, recusandae quidem.",
                date: "20/12/23"
            },
            {
                username: "Albert Einstein",
                id: "emce",
                picture: "https://bi.im-g.pl/im/a4/e9/17/z25075620ICR,Jeffrey-Epstein.jpg",
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque officiis odio possimus sed quo officia nostrum veritatis distinctio ex, ipsum accusantium adipisci itaque a accusamus inventore numquam! Culpa, recusandae quidem.",
                date: "20/12/23"
            },
        ]
    },
    {
        username: "Harry Williams",
        id: "3",
        picture: "https://randomuser.me/api/portraits/men/78.jpg",
        unread: 3,
        chatlog: [
            {
                username: "Harry Williams",
                id: "3",
                picture: "https://randomuser.me/api/portraits/men/78.jpg",
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque officiis odio possimus sed quo officia nostrum veritatis distinctio ex, ipsum accusantium adipisci itaque a accusamus inventore numquam! Culpa, recusandae quidem.",
                date: "20/12/23"
            },
            {
                username: "Albert Einstein",
                id: "emce",
                picture: "https://bi.im-g.pl/im/a4/e9/17/z25075620ICR,Jeffrey-Epstein.jpg",
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque officiis odio possimus sed quo officia nostrum veritatis distinctio ex, ipsum accusantium adipisci itaque a accusamus inventore numquam! Culpa, recusandae quidem.",
                date: "20/12/23"
            },
            {
                username: "Harry Williams",
                id: "3",
                picture: "https://randomuser.me/api/portraits/men/78.jpg",
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque officiis odio possimus sed quo officia nostrum veritatis distinctio ex, ipsum accusantium adipisci itaque a accusamus inventore numquam! Culpa, recusandae quidem.",
                date: "20/12/23"
            },
            {
                username: "Albert Einstein",
                id: "emce",
                picture: "https://bi.im-g.pl/im/a4/e9/17/z25075620ICR,Jeffrey-Epstein.jpg",
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque officiis odio possimus sed quo officia nostrum veritatis distinctio ex, ipsum accusantium adipisci itaque a accusamus inventore numquam! Culpa, recusandae quidem.",
                date: "20/12/23"
            },
        ]
    },
    {
        username: "Willy Wonka",
        id: "4",
        picture: "https://randomuser.me/api/portraits/men/11.jpg",
        unread: 0,
        chatlog: [
            {
                username: "Willy Wonka",
                id: "4",
                picture: "https://randomuser.me/api/portraits/men/11.jpg",
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque officiis odio possimus sed quo officia nostrum veritatis distinctio ex, ipsum accusantium adipisci itaque a accusamus inventore numquam! Culpa, recusandae quidem.",
                date: "20/12/23"
            },
            {
                username: "Albert Einstein",
                id: "emce",
                picture: "https://bi.im-g.pl/im/a4/e9/17/z25075620ICR,Jeffrey-Epstein.jpg",
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque officiis odio possimus sed quo officia nostrum veritatis distinctio ex, ipsum accusantium adipisci itaque a accusamus inventore numquam! Culpa, recusandae quidem.",
                date: "20/12/23"
            },
            {
                username: "Willy Wonka",
                id: "4",
                picture: "https://randomuser.me/api/portraits/men/11.jpg",
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque officiis odio possimus sed quo officia nostrum veritatis distinctio ex, ipsum accusantium adipisci itaque a accusamus inventore numquam! Culpa, recusandae quidem.",
                date: "20/12/23"
            },
            {
                username: "Albert Einstein",
                id: "emce",
                picture: "https://bi.im-g.pl/im/a4/e9/17/z25075620ICR,Jeffrey-Epstein.jpg",
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque officiis odio possimus sed quo officia nostrum veritatis distinctio ex, ipsum accusantium adipisci itaque a accusamus inventore numquam! Culpa, recusandae quidem.",
                date: "20/12/23"
            },
        ]
    },
    {
        username: "Donald Trump",
        id: "5",
        picture: "https://static.independent.co.uk/2024/04/03/22/SEI198385415.jpg?quality=75&width=640&crop=3%3A2%2Csmart&auto=webp",
        unread: 0,
        chatlog: [
            {
                username: "Mary Smons",
                id: "1234",
                picture: "url",
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque officiis odio possimus sed quo officia nostrum veritatis distinctio ex, ipsum accusantium adipisci itaque a accusamus inventore numquam! Culpa, recusandae quidem.",
                date: "20/12/23"
            },
            {
                username: "Albert Einstein",
                id: "emce",
                picture: "https://bi.im-g.pl/im/a4/e9/17/z25075620ICR,Jeffrey-Epstein.jpg",
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque officiis odio possimus sed quo officia nostrum veritatis distinctio ex, ipsum accusantium adipisci itaque a accusamus inventore numquam! Culpa, recusandae quidem.",
                date: "20/12/23"
            },
            {
                username: "Mary Smons",
                id: "1234",
                picture: "url",
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque officiis odio possimus sed quo officia nostrum veritatis distinctio ex, ipsum accusantium adipisci itaque a accusamus inventore numquam! Culpa, recusandae quidem.",
                date: "20/12/23"
            },
            {
                username: "Albert Einstein",
                id: "emce",
                picture: "https://bi.im-g.pl/im/a4/e9/17/z25075620ICR,Jeffrey-Epstein.jpg",
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque officiis odio possimus sed quo officia nostrum veritatis distinctio ex, ipsum accusantium adipisci itaque a accusamus inventore numquam! Culpa, recusandae quidem.",
                date: "20/12/23"
            },
        ]
    },
    {
        username: "Jacek Kaczmarski",
        id: "6",
        picture: "https://dzieje.pl/sites/default/files/styles/pp_zdjecie_glowne_pion/public/202003/kaczmarski_jacek.jpg?itok=S95JWklt",
        unread: 0,
        chatlog: [
            {
                username: "Jacek Kaczmarski",
                id: "6",
                picture: "https://dzieje.pl/sites/default/files/styles/pp_zdjecie_glowne_pion/public/202003/kaczmarski_jacek.jpg?itok=S95JWklt",
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque officiis odio possimus sed quo officia nostrum veritatis distinctio ex, ipsum accusantium adipisci itaque a accusamus inventore numquam! Culpa, recusandae quidem.",
                date: "20/12/23"
            },
            {
                username: "Albert Einstein",
                id: "emce",
                picture: "https://bi.im-g.pl/im/a4/e9/17/z25075620ICR,Jeffrey-Epstein.jpg",
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque officiis odio possimus sed quo officia nostrum veritatis distinctio ex, ipsum accusantium adipisci itaque a accusamus inventore numquam! Culpa, recusandae quidem.",
                date: "20/12/23"
            },
            {
                username: "Jacek Kaczmarski",
                id: "6",
                picture: "https://dzieje.pl/sites/default/files/styles/pp_zdjecie_glowne_pion/public/202003/kaczmarski_jacek.jpg?itok=S95JWklt",
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque officiis odio possimus sed quo officia nostrum veritatis distinctio ex, ipsum accusantium adipisci itaque a accusamus inventore numquam! Culpa, recusandae quidem.",
                date: "20/12/23"
            },
            {
                username: "Jacek Kaczmarski",
                id: "6",
                picture: "https://dzieje.pl/sites/default/files/styles/pp_zdjecie_glowne_pion/public/202003/kaczmarski_jacek.jpg?itok=S95JWklt",
                message: "Choć krwią zachłysnął się nasz czas, choć myśli toną w paranojach - jak zawssze, chronić będzie nas zbroja.",
                date: "20/12/23"
            },
        ]
    },
]


const btnSearch = document.querySelector(".btn--search");
const searchbar = document.querySelector("#searchbar");
btnSearch.addEventListener('click', () => {
    btnSearch.classList.toggle("active")
    if (btnSearch.classList.contains("active"))
        searchbar.focus();
    else searchbar.blur();
})
searchbar.addEventListener("focus", () => {
    if (!btnSearch.classList.contains("active"))
        btnSearch.classList.add("active")
})
searchbar.addEventListener("keyup", () => {
    const value = searchbar.value;
    renderMessageBoxes(chatlogs.filter(chatlog =>
        chatlog.
            username.
            toLowerCase().
            includes(value.toLowerCase())
    ));
})

const chatboxGoBack = document.querySelector(".btn--goBack");
chatboxGoBack.addEventListener("click", () => {
    if (chatboxContainer.classList.contains("active"))
        chatboxContainer.classList.remove("active");
    currentUser = undefined;
    renderMessageBoxes(chatlogs);
})

const chatboxForm = document.querySelector(".chatbox-form")
chatboxForm.querySelectorAll("button").forEach((btn) => {
    if (btn.getAttribute("type") != "submit")
        btn.setAttribute("type", "button");
})
chatboxForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!currentUser) return
    else {
        const chatlogInput = chatboxForm.querySelector(".chatbox-input");
        const chatlogId = chatboxContainer.getAttribute("id");
        const value = chatlogInput.value;
        chatlogs = chatlogs.map((chatlog) => {
            if (chatlog.id == currentUser.id) {
                const newMessage = {
                    username: user.name,
                    id: user.id,
                    picture: user.picture,
                    message: value,
                    date: formatDate(new Date(), "dd/mm/yy"),
                }
                chatlog.chatlog.push(newMessage);
                renderChatbox(chatlog)
            }
            return chatlog;
        })
        renderMessageBoxes(chatlogs);
        chatlogInput.value = "";
    }
})

const createChatBubble = (obj) => {
    const chatboxMessageContainer = document.createElement("div");
    chatboxMessageContainer.classList.add("chatbox-message-container");
    if (obj.id == user.id)
        chatboxMessageContainer.classList.add("user");
    else
        chatboxMessageContainer.classList.add("foreign");
    const chatboxMessageProfile = document.createElement("img")
    chatboxMessageProfile.classList.add("chatbox-profile")
    chatboxMessageProfile.setAttribute("src", obj.picture);
    chatboxMessageProfile.setAttribute("alt", obj.username);

    const chatboxMessage = document.createElement("div");
    chatboxMessage.classList.add("chatbox-message");
    chatboxMessage.innerText = obj.message;

    chatboxMessageContainer.append(chatboxMessageProfile, chatboxMessage);
    return chatboxMessageContainer;
}

const renderChatbox = (obj) => {
    chatboxContainer.setAttribute("id", obj.id)
    if (!chatboxContainer.classList.contains("active"))
        chatboxContainer.classList.add("active");

    // ================= Nav Update ==========================

    const nav = chatboxContainer.querySelector(".chatbox-nav")

    const navProfile = nav.querySelector(".chatbox-nav__profile");
    navProfile.setAttribute("alt", obj.username)
    navProfile.setAttribute("src", obj.picture)
    
    const navUsername = nav.querySelector(".chatbox-nav__name");
    navUsername.innerText = obj.username;

    // ================= Chat Update ==========================

    const chatboxMain = document.querySelector(".chatbox-main")
    chatboxMain.innerHTML = "";
    if (!obj.chatlog || obj.chatlog.length < 1) true;
    else {
        obj.chatlog.forEach((message, index) => {
            const messageComponent = createChatBubble(message);
            messageComponent.setAttribute("id", `message-${index}`);
            chatboxMain.append(messageComponent);
        })
    }
    chatboxMain.scrollTo(0, chatboxMain.scrollHeight)
}

const displayEmptyMessage = () => {
    const emptyMessage = document.createElement("div");
    emptyMessage.classList.add("empty-message");
    emptyMessage.innerText = "Noone is here!";

    messagesContainer.appendChild(emptyMessage);
}

// const 

const createMessageBox = (obj) => {

    const message = document.createElement("div")
    message.classList.add("message");

    const messageProfile = document.createElement("img")
    messageProfile.setAttribute("src", obj.picture);
    messageProfile.setAttribute("alt", obj.username);
    messageProfile.classList.add("message-profile")

    const messageContent = document.createElement("div")
    messageContent.classList.add("message-content")

    const messageTitle = document.createElement("div")
    messageTitle.classList.add("message-title")

    const messageName = document.createElement("span")
    messageName.classList.add(".message-name")
    messageName.innerText = obj.username;

    const messageUnread = document.createElement("span")
    messageUnread.classList.add("message-unread");
    messageUnread.innerText = obj.unread;

    const messageDescription = document.createElement("p")
    messageDescription.classList.add("message-description");
    if (obj.unread > 0) messageDescription.classList.add("active");
    if (obj.chatlog.length > 0) messageDescription.innerText = obj.chatlog[obj.chatlog.length - 1].message;
    else messageDescription.innerText = "Start chat now!";

    const messageTime = document.createElement("div");
    messageTime.classList.add("message-time");
    if (obj.chatlog.length > 0) messageTime.innerText = obj.chatlog[obj.chatlog.length - 1].date;

    message.append(messageProfile, messageContent, messageTime)
    messageContent.append(messageTitle, messageDescription)
    messageTitle.append(messageName)
    if (obj.unread > 0) messageTitle.append(messageUnread);

    message.addEventListener("click", () => {
        currentUser = obj;
        chatlogs = chatlogs.map((chatlog) => {
            if (obj.id == chatlog.id)
                chatlog.unread = 0;
            return chatlog;
        })
        renderChatbox(currentUser);
    })

    return message;
}

const renderMessageBoxes = (arr) => {
    messagesContainer.innerHTML = "";
    if (!arr || arr.length < 1) displayEmptyMessage();
    else arr.
        sort().
        forEach((chatlogObj, index) => {
        const message = createMessageBox(chatlogObj);
        message.setAttribute("id", index);
        messagesContainer.append(message);
    })
}

renderMessageBoxes(chatlogs);
