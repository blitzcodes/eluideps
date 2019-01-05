import './call-to-action.scss';
import eluiDeps from '@/lib/eluiDeps';
import { Card, Button } from 'element-ui';

export default {
  name: 'call-to-action',
  components: eluiDeps({
    // Elui components
    Card,
    Button,
  }, {
    // Project level components
  }),

  data() {
    return {
      currentDate: new Date(),
    };
  },

  props: {
    title: String,
  },
};
