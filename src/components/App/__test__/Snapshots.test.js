import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../../Home/Home';
import App from '../App';
import CalculatorPage from '../../CalculatorPage/CalculatorPage';
import Quote from '../../Quote/Quote';
import Calculator from '../../CalculatorWorking/Calculator';

// Snapshots test
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('Welcome to our page');
  expect(linkElement).toBeInTheDocument();
});

test('Snapshot testing on Home page', () => {
  const tree = render(<Home />);
  expect(tree).toMatchSnapshot();
});

test('Snapshot testing on CalculatorPage page', () => {
  const tree = render(<CalculatorPage />);
  expect(tree).toMatchSnapshot();
});

test('Snapshot testing on Quote page', () => {
  const tree = render(<Quote />);
  expect(tree).toMatchSnapshot();
});

// Simulate user interaction test
test('User event on Rack Dom', () => {
  render(<Calculator />);
  userEvent.click(screen.getByText('1'));
  userEvent.click(screen.getByText('2'));
  userEvent.click(screen.getByText('+'));
  userEvent.click(screen.getByText('3'));
  userEvent.click(screen.getByText('='));
  // 12 + 3 = 15  <- on display
  expect(screen.getByTestId('display')).toHaveTextContent('15');
});
