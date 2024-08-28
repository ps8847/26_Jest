import { render, screen } from '@testing-library/react';
import App from './App';


describe.skip('UI Test case group', () => { 

  test('Test case 1', () => {
    render(<App />);
  
  let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name" , "username"); 
  });
  test('Test case 2', () => {
    render(<App />);
  
  let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name" , "username"); 
  });

 })
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

 })
