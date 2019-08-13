import React from 'react';

interface TitleProps {
    name: string,
}

const Title = ({ name }: TitleProps) => {
    return (
        <h1>{name}</h1>
    );
};

Title.defaultProps = {
    name: "",
};

export default Title;
