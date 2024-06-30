# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

## Commands
npx expo start --localhost --android

npx expo lint

npm run storybook-generate

## Sonarqube in local
To run the Sonarqube

```
brew services start sonarqube
brew services stop sonarqube
brew services info sonarqube
```

To scan files and directories using the sonar-project.properties file

```
sonar-scanner
```

## Code Quality

Validating Branch Names

```
npm install validate-branch-name --save-dev
printf "\nnpx validate-branch-name" >> .husky/pre-commit
```

Using conventional commit and changelog
```
npm i -D @commitlint/cli @commitlint/config-conventional
npm i -D husky

npm pkg set scripts.prepare="husky install"
echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg

npm i -D conventional-changelog-cli
npx conventional-changelog -i CHANGELOG.md -s -r 0
```

Using release-it
```
npm i -D release-it @release-it/conventional-changelog
npm init release-it
npm run release
```
