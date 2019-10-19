import React from 'react';
import { MorphingIcon } from '../';
import './ToggleButton.scss';

interface Props {
    checked: boolean;
    toggle: () => void;
}
const ToggleButton: React.FC<Props> = ({ checked, toggle }) => {
    const handleChange = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        toggle();
    };
    return (
        <button onClick={handleChange} className="toggleButton">
            <MorphingIcon width={32} height={32} icon={checked ? 'sun' : 'moon'} />
        </button>
    );
};

export default ToggleButton;

//<label htmlFor="_toggleButton" className={checked ? 'checked' : ''} />
//<input id="_toggleButton" type="checkbox" checked={checked} onChange={handleChange} />
