import ElProgresstest from './src/progress';

/* istanbul ignore next */
ElProgresstest.install = function(Vue) {
  Vue.component(ElProgresstest.name, ElProgresstest);
};

export default ElProgresstest;
