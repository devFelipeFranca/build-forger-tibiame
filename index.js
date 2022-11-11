const skillsTreeMap = {
  warrior: [
    {
      name: 'Hard Skin',
      parent: [],
    },
    {
      name: 'Show Weakness',
      parent: [],
    },
    {
      name: 'First Strike',
      parent: [],
    },
    {
      name: 'Provoke',
      parent: ['Hard Skin'],
    },
    {
      name: 'Dodge',
      parent: ['Hard Skin'],
    },
    {
      name: 'Parry',
      parent: ['Provoke'],
    },
    {
      name: 'Sap',
      parent: ['Provoke'],
    },
    {
      name: 'Evade Debuff',
      parent: ['Parry', 'Sap'],
    },
    {
      name: 'Evade Spell',
      parent: ['Evade Debuff'],
    },
    {
      name: 'Pure Tank',
      parent: ['Evade Debuff'],
    },
    {
      name: 'Shild Wall',
      parent: ['Evade Spell', 'Damage Shield'],
    },
    {
      name: 'Battle Master',
      parent: ['Pure Tank', 'All-In'],
    },
    {
      name: 'Guardian',
      parent: ['Dodge'],
    },
    {
      name: 'Wander Armour',
      parent: ['Dodge'],
    },
    {
      name: 'Mana Shield',
      parent: ['Wander Armour', 'Guardian'],
    },
    {
      name: 'Discharge',
      parent: ['Mana Shield'],
    },
    {
      name: 'Damage Shield',
      parent: ['Mana Shield'],
    },
    {
      name: 'Skirmish Attack',
      parent: ['First Strike'],
    },
    {
      name: 'Expertise',
      parent: ['First Strike'],
    },
    {
      name: 'Meddling Attack',
      parent: ['Skirmish Attack'],
    },
    {
      name: 'Stacked Attack',
      parent: ['Skirmish Attack'],
    },
    {
      name: 'Mana Charge',
      parent: ['Expertise'],
    },
    {
      name: 'Rage',
      parent: ['Expertise'],
    },
    {
      name: 'Double Attack',
      parent: ['Rage', 'Mana Charge'],
    },
    {
      name: 'Roundhouse',
      parent: ['Meddling Attack', 'Stacked Attack'],
    },
    {
      name: 'All-In',
      parent: ['Roundhouse'],
    },
    {
      name: 'Chain Attack',
      parent: ['Roundhouse'],
    },
    {
      name: 'Might Blow',
      parent: ['Double Attack'],
    },
    {
      name: 'Double Damage',
      parent: ['Double Attack'],
    },
    {
      name: 'Migth Stomp',
      parent: ['Might Blow', 'Chain Attack'],
    },
    {
      name: 'Return Damage',
      parent: ['Double Damage', 'Discharge'],
    },
  ],
  wizard: [
    {
      name: 'Increased Heal',
      parent: [],
    },
    {
      name: 'Show Weakness',
      parent: [],
    },
    {
      name: 'Swiftness',
      parent: [],
    },
    {
      name: 'Scream',
      parent: ['Increased Heal'],
    },
    {
      name: 'Healing Charm',
      parent: ['Increased Heal'],
    },
    {
      name: 'Healing Flux',
      parent: ['Scream'],
    },
    {
      name: 'Meditation',
      parent: ['Scream'],
    },
    {
      name: 'Vitality Stream',
      parent: ['Healing Flux', 'Meditation'],
    },
    {
      name: 'Reverse Damage',
      parent: ['Vitality Stream'],
    },
    {
      name: 'Renew',
      parent: ['Vitality Stream'],
    },
    {
      name: 'Magic Armour',
      parent: ['Renew', 'Magic Shield'],
    },
    {
      name: 'Paralyze',
      parent: ['Healing Charm'],
    },
    {
      name: 'Plenary Heal',
      parent: ['Healing Charm'],
    },
    {
      name: 'Evade Debuff',
      parent: ['Plenary Heal', 'Paralyze'],
    },
    {
      name: 'Magic Shield',
      parent: ['Evade Debuff'],
    },
    {
      name: 'Discharge',
      parent: ['Evade Debuff'],
    },
    {
      name: 'Equilibrium',
      parent: ['Discharge', 'Derelict Spell'],
    },
    {
      name: 'Striking Spell',
      parent: ['Swiftness'],
    },
    {
      name: 'Blessed Weapon',
      parent: ['Swiftness'],
    },
    {
      name: 'Blessed Spell',
      parent: ['Striking Spell'],
    },
    {
      name: 'Half Protect',
      parent: ['Striking Spell'],
    },
    {
      name: 'Material Attack',
      parent: ['Blessed Weapon'],
    },
    {
      name: 'Gaping Attack',
      parent: ['Blessed Weapon'],
    },
    {
      name: 'Material Spell',
      parent: ['Blessed Spell', 'Half Protect'],
    },
    {
      name: 'Mana Leech',
      parent: ['Material Attack', 'Gaping Attack'],
    },
    {
      name: 'Derelict Spell',
      parent: ['Material Spell'],
    },
    {
      name: 'Gaping Spell',
      parent: ['Material Spell'],
    },
    {
      name: 'Rupture Attack',
      parent: ['Mana Leech'],
    },
    {
      name: 'Health Leech',
      parent: ['Mana Leech'],
    },
    {
      name: 'Rupture Spell',
      parent: ['Rupture Attack', 'Gaping Spell'],
    },
    {
      name: 'Divine Power',
      parent: ['Health Leech', 'Reverse Damage'],
    },
  ],
};

const classMap = {
  warrior: {
    default: 'mp',
  },
  wizard: {
    default: 'hp',
  },
};

const shape = {
  hp: 518,
  mp: 0,
  atk: 180,
  def: 110,
  default: classMap['warrior'].default,
  skills: [],
  class: 'warrior',
};

