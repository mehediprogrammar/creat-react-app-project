import PropTypes from 'prop-types';
import Features from '../Features/Features';


const PriceOption = ({option}) => {
    const {name, price, features}= option;
    return (
        <div className='border-2 border-indigo-600 py-8 px-5 flex flex-col bg-slate-600 text-white'>
            <h2  className='text-center'>
                <span className='text-5xl font-medium'>{price}</span>
                <span className='text-4xl font-medium'>/mon</span>
            </h2>
            <h4 className='text-3xl  text-center my-8 font-medium'>{name}</h4>
          <div className='flex-grow'>
          {
            features.map((feature,index) => <Features key={index} feature={feature}></Features>)
          }
          </div>
          <button className='text-center text-2xl bg-indigo-600 w-full mt-10 rounded-md font-medium'>By Now</button>
        </div>
    );
};
PriceOption.propTypes = {
   option: PropTypes.object
}
export default PriceOption;