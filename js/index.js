const donateHideShowBtn = getElem('donate-hide-show-btn');
const historyHideShowBtn = getElem('history-hide-show-btn');
const hideShowBtns = getElem('hide-show-btns');

const donationContainer = getElem('donation-container');
const historyContainer = getElem('history-container');

hideShowBtns.addEventListener('click', function (event) {
  if (event.target.id === 'donate-hide-show-btn') {
    donationContainer.classList.remove('hidden');
    historyContainer.classList.add('hidden');

    donateHideShowBtn.className = 'btn btn-warning px-7 py-0';

    historyHideShowBtn.className =
      'btn border bg-white border-[#ddd] px-7 py-0 text-lightText';
  } else if (event.target.id === 'history-hide-show-btn') {
    donationContainer.classList.add('hidden');
    historyContainer.classList.remove('hidden');

    historyHideShowBtn.className = 'btn btn-warning px-7 py-0';

    donateHideShowBtn.className =
      'btn border bg-white border-[#ddd] px-7 py-0 text-lightText';
  }
});






/*
---- blog page ----
*/
const blogBtn = document.getElementById('blog--btn');

blogBtn.addEventListener('click', () => {
  window.location.href = './blog.html';
});
