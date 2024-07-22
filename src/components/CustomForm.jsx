// @ts-nocheck
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'
const Form = ({thing, handelInput, handelSubmit}) =>{
    return (
        <>
        <h1 className='sm:text-4xl font-bold
        text-center'>
          What is your "One Thing"?
        </h1>
        <form
        className='flex ring-4 rounded-md ring-slate-200
        dark:ring-slate-800 hover:ring-teal-600
        focus-within:ring-offset-4 bg-slate-200
        ring-offset-slate-200 dark:ring-offset-slate-800'
        onSubmit={handelSubmit}
        >
          <input type="text" 
          className='bg-inherit rounded-md font-sans
          text-slate-800 py-2 px-6 focus:outline-none
          caret-teal-600 appearance-none w-full'
          placeholder='Enter One Thing'
          autoFocus
          maxLength="64"
          value={thing}
          onInput={handelInput}
          />
          <button
          className='bg-inherit rounded-md font-sans
          text-slate-800 py-2 pr-6 focus:outline-none
          caret-teal-600 hover:text-teal-600'
          >
            <ArrowRightCircleIcon className='w-12 h-12'/>
          </button>
          
        </form>
         </>
    )
}
export default Form