const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint


//ALL CATEGORIES
router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categories = await Category.findAll({
      include:[Product],
    });
    res.status(200).json(categories);
  } catch(err) {
    res.status(500).json(err);
  }
});

//GET A SINGLE CATEGORY
router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [Product],
    });

    if (!category) {
      res.status(404).json({message: 'No category found with this id!'});
      return;
    }

    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

//POST A NEW CATEGORY
router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

//PUT UPDATE A CATEGORY BY its ID
router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCategory = await Category.update(req.body, {
      where: {id: req.params.id },
    });
    if (!updateCategory[0]) {
      res.status(404).json({message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(updateCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE A CATEGORY by its ID
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    console.error(err); // This will print the error to the console
    res.status(500).json(err);
  }
});


module.exports = router;