function getAllSkillsNameToCheckBox(skillsTreeMap) {
  const checkBoxList = document.getElementById('skillsCheckbox');

  checkBoxList.innerHTML = '';

  const newElement = (html) => {
    const template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
  };

  checkBoxList.appendChild(newElement('<h3>Skills</h3>'));

  skillsTreeMap.forEach(({ name }) => {
    checkBoxList.appendChild(
      newElement(`<label class="checkbox">
              <input type="checkbox" name="${name}" />
              ${name}
            </label>`)
    );
  });
}

function attrsCounter(lvl) {
  return lvl * 3 - 3;
}

function skillsCounter(lvl) {
  return lvl - 1;
}

function defaultAttrsCounter(lvl) {
  return lvl - 1;
}

function skillPointersCounters(skills, skillSelecteds = [], map = new Set()) {
  skills?.forEach((skill) => {
    if (skillSelecteds.includes(skill.name)) {
      map.add(skill.name);
      skillPointersCounters(skills, skill.parent, map);
    }
  });

  return map.size * 5;
}

function build(_lvl, isFull, shape) {
  const defaultKey = shape.default;
  const _skills = shape.skills;
  const _class = shape.class;

  const _shape = { ...shape };

  delete _shape.default;
  delete _shape.skills;
  delete _shape.class;

  _shape[defaultKey] =
    shape[defaultKey] < defaultAttrsCounter(_lvl)
      ? defaultAttrsCounter(_lvl)
      : shape[defaultKey];

  const buildLvl = lvl(_lvl, isFull);

  const fullAttrs = buildLvl.attrs + buildLvl.defaultAttrs;

  const fullAttrsWithSkills =
    fullAttrs +
    buildLvl.skills * 2 -
    (skillPointersCounters(skillTree[_class], _skills) * 2 -
      _skills.length * 4);

  const shapeAttrsTotal = Object.values(_shape).reduce((a, b) => a + b, 0);

  if (fullAttrsWithSkills < shapeAttrsTotal) {
    return 'atributos e skills insuficientes';
  }

  return 'É possível!';
}

function levelFunction(lvl, isFull = false) {
  console.log('lvl existe!!!');
  return {
    attrs: attrsCounter(lvl + (isFull ? 10 : 0)),
    skills: skillsCounter(lvl + (isFull ? 10 : 0)),
    defaultAttrs: defaultAttrsCounter(lvl),
    build: (shape) => build(lvl, isFull, shape),
  };
}

function build(_lvl, isFull, shape) {
  const defaultKey = shape.default;
  const _skills = shape.skills;
  const _class = shape.class;

  const _shape = { ...shape };

  delete _shape.default;
  delete _shape.skills;
  delete _shape.class;

  _shape[defaultKey] =
    shape[defaultKey] < defaultAttrsCounter(_lvl)
      ? defaultAttrsCounter(_lvl)
      : shape[defaultKey];

  const buildLvl = levelFunction(_lvl, isFull);

  console.log('build: ', shape);

  const fullAttrs = buildLvl.attrs + buildLvl.defaultAttrs;

  const fullAttrsWithSkills =
    fullAttrs +
    buildLvl.skills * 2 -
    (skillPointersCounters(skillsTreeMap[_class], _skills) * 2 -
      _skills.length * 4);

  const shapeAttrsTotal = Object.values(_shape).reduce((a, b) => a + b, 0);

  if (fullAttrsWithSkills < shapeAttrsTotal) {
    return 'atributos e skills insuficientes';
  }

  return 'É possível!';
}

function main(lvl, isFull, shape) {
  const _lvl = levelFunction(lvl, isFull);
  const { hp, mp, atk, def } = shape;

  const _shapeTotal = [hp, mp, atk, def].reduce((a, b) => a + b, 0);

  const restSkills =
    _lvl.skills -
    skillPointersCounters(skillsTreeMap[shape.class], shape.skills);

  return {
    isPossible: _lvl.build(shape),
    infos: {
      attrs: _lvl.attrs,
      defaultAttrs: _lvl.defaultAttrs,
      skills: _lvl.skills,
      usedAttrs: _shapeTotal,
      usedSkillPointers: skillPointersCounters(
        skillsTreeMap[shape.class],
        shape.skills
      ),
      restAttrs: _lvl.attrs - _shapeTotal <= 0 ? 0 : _lvl.attrs - _shapeTotal,
      restSkills,
      restAttrsWithSkills:
        _lvl.attrs + restSkills * 2 - _shapeTotal <= 0
          ? 0
          : _lvl.attrs + restSkills * 2 - _shapeTotal,
    },
    shape: {
      ...shape,
      [shape.default]:
        shape[shape.default] < _lvl.defaultAttrs
          ? _lvl.defaultAttrs
          : shape[shape.default],
    },
  };
}

getAllSkillsNameToCheckBox(skillsTreeMap['warrior']);

document.getElementById('selectClass').addEventListener('change', (e) => {
  getAllSkillsNameToCheckBox(skillsTreeMap[e.target.value]);
});

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  const isFull = !!data.isFull;
  const lvl = Number(data.lvl);

  delete data.isFull;
  delete data.lvl;

  const usedKeys = [];

  Object.keys(shape).forEach((key) => {
    usedKeys.push(key);

    shape[key] = Number(data[key]) ?? 0;

    if (key === 'class') {
      shape[key] = data[key];
    }

    if (key === 'default') {
      shape[key] = classMap[data.class].default;
    }
  });

  usedKeys.forEach((key) => {
    delete data[key];
  });

  shape.skills = Object.keys(data);

  alert(JSON.stringify(main(lvl, isFull, shape), null, 2));

  console.log(main(lvl, isFull, shape));
});
