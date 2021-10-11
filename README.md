# saving-goal

One key to financial well-being is planning & saving for your goals. 

This project simulate the saving towards the "Buy a house" savings goal. You can choose the value that want to save and the date that you plan to reach the goal.

# Solution Modeling

The aplication is absolutely [static generation](https://nextjs.org/docs/advanced-features/static-html-export) and all the assets can be instantly streamed to the end-user from multiple CDN locations. This is possible because Next.js will [statically optimize](https://nextjs.org/docs/advanced-features/automatic-static-optimization) the page automatically by prerendering the page to static HTML.

### Technologies

The following technologies are used in this project:

#### Frontend

- [React](https://reactjs.org/) (JavaScript library for building user interfaces)
- [Next.js](https://nextjs.org/) (Hybrid static & server rendering)
- [Stitches](https://stitches.dev/) (CSS-in-JS with near-zero runtime, multi-variant support)
- [Radix Primitives](https://www.radix-ui.com/docs/primitives/overview/introduction) (UI component library with a focus on accessibility [WAI-ARIA](https://www.w3.org/TR/wai-aria-practices/#aria_ex) and design systems)
- [Testing Library](https://testing-library.com/docs/react-testing-library/intro) (React testing framework)
- [Jest](https://jestjs.io/) (JavaScript testing framework)

#### Tests

The application has three types of tests: Unit, Integration, and End-to-end. All tests are within their context in the __tests__ folder.

#### Deploy

The chosen deployment platform was [Vercel](https://vercel.com/) (Static Deploy and JAMstack, global CDN).

To deploy in production, it is necessary that all steps of the [CI](https://github.com/murillo94/saving-goal/blob/main/.github/workflows/deploy.yml) are checked (correct), soon after the deployment is started for production.

During the build period, it is possible to have a preview url of your changes. Just be entering the PR and look at the last comment.

#### Accessibility (a11y)

The application is designed to be fully accessible to users. Navigation can be done entirely through the keyboard and also by screen readers.

##### Example using the keyboard:

https://user-images.githubusercontent.com/9031279/136721882-7fd71f4f-80ff-470b-96be-e62fbee02a08.mp4

https://user-images.githubusercontent.com/9031279/136721893-aee7e4fa-8822-4a63-aaaa-8f78d5fcd2b3.mp4

##### Example using the screen reader:

https://user-images.githubusercontent.com/9031279/136721938-a3d9ae9a-c45c-44b6-be20-e08ada5cf099.mp4

# Using Locally

## Required

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

## Running

1. Clone the project

- `git clone git@github.com:murillo94/saving-goal.git`

2. Install the dependencies:

- `yarn`

3. Opting for a development environment:

- `yarn dev`

4. Open a browser with the url `http://localhost:3000`

## Some other commands

If you choose a production environment instead of development:

- `yarn build`
- `yarn start`

If you wish to run the tests:

- `yarn test`

# Demo

https://saving-goal.vercel.app/
