const contentDescription = document.querySelector('.content-des');
const reviewDes = document.querySelector('.wrap-content-review');
const listSwitchDes = document.querySelectorAll('.switch-description');

listSwitchDes.forEach((item, index) => {
  item.addEventListener('click', () => {
    const desOldChecked = document.querySelector('.switch-text-active');
    if (desOldChecked) {
      desOldChecked.classList.remove('switch-text-active');
    };
    item.classList.add('switch-text-active');

    if (index === 0) {
      reviewDes.classList.add('hidden');
      contentDescription.classList.remove('hidden');
    } else {
      contentDescription.classList.add('hidden');
      reviewDes.classList.remove('hidden');
    }
  });
})