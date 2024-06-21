import star from '/star.svg'

const StarRating = ({ rating, setRating }) => {
    return (
        <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((value) => (
                <img
                    key={value}
                    src={star}
                    alt={`star-${value}`}
                    className={`w-8 h-8 cursor-pointer ${value <= rating ? 'text-red-500' : 'text-gray-300'}`}
                    onClick={() => setRating(value)}
                    style={{ filter: value <= rating ? 'grayscale(0)' : 'grayscale(100%)' }}
                />
            ))}
        </div>
    );
}
export default StarRating