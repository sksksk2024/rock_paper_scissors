import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../components/Header';

vi.mock('axios');

describe('Header Component', () => {
  test('renders correctly', () => {
    render(<Header />);
    // expect(screen.getByAltText('target location')).toBeInTheDocument();
  });
});
