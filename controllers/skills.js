const Skill = require('../models/skill');

module.exports = {
  index, 
  show, 
  new: newSkill,
  create,
  delete: deleteSkill
};

function index(req, res) {
  res.render('skills/index', {
    title: 'Dev Skills',
    skills: Skill.getAll()
  });
}

function show(req, res) {
  const skill = Skill.getOne(req.params.id);
  res.render('skills/show', {
    title: Skill.getOne(req.params.id).name,
    skill
  });
}

function newSkill(req, res) {
  res.render('skills/new', {
    title: 'Add New Skill'
  });
}

function create(req, res) {
  Skill.create(req.body);
  res.redirect('/skills');
}

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
}
