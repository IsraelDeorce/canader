import { ThemedText } from '../../../src/components/ThemedText';
import { render } from '@testing-library/react-native';

describe('ThemedText', () => {
  it('renders correctly', () => {
    const tree = render(<ThemedText>Snapshot test!</ThemedText>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
