# Angular Dashboard [WIP]

A dynamic dashboard framework for Angular 2+ projects.

## Usage

1. Install using NPM or Yarn:

    ```shell
    npm i -S @angular-librarian/angular-dashboard
    # or
    yarn add @angular-librarian/angular-dashboard
    ```
2. Import into your project & module:
    ```typescript
    // other imports

    import { AngularDashboardModule } from '@angular-librarian/angular-dashboard';

    @NgModule({
        declarations: [
            // All components
        ],
        imports: [
            // other imports
            AngularDashboardModule.withComponents([
                // list of components to be used
                // dynamically in dashboard
            ])
        ]
    })
    export class MyModule {}
    ```
3. Register components:
    ```typescript
    // other imports

    import { SomeComponent } from '../some-component/some-component.component.ts';
    import { AnotherComponent } from '../another-component/another-component.component.ts';

    import { ComponentRegistryService } from '@angular-librarian/angular-dashboard';

    @Injectable()
    export class SomeService {
        constructor(private _registryService: ComponentRegistryService) {
            _registryService.register({
                component: SomeComponent,
                id: 'some-component'
            });
            _registryService.register({
                component: AnotherComponent,
                id: 'another-component'
            });
            /*
              or use bulkRegister:
              _registryService.bulkRegister([
                { component: SomeComponent, id: 'some-component' },
                { component: AnotherComponent, id: 'another-component' }
              ]);
            */
        }
    }
    ```
4. Then use the `ad-dashboard`, providing it a set configuration and data
    (if necessary):
    ```html
    <ad-dashboard [data]="myData" [setup]="mySetup">
    </ad-dashboard>
    ```
    The format for the setup configuration can be found in the
    "[Setup Configuration](#setup-configuration)" section.

## <a id="setup-configuration"></a>Setup Configuration

> Coming soon