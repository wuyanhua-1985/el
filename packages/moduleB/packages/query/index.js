import Query from './src/main';

/* istanbul ignore next */
Query.install = function(Vue) {
  Vue.component(Query.name, Query);
};

export default Query;
