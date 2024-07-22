// @ts-nocheck
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'
import CustomButton from './CustomButton'
const onething = ({thing,handleCompletedThing}) => {
    return (
        <>
        <h1 className='sm:text-3xl font-bold
        text-center'>{thing}</h1>
        <CustomButton
        text="Mark Done"
        handleCompletedThing={handleCompletedThing}
        />
        </>
    )
}

export default onething