
import { createUSeStyle, createUseStyles } from 'react-jss';

export default function Button({ buttonText,bgcolor, color }) {
    const styles = createUseStyles({
        button: {
            backgroundColor: bgcolor,
            borderRadius: '8px',
            color: color,
            fontSize: '24pt',
            padding: ' 15px 50px',
            width: '300px',
        }

    })
    const classes = styles()





    return (
        <button className={classes.button}>{buttonText}</button>
    );
}