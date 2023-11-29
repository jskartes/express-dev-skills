const skills = [
  { id: 1, name: 'HTML', level: 10 },
  { id: 2, name: 'CSS', level: 8 },
  { id: 3, name: 'JavaScript', level: 7 },
  { id: 4, name: 'Express', level: 6 },
  { id: 5, name: 'React', level: 6 }
];

module.exports = { getAll, getOne, create, deleteOne }

function getAll() {
  return skills;
}

function getOne(id) {
  return skills.find(skill => skill.id === parseInt(id));
}

function create(skill) {
  skill.id = skills[skills.length - 1].id + 1;
  skills.push(skill);
}

function deleteOne(id) {
  skills.splice(skills.findIndex(skill => skill.id === parseInt(id)), 1);
}
