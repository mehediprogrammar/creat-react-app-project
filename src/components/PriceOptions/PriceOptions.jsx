import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    
        const  Options = [
          {
            "id": 1,
            "name": "Basic Membership",
            "description": "Access to basic gym facilities",
            "price": 29.99,
            "features": [
              "Unlimited access to cardio equipment",
              "Free weights area access",
              "Locker room and shower facilities"
            ]
          },
          {
            "id": 2,
            "name": "Premium Membership",
            "description": "Access to premium gym facilities",
            "price": 49.99,
            "features": [
              "All features of Basic Membership",
              "Access to group fitness classes",
              "Personal trainer consultation (1 session/month)"
            ]
          },
          {
            "id": 3,
            "name": "Elite Membership",
            "description": "Access to elite gym facilities",
            "price": 79.99,
            "features": [
              "All features of Premium Membership",
              "Unlimited personal trainer sessions",
              "Sauna and spa access",
              "Nutrition consultation (1 session/month)"
            ]
          }
        ]
      
      
    return (
        <div className="mx-20">
            <h2 className="text-4xl   font-bold"> Best price in the town:</h2>
             <div className="grid md:grid-cols-3 mt-6 gap-10">
             { 
                 Options.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
             }
             </div>
        </div>
    );
};

export default PriceOptions;