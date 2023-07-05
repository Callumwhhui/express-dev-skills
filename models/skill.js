const skills = [
    {id: 1298, skill: 'JavaScript', learned: false},
    {id: 3232, skill: 'html', learned: true},
    {id: 4768, skill: 'css', learned: true}
]

module.exports = {
   getAll,
   getOne,
   create,
   deleteOne,
};
function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function create(skill) {
    skill.id = Date.now() % 10000;
    skill.learned = false;
    skills.push(skill);
}

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}