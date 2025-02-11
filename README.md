# ui-workflow

Copyright (C) 2023-2025 The Open Library Foundation.

This software is distributed under the terms of the Apache License, Version 2.0. See the file "[LICENSE](LICENSE)" for more information.

## Introduction

This UI Workflow Module, `ui-workflow`, is a Stripes UI Module providing a way to build workflows for use in automating processes.

## Prerequisites

In order to view and log into the platform being served up, a suitable Okapi backend will need to be running. The [testing-backend](https://app.vagrantup.com/folio/boxes/testing-backend) Vagrant box should work if your app does not yet have its own backend module.

This requires `mod-workflow` and conditionally requires `mod-camunda`.

## Run your new app

Run the following from the ui-workflow directory to serve your new app using a development server:
```
stripes serve
```

Note: When serving up a newly created app that does not have its own backend permissions established, pass the `--hasAllPerms` option to display the app in the UI navigation. For example:
```
stripes serve --hasAllPerms
```

To specify your own tenant ID or to use an Okapi instance other than `http://localhost:9130` pass the `--okapi` and `--tenant` options.
```
stripes serve --okapi http://my-okapi.example.com:9130 --tenant my-tenant-id
```

## Run the tests

Run the included UI tests with the following command:
```
yarn test
```

This will generate coverage reports at `artifacts/coverage-jest/`.
A user may view the resulting coverage reports by pointing their browser to `artifacts/coverage-jest/lcov-report/index.html`.

### Issue tracker

See project [FOLIO](https://issues.folio.org/browse/FOLIO)
at the [FOLIO issue tracker](https://dev.folio.org/guidelines/issue-tracker/).
