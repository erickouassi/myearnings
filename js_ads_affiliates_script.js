// https://github.com/erickouassi/Ads360-db-api
async function getAdsdata() {
    let url = 'https://ads360-db-api.vercel.app/v1/random_txt';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
//
async function renderAdsData() {
    let randomAdsData = await getAdsdata();
    // console.log(randomAdsData);

     //
let ads_html = '';
  let adSection = `<div class="adNotice" >
  <span>${randomAdsData.adText}</span><br>
    <span>${randomAdsData.callToAction}</span> <a href='${randomAdsData.adURL}' rel='nofollow'>
    <span style="text-decoration: none;">${randomAdsData.adURL}</span>
    </a></div> `;
  ads_html += adSection;
  
let container = document.querySelector('.ads-app');
container.innerHTML = ads_html;
 
    }
 
    renderAdsData();