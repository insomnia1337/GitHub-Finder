const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");

const client_id = "f5a634a8a963d5a240f8"
const client_secret = "d130e18ca5d47fd820d7801168b8ad68f524f646"

const fetchUsers = async (user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);

    const data = await api_call.json();
    return { data: data }
};

const showData = () => {
    fetchUsers(inputValue.value).then((res) => {
        console.log(res);
        
        nameContainer.innerHTML = `Name: <span class="main__profile_value">${res.data.name}</span>`;
        
        unContainer.innerHTML = `Username: <span class="main__profile_value">${res.data.login}</span>`;

        reposContainer.innerHTML = `Repositories: <span class="main__profile_value">${res.data.public_repos}</span>`;

        urlContainer.innerHTML = `URL: <span class="main__profile_value">${res.data.html_url}</span>`;

    })
};



searchButton.addEventListener("click", () => {
    showData();
})