import Vue from 'vue';

function eluiDeps(eluiComps, localComps) {
  const fullComps = {
    ...eluiComps,
    ...localComps,
  };

  for (let type in eluiComps) {
    console.log('vue.use on ', eluiComps[type]);
    Vue.use(eluiComps[type]);
  }

  console.log('fullComps', fullComps);

  return fullComps;
}

export default eluiDeps;
