import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('card2 has outline on page load', () => {
  const { getByTestId } = render(<App />);
  const card2 = getByTestId('card2');
  expect(card2).toBeInTheDocument();
  expect(card2).toHaveClass('CardOutline');
});

test('card has outline on button click', () => {
  const { getByTestId } = render(<App />);
  const card1Button = getByTestId('card1-button');
  const card1 = getByTestId('card1');

  expect(card1).toBeInTheDocument();
  expect(card1).not.toHaveClass('CardOutline');
  fireEvent.click(card1Button);
  expect(card1).toHaveClass('CardOutline');
});

test('card removes outline on another button click', () => {
  const { getByTestId } = render(<App />);
  const card1Button = getByTestId('card1-button');
  const card3Button = getByTestId('card3-button');
  const card1 = getByTestId('card1');
  const card3 = getByTestId('card3');

  expect(card1).toBeInTheDocument();
  expect(card1).not.toHaveClass('CardOutline');
  fireEvent.click(card1Button);
  expect(card1).toHaveClass('CardOutline');
  fireEvent.click(card3Button);
  expect(card1).not.toHaveClass('CardOutline');
  expect(card3).toHaveClass('CardOutline');
});