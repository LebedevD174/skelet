const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (e.target.classList.contains('reduct')) {
      // const agree = confirm('Вы хотите удалить?');

      // console.log(e.target.closest('.product'));
      const { id } = e.target.closest('.product').dataset;
      try {
        const res = await fetch(`/api/${id}`, {
          method: 'PUT',
          headers: {
            "content-type": "application/json"
          }
        });
        const data = await res.json();
        if (data.message == 'success') {
          e.target.closest('.product').remove();
        }
      } catch (error) {
        alert(error.message);
      }
    }
  });
}
