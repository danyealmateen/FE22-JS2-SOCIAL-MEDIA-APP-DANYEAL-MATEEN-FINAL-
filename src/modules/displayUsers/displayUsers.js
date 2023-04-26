import { getUsers } from "../getUsers/getUsers";
import { profileInfoContainer } from "../globals/globals";
async function displayUsers() {
    const userData = await getUsers();
    const getusernamesFromObj = Object.entries(userData);
    const userNameContainer = document.getElementById('userNameContainer');
    userNameContainer.innerHTML = "";
    getusernamesFromObj.forEach(username => {
        const ele = document.createElement('div');
        ele.setAttribute("id", "users");
        ele.innerText = `${username[0]}`;
        ele.addEventListener('click', () => {
            const userValues = Object.values(username);
            displayClickedUser(userValues[1]);
        });
        userNameContainer.appendChild(ele);
    });
}
function displayClickedUser(userValues) {
    let statusUpdate = "";
    userValues.statusUpdates.forEach((update) => {
        statusUpdate += `<br>${update.message} `;
    });
    profileInfoContainer.innerHTML = `
<img id="profileIMG" src="${userValues.imageURL}"/><br>
<div>Userprofile: </div><div id="selectedUser">${userValues.username}</div><br>
Messages: ${statusUpdate || ""}`;
}
export { displayUsers, displayClickedUser };
