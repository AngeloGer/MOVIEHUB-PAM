import { useState } from 'react';
import StarRating from 'react-native-star-rating-widget';
import { View } from 'react-native';

interface RatingStarsProps {
    rating?: number;
    onChange?: (rating: number) => void;
    starSize?: number;
    color?: string;
};

export const RatingStars = ({rating, onChange, starSize, color}: RatingStarsProps ) => {

const [rate, setRate] = useState(0);

    return (
        <StarRating 
            rating={rate} 
            onChange={setRate}
            starSize={starSize}

        />
    );
};