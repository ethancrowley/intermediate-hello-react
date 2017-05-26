# Hello React

Use this repo to get some practice making **small**, **composable** components.

1. Replace the hard-coded `<h1>` in `App.js` with a functional React component (`Header.js`).
2. Then, **set** a prop called `name` on your `Header` component (set the prop in `App.js`).
  - Note that **setting** a prop and **getting** / **calling** a prop each use a particular syntax:
    - **Setting** `props` - like an HTML attribute:
    ```js
      // src/components/App.js
      <App>
        <MyComponent myProp="howdy" />
      </App>
    ```
    - **Getting** `props` - like a JavaScript object:
    ```js
      // src/components/MyComponent.js
      <div>
        <h2>{props.myProp}</h2>
      </div>
    ```
3. Practice cranking out simple, composable Components by creating a list of User Profiles for rendering the data in `users.json`. The structure should be something like this:
    - `ListOfUsers.js`
      - `UserProfile.js`
        - `UserAddress.js`
        - `UserAvatar.js`
    - **Hint**: Start with the `UserProfile`. Write all the markup you need to render the data for *one* user (use the data provided by `sampleUser.json`). Get it working, then gradually refactor into separate components.

4. Use `props` to pass the `users` data from `index.js` allllll the way down to your components.
  - `import` the data into `index.js` and **set** it as a prop on your `App` component (in the `render` method)
  - Work in small pieces, one step at a time - and **commit** your work every time you finish a feature.
