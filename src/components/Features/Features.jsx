import PropTypes from 'prop-types';
import { AiFillStar } from 'react-icons/ai';
const Features = ({feature}) => {
    return (
        <div>
           <div>
           <p className='flex '> <AiFillStar className='mx-3'></AiFillStar> {feature}</p>
           </div>
     
        </div>
     
    );
};
Features.propTypes = {
    feature: PropTypes.string
 }
export default Features;