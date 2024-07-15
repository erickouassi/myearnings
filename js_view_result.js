 /* ======================================================================
          www.erickouassi.com
        ====================================================================== */

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
            // console.log(users)
            //Getting the values in local storage
            var access_code_result = localStorage.getItem("txtValueId");
            //var type_result = localStorage.getItem("txtValueName");

            for (var i = 0; i < users.length; i++) {
                // check is user input matches access_code_result of a current index of the user array
                if (access_code_result == users[i].access_code) {
                    document.getElementById("formDisplay").style.display = "none";
                    //
                let my_user_result = users.reverse().find(function(userData) {
                        return userData.access_code == access_code_result; });
               console.log(my_user_result) 
				
				let resultData = document.querySelector('.resultApp');
                    resultData.innerHTML = `<div>
<div class="w3-container">
  <h2><b>Grade: <span class="${my_user_result.css_color_status}"> ${my_user_result.letter_grade}</span></b></h2>
  <p>Remark: ${my_user_result.msg_grade} <br><br>
I found a ${my_user_result.balance_status} of <b><span class="${my_user_result.css_color_status}"> ${my_user_result.hourly_perc}</span>%</b>
</p>

  <table class="w3-table w3-striped w3-bordered">
    <tr>
      <th></th>
      <th>Per Hour</th>
      <th>Earnings</th>
    </tr>
    <tr>
    <td>Side Hustle (You)</td>
    <td><span class="w3-yellow">${my_user_result.actual_hourly_rate}</span></td>
    <td><span class="w3-yellow">${my_user_result.total_earnings}</span></td>
  </tr>
    <tr>
      <td>Minimum Wage (${my_user_result.name_state})</td>
      <td>${my_user_result.state_mn_wage}</td>
      <td>${my_user_result.state_wg_pay}</td>
    </tr>
    <tr>
    <td>Daily Income Goal (D.I.G.)</td>
    <td>${my_user_result.expected_hourly_rate}</td>
    <td>${my_user_result.daily_income_goal}</td>
  </tr>
    <tr>
    <td>Weekly Income Goal (W.I.G.)</td>
    <td>${my_user_result.expected_hourly_rate}</td>
    <td>${my_user_result.weekly_income_goal}</td>
  </tr>
  <tr>
  <td>Monthly Income Goal (M.I.G.)</td>
  <td>${my_user_result.expected_hourly_rate}</td>
  <td>${my_user_result.monthly_income_goal}</td>
</tr>
<tr>
<td>Annual Income Goal (A.I.G.)</td>
<td>${my_user_result.expected_hourly_rate}</td>
<td>${my_user_result.annual_income_goal}</td>
</tr>
  </table>

  <p>
  🤖💬 ${my_user_result.final_message}
  </p>  
</div>

<!-- -->

</div>
`;
                    return
                }
            }
        }
        renderUsers();

         // Logout 
 function exitPage() {
    //document.querySelector('.btnLogout').style.display = "block";
    location.replace("./index.html")
    localStorage.clear()
  }

        
        // Your CSS as text
        var styles = `
        /* CSS Here */
        /* Table */
        table th, table td{
            text-align: center;
            }
            tbody tr:nth-child(even) {
            background: #669999;
            }
        `
        
        var styleSheet = document.createElement("style")
        styleSheet.innerText = styles
        document.head.appendChild(styleSheet)