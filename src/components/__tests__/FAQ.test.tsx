import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import FAQ from '../FAQ';

describe('FAQ Component', () => {
  it('renders all FAQ items', () => {
    render(<FAQ />);
    
    expect(screen.getByText('What are the application deadlines?')).toBeInTheDocument();
    expect(screen.getByText('Do you offer scholarships for international students?')).toBeInTheDocument();
    expect(screen.getByText('Is on-campus housing guaranteed for first-year students?')).toBeInTheDocument();
    expect(screen.getByText('What support services are available for students?')).toBeInTheDocument();
    expect(screen.getByText('Can I change my major after enrollment?')).toBeInTheDocument();
    expect(screen.getByText('What are the class sizes and student-to-faculty ratio?')).toBeInTheDocument();
  });

  it('expands and collapses FAQ items when clicked', () => {
    render(<FAQ />);
    
    const firstQuestion = screen.getByText('What are the application deadlines?');
    
    // Initially, the answer should not be visible
    expect(screen.queryByText(/Fall semester applications are due March 1st/)).not.toBeInTheDocument();
    
    // Click to expand
    fireEvent.click(firstQuestion);
    
    // Now the answer should be visible
    expect(screen.getByText(/Fall semester applications are due March 1st/)).toBeInTheDocument();
    
    // Click again to collapse
    fireEvent.click(firstQuestion);
    
    // Answer should be hidden again
    expect(screen.queryByText(/Fall semester applications are due March 1st/)).not.toBeInTheDocument();
  });

  it('allows multiple items to be open simultaneously', () => {
    render(<FAQ />);
    
    const firstQuestion = screen.getByText('What are the application deadlines?');
    const secondQuestion = screen.getByText('Do you offer scholarships for international students?');
    
    // Open first FAQ
    fireEvent.click(firstQuestion);
    expect(screen.getByText(/Fall semester applications are due March 1st/)).toBeInTheDocument();
    
    // Open second FAQ
    fireEvent.click(secondQuestion);
    expect(screen.getByText(/merit-based scholarships for international students/)).toBeInTheDocument();
    
    // Both should remain open
    expect(screen.getByText(/Fall semester applications are due March 1st/)).toBeInTheDocument();
    expect(screen.getByText(/merit-based scholarships for international students/)).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(<FAQ />);
    
    const firstButton = screen.getByRole('button', { name: /What are the application deadlines?/ });
    expect(firstButton).toBeInTheDocument();
    
    // Check that buttons are keyboard accessible
    fireEvent.keyDown(firstButton, { key: 'Enter' });
    expect(screen.getByText(/Fall semester applications are due March 1st/)).toBeInTheDocument();
  });
});