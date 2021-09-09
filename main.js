const url = "https://keasecondsemester-6711.restdb.io/rest/albumcover";

// the API KEY
const options = {
    headers: {
        "x-apikey": "6136704b43cedb6d1f97ed6d",
    },
};

fetch(url, options)
    .then((response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    })

    .then((data) => {
        //we have the data
        // console.log(data);
        handleData(data);
    })
//.catch((e) => {
//woops, something went wrong
//console.error("An error occured:", e.message);

//});

function handleData(allArtists) {

    allArtists.forEach((artist) => {
        //console.log(artist);

        //1.make a template

        ////2.grab it
        const template = document.querySelector("#template");
        //3.clone it 
        const clone = template.cloneNode(true).content;
        //4. populate with data 
        clone.querySelector(".feed .albumcover").src += artist.img_url;

        console.log(artist.artist);
        console.log(artist);
        clone.querySelector(".feed .albumname").textContent = artist.albumname;

        //5.append it

        const container = document.querySelector(".post");
        container.appendChild(clone);
    });
}
