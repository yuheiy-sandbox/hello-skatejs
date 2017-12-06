import { withComponent } from 'skatejs';

const Component = withComponent();

class GreetingComponent extends Component {
  render() {
    return 'Hello, <slot></slot>!';
  }
}

customElements.define('x-hello', GreetingComponent);
