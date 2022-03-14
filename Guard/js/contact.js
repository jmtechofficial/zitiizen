email = document.getElementById("email");

error = document.getElementById("error");

btn = document.getElementById("btn");
form = document.getElementById("form");

document.addEventListener('keydown', async function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        await form_contact(form);
    }
}, true);

email.addEventListener("keyup", () => {
    if (email.value.trim() != "") {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
});

btn.addEventListener("click", async (e) => {
    e.preventDefault();
    if (email.value.trim() != "") {
        if (
            email.value.trim().match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)
        ) {
            //form.submit();
            await form_contact(form);
        } else {
            error.innerHTML = '<div class="error-message show-error error">Please enter a valid email address.</div>';
        }
    }
});