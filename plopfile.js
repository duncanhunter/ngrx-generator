const get = require('lodash.get');
const pkg = require('./package.json');
const finder = require('find-package-json');
const pjson = finder().next().value;
const nodePath = require('path');
const pkgDir = require('pkg-dir');

function validate(name, value) {
  if ((/.+/).test(value)) {
    return true;
  }
  return name + ' is required';
}

const defaults = function(name) { 

  const p = [{
        type: 'input',
        name: 'name',
        message: name + ' for?',
        validate: validate.bind(this, name + ' name')
      }];
  return { 
    description: 'New ' + name,
    prompts:  p
  }
}

const actions = [
  {
    type: 'add',
    path: '{{ pkg "ngrxGen.actions" "actions" }}/{{dashCase name}}.actions.ts',
    templateFile: './templates/_actions.ts'
  }
];



function actionGenerator(plop) {
  plop.setGenerator('Action', 
    Object.assign({}, defaults('Action'), {
      actions: actions
    })
  );
}

const reducer = [
  {
    type: 'add',
    path: '{{ pkg "ngrxGen.reducers" "reducers" }}/{{dashCase name}}.reducer.ts',
    templateFile: './templates/_reducer.ts'
  }
]
function reducerGenerator(plop) {
   plop.setGenerator('Reducer', 
    Object.assign({}, defaults('Reducer'), {
      actions: reducer
    })
  );
}

const effect = [
  {
    type: 'add',
    path: '{{ pkg "ngrxGen.effects" "effects" }}/{{dashCase name}}.effects.ts',
    templateFile: './templates/_effect.ts'
  }
];

function effectGenerator(plop) {
   plop.setGenerator('Effect', 
    Object.assign({}, defaults('Effect'), {
      actions: effect
    })
  );
}

function wholeGenerator(plop) {
    plop.setGenerator('The whole shebang', 
      Object.assign({}, defaults('Whole'), {
        description: 'Actions, Reducer and Effect',
        actions: [].concat(actions, reducer, effect)
      })
  );
}

module.exports = function (plop) {

  plop.addHelper('pkg', (packageJSONPath, name) => {
  
    if(get(pjson, 'ngrxGen.basePath')) {
      const basePath = nodePath.resolve(get(pjson, 'ngrxGen.basePath'));
      return nodePath.resolve(pkgDir.sync(process.cwd()), get(pjson, 'ngrxGen.basePath'), name);
    }

   if(get(pjson, 'ngrxGen.seperateDirectory')) {
     return nodePath.resolve(process.cwd(), name);
   }

    if (get(pjson, packageJSONPath)) {
      return nodePath.resolve(process.cwd(), get(pjson, packageJSONPath))
    }

    return nodePath.resolve(process.cwd(), '.');
  });

  plop.addHelper('position', function (name) {
    if(get(pjson, 'ngrxGen.seperateDirectory')) {
      return '../' + name;
    }
    return '.';
  });

  wholeGenerator(plop);
  actionGenerator(plop);
  reducerGenerator(plop);
  effectGenerator(plop);
};