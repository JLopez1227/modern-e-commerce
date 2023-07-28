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

router.post('/', async (req, res) => {
  // create a new category`
  const data = await Category.create(req.body)
  res.json(data);
});

router.put('/:id', async (req, res) => {
  const data = await Category.update(req.body, {
    where: {
      id: req.params.id
    }
    
  })
  res.json(data);
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  const data = await Category.destroy({
    where: {
      id: req.params.id
    }
    
  })
  res.json(data);
  // delete a category by its `id` value
});

module.exports = router;
