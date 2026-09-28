import { useState } from 'react';
import StarRating from 'react-native-star-rating-widget';

interface RatingStarsProps {
    rating?: number;
    onChange?: (rating: number) => void;
    starSize?: number;
    color?: string;
};

export const RatingStars = ({ rating = 0, onChange, starSize = 24, color = '#f5c542' }: RatingStarsProps) => {
    const [rate, setRate] = useState(rating);

    const handleChange = (nextValue: number) => {
        setRate(nextValue);
        onChange?.(nextValue);
    };

    return (
        <StarRating
            rating={rate}
            onChange={handleChange}
            starSize={starSize}
            color={color}
        />
    );
};