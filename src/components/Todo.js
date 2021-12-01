import Tags from './Tags';
import TextField from './TextField';

function Todo(){
 
  return (
    <div className='card'>
    Name / Date<div>
     <Tags />
     </div>
     <div>
     <TextField />
  </div>
      <div className='actions'>
        <button className='btn'>
          Add Tag
        </button>
      </div>

    </div>
  );
}

export default Todo;
