import Link from 'next/link';
import * as React from 'react';

export interface IPage2Props {
}

export function Page2 (props: IPage2Props) {
  return (
    <div style={{padding: '20px'}}>
      <p>Page 2</p>
      <p>sjkdnvsndvnkans kjasndv andsv daskjvd v jkasnd askjdvnkandv</p>
      <Link href={"/page1"}>Page1</Link><br/>
      <Link href={"/"}>Home</Link>
    </div>
  );
}


export default Page2