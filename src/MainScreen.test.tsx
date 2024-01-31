import {render as rawRender, screen, userEvent} from '@testing-library/react-native';

import MainScreen from './MainScreen';
import {ThemeProvider} from '@shopify/restyle';
import theme from './theme';

const Providers = ({children}) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

const render: typeof rawRender = (component, options) =>
  rawRender(component, {
    wrapper: Providers,
    ...options,
  });

describe('MainScreen', () => {
  it('should render correctly', () => {
    // Assemble + Act
    render(<MainScreen />);

    // Assert
    const header = screen.getByRole('text', {
      name: 'header',
    });
    const body = screen.getByRole('text', {
      name: 'body',
    });
    expect(header).toHaveTextContent('Expo App');
    expect(body).toHaveTextContent('Ready to go!');
  });
});
