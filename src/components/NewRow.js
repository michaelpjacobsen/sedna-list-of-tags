import Tags from './Tags';
import TextField from './TextField';

function NewRow(){
 
    return (
        <div className='card'>
        <span className='spans'>
 Name / Date</span>
  <span className='spans'> <Tags /></span>
  <span className='spans'><TextField /></span>
     
  <span className='spans'>
            <button className='btn'>
              Add Tag
            </button>
            </span>
          </div>
        

    );
  }
  
  export default NewRow;