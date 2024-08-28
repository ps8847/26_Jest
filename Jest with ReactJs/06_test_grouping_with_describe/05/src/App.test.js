import { render, screen } from '@testing-library/react';
import App from './App';


describe('Api Test case group', () => { 

  test('api Test case 1', () => {
    render(<App />);
  
  let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name" , "username"); 
  });
  test('api Test case 2', () => {
    render(<App />);
  
  let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name" , "username"); 
  });

  describe('Inner Api Test case group', () => { 

    test('Inner api Test case 1', () => {
      render(<App />);
    
    let checkInput = screen.getByRole("textbox");
      expect(checkInput).toHaveAttribute("name" , "username"); 
    });
    test('Inner api Test case 2', () => {
      render(<App />);
    
    let checkInput = screen.getByRole("textbox");
      expect(checkInput).toHaveAttribute("name" , "username"); 
    });
  
   })

 })
