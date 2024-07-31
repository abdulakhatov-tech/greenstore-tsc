import Button from '@generic/button';
import Input from '@generic/input';
import Theme from '@tools/theme';

const App = () => {
 
  return (
    <div className="app">
      <Theme />
      <h1>Buttons</h1>
      <Button variant='primary'>Primary</Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='default'>Default</Button>
      <Button variant="text">Text</Button>
      <Button variant="link">Link</Button>
      <h1 className='text-black bg-white'>Inputs</h1>
      <Input size='small' placeholder='Search...' />
      <Input size='medium' placeholder='Search...' />
      <Input size='large' placeholder='Search...' />
    </div>
  );
};

export default App;
