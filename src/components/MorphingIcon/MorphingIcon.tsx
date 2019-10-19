import React from 'react';
import posed from 'react-pose';
import { tween } from 'popmotion';
import { interpolate } from 'flubber';
import Icons from './Icons';
import './MorphingIcon.scss';

type Transition = ({ from, to }: { from: number; to: number }) => any;

const morphTransition: Transition = ({ from, to }) =>
    tween({
        from: 0,
        to: 1,
        duration: 250,
    }).pipe(interpolate(from, to));

    const Paths = Object.entries(Icons).reduce((paths, [name, path]) => {
    const icon = {
        d: path,
        transition: morphTransition,
    };
    return { ...paths, [name]: icon };
}, {});

const Icon = posed.path(Paths);

interface Props {
    icon: string;
    width?: number;
    height?: number;
}
const MorphingIcon: React.FC<Props> = ({ icon, height, width }) => {
    return (
        <svg className="morphingIcon" width={width} height={height} viewBox="0 0 64 64">
            <Icon pose={icon} />
        </svg>
    );
};

export default MorphingIcon;
