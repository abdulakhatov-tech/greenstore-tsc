import Button from "@generic/button";
import Image from "@generic/image";
import Input from "@generic/input";
import MainLayout from "./layout/main-layout";

const App = () => {
  return (
    <div className='app'>
      <MainLayout>
        <h1>Hi</h1>
      </MainLayout>
      <h1 className={"text-black bg-white"}>Buttons</h1>
      <Button variant='primary'>Primary</Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='default'>Default</Button>
      <Button variant='text'>Text</Button>
      <Button variant='link'>Link</Button>
      <h1 className={"text-black bg-white"}>Inputs</h1>
      <Input size='small' placeholder='Search...' />
      <Input size='medium' placeholder='Search...' />
      <Input size='large' placeholder='Search...' />
      <h1 className={"text-black bg-white"}>Images</h1>
      <Image src='https://avatars.mds.yandex.net/i?id=c6824e0b2283115072f4db05d888dd41-4344700-images-thumbs&n=13' alt='image' />

    </div>
  );
};

export default App;
