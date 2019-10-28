import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import { useFirebaseConnect, useFirebase } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import './Favorites.scss';

interface Favorite {
    key: string;
    value: {
        id: string;
        timestamp: number;
        thumb: string;
    };
}
interface FirebaseState {
    firebase: {
        ordered: {
            favorites: Array<Favorite>;
        };
    };
}
const List = posed.ul({
    exit: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
        transition: { default: { duration: 100 } },
        beforeChildren: true,
        staggerChildren: 120,
    },
});
const AnimatedItem = posed.a({
    exit: {
        opacity: 0,
    },
    enter: { opacity: 1 },
});

const Favorites: React.FC = () => {
    useFirebaseConnect('cocktail-favorites');
    const firebase = useFirebase();
    const favorites = useSelector((state: FirebaseState) => state.firebase.ordered['cocktail-favorites']);
    const handleClick = (id: string) => {
        firebase
            .ref(`cocktail-favorites/${id}`)
            .remove()
            .catch((e: string) => {
                console.warn('error', e);
            });
    };
    return (
        <div className="favoritesList">
            {favorites && favorites.length ? (
                <List initialPose="exit" pose={'enter'} key="favoritesList">
                    <PoseGroup key="favoritesGroup">
                        {favorites.map((fav, index) => {
                            return (
                                <AnimatedItem key={`favorite_${fav.key}`} className="favorite">
                                    <img
                                        onClick={() => handleClick(fav.key)}
                                        className="thumb"
                                        key={`image${fav.key}`}
                                        src={fav.value.thumb}
                                        alt={fav.value.thumb}
                                    />
                                </AnimatedItem>
                            );
                        })}
                    </PoseGroup>
                </List>
            ) : (
                'Favorites not found'
            )}
        </div>
    );
};

export default Favorites;
