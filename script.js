const users = [
     {
        name: "Camden Lyons",
        para: "Camden ipsum dolor sit amet consectetur adipisicing elit. H Man, eos quas! Aliquam adipisci inventore maxime perspiciatis veritatis facere, beatae animi natus nemo doloribus vero, dolore quis nostrum! Quae amet dolores beatae, aspernatur iste eaque maxime quos itaque optio assumenda alias!",
        photo: "https://scontent-yyz1-1.xx.fbcdn.net/v/t1.6435-9/116300786_10158437890604061_7463659346791084214_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=730e14&_nc_ohc=gu0R0puPfXAAX-AxdMZ&_nc_ht=scontent-yyz1-1.xx&oh=0653e59761a34def228214a7722fcee6&oe=60C314D7",
        role: "Cammy",
    },
    {
        name: "Hudson Angileri",
        para: "Hudson ipsum dolor sit amet consectetur adipisicing elit. H Man, eos quas! Aliquam adipisci inventore maxime perspiciatis veritatis facere, beatae animi natus nemo doloribus vero, dolore quis nostrum! Quae amet dolores beatae, aspernatur iste eaque maxime quos itaque optio assumenda alias!",
        photo: "https://scontent-yyz1-1.xx.fbcdn.net/v/t1.6435-9/109476600_10164030823105720_4606434045095718634_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=G0I9lMaAwYYAX8uyd8v&tn=5omwI6Hh9aFfcnSW&_nc_ht=scontent-yyz1-1.xx&oh=085b631fa3830ce68312f06576c967a6&oe=60C332F9",
        role: "The H Man",
    },
    {
        name: "Keira Lyons",
        para: "Keira ipsum dolor Kiki amet consectetur adipisicing elit. Magni, eos quas! Aliquam adipisci inventore maxime perspiciatis veritatis facere, beatae animi natus nemo doloribus vero, dolore quis nostrum! Quae amet dolores beatae, aspernatur iste eaque maxime quos itaque optio assumenda alias!",
        photo: "https://scontent-yyz1-1.xx.fbcdn.net/v/t1.6435-9/135517681_10158805761854061_8612440992929136981_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=730e14&_nc_ohc=sGRX5gCr3ycAX_jh-36&_nc_ht=scontent-yyz1-1.xx&oh=cb9f900ae22cd05712bcd196c7b0fe26&oe=60C3F93F",
        role: "The Ole Kikster",
    }
]

const testimonialContainer = document.querySelector('.testimonial-container');


let idx = 1;

function updateUser() {
    const {para, photo, name, role} = users[idx];

    testimonialContainer.innerHTML = `
    <div class="progress-bar"></div>
        <div class="testimonial_para">
            <i class="fas fa-quote-right fa-quote"></i>
            <i class="fas fa-quote-left fa-quote"></i>
            <p class="para">${para}</p>
        </div>
        <div class="user-details">
            <img src="${photo}" alt="" class="user-image">
            <div class="user-details-text">
                <p class="username">${name}</p>
                <p class="user-role">${role}</p>
            </div>
        </div>
    `;
    idx++;
    if(idx > users.length - 1) {
        idx = 0;
    }
}

setInterval(updateUser, 6000)