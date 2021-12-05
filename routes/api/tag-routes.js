const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({ include: [{ model: Product }] })
  .then((result) => res.json(result)).catch((err) => res.json(err));
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findByPk(req.params.id, { include: [{ model: Product }] })
  .then((result) => res.json(result)).catch((err) => res.json(err));
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then((result) => res.json(result)).catch((err) => res.json(err));
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      // All the fields you can update and the data attached to the request body.
      tag_name: req.body.tag_name
    },
    {
      // Gets a category based on the category_id given in the request parameters
      where: { id: req.params.id },
    }
  )
  .then((result) => res.json(result)).catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({ where:{id: req.params.id} })
  .then((result) => res.json(result)).catch((err) => res.json(err));
});

module.exports = router;
