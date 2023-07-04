const skills = [
    {id: 1298, skill: 'JavaScript', learned: false},
    {id: 3232, skill: 'html', learned: true},
    {id: 4768, skill: 'css', learned: true}
]

module.exports = {
   getAll,
   getOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}