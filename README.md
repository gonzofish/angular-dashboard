# Angular Dashboard [WIP]

A dynamic dashboard framework for Angular 2+ projects.

- [Usage](#usage)
- [Dashboard Component](#dashboard-component)
- [Component Registry](#component-registry)
- [Interfaces](#interfaces)
    - [AdInput](#ad-input)
    - [Component Registration](#component-registration)
    - [Dashboard Event](#dashboard-event)
- [Setup Configuration](#setup-configuration)

## <a id="usage"></a>Usage

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
4. Then use the [`ad-dashboard`](#ad-dashboard), providing it a set
    configuration and data
    (if necessary):
    ```html
    <ad-dashboard [data]="myData" [setup]="mySetup">
    </ad-dashboard>
    ```
    The format for the setup configuration can be found in the
    "[Setup Configuration](#setup-configuration)" section.

## <a id="ad-dashboard"></a>Dashboard Component

The `ad-dashboard` component is the single exposed component from Angular
Dashboard. It provides a way of telling Angular Dashboard what setup to use
and what data, as well as an output for listening for events from any dashboard
pane.

### API

Attribute|Purpose
---|---
`[data]`|(_Optional_) A data object or array, which is used by all of the underlying components, data is accessed by specifying [`AdInput`](#ad-input)s either through a [`ComponentRegistration`](#component-registration) or in a [Setup Configuration](#setup-configuration).
`[setup]`|The [Setup Configuration](#setup-configuration) to use for the dashboard.
`(dashboardEvent)`|Whenever a pane inside the dashboard fires an event, this event will fire, carrying a [`DashboardEvent`](#dashboard-event) payload.

## <a id="component-registry"></a>Component Registry

Angular Dashboard provides a `ComponentRegistryService` which allows consumers
of the library to give Angular Dashboard knowledge of the types of components
the consumer plans on using. In turn, this gives Angular Dashboard the ability
to _dynamically_ create dashboards.

### API

Method|Purpose
---|---
`bulkRegister(components: Array<ComponentRegistration>)`|Allows the consumer to register a list of components, instead of individually registering them
`register(component: ComponentRegistration)`|Register a component with Angular Dashboard

## <a id="interfaces"></a>Interfaces

- [Angular Dashboard Input](#ad-input)
- [Component Registration](#component-registration)
- [Dashboard Event](#dashboard-event)

### <a id="ad-input"></a>Angular Dashboard Input

Interface name: `AdInput`

```typescript
{
    attribute: string;
    dataAttribute?: string;
    value?: any;
}
```

`attribute` is the input name. Where, in an HTML template, you would use:

```html
<my-cmp [someAttr]="data.some[2].stuff" anotherAttr="pizza"></my-cmp>
```

Using `AdInput`, you would specify an `attribute` of `someAttr` and another
with `anotherAttr`.

For straight values, use the `value` attribute. However, for dynamic values,
pulled in from the data passed in through [`ad-dashboard`](#ad-dashboard),
use a dot-notation. So for `someAttr` in the example above, if `data` was
provided to [`ad-dashboard`](#ad-dashboard), the `dataAttribute` would be
`'some.2.stuff'`.

### <a id="component-registration"></a>Component Registration

Interface name: `ComponentRegistration`

```typescript
{
    component: any;
    id: string;
    inputs?: Array<AdInput>;
    outputs?: Array<string>;
}
```

The `component` is the component class and `id` is a unique identifer to
match that component to. The configurations you create will use these `id`
values to let Angular Dashboard know what component to use.

The optional `inputs` is a list of Input attributes, specified using the
[`AdInput`](#ad-input) interface that the component has on it.

The optional `outputs` is a list of strings, each being the name of an
`@Output` attribute the component has on it. So where normally, when
writing a template, you'd write:

```html
<my-cmp (myOutput)="callMe($event)"></my-cmp>
```

You provide `myOutput` as part of the `outputs` attribute of a
`ComponentRegistration`. Angular Dashboard will then relay the firing
component `id`, the `@Output` that fired, and any data that was emitted
through the [`ad-dashboard`](#ad-dashboard)'s `(eventFired)` output.

### <a id="dashboard-event"></a>Dashboard Event

Interface name: `DashboardEvent`

```typescript
{
    componentId: string;
    eventName: string;
    data?: any;
}
```

`componentId` is the component which fired off the event. The name of that
event is provided by `eventName` and, any data the event fired is provided
via the `data` attribute.

## <a id="setup-configuration"></a>Setup Configuration

> Coming soon