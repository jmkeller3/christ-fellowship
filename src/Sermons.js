import firebase from '../src/config/firebase';

const db = firebase.firestore();

const sermonList = document.querySelector('#sermon-list')

function renderSermons(doc) {
    let li = document.createElement('li');
    let title = document.createElement('span');
    let speaker = document.createElement('span');
    let date = document.createElement('span');
    let text = document.createElement('span');


    li.setAttribute('data-id', doc.id);
    title.textContent = doc.data.title;
    speaker.textContent = doc.data.speaker;
    date.textContent = doc.data.date;
    text.textContent = doc.data.text;

    li.appendChild(title);
    li.appendChild(speaker);
    li.appendChild(date);
    li.appendChild(text);

sermonList.appendChild(li)
}

db.collection('sermons').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        console.log(doc.data);
        renderSermons(doc)
    })
})