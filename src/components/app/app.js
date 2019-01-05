import './app.scss';
import eluiDeps from '@/lib/eluiDeps';
import { Container, Main, Row, Col } from 'element-ui';
import CallToAction from '@/components/call-to-action/call-to-action.vue';

export default {
  name: 'app',
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
};
