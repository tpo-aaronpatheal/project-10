import React, { useContext} from 'react';
import Context from '../context';

const ValidationError = () => {
    const { value: { validationError } } = useContext(Context);

    return (
        <div className="validation--errors">
            <h3>Validation Errors</h3>
            <ul>
                {validationError.map(error => {
                    return <li>{error}</li>
                })}
            </ul>
        </div>
    );
}

export default ValidationError;