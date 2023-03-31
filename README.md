# Running
Runs in VSCode with devContainers

* First click the green button in the lower left of vscode...
* Then "Open in conatiner" (or Reopen in container)

# Testing
```
yarn test
```

# This can also be started like an application
```
yarn seed
yarn start
```

# Notes
if you need to recreate the migration first do...
```
DROP SCHEMA public CASCADE;
```

then
```
yarn migration:init
```