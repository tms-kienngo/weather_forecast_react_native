import { View } from "react-native";
import Svg, { Circle, Line, Text } from 'react-native-svg';
import React from 'react';

type CompassProps = {
    windDir: number;

};
export const Compass = (props: CompassProps) => {
    const radius = 90;
    const needleLength = 60;

    const angle = props.windDir * (Math.PI / 180);

    const renderDirections = () => {
        const directions = ['N', 'E', 'S', 'W'];
        const angles = [0, 90, 180, 270];
        return directions.map((direction, index) => {
            const angle = angles[index];
            const x = 100 + (radius - 16) * Math.cos(angle * (Math.PI / 180));
            let y = 100 + (radius - 16) * Math.sin(angle * (Math.PI / 180));


            return (
                <Text
                    key={direction}
                    x={x}
                    y={y}
                    fontSize="14"
                    fill="white"
                    fontWeight="bold"
                    textAnchor="middle"
                >
                    {direction}
                </Text>
            );
        });
    };

    return (

        <Svg width={200} height={200}>
            <Circle cx="100" cy="100" r={radius} fill="none" stroke="black" strokeWidth="2" />
            <Line
                x1='100'
                y1='100'
                x2={100 + needleLength * Math.cos(angle)}
                y2={100 + needleLength * Math.sin(angle)}
                stroke='red'
                strokeWidth="2"
            />
            {renderDirections()}
            <Circle cx="100" cy="100" r={20} fill="grey" />
            <Text
                x={100}
                y={100}
                fontSize="12"
                textAnchor="middle">{props.windDir}</Text>
        </Svg>
    );
}