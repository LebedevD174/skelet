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

const formUp = document.querySelector('.update');
if (formUp) {
  formUp.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log(e.target);
    if (e.target.classList.contains('update')) {
      // const agree = confirm('Вы хотите удалить?');

      // console.log(e.target.closest('.product'));

      const {
        id, name, price, category_id,
      } = e.target.closest('.update').dataset;
      const obj = { name: name.value, price: price.value, category_id: category_id.value };
      try {
        const res = await fetch(`/api/product/${id}/update`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(obj),
        });
        const data = await res.json(obj);
        if (data.message === 'success') {
          e.target.closest('.product').remove();
        }
      } catch (error) {
        alert(error.message);
      }
    }
  });
}
