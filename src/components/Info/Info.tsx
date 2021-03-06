import React from 'react';
import './Info.scss';

interface Props {
    status: string;
}
const Info: React.FC<Props> = ({ status }) => {
    const urlPrefix = process.env.NODE_ENV === 'development' ? '' : '/cocktail-finder';
    return (
        <div className="info">
            {status === 'fetching' && <span>Searching...</span>}
            {status === 'empty' && <span>No result</span>}
            {status === 'initial' && (
                <div className="about">
                    <img src={`${urlPrefix}/logo-256.png`} alt="logo" className="logo" />
                    <b className="appName">Cocktail Finder</b>
                    <hr />
                    <p className="version">React: 16.10.2</p>
                    <p className="version">Redux: 4.0.4</p>
                    <p className="version">React-redux: 7.1.1</p>
                    <p className="version">Redux-thunk: 2.3.0</p>
                    <p className="version">Node-sass: 4.12.0</p>
                    <p className="version">React-pose: 4.0.9</p>
                    <p className="version">Typescript: 3.6.4</p>

                    <hr />
                    <a
                        className="version"
                        href="https://www.thecocktaildb.com/"
                        target="_blank"
                        rel="noopener noreferrer">
                        API
                    </a>
                </div>
            )}
        </div>
    );
};

export default Info;
