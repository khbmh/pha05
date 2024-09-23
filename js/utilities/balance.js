function updateUponDonation(cardNo) {
  const donateButton = getElem(`donate-btn-${cardNo}`);
  const inputAmount = getElem(`donate-amount-value-${cardNo}`);
  const totalBalance1 = getElem(`total-balance-${cardNo}`);
  const cardTitle = getElem(`donate-card-title-${cardNo}`);

  let totalBalanceNumber1 = Number(totalBalance1.innerText);

  donateButton.addEventListener('click', function () {
    if (
      inputAmount.value.trim() === '' ||
      Number(inputAmount.value) < 1 ||
      isNaN(Number(inputAmount.value))
    ) {
      inputAmount.value = '';
      alert('type donation amount above 0, eg:500');
      return;
    }else if (Number(inputAmount.value) > userBalanceNumber){
      alert('Insufficient balance');
      return;
    }
     else {
      totalBalanceNumber1 += Number(inputAmount.value);
      totalBalance1.innerText = totalBalanceNumber1;
      userBalanceNumber -= Number(inputAmount.value);
      userBalance.innerText = userBalanceNumber;
      let donationData = document.createElement('div');
      donationData.className =
        'flex flex-col p-3 lg:p-8 gap-3 border rounded-xl';
      donationData.innerHTML = `
 <h3 class="font-semibold">${inputAmount.value} Taka is Donated at ${
        cardTitle.innerHTML
      }</h3>
          <p class="text-sm text-lightText">Date : ${Date()}</p>
`;

getElem('noDonation').classList.add('hidden');
historyAdd.prepend(donationData);
      inputAmount.value = '';
      let modal = `my_modal_${cardNo}`;
      // modal.showModal();
      my_modal_3.showModal();
    }
  });
}