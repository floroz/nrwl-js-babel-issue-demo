import { myLib } from '@nextjs/my-lib';

export function Index() {
  myLib();
  return <div>hello</div>;
}

export default Index;
