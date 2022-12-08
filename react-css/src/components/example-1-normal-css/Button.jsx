import './button.css'

// Example 1 
// + we added a class called 'theme' via props
export default function Button({ buttonText, theme }) {
  return <button className={`button ${theme}`}>{buttonText}</button>;
}