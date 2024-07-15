 /* ======================================================================
          www.erickouassi.com
        ====================================================================== */

        async function getUsers() {

            let url = 'https://opensheet.elk.sh/1K5_JrBbB7Z_EQQOTi76MJoio9VCCBitI0tSfwoeHCi4/rank_goal_top_50';
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
  <p>
You made a ${my_user_result.status} of <b><span class="${my_user_result.css_color_status}"> ${my_user_result.profit_loss}</span></b></p>

  <table class="w3-table w3-striped w3-bordered">
    <tr>
      <th></th>
      <th>Per Hour</th>
      <th>Earnings</th>
    </tr>
    <tr>
      <td>Side Hustle (You)</td>
      <td>${my_user_result.actual_hourly_rate}</td>
      <td><span class="w3-yellow">${my_user_result.total_earnings}</span></td>
    </tr>
    <tr>
      <td>My Goal</td>
      <td>${my_user_result.expected_hourly_rate}</td>
      <td>${my_user_result.expected_earnings} ${my_user_result.dir_goal}</td>
    </tr>
    <tr>
      <td>Minimum Wage (${my_user_result.name_state})</td>
      <td>${my_user_result.state_mn_wage}</td>
      <td>${my_user_result.state_earnings} ${my_user_result.dir_state}</td>
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

 /*        // Logout 
 function exitPage() {
    //document.querySelector('.btnLogout').style.display = "block";
    location.replace("./index.html")
    localStorage.clear()
  }
  */
 //
async function renderRanking() {
  let all_days_names = await getUsers();
      console.log(all_days_names);
  var htmlNames = "";
  all_days_names.forEach((todayName) => {
          htmlNames += "<tr>";
          htmlNames += "<td>" + todayName.rank + "</td>";
          htmlNames += "<td>" + todayName.name_state + " ("+ todayName.state + ")"+ "</td>";
          htmlNames += "<td>" + todayName.letter_grade + "</td>";
          htmlNames += "<td>" + todayName.profit_loss + " ("+ todayName.hourly_perc + "%)"+ "</td>";
        });

  let containerDay = document.querySelector('.rank_list');
  containerDay.innerHTML = htmlNames;
} 

renderRanking();

        
        // Your CSS as text
        var styles = `
        /* CSS Here */
        /* Table */
        table th, table td{
            text-align: center;
            }
            tbody tr:nth-child(even) {
            background: #F0F2F2;
            }
        `
        
        var styleSheet = document.createElement("style")
        styleSheet.innerText = styles
        document.head.appendChild(styleSheet)