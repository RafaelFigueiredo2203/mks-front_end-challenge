import '@testing-library/jest-dom/extend-expect'; // Importe para ter acesso às asserções do jest-dom
import { render, screen } from '@testing-library/react';

describe('ProductArea component', () => {
  test('renders 8 products correctly', () => {
    // Renderiza o componente ProductArea
     render(<ProductsArea/>),

    // Verifica se os 8 produtos são renderizados corretamente
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
    expect(screen.getByText('Product 3')).toBeInTheDocument();
    expect(screen.getByText('Product 4')).toBeInTheDocument();
    expect(screen.getByText('Product 5')).toBeInTheDocument();
    expect(screen.getByText('Product 6')).toBeInTheDocument();
    expect(screen.getByText('Product 7')).toBeInTheDocument();
    expect(screen.getByText('Product 8')).toBeInTheDocument();
  });
});