// Main Variabler
let input = document.querySelector('input');
let btn = document.querySelector('button');
let getData = document.querySelector(".show-data");


btn.addEventListener('click', getRepos);

// Get repos function
function getRepos() {
    if (input.value == '') {
        getData.innerHTML = 'Please Fill The Input';
    } else {
        fetch('https://api.github.com/users/'+input.value+'/repos')
            .then(response => {
                return response.json();
            }).then(data => {
                getData.innerHTML = '';

                data.forEach(element => {
                    // Create Div to add repo name
                    let div = document.createElement('div');
                    div.className = "repo-box";
                    div.textContent = element.name + ': ';

                    // Create link
                    let url = document.createElement('a');
                    url.textContent = element.url;
                    url.href = element.url;
                    url.setAttribute('target', '_blank');

                    // Append Created To main div get data
                    div.appendChild(url);
                    getData.appendChild(div);
                });
        })
    }
}