const donators = document.querySelectorAll('.donator');

donators.forEach((donator) => {
  donator.addEventListener('mouseenter', () => {
    const donatorText = donator.querySelector('.text-donator');
    donatorText.classList.add('anim-donator');
  });

  donator.addEventListener('mouseleave', () => {
    const donatorText = donator.querySelector('.text-donator');
    donatorText.classList.remove('anim-donator');
  });
});
