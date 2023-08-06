const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  const data = await Tag.findAll({include: [{model:Product, through:ProductTag}]})
  res.json(data);
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  const data = await Tag.findOne({where: {id: req.params.id}, include: [{model:Product, through: ProductTag}]})
  res.json(data);
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  const data = await Tag.create(req.body)
  res.json(data);
  // create a new tag
});

router.put('/:id', async (req, res) => {
  const data = await Tag.update(req.body, {
    where: {
      id: req.params.id
    }
    
  })
  res.json(data);
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  const data = await Tag.destroy({
    where: {
      id: req.params.id
    }
    
  })
  res.json(data);
  // delete on tag by its `id` value
});

module.exports = router;
