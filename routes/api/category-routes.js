const router = require('express').Router();
const { Category, Product, ProductTag } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories// be sure to include its associated Products
  Category.findAll({ include: [{ model: Product }] })
  .then((result) => res.json(result)).catch((err) => res.json(err));
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value// be sure to include its associated Products
  Category.findByPk(req.params.id, { include: [{ model: Product }] })
  .then((result) => res.json(result)).catch((err) => res.json(err));
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((result) => res.json(result)).catch((err) => res.json(err));
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      // All the fields you can update and the data attached to the request body.
      category_name: req.body.category_name
    },
    {
      // Gets a category based on the category_id given in the request parameters
      where: { id: req.params.id },
    }
  )
  .then((result) => res.json(result)).catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({ where:{id: req.params.id} })
  .then((result) => res.json(result)).catch((err) => res.json(err));
});

module.exports = router;
