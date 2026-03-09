##### Angular#1

Adding in angular is quit easy and Just running following command in terminal:

```
ng generate component new-component-name
```

But many a times we are not looking for spec file, one can skip that during component creation

```
ng generate component new-component-name --skipTests=true
```

But is there is an way to skip this tests file during creation of components , directives and so on. If you are looking for such solution, then add following:

 Test files(\*.spec) are not created for Components, Class, Directives, Pipe and Service with the `ng generate` command.

```
"projects": {
    "myNewProject": {
      "projectType": "application",
      "schematics": {
        "@schematics/angular:application": {
          "strict": true
        },
        "@schematics/angular:component": {
          "skipTests": true
        },
        "@schematics/angular:class": {
          "skipTests": true
        },
        "@schematics/angular:directive": {
          "skipTests": true
        },
        "@schematics/angular:pipe": {
          "skipTests": true
        },
        "@schematics/angular:service": {
          "skipTests": true
        }
      }
```