const dataContent = JSON.parse(data)

const content = document.querySelector('.content')

dataContent.forEach(element => {
    const id = document.createElement('div')
    const activity = document.createElement('h2')
    const type = document.createElement('p')
    const participants = document.createElement('p')
    const img = document.createElement('img')

    activity.textContent = "Action: " + element.activity;
    type.textContent = "Type of action: " + element.type
    participants.textContent = "Quantity people: " + element.participants
    img.src = element.img

    content.appendChild(id);
    id.appendChild(activity);
    id.appendChild(type);
    id.appendChild(participants);
    id.appendChild(img);

    content.style.marginLeft = '20px';
    content.style.marginRight = '20px';
    content.style.display = "grid"
    content.style.justifyContent = "center"

    img.style.width = '300px';
    img.style.paddingLeft = "150px"

    activity.style.textAlign = 'center';
    activity.style.paddingTop = '10px';
    activity.style.fontFamily = 'Raleway', 'sans-serif';
    activity.style.color = '#2F4F4F';
    activity.style.border = '4px solid #008080'

    type.style.textAlign = 'center';
    type.style.paddingLeft = '20px';
    type.style.paddingRight = '20px';
    type.style.fontFamily = 'Raleway', 'sans-serif';

    participants.style.display = 'flex';
    participants.style.flexDirection = 'column';
    participants.style.alignItems = 'center';
    participants.style.backgroundColor = '#F5FFFA';
})