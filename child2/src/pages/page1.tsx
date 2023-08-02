import * as React from 'react';
import Link from 'next/link';
export interface IPage1Props {
}

export function Page1 (props: IPage1Props) {
  return (
    <div style={{padding: '20px'}}>
      <p>Page 1</p>
      <p>From page 2 we are in page 1</p>
      <Link href={"/page3/page3"}>Page1</Link><br/>
    </div>
  );
}


export default Page1