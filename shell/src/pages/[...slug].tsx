import React, { Suspense } from "react";
import { useRouter } from "next/router";

// @ts-ignore
const Page2 = React.lazy(() => import("child2/pages/page2"));
// @ts-ignore
const Page1 = React.lazy(() => import("child2/pages/page1"));
// @ts-ignore
const Blog = React.lazy(() => import("child1/pages/blog/index"));

// @ts-ignore
const Page3 = React.lazy(() => import("child2/pages/page3/page3"));

export interface IPage1Props {}

export default function Page(props: IPage1Props) {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);

  const lastSegment = slug?.[slug.length - 1] ?? "";

  // Switch statement to handle different cases based on the last segment
  switch (lastSegment) {
    case "page2":
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <Page2 />
        </Suspense>
      );
    case "page1":
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <Page1 />
        </Suspense>
      );
    case "page3":
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <Page3 />
        </Suspense>
      );
    case "blog":
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <Blog />
        </Suspense>
      );
    default:
      return <div>Page not found</div>;
  }
}
