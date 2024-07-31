import Button from '@generic/button';
import Theme from '@tools/theme';

const App = () => {
 
  return (
    <div className="app">
      <Theme />
      <Button variant='primary'>Primary</Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='default'>Default</Button>
      <Button variant="text">Text</Button>
      <Button variant="link">Link</Button>
      <h1 className='text-black bg-white'>Title</h1>

    </div>
  );
};

export default App;
