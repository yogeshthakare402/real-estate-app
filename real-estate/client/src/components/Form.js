
import { useState } from "react";
import BasicInfo from "./addNewProperty/BasicInfo";
import PropertyDetail from "./addNewProperty/PropertyDetail";
import GeneralInfo from "./addNewProperty/GeneralInfo";
import LocationInfo from "./addNewProperty/LocationInfo";
import Hello from "./Hello";{/***view page */}
import PropertyNav from "./addNewProperty/PropertyNav";


function Form() {
  const [step, setstep] = useState(1);

  const [formData, setFormData] = useState({})

  const nextStep = () => {
    setstep(step + 1);
  };

  const prevStep = () => {
    setstep(step - 1);
  };

  const navStep = (navValue) => {
    
    setstep(navValue);
  }

  const handleInputData = input => e => {
    
    const {value } = e.target;

    setFormData(prevState => ({
      ...prevState,
      [input]: value
  }));
  }


  switch (step) {
       case 1:
      return (
      <>
        <PropertyNav step={step} navStep={navStep}/>
        <div className="form-elements">
          
                <BasicInfo nextStep={nextStep} handleFormData={handleInputData} values={formData} />
              
        </div>
        </>
      );
        case 2:
      return (
        <>
        <PropertyNav step={step} navStep={navStep}/>
        <div className="form-elements">
          
                <PropertyDetail nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} index={step} />
              
        </div>
        </>
      );
         case 3:
        return (
            <>
        <PropertyNav step={step} navStep={navStep}/>
          <div className="form-elements">
            
                  <GeneralInfo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} index={step} />
                
          </div>
          </>
        );
           case 4:
        return (
            <>
        <PropertyNav step={step} navStep={navStep}/>
          <div className="form-elements">
            
                  <LocationInfo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} index={step} />
                
          </div>
          </>
        );
        case 5:
            
            return (
              <div className="form-elements">
                
                      <Hello values={formData} />{/**** view page  */}
                    
              </div>
            );
        
        default:
      return (
        <div className="form-elements">
            {/*  add view page */}
            <Hello/>
        </div>
      );
  }
  
}

export default Form;