# Element UI Dependency Injection

## Issue

Element's UI approach to injecting components in the root main.js is flawed, and an anti-pattern against one of Vue's core tenants. You must be able to explicitly defining what dependant components a given component is making use of at all times.

Using the babel-plugin-component lib does help a little by allowing individual components to be used on your project, but is thus producing the anti-pattern. 

At present, if you want to use `Container`, `Main`, `Row`, and `Col` inside a project level component, I must declare these in the main as such:

```js
// main.js
import { Container, Main, Row, Col } from 'element-ui';

Vue.use(Container);
Vue.use(Main);
Vue.use(Row);
Vue.use(Col);
```

This then allows the use of `el-container`, `el-main`, `el-row`, and `el-col` site wide. The fact that this is now 'global' is also part of the anti-pattern, that components which possibly should never be able to use these elements have the means to do so, and distorts control of where these elements belong.

## Desire

To find a way to allow components to declare what Element UI components it's using, and automatically include them to Vue without bloating the main.js needlessly.

As well, you'd want to be able to extract a project level component and drop it into another project without having to worry or remember what Element UI components you used and keep tweaking the main.js.

This also helps to avoid including more elements than may be necessary, keeping your actual components needed in the final build to the utmost minimum.

It would be ideal to have a simple way at the component level to include Element UI or project level components by means of how Vue's handles component dependencies.

```js
// app.js/app.vue

// Elui components
import { Container, Main, Row, Col } from 'element-ui';
// Project level components
import CallToAction from '@/components/call-to-action/call-to-action.vue';

// Not feasible by current working of Vue/Element UI
export default {
  components: {
    // Elui components
    Container,
    Main,
    Col,
    Row,
    // Project level components
    CallToAction,
  }
} 
```

As such, this would ensure that only the components which require specific Element UI components make use of them, no long polluting the global space. Sadly, due to Element UIs current limitations, this will not actually register those components, or provide styling. 

So how do we solve this?

## Solution

There is a very easy work around to satisfy the desired results, and keep the workflow clean and natural to how component dependencies are used in Vue's already.

```js
// app.js/app.vue

import eluiDeps from '@/lib/eluiDeps';
// Elui components
import { Container, Main, Row, Col } from 'element-ui';
// Project level components
import CallToAction from '@/components/call-to-action/call-to-action.vue';

export default {
  components: eluiDeps({
    // Elui components
    Container,
    Main,
    Row,
    Col,
  }, {
    // Project level components
    CallToAction,
  }),
}
```

As a first pass at addressing the project, a simple wrapper function allows the ability to specify the desired Element UI components needed, followed by any project level components. The method runs through the list of UI components binding them to Vue's, and then returns the consolidated object to define the components dependencies as Vue expects. 

No code on the main.js, no forgetting which ones to include bringing this component to a new project, and you're explicitly defining at all times what Element UI components are being consumed without any ambiguity.

## Future Considerations

While the ideal case shown in the Desired section above cannot be accomplished with Vue's as it stands, digging into having a extended base Component class could possibly yield a slightly better result along the lines of:

```js
// app.js/app.vue

// Elui components
import { Container, Main, Row, Col } from 'element-ui';
// Project level components
import CallToAction from '@/components/call-to-action/call-to-action.vue';

// Not feasible by current working of Vue/Element UI
export default {
  eluiComponents: {
    Container,
    Main,
    Col,
    Row,
  },
  components: {
    CallToAction,
  }
} 
```

For this to function, the extended Component class would simply need to produce what the eluiDeps method is doing, and then append the list of eluiComponent's toe Vue's components object before the deep level hooks fire against it.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
