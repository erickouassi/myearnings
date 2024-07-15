/* ======================================================================
          www.erickouassi.com
        ====================================================================== */
        // 
        async function getUsers() {
            let url = 'https://opensheet.elk.sh/1K5_JrBbB7Z_EQQOTi76MJoio9VCCBitI0tSfwoeHCi4/Sheet1';
            try {
                let res = await fetch(url);
                return await res.json();
            } catch (error) {
                console.log(error);
            }
        }
        async function renderUsers() {
            let users = await getUsers();
            // console.log(users);
            //
            var access_code_entry = document.getElementById('access_code_id').value.trim()
           // var type_entry = document.getElementById('type_id').value.trim()
            //
            //saving the values in local storage
                localStorage.setItem("txtValueId", access_code_entry);
               // localStorage.setItem("txtValueName", type_entry);
            // localStorage.setItem("serialNumber", "abc123def456");
            //

            for (var i = 0; i < users.length; i++) {
                // check is user input matches access_code_entry and password of a current index of the user array
               // if (access_code_entry == users[i].access_code && type_entry == users[i].type) {
                if (access_code_entry == users[i].access_code) {
                    //console.log(access_code_entry + " is logged in!!!")
                    // alert("Successfully login!");
                    document.getElementById("errors").style.display = "none";
                    document.getElementById("formDisplay").style.display = "none";
                    //
                    const result_data = users.find(({access_code_entry}) => access_code_entry === users[i].access_code);
                     console.log(result_data)
                    window.location.href = "view_result.html";
                    //document.querySelector(".preload").style.display = "none"//stop the loading
                    // stop the function if this is found to be true
                    return
                }
               
            }
            //
            let usersDataLenght = users.length;
            console.log(usersDataLenght);

            let usersDataTotal = document.querySelector('.usersDataTotal');
            usersDataTotal.innerHTML = `<span>${usersDataLenght} profits or losses calculated.</span>`;

            //
            let msgErrors = document.querySelector('#errors');
            msgErrors.innerHTML = "<span style='color:red'>This access code does not match our records. </span>";
            //console.log("incorrect username or password")
        }
        renderUsers();

        // Logout 
 function exitPage() {
    //document.querySelector('.btnLogout').style.display = "block";
    location.replace("./logout.html")
  };

  // Display error message
  function showErrors() {
    document.getElementById('errors').style.display = "block";
};


//

        
       // Your CSS as text
        var styles = `
        /* CSS Here */
        /* Form CSS
        .form-signin {
            width: 100%;
            max-width: 330px;
            padding: 15px;
            margin: auto;
        }
        .form-signin {
            font-weight: 400;
        }
        .form-signin .form-floating:focus-within {
            z-index: 2;
        }
        .form-signin input[type="text"] {
            margin-bottom: -1px;
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
        }
        .form-signin input[type="text"] {
            margin-bottom: 10px;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }   */
      
        `
        
        var styleSheet = document.createElement("style")
        styleSheet.innerText = styles
        document.head.appendChild(styleSheet)