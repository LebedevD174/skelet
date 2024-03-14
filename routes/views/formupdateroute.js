router.get('/', async (req, res) => {
    try {
      const html = res.renderComponent(Form, {
        title: 'Добавить продукты',
      });
      res.send(html);
    } catch ({ message }) {
      console.log(message);
    }
  });