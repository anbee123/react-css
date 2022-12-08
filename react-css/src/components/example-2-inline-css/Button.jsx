export default function Button({ buttonText, bgcolor}) {
   
   //style values must be string
   //two words properties must be follow the cammel cased rule
   //don't forget to add commas not semicolons
    const buttonStyle={
    backgroundColor: bgcolor,
    borderRadius: '8px',
    color: 'rgb(116, 51, 105)',
    fontSize: '24pt',
    padding:' 15px 50px',
    width: '300px',
    }
    return (
      <button style={ buttonStyle}>{buttonText}</button>
    );
  }
