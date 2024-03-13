const container = document.querySelector('.container');
if (container) {
  container.addEventListener('click', async (e) => {
    if (e.target.classList.contains('delete')) {
      const agree = confirm('Вы хотите удалить?');
      if (agree === true) {
        // console.log(e.target.closest('.product'));
        const { id } = e.target.closest('.product').dataset;
        try {
          const res = await fetch(`/api/${id}`, {
            method: 'DELETE',
          });
          const data = await res.json();
          if (data.message == 'success') {
            e.target.closest('.product').remove();
          }
        } catch (error) {
          alert(error.message);
        }
      }
    }
  });
}
