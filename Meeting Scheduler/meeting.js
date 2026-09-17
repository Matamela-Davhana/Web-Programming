const form = document.getElementById('meetingform');
const linkcreated = document.getElementById('linkcreated');
const linkpost = document.getElementById('linkpost');
form.addEventListener('submit', function(e) {
    e.preventDefault(); //stop the page from reloading.

    const title = document.getElementById('meeting name'); //if something goes wrong
    const datetime = document.getElementById('datetime-local');
    
    const link = `${window.location.origin}${window.location.pathname}?title=${encodeURIComponent(title)}&time=${utcTimestamp}`;
    linkcreated.innerHTML = '<a href="${link}">${link}</a>'
});

const params = new URLSearchParams(window.location.search);
if(params.has('time')){
    const title = params.get('title');
    const utcTimestamp = parseInt(params.get('time'));
    const localdate = new Date(utcTimestamp);

    linkpost = `${title} at ${localdate.toString()}`;
}; 
