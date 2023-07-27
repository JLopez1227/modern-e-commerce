const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  const data = await Category.findAll({include: [Product]})
  res.json(data);
});

router.get('/:id', async (req, res) => {
  const data = await Category.findOne({where: {id: req.params.id}, include: [Product]})
  res.json(data);
});

router.post('/', (req, res) => {
  // create a new category`
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
