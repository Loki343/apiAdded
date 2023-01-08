Class Notes
// CSR -> Client Sight Rendering
//CSR: Client Browser
//request for HTML
//response HTML
//request JS and CSS scripts
//response=> JS and CSS
//execute JS and CSS on page
//request: get blogs from localhost:8080
//response: [blogs]

//SSR -> Server Sight Rendering
//SSR: React Application
//request for HTML
//Server will see that you need blogs data
//HTML with blogs api data rendered
//request JS and CSS scripts
//response => JS and CSS
//execute JS and CSS on page
//if we use SSR then no HTML file is generated

//SSG: Server Sight Static Generation
//Renders data on backend creates an HTML file in advance
//This is the solution of the SSR
//when we request for data, it sends us pre-rendered HTML file

//Problems with SSG
//1.as HTML is generated in advance, changes to api-data not reflected
//2.to reflect this changes,we need to build and deploy again

//difference between npm run dev and npm run start

npm run dev: you want to develop the application live;

npm run start: you want to see how your build application looks like

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
