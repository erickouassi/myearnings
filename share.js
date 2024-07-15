const shareData = {
    title: 'NYC Alternate Side Parking',
    text: 'Hi, I found this website and thought you might like it:',
    url: 'https://asp4nyc.cf/'
  }

  const btn = document.querySelector('.share-btn');
  const resultPara = document.querySelector('.share-result');

  // Share must be triggered by "user activation"
  btn.addEventListener('click', async () => {
    try {
      await navigator.share(shareData)
      resultPara.textContent = 'Thank you! 😄'
    } catch(err) {
      resultPara.textContent = 'Error: Could not share 🙁!' 
    }
  });
  
