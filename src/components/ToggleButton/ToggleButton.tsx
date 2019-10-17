import React from 'react';
import './ToggleButton.scss';

interface Props {
    checked: boolean;
    toggle: () => void;
}
const ToggleButton: React.FC<Props> = ({ checked, toggle }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        toggle();
    };
    return (
        <div className="toggleButton">
            <label htmlFor="_toggleButton" className={checked ? 'checked' : ''} />
            <input id="_toggleButton" type="checkbox" checked={checked} onChange={handleChange} />
        </div>
    );
};

export default ToggleButton;
