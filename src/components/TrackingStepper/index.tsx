import { useEffect, useState } from 'react';
import { Step, Stepper } from 'react-form-stepper';

interface TrackingStepperProps{
    status:string
}
type colorsOptions = {
    [key: string]: string
}
function TrackingStepper(props:TrackingStepperProps) {
    const {status} = props
    const [activeStep, setActiveStep] = useState(0)

    const colors:colorsOptions =
    {
        DELIVERED:'#5AB824',
        CANCELLED:'#F24423',
        NOT_YET_SHIPPED:'#F9BA33'
    }

    const getActiveStep =()=>{
        switch (status) {
            case 'DELIVERED':
              return 3;
            case 'CANCELLED':
                return 2;
            case 'NOT_YET_SHIPPED':
                return 2;
            default:
              return 0;
          } 
    }


    useEffect(() => {
      setActiveStep(getActiveStep())
 
    })

    return (
        <Stepper activeStep={activeStep} connectorStateColors dir='ltr'
        connectorStyleConfig={
            {
                disabledColor:'#CFCFCE',
                activeColor:colors[status],
                completedColor:colors[status],
                size:5,
                stepSize:'3em ',
                style:'solid'
            }
        }
        styleConfig={
            { size: 50,
            activeBgColor:colors[status],
            activeTextColor:'white',
            completedBgColor:colors[status],
            completedTextColor:'white',
            inactiveBgColor:'#CFCFCE',
            inactiveTextColor:'white',
            circleFontSize:'1rem',
            labelFontSize:'1rem',
            borderRadius:'50%' ,
            fontWeight:600
            }
        }>
        <Step label="Created"  />
        <Step label="package recieved" />
        <Step label="out" />
        <Step label="done" />
      </Stepper>
    )
  }
  
  export default TrackingStepper